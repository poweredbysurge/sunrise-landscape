import { color, font, WIDTH } from './tokens'
import { BUSINESS } from '@/lib/business'
import type { Lead, LeadContext } from '@/lib/leads/types'

/**
 * Sunrise notification emails.
 *
 * Two templates share one shell: the internal new-lead alert (to Sunrise and
 * Surge) and the confirmation that goes back to the person who filled the form.
 *
 * Built table-first with inline styles on purpose. Outlook renders through Word,
 * which drops flexbox, grid, and most of a <style> block, so every rule that has
 * to survive lives on the element. The only thing in <style> is the mobile
 * stacking, which Outlook ignoring is harmless.
 */

// ─── Escaping ────────────────────────────────────────────────────────────────

/**
 * Every interpolated value is user-controlled text arriving from a public,
 * unauthenticated form. Escaped on the way into the markup so a lead cannot
 * inject markup into the client's inbox.
 */
function esc(value: unknown): string {
  if (value == null) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Strips CR/LF and other control characters from a Subject.
 *
 * A subject is a mail HEADER, not HTML — escaping does nothing for it, and a
 * newline smuggled through the name field is a header-injection attempt
 * ("Bob\r\nBcc: attacker@example.com"). Resend posts JSON rather than raw SMTP
 * so this is defence in depth, not the only thing standing in the way, but the
 * subject is built from unauthenticated form input and must not carry newlines.
 */
function subjectSafe(value: string): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s{2,}/g, ' ').trim()
}

/** Escapes for an href/src attribute, and refuses anything but http(s)/mailto/tel. */
function escUrl(value: unknown): string {
  const raw = String(value ?? '').trim()
  if (!/^(https?:|mailto:|tel:)/i.test(raw)) return ''
  return esc(raw)
}

const DASH = '&mdash;'
/** Plain-text em dash, for subject lines and the text/plain part. */
const DASH_TEXT = '\u2014'

// ─── Shell ───────────────────────────────────────────────────────────────────

interface ShellOptions {
  /** Sits above the title in orange caps. Never carries the header alone. */
  eyebrow: string
  title: string
  /** Shown in the inbox list preview, hidden in the body. */
  preheader: string
  body: string
}

