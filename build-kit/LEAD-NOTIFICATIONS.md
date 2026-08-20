# Lead Notifications — Setup & Activation

How a Sunrise website enquiry becomes an email in Mike's inbox and, later, a
contact in the Surge Command Center.

## The path a lead takes

`InquiryForm` (4-step widget, on ~28 pages + the homepage hero)
  → `POST /api/contact`
    → 1. **Internal alert** to Sunrise + Surge. The only send that can fail the request.
    → 2. **Confirmation** back to the lead. Best effort, gated on a Sunrise sender.
    → 3. **Command Center forward**. Best effort, dormant until a tenant exists.

A failure in 2 or 3 never tells the lead the form broke.

## Files

| File | Role |
|---|---|
| `new-website/app/api/contact/route.ts` | Receiver, validation, fan-out |
| `new-website/lib/email/tokens.ts` | Brand tokens, narrowed to what mail clients render |
| `new-website/lib/email/templates.ts` | Both emails, HTML + plain text |
| `new-website/lib/leads/types.ts` | `Lead` / `LeadContext` — one shared shape |
| `new-website/lib/leads/context.ts` | Browser-side attribution capture |
| `new-website/lib/leads/commandCenter.ts` | Forward to the Command Center ingest |

## Recipients

- **To:** `mflickinger@sunriselandscapeanddesign.com`
- **Cc:** `manager@thesurgeagency.com`, `info@sunriselandscapeanddesign.com`
- **Reply-To:** the lead's own address, so replying to the alert answers them directly.

All three are `LEAD_NOTIFY_TO` / `LEAD_NOTIFY_CC` overridable without a code change.

## Step 1 — Turn the emails on (required; the form is dead until this is done)

1. Create a Resend API key on Surge's Resend account.
2. Verify `mail.thesurgeagency.com` in Resend if it is not already (SPF + DKIM on
   Surge's DNS). This is the sender for the internal alert only.
3. Set on the `sunrise-landscape` Vercel project, Production + Preview:
   ```
   RESEND_API_KEY=re_...
   ```
   The remaining vars have working defaults. See `new-website/.env.example`.
4. Redeploy and submit a test enquiry.

Until `RESEND_API_KEY` is set the route returns 500 and the lead sees
"Something went wrong. Please call us at 703-544-0028." The full lead is written
to the Vercel logs on every failure, so nothing is lost silently.

## Step 2 — Move the sender to Sunrise's domain (unblocks the lead confirmation)

The confirmation email is customer-facing, so per ADR-024 it must not come from a
Surge domain. It stays switched off until this is done.

1. Add `mail.sunriselandscapeanddesign.com` in Resend, add the SPF + DKIM records
   to Sunrise's DNS, verify.
2. Set on Vercel:
   ```
   LEAD_NOTIFY_FROM=Sunrise Website <leads@mail.sunriselandscapeanddesign.com>
   LEAD_REPLY_FROM=Sunrise Landscape & Design <hello@mail.sunriselandscapeanddesign.com>
   ```
3. Redeploy. The confirmation starts sending on the next enquiry.

Note the site is still on `sunrise-landscape.vercel.app` — the apex domain has not
been cut over. Verifying the mail subdomain does not require the cutover and can
happen first.

## Step 3 — Land leads in the Command Center

The forwarder is written and shipped but no-ops while `SURGE_INGEST_TOKEN` is
unset, which is today's state — Sunrise has no tenant yet.

1. Provision the Sunrise tenant in the Command Center and copy its `ingest_token`
   from the `tenants` row.
2. Set on Vercel:
   ```
   SURGE_INGEST_TOKEN=<the tenant's ingest token>
   ```
3. Redeploy. Leads then land in the Command Center *in addition to* the email.

The payload follows the receiver's lead-form contract: name, email, phone, the
split `address_street` / `address_city` / `address_state` / `address_zip`, `notes`,
`services`, `referral_source`, `form_id: 'inquiry'`, a per-session `lead_key` for
dedupe, and full UTM / gclid / fbclid attribution.

### Qualifying answers

`InquiryForm` branches on the step-1 answer. Maintenance and Commercial keep the
four-question flow; a **Project** lead gets a fifth screen asking timeline and
budget, because that is the answer that decides whether a designer goes out and
it is noise on a mowing enquiry. Both chips are skippable.

Those answers post as closed-enum values, which the receiver validates and the
landscaping classifier grades:

| Field | Values |
|---|---|
| `service_interest` | `maintenance` · `design_build` · `commercial` · `not_sure` |
| `urgency` | `right_away` · `within_month` · `1_3_months` · `planning` |
| `budget_band` | `under_5k` · `5k_15k` · `15k_50k` · `50k_100k` · `over_100k` · `not_sure` |
| `property_type` | `residential` · `hoa` · `commercial` · `municipal` |

`urgency` reuses the receiver's existing enum rather than a landscaping-specific
one that would mean the same thing in different words. `property_type` is only
asserted (`commercial`) when the lead picked Commercial — guessing `residential`
for everyone else would mislabel the HOA manager who picked Maintenance.

The notification email renders these as words, never as raw enum values, and
omits the rows entirely on a lead that was never asked.

The roofing enums (`reason`, `roof_age`, `signed_other_contractor`) are
deliberately **not** sent — they are HomeSource-vertical and would only produce
`enum_mismatches` noise on every landscaping lead. A landscaping equivalent can be
added to the receiver later if it is worth the taxonomy.

## Design

Both emails follow `build-kit/skills/sunrise-design/SKILL.md`: green and cream
carry the brand, orange is a scalpel (one eyebrow label per section, one 3px rule
under the header, nothing else), corners are square, borders are 1px, surfaces are
flat. Buttons are `bg-green` with white text — never orange fill.

Built table-first with inline styles because Outlook renders through Word and
drops flexbox, grid, and most of a `<style>` block. The only thing in `<style>` is
the mobile stacking, which Outlook ignoring is harmless. Brand faces (Aeonik,
Editorsnote) lead the font stack but Arial/Helvetica is the real target — the
self-hosted `.otf` files cannot be relied on in a mail client.

Every interpolated value is HTML-escaped and subjects are stripped of CR/LF: the
form is public and unauthenticated, so a lead must not be able to inject markup
into the client's inbox or headers into the subject.
