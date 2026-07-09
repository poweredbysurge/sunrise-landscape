import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, streetAddress, city, state, zipCode, phone, services, referralSource } = body

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Sunrise Contact Form <noreply@sunriselandscapeanddesign.com>',
      to: 'info@sunriselandscapeanddesign.com',
      replyTo: email,
      subject: `New Consultation Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e3526;">
          <div style="background: #1e3526; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #e7e6d2; margin: 0; font-size: 20px;">New Consultation Request</h1>
          </div>
          <div style="border: 1px solid #e7e6d2; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
            <h2 style="font-size: 16px; margin: 0 0 20px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #666; width: 160px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff6400;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #ff6400;">${phone || '—'}</a></td></tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e7e6d2; margin: 20px 0;" />

            <h2 style="font-size: 16px; margin: 0 0 20px;">Project Location</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #666; width: 160px;">Address</td><td style="padding: 8px 0;">${streetAddress || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">City / State / Zip</td><td style="padding: 8px 0;">${city || '—'}, ${state || '—'} ${zipCode || ''}</td></tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e7e6d2; margin: 20px 0;" />

            <h2 style="font-size: 16px; margin: 0 0 20px;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #666; width: 160px;">Services Wanted</td><td style="padding: 8px 0;">${services || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Heard About Us</td><td style="padding: 8px 0;">${referralSource || '—'}</td></tr>
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
