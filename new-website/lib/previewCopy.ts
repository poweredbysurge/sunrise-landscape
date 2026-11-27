// New copy for the preview review (Mike, Nov 2026). Shown when the page copy switch is on "New copy".
// Headings are kept word for word from the live page (they carry the page's search terms).
// The cost answer is kept word for word: existing prices on the site stay as they are.
import type { ServiceExpansionData } from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'

const live = serviceExpansions['hardscape-northern-virginia']

export const hardscapeExpansionNew: ServiceExpansionData = {
  ...live,
  sections: [
    {
      heading: live.sections[0].heading,
      body: [
        'Patios, walkways, retaining walls, fire pits, outdoor kitchens and the steps and borders that tie them together. Most projects combine several: a patio usually wants a seat wall, a slope wants steps and an evening space wants fire. We plan the whole layout at once, so a second phase never means tearing out the first.',
      ],
    },
    {
      heading: live.sections[1].heading,
      body: [
        'Hardscape fails from the base up, so the base is where we spend the time: excavation to stable subgrade, compacted stone, correct bedding and drainage planned before the first paver goes down. Northern Virginia clay heaves when it freezes. A base built for it is the difference between a patio that is flat in year ten and one that rolls by year three.',
        'The details most people never think to check are the ones we do: a slope that sends water away from the house, step heights that match from top to bottom, edge restraint that keeps pavers from creeping, and a finished edge where the patio meets the lawn and beds. Our own crews do the work, and every job carries our one-year workmanship warranty.',
      ],
    },
  ],
  faqHeading: live.faqHeading,
  faqs: [
    live.faqs[0],
    {
      q: live.faqs[1].q,
      a: 'We install both, and pavers more than anything else. Pavers are uniform and can be lifted and reset one piece at a time. Flagstone and bluestone give a natural, irregular look and are set on a poured concrete base instead of gravel. We will walk you through where each one fits your house and the way you use the space.',
    },
    {
      q: live.faqs[2].q,
      a: 'Above certain heights, yes, and those walls need engineering. We design to code and pull the permit when a wall crosses that line. A wall built without one usually ends up being built twice.',
    },
    {
      q: live.faqs[3].q,
      a: 'Often. We build hardscape through the winter whenever the ground is not frozen, and we use concrete blankets to hold heat while concrete cures on days below 40 degrees. If you wait until spring to start planning, your build may not happen until summer.',
    },
  ],
}
