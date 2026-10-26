import { initBotId } from 'botid/client/core'

/**
 * Vercel BotID, client half.
 *
 * Runs an invisible challenge in the visitor's browser and attaches the result
 * as headers to the requests listed below. The visitor sees nothing: no
 * checkbox, no puzzle, no delay.
 *
 * Every path protected here must also call checkBotId() on the server, and
 * every server route that calls checkBotId() must be listed here. If the two
 * drift apart, checkBotId() fails for that route.
 *
 * Production only in practice: BotID returns isBot: false in local development,
 * and blocks direct requests (curl, Postman) in production because they never
 * ran the challenge. To test a live deploy, submit the real form.
 */
initBotId({
  protect: [
    // Website enquiry form (components/InquiryForm.tsx -> app/api/contact/route.ts)
    { path: '/api/contact', method: 'POST' },
  ],
})