function shell({ eyebrow, title, preheader, body }: ShellOptions): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>${esc(title)}</title>
<style type="text/css">
  /* Stacks the two-up rows on narrow screens. Outlook ignores this block
     entirely, which is why the desktop layout never depends on it. */
  @media only screen and (max-width: 480px) {
    .sr-shell { width: 100% !important; }
    .sr-pad { padding-left: 24px !important; padding-right: 24px !important; }
    /* Stacking a two-up row needs the whole chain — table, row, AND cells — to
       become block. Turning only the <td>s into blocks leaves the <tr> as a
       table-row, which re-forms them into anonymous cells side by side.
       The implicit <tbody> counts as part of that chain, so it is targeted too. */
    .sr-stack-table, .sr-stack-table tbody, .sr-stack-row, .sr-stack { display: block !important; width: 100% !important; }
    .sr-stack { padding: 0 !important; }
    .sr-stack-gap { display: block !important; width: 100% !important; height: 10px !important; line-height: 10px !important; }
    .sr-title { font-size: 30px !important; line-height: 1.15 !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:${color.cream}; -webkit-font-smoothing:antialiased;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">${esc(preheader)}</div>
<!-- Repeated so the inbox preview does not spill into the body copy. -->
<div style="display:none; max-height:0; overflow:hidden;">${'&#847;&zwnj;&nbsp;'.repeat(60)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${color.cream};">
  <tr>
    <td align="center" style="padding:32px 12px;">

      <table role="presentation" class="sr-shell" width="${WIDTH}" cellpadding="0" cellspacing="0" border="0" style="width:${WIDTH}px; max-width:${WIDTH}px; background-color:${color.white}; border:1px solid ${color.green};">

        <!-- Header band -->
        <tr>
          <td class="sr-pad" style="background-color:${color.green}; padding:34px 40px 32px 40px;">
            <p style="margin:0 0 14px 0; font-family:${font.ui}; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:${color.orange};">${esc(eyebrow)}</p>
            <h1 class="sr-title" style="margin:0; font-family:${font.ui}; font-size:36px; line-height:1.12; font-weight:400; color:${color.cream};">${title}</h1>
          </td>
        </tr>
        <!-- The single orange rule. The one accent this email is allowed. -->
        <tr><td style="background-color:${color.orange}; height:3px; line-height:3px; font-size:0;">&nbsp;</td></tr>

        ${body}

        <!-- Footer band -->
        <tr>
          <td class="sr-pad" style="background-color:${color.green}; padding:28px 40px;">
            <p style="margin:0 0 6px 0; font-family:${font.ui}; font-size:14px; font-weight:700; color:${color.cream};">${esc(BUSINESS.name)}</p>
            <p style="margin:0; font-family:${font.body}; font-size:13px; line-height:1.6; color:${color.creamDim};">
              ${esc(BUSINESS.addressLine1)}, ${esc(BUSINESS.addressLine2)}<br />
              <a href="${BUSINESS.phoneHref}" style="color:${color.creamDim}; text-decoration:none;">${esc(BUSINESS.phone)}</a>
              &nbsp;&middot;&nbsp;
              <a href="mailto:${esc(BUSINESS.email)}" style="color:${color.creamDim}; text-decoration:none;">${esc(BUSINESS.email)}</a>
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
</body>
</html>`
}

// ─── Building blocks ─────────────────────────────────────────────────────────

/** Small orange caps label over a section of detail rows. */
function sectionHeading(label: string): string {
  return `<tr>
    <td class="sr-pad" style="padding:0 40px;">
      <p style="margin:0 0 14px 0; font-family:${font.ui}; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:${color.orange};">${esc(label)}</p>
    </td>
  </tr>`
}

interface Row {
  label: string
  /** Pre-escaped markup. Callers use esc()/link() to build it. */
  value: string
}

/**
 * A label/value block. Rendered as stacked rows rather than a two-column table
 * because Outlook's column widths collapse unpredictably once a value wraps, and
 * a wrapped address is the common case here, not the edge case.
 */
function detailRows(rows: Row[]): string {
  const cells = rows
    .map(
      (r, i) => `<tr>
        <td style="padding:12px 18px; background-color:${i % 2 === 0 ? color.greenTint : color.white}; border-bottom:1px solid ${color.greenRule};">
          <p style="margin:0 0 3px 0; font-family:${font.ui}; font-size:10px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${color.textMuted};">${esc(r.label)}</p>
          <p style="margin:0; font-family:${font.body}; font-size:15px; line-height:1.45; color:${color.green};">${r.value || DASH}</p>
        </td>
      </tr>`
    )
    .join('')

  return `<tr>
    <td class="sr-pad" style="padding:0 40px 28px 40px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${color.greenRule}; border-bottom:none;">
        ${cells}
      </table>
    </td>
  </tr>`
}

/** Primary button: green fill, white text. Hover states do not exist in email. */
function button(href: string, label: string): string {
  const safe = escUrl(href)
  if (!safe) return ''
  return `<a href="${safe}" style="display:block; padding:15px 20px; background-color:${color.green}; color:${color.white}; font-family:${font.ui}; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; text-align:center;">${esc(label)}</a>`
}

/** An inline mailto/tel link inside a detail value. */
function link(href: string, label: string): string {
  const safe = escUrl(href)
  if (!safe) return esc(label)
  return `<a href="${safe}" style="color:${color.green}; text-decoration:underline;">${esc(label)}</a>`
}

function spacer(px: number): string {
  return `<tr><td style="height:${px}px; line-height:${px}px; font-size:0;">&nbsp;</td></tr>`
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Enum value to the words a person reads. The form posts closed-enum values so
 * the Command Center classifier can grade them; nobody wants "50k_100k" in their
 * inbox. An unmapped value falls back to the raw string rather than vanishing.
 */
const URGENCY_LABEL: Record<string, string> = {
  right_away: 'As soon as possible',
  within_month: 'Within a month',
  '1_3_months': 'This season',
  planning: 'Just planning ahead',
}

const BUDGET_LABEL: Record<string, string> = {
  under_5k: 'Under $5,000',
  '5k_15k': '$5,000 to $15,000',
  '15k_50k': '$15,000 to $50,000',
  '50k_100k': '$50,000 to $100,000',
  over_100k: 'Over $100,000',
  not_sure: 'Not sure yet',
}

function labelled(map: Record<string, string>, value: string): string {
  if (!value) return ''
  return map[value] ?? value
}

function fullName(lead: Lead): string {
  return [lead.firstName, lead.lastName].filter(Boolean).join(' ').trim()
}

function fullAddress(lead: Lead): string {
  const line2 = [lead.city, lead.state].filter(Boolean).join(', ')
  return [lead.streetAddress, [line2, lead.zipCode].filter(Boolean).join(' ')]
    .filter((p) => p && p.trim())
    .join('\n')
}

/** `tel:` needs the digits only; a formatted string breaks the tap-to-call. */
function telHref(phone: string): string {
  const digits = String(phone ?? '').replace(/[^\d+]/g, '')
  if (!digits) return ''
  return `tel:${digits.startsWith('+') ? digits : digits.length === 10 ? `+1${digits}` : digits}`
}

/** Wall-clock Eastern, matching how the team actually reads a timestamp. */
function stamp(): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date()) + ' ET'
}

// ─── Template 1: internal new-lead notification ──────────────────────────────

export function renderLeadNotification(
  lead: Lead,
  ctx: LeadContext = {}
): { subject: string; html: string; text: string } {
  const name = fullName(lead) || 'New enquiry'
  const address = fullAddress(lead)
  const tel = telHref(lead.phone)

  const subject = subjectSafe(
    `New lead${lead.services ? ` (${lead.services})` : ''}: ${name}${lead.city ? ` ${DASH_TEXT} ${lead.city}` : ''}`
  )

  // Contact-first: the two things a rep acts on are the phone and the email, so
  // they sit above the fold as buttons rather than as rows to be scrolled past.
  const actions = `<tr>
    <td class="sr-pad" style="padding:0 40px 30px 40px;">
      <table role="presentation" class="sr-stack-table" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr class="sr-stack-row">
          ${tel ? `<td class="sr-stack" width="50%" style="padding-right:6px;">${button(tel, `Call ${lead.phone}`)}</td>` : ''}
          ${tel && lead.email ? `<td class="sr-stack-gap" width="1" style="font-size:0; line-height:0;">&nbsp;</td>` : ''}
          ${lead.email ? `<td class="sr-stack" width="${tel ? '50%' : '100%'}" style="padding-left:${tel ? '6px' : '0'};">${button(`mailto:${lead.email}`, 'Email this lead')}</td>` : ''}
        </tr>
      </table>
    </td>
  </tr>`

  const body = `
    ${spacer(32)}
    ${sectionHeading('Contact')}
    ${detailRows([
      { label: 'Name', value: esc(name) },
      { label: 'Phone', value: tel ? link(tel, lead.phone) : esc(lead.phone) },
      { label: 'Email', value: lead.email ? link(`mailto:${lead.email}`, lead.email) : '' },
    ])}
    ${actions}
    ${sectionHeading('Property')}
    ${detailRows([
      { label: 'Address', value: esc(address).replace(/\n/g, '<br />') },
    ])}
    ${sectionHeading('What they need')}
    ${detailRows([
      { label: 'Service interest', value: esc(lead.services) },
      // Asked only on project enquiries, so these rows are omitted rather than
      // shown as blanks on a maintenance lead.
      ...(lead.urgency
        ? [{ label: 'Timeline', value: esc(labelled(URGENCY_LABEL, lead.urgency)) }]
        : []),
      ...(lead.budgetBand
        ? [{ label: 'Budget range', value: esc(labelled(BUDGET_LABEL, lead.budgetBand)) }]
        : []),
      { label: 'Heard about us', value: esc(lead.referralSource) },
      { label: 'Notes', value: esc(lead.notes).replace(/\n/g, '<br />') },
    ])}
    ${sectionHeading('Submitted')}
    ${detailRows([
      { label: 'Time', value: esc(stamp()) },
      { label: 'Page', value: ctx.pageUrl ? link(ctx.pageUrl, ctx.pageTitle || ctx.pageUrl) : '' },
      { label: 'Source', value: esc(attributionLine(ctx)) },
    ])}
    <tr>
      <td class="sr-pad" style="padding:0 40px 34px 40px;">
        <p style="margin:0; font-family:${font.body}; font-size:13px; line-height:1.6; color:${color.textMuted};">
          Reply to this email to answer ${esc(lead.firstName || 'the lead')} directly. Your reply goes to their address, not to the website.
        </p>
      </td>
    </tr>`

  const text = [
    `NEW LEAD ${DASH_TEXT} ${name}`,
    '',
    `Phone:   ${lead.phone || '-'}`,
    `Email:   ${lead.email || '-'}`,
    '',
    'PROPERTY',
    address || '-',
    '',
    'WHAT THEY NEED',
    `Service interest: ${lead.services || '-'}`,
    ...(lead.urgency ? [`Timeline:         ${labelled(URGENCY_LABEL, lead.urgency)}`] : []),
    ...(lead.budgetBand ? [`Budget range:     ${labelled(BUDGET_LABEL, lead.budgetBand)}`] : []),
    `Heard about us:   ${lead.referralSource || '-'}`,
    `Notes:            ${lead.notes || '-'}`,
    '',
    'SUBMITTED',
    `Time:   ${stamp()}`,
    `Page:   ${ctx.pageTitle ? `${ctx.pageTitle} (${ctx.pageUrl ?? ''})` : ctx.pageUrl ?? '-'}`,
    `Source: ${attributionLine(ctx) || '-'}`,
    '',
    `Reply to this email to answer ${lead.firstName || 'the lead'} directly.`,
    '',
    `${BUSINESS.name} | ${BUSINESS.phone}`,
  ].join('\n')

  return {
    subject,
    html: shell({
      eyebrow: 'New website enquiry',
      title: esc(name),
      preheader: `${lead.services || 'Enquiry'}${lead.city ? ` in ${lead.city}` : ''}${lead.phone ? ` ${DASH_TEXT} ${lead.phone}` : ''}`,
      body,
    }),
    text,
  }
}


/** One-line human summary of where the lead came from. */
function attributionLine(ctx: LeadContext): string {
  const parts: string[] = []
  if (ctx.utmSource) parts.push(ctx.utmSource)
  if (ctx.utmMedium) parts.push(ctx.utmMedium)
  if (ctx.utmCampaign) parts.push(ctx.utmCampaign)
  if (parts.length > 0) return parts.join(' / ')
  if (ctx.gclid) return 'Google Ads'
  if (ctx.fbclid) return 'Meta Ads'
  if (ctx.referrer) {
    try {
      return `Referral: ${new URL(ctx.referrer).hostname}`
    } catch {
      return `Referral: ${ctx.referrer}`
    }
  }
  return 'Direct or organic'
}

// ─── Template 2: confirmation back to the lead ───────────────────────────────

export function renderLeadConfirmation(
  lead: Lead
): { subject: string; html: string; text: string } {
  const first = lead.firstName?.trim() || 'there'

  const body = `
    ${spacer(32)}
    <tr>
      <td class="sr-pad" style="padding:0 40px 26px 40px;">
        <p style="margin:0 0 16px 0; font-family:${font.body}; font-size:16px; line-height:1.6; color:${color.green};">
          ${esc(first)}, thanks for reaching out. Your request is with our team.
        </p>
        <p style="margin:0; font-family:${font.body}; font-size:16px; line-height:1.6; color:${color.green};">
          Someone will call you within one business day to talk through what you have in mind and set up a visit to the property. There is no cost and no obligation for that first conversation.
        </p>
      </td>
    </tr>
    ${sectionHeading('What you sent us')}
    ${detailRows([
      { label: 'Service interest', value: esc(lead.services) },
      ...(lead.urgency
        ? [{ label: 'Timeline', value: esc(labelled(URGENCY_LABEL, lead.urgency)) }]
        : []),
      { label: 'Property', value: esc(fullAddress(lead)).replace(/\n/g, '<br />') },
      { label: 'Notes', value: esc(lead.notes).replace(/\n/g, '<br />') },
    ])}
    <tr>
      <td class="sr-pad" style="padding:0 40px 30px 40px;">
        ${button(BUSINESS.phoneHref, `Call ${BUSINESS.phone}`)}
      </td>
    </tr>
    <tr>
      <td class="sr-pad" style="padding:0 40px 34px 40px;">
        <p style="margin:0; font-family:${font.body}; font-size:13px; line-height:1.6; color:${color.textMuted};">
          Need to add something? Reply to this email and it reaches the same team.
        </p>
      </td>
    </tr>`

  const text = [
    `${first}, thanks for reaching out. Your request is with our team.`,
    '',
    'Someone will call you within one business day to talk through what you have in mind and set up a visit to the property. There is no cost and no obligation for that first conversation.',
    '',
    'WHAT YOU SENT US',
    `Service interest: ${lead.services || '-'}`,
    `Property:         ${fullAddress(lead).replace(/\n/g, ', ') || '-'}`,
    `Notes:            ${lead.notes || '-'}`,
    '',
    'Need to add something? Reply to this email and it reaches the same team.',
    '',
    BUSINESS.name,
    `${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}`,
    `${BUSINESS.phone} | ${BUSINESS.email}`,
  ].join('\n')

  return {
    subject: 'We got your request — Sunrise Landscape & Design',
    html: shell({
      eyebrow: 'Request received',
      title: 'We&rsquo;ll be in touch<br />within one business day.',
      preheader: 'Your request is with our team. Someone will call you within one business day.',
      body,
    }),
    text,
  }
}
