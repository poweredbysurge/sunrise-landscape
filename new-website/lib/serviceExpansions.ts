import type { ServiceExpansionData } from '@/components/ServiceExpansion'

// Depth content for the 11 thin service pages (WQA P1 rewrites, approved).
// ADDITIVE: renders below existing frozen content. Headings marked with
// "(restored)" comments use exact text from the pre-migration manifest tree.
// Style: PAGE-STANDARDS.md. No em dashes, no kill-list phrases, verifiable claims.

export const serviceExpansions: Record<string, ServiceExpansionData> = {
  'drainage-solutions-northern-virginia': {
    sections: [
      {
        heading: 'How We Fix a Wet Yard',
        body: [
          'Every drainage project starts with watching water, not moving dirt. We map where runoff enters the property, where it stalls, and where it exits, then design the fix: french drains for subsurface water, dry creek beds for surface flow, regrading where the yard slopes toward the house, and downspout extensions that get roof water out of the beds.',
          'Northern Virginia clay is the reason most quick fixes fail here. Water moves across clay, not through it, so a gravel pit that works in sandy soil just becomes a bathtub in Herndon or Vienna. Our systems are sized for clay and built with cleanouts so they can be maintained instead of replaced.',
        ],
      },
      {
        heading: 'Drainage That Disappears Into the Landscape',
        body: [
          'A drain does not have to look like plumbing. Dry creek beds read as stone garden features. Rain gardens turn a soggy low spot into the most planted corner of the yard. Channel drains tuck into patio joints. When the drainage crew and the design crew work for the same company, the fix and the landscape get designed together, which is the difference between a repaired yard and a better one.',
        ],
      },
    ],
    faqHeading: 'Drainage Questions We Hear Most',
    faqs: [
      {
        q: 'How much does drainage work cost in Northern Virginia?',
        a: 'Downspout extensions and small surface fixes often run in the low thousands. Full french drain systems with regrading typically land in the mid four figures to low five figures depending on length, depth, and access. Every project gets a fixed proposal after a site walk.',
      },
      {
        q: 'Will a french drain solve standing water in clay soil?',
        a: 'Only if it is designed for clay: correct depth, washed stone, fabric that will not clog, and a real outlet. A french drain with nowhere to send water is a buried trench. We design the outlet first.',
      },
      {
        q: 'My basement gets damp after storms. Is that a yard problem?',
        a: 'Often, yes. If grading slopes toward the foundation or downspouts dump beside the wall, water finds the basement. Exterior grading and drainage are usually cheaper than interior waterproofing and fix the cause instead of the symptom.',
      },
      {
        q: 'How fast does erosion control need to happen on a slope?',
        a: 'Before the next big storm season, ideally. Each washout removes the soil that plants need to hold the slope, so erosion accelerates. Early fixes are planting and matting. Late fixes are walls.',
      },
    ],
    cta: 'Tired of the swamp?',
  },

  'water-features-northern-virginia': {
    sections: [
      {
        // (restored H2 from manifest)
        heading: 'Water Features in Northern Virginia',
        body: [
          'A well built water feature runs quietly for years. A poorly built one becomes a maintenance hobby. The difference is invisible on day one: liner quality, pump sizing, filtration matched to fish load, and winter proofing for our freeze thaw cycles. We build the invisible parts like they are the whole project, because in this climate they are.',
        ],
      },
      {
        // (restored H3 from manifest)
        heading: 'Waterfall Design and Installation',
        level: 3,
        body: [
          'Waterfalls earn their place with sound. We design the drop height and stone placement for the tone you want, a soft conversation companion near a patio or something with presence at the far end of the yard. Pondless waterfalls give you the sound without open water, which suits families with small kids and yards where a pond would crowd the space.',
        ],
      },
      {
        // (restored H3 from manifest)
        heading: 'Fountain Installation Services',
        level: 3,
        body: [
          'Fountains are the low commitment entry to water: a drilled stone basin, a ceramic urn, a formal tiered piece for an entrance courtyard. They install in days, run on a simple recirculating pump, and winterize in an afternoon. For front yards in Vienna and McLean they are often the single detail visitors remember.',
        ],
      },
      {
        // (restored H2 from manifest)
        heading: 'Begin Your Journey',
        body: [
          'Every water feature starts with a conversation about how you want to use the space: koi and lilies, sound and light after work, or a focal point you enjoy from the kitchen window. From there we design, quote fixed, and build with our own crew. Most fountains take days, most ponds take one to two weeks.',
        ],
      },
    ],
    faqHeading: 'Pond and Water Feature Questions',
    faqs: [
      {
        q: 'How much does a pond or waterfall cost?',
        a: 'Fountains and small pondless waterfalls typically start in the mid four figures. Full koi ponds with filtration, rockwork, and planting usually run five figures, scaling with size. A site visit gets you a fixed number.',
      },
      {
        q: 'Are ponds a lot of work in Northern Virginia?',
        a: 'A correctly sized filter and an annual spring cleanout keep most ponds to minutes per week. The horror stories almost always trace to undersized filtration or a liner installed without underlayment.',
      },
      {
        q: 'What happens to the pond in winter?',
        a: 'Fish overwinter fine in ponds two feet or deeper with a small aerator or de-icer keeping a gas exchange hole open. Pumps and fountains get winterized in late fall. We handle both on a service visit.',
      },
      {
        q: 'Do water features attract mosquitoes?',
        a: 'Moving water does not. Mosquitoes need still water to breed, so a properly circulating pond or waterfall is far less attractive to them than the saucer under a flowerpot.',
      },
    ],
  },

  'landscape-planting-northern-virginia': {
    sections: [
      {
        heading: 'Right Plant, Right Place, Right Soil',
        body: [
          'Northern Virginia sits in a transition zone with clay soil, humid summers, and real winters, and plant lists that ignore that die expensively. Our designs are built from plants proven here: natives like itea, inkberry, and river birch where conditions suit them, tough ornamentals where structure is needed, and deer resistant backbones in Great Falls and McLean where the herd votes on everything.',
          'Installation is where planting designs succeed or fail. We amend beds deeply instead of digging holes in compacted fill, plant at correct depth, mulch to feed the soil rather than suffocate it, and stand behind establishment with clear watering guidance for the first two seasons.',
        ],
      },
      {
        heading: 'From One Bed to a Whole Property',
        body: [
          'Planting projects scale. Some clients start with a foundation refresh, removing overgrown 1990s shrubs and replanting in layered structure that stays in scale with the house. Others hand us a full property master plan installed in phases over two or three seasons. Both approaches work because the plan comes first and every phase reads finished on its own.',
        ],
      },
    ],
    faqHeading: 'Planting Questions We Hear Most',
    faqs: [
      {
        q: 'When is the best time to plant in Northern Virginia?',
        a: 'Fall is king: warm soil, cool air, and a full dormant season to root before summer stress. Spring is second best. We plant container stock nearly year round, adjusting care to the season.',
      },
      {
        q: 'What does a planting project cost?',
        a: 'Foundation bed refreshes commonly run in the low five figures with design, removal, soil work, and installation included. Larger layered designs scale by plant count and sizes. Bigger installed sizes cost more up front and look finished immediately.',
      },
      {
        q: 'Do you guarantee your plants?',
        a: 'Yes, installed plants carry a warranty when we handle the installation and the watering guidance is followed. Dead on arrival or failed establishment gets replaced without a debate.',
      },
      {
        q: 'Deer eat everything I plant. What actually survives?',
        a: 'Boxwood, ferns, hellebores, grasses, and aromatic plants form a reliable deer resistant backbone. Nothing is deer proof in a hard winter, so we design so the backbone carries the yard even in a bad browse year.',
      },
    ],
  },

  'landscape-maintenance-northern-virginia': {
    sections: [
      {
        heading: 'What a Year of Maintenance Looks Like',
        body: [
          'Spring opens with cleanup, edging, mulch, and pre-emergent. The growing season runs on scheduled visits: mowing on the lawn side, pruning and bed care on the garden side, irrigation checks, and pest scouting before problems become damage. Fall brings aeration, overseeding, leaf management, and cutbacks. Winter is pruning season for structure and the right time to plan changes.',
          'The point of a program is that nothing depends on you remembering to call. The calendar is built for your property in January, and the crew shows up all year executing it.',
        ],
      },
      {
        heading: 'Garden Care Is Not Mow and Blow',
        body: [
          'Our maintenance clients mostly hired us because the previous company treated a designed landscape like a hedge to shear. Proper garden care prunes each plant for its habit, feeds trees and shrubs on their cycle, and keeps the design intent readable year after year. Landscapes we maintain look better in year five than year one, which is the whole test.',
        ],
      },
    ],
    faqHeading: 'Maintenance Program Questions',
    faqs: [
      {
        q: 'What does full maintenance cost in Northern Virginia?',
        a: 'Programs are priced from your property: turf area, bed footage, tree count, and services included. Most residential programs land in a monthly range comparable to a car payment. A site walk produces a fixed annual proposal.',
      },
      {
        q: 'Can I get garden care without mowing, or mowing without garden care?',
        a: 'Yes. Plenty of clients mow their own lawn and hire us for beds, pruning, and seasonal work, or the reverse. Programs are assembled from the services your property actually needs.',
      },
      {
        q: 'Do you maintain landscapes you did not install?',
        a: 'All the time. The first season usually includes some corrective pruning and soil work to undo shearing and neglect, and then the property settles into the standard program.',
      },
      {
        q: 'How is this different from a cheap mowing crew?',
        a: 'A mowing crew cuts grass. A maintenance program manages a landscape: soil, plants, turf, water, and pests on one calendar with one accountable team. The price difference is real and so is the result.',
      },
    ],
  },

  'landscape-lighting-northern-virginia': {
    sections: [
      {
        heading: 'Lighting Design Before Light Fixtures',
        body: [
          'Good landscape lighting starts with what should be seen: the oak trunk, the stone wall texture, the path edge, the front door. We design in layers, path lights for footing, uplights for structure, wash lights for depth, and leave darkness where darkness helps. The fixtures are quality brass and LED, but the design is what you are actually buying.',
          'Everything runs on low voltage systems with smart transformers, so scenes and schedules are set from a phone and the system sips power. Installation is minimally invasive: wire runs are buried, fixtures are placed for effect and hidden by day.',
        ],
      },
      {
        heading: 'Built for Northern Virginia Nights',
        body: [
          'Our fixtures and connections are specified for real weather: freeze, thaw, clay soil movement, and summer storms. Brass housings instead of throwaway aluminum, waterproof connections instead of pierce taps, and a layout documented so future landscape work never means cut wires.',
        ],
      },
    ],
    faqHeading: 'Landscape Lighting Questions',
    faqs: [
      {
        q: 'What does landscape lighting cost?',
        a: 'Entry systems covering a front walk and facade typically start in the mid four figures. Full property designs with tree lighting and scenes run higher, scaling with fixture count. Quality fixtures cost more once and stop costing after that.',
      },
      {
        q: 'Can lighting be added without tearing up the beds?',
        a: 'Yes. Low voltage wire buries shallow, and our crews run it with minimal disturbance. Lighting installs cleanly into mature landscapes, which is when most people decide they want it.',
      },
      {
        q: 'How long do LED landscape lights last?',
        a: 'Quality LED lamps run tens of thousands of hours, which at typical evening schedules means many years. Brass fixtures outlast several lamp generations, which is why we specify them.',
      },
      {
        q: 'Will lighting bother my neighbors or the HOA?',
        a: 'Designed lighting should never glare. We aim fixtures to light objects, not eyes or windows, and dark sky friendly placement keeps both neighbors and HOA boards comfortable.',
      },
    ],
  },

  'hardscape-northern-virginia': {
    sections: [
      {
        // (restored H2 from manifest, exact text)
        heading: 'Hardscape Services: Patios , Fire Pits & More',
        body: [
          'Patios, walkways, retaining walls, fire pits, outdoor kitchens, and the steps and borders that tie them together. Most projects combine several: a patio wants a seat wall, a slope wants steps, an evening space wants fire. We design the whole composition at once so phase two never means demolishing phase one.',
        ],
      },
      {
        // (restored H2 from manifest)
        heading: 'Professional Hardscape Installation',
        body: [
          'Hardscape fails from the base up, so that is where the money goes: excavation to stable subgrade, compacted open graded stone, correct bedding, and drainage planned before the first paver. Northern Virginia clay heaves with every freeze, and a base built for it is the difference between a patio that is flat in year ten and one that waves in year three.',
          'Our crews are in-house, the proposal is fixed, and the same company that built it stands behind it. Ask any client how the warranty conversation goes when the designer, builder, and owner share a phone number.',
        ],
      },
    ],
    faqHeading: 'Hardscape Questions We Hear Most',
    faqs: [
      {
        q: 'What does a paver patio cost in Northern Virginia?',
        a: 'Straightforward patios typically start in the low five figures. Add seat walls, fire features, or grade changes and projects scale from there. Every proposal is fixed after a design and site walk.',
      },
      {
        q: 'Pavers, flagstone, or stamped concrete?',
        a: 'On our clay, pavers and dry laid flagstone flex and can be reset. Stamped concrete is one big piece that shows every crack. We build all three but we will tell you honestly where each belongs.',
      },
      {
        q: 'Do retaining walls need permits?',
        a: 'Above certain heights, yes, with engineering. We design to code and pull the permits when a wall crosses the line. Walls built without it become expensive twice.',
      },
      {
        q: 'Can you build in winter?',
        a: 'Often. Dry cold days suit base work fine, and winter scheduling is more flexible. It is the smart season to book a project you want finished by spring.',
      },
    ],
  },

  hardscape: {
    sections: [
      {
        heading: 'One Hardscape Team, Every Kind of Build',
        body: [
          'This page is the short version: patios, walkways, walls, steps, fire features, and outdoor kitchens, designed and installed by our own crews across Northern Virginia. The full picture of how we build, what things cost, and why bases matter on clay lives on our main hardscape page, along with project photos.',
        ],
      },
    ],
    faqHeading: 'Quick Hardscape Questions',
    faqs: [
      {
        q: 'Where can I see your hardscape work and pricing detail?',
        a: 'Our main hardscape page covers services, materials, typical costs, and photos of recent Northern Virginia builds. This page is a quick overview; that one is the deep dive.',
      },
      {
        q: 'Do you handle design and construction?',
        a: 'Both, in-house. The designer who draws your patio and the crew that compacts the base work for the same company, which keeps the drawing honest and the build accountable.',
      },
      {
        q: 'What areas do you cover for hardscape work?',
        a: 'Loudoun and Fairfax counties from our Sterling shop: Leesburg, Ashburn, Reston, Great Falls, Vienna, McLean, Centreville, Sterling, and the communities between them.',
      },
      {
        q: 'How far out are you booking?',
        a: 'Construction calendars typically fill four to eight weeks ahead in season. Design can start anytime, and winter builds often jump the line.',
      },
    ],
  },

  commercial: {
    sections: [
      {
        heading: 'Commercial Grounds, Managed Like They Matter',
        body: [
          'This page is the overview: our commercial division maintains and improves office parks, HOA common areas, retail frontage, and community spaces across Northern Virginia. The full program detail, contracts, enhancements, snow response, and how we report to property managers, lives on our main commercial landscape maintenance page.',
        ],
      },
    ],
    faqHeading: 'Quick Commercial Questions',
    faqs: [
      {
        q: 'What does a commercial maintenance contract include?',
        a: 'Mowing, bed care, seasonal color, irrigation management, inspections, and documented reporting, scoped per property. Enhancement work is proposed separately so budgets stay predictable.',
      },
      {
        q: 'Do you work with HOAs?',
        a: 'Extensively. Common area maintenance, entrance plantings, and board level reporting are core commercial work for us across Loudoun and Fairfax.',
      },
      {
        q: 'Can you handle snow and ice?',
        a: 'Yes, snow and ice management is part of our commercial offering, with response tiers set in the contract before the first flake.',
      },
      {
        q: 'How do we get a proposal?',
        a: 'A property walk with your manager or board rep, then a scoped annual proposal with unit pricing. Most walks turn into numbers within a week.',
      },
    ],
  },

  'commercial-landscape-maintenance-virginia': {
    sections: [
      {
        heading: 'What Property Managers Actually Get',
        body: [
          'A commercial contract with Sunrise is a documented system: a scope built from your property walk, scheduled visits with checklists, photo reporting managers can forward to boards, and one account contact who answers the phone. Curb appeal is the visible product. Predictability is the real one.',
          'Enhancement work, seasonal color rotations, entrance redesigns, drainage repairs, tree work, is proposed and priced separately from the base contract, so maintenance budgets hold and improvements are decisions instead of surprises.',
        ],
      },
      {
        heading: 'Built for Boards and Budget Cycles',
        body: [
          'HOA and commercial budgets run on calendars, so we do too: proposals timed for budget season, unit pricing that survives comparison, and contract scopes written in plain language a board can vote on. After 40 years in Northern Virginia we know exactly what a February board meeting wants to see.',
        ],
      },
    ],
    faqHeading: 'Commercial Maintenance Questions',
    faqs: [
      {
        q: 'How are commercial contracts priced?',
        a: 'From measured scope: turf acreage, bed footage, visit frequency, and included services. Unit pricing is broken out so comparisons with other bids are apples to apples.',
      },
      {
        q: 'What size properties do you handle?',
        a: 'From single retail frontages to multi site HOA portfolios. The fit question is standards, not size: properties that want documented, consistent care fit us well.',
      },
      {
        q: 'Do you offer snow and ice management on commercial contracts?',
        a: 'Yes, with response levels, trigger depths, and per event or seasonal pricing set in writing before winter.',
      },
      {
        q: 'Can you take over mid season from another contractor?',
        a: 'Yes. Transitions usually start with a corrective visit and a written condition report so the board knows what was inherited versus what changed under us.',
      },
    ],
  },

  'landscape-design-northern-virginia': {
    sections: [
      {
        heading: 'How the Design Process Works',
        body: [
          'It starts with a consultation on your property: how you live outside, what the yard refuses to do today, and the budget range that keeps everyone honest. From there we survey and photograph, develop a concept, and refine it with you until the plan is right. You get real drawings, plant lists, and a fixed construction proposal, not a sketch and a shrug.',
          'Because our designers and build crews share an office, drawings stay buildable and quotes stay real. The design fee is separate and modest, and clients keep the plan either way. Nearly all of them build with us, which is the business model working as intended.',
        ],
      },
      {
        heading: 'Design for This Place, Not a Catalog',
        body: [
          'Northern Virginia hands every design the same tests: clay soil, four real seasons, deer, HOA review, and grade. Our plans pass them by default because we have been failing and fixing against them since 1986. That is the quiet advantage of a local design build firm over a catalog plan: everything on the drawing has already survived here.',
        ],
      },
    ],
    faqHeading: 'Design Questions We Hear Most',
    faqs: [
      {
        q: 'What does landscape design cost?',
        a: 'Design fees typically run in the low four figures depending on property size and scope, credited toward construction when we build the project. You keep the drawings regardless.',
      },
      {
        q: 'How long does design take?',
        a: 'Two to four weeks from survey to final plan for most residential projects, driven mostly by revision rounds. HOA submittals add their own clock and we prepare those packets.',
      },
      {
        q: 'Can a design be built in phases?',
        a: 'That is one of the best reasons to have one. The master plan sets the end state, then phases install over one to three years in an order that always looks intentional.',
      },
      {
        q: 'Will you design around what I already have?',
        a: 'Good designs edit before they add. Mature trees and healthy structure stay, tired elements go, and the plan makes the keepers look like decisions.',
      },
    ],
  },

  'service-areas-northern-virginia': {
    sections: [
      {
        heading: 'One Team, Fifteen Plus Communities',
        body: [
          'Every crew rolls out of our Sterling shop, which puts all of Loudoun and most of Fairfax inside a practical service radius: Leesburg, Ashburn, Herndon, Reston, Sterling, Chantilly, Centreville, Great Falls, McLean, Oakton, Vienna, Aldie, and western Loudoun. Each community has its own page below with local specifics, neighborhoods we serve, and answers to the questions that town actually asks.',
          'Lawn care has dedicated town pages too, covering mowing programs, aeration, and turf renovation in Leesburg, Ashburn, Herndon, Fairfax, Aldie, and across Loudoun County.',
        ],
      },
    ],
    faqHeading: 'Service Area Questions',
    faqs: [
      {
        q: 'Do you charge more for towns farther from Sterling?',
        a: 'No. Route scheduling absorbs the drive inside our service area. If an address falls outside practical range we say so instead of padding a quote.',
      },
      {
        q: 'My town is not listed. Will you still come?',
        a: 'Ask. Routes flex season to season and borders are soft. Brambleton, Lansdowne, South Riding, and Willowsford are all covered under their nearest town page.',
      },
      {
        q: 'Are the same services available in every community?',
        a: 'Yes. Design, hardscape, planting, lighting, drainage, maintenance, and commercial work run county wide. The town pages differ in local detail, not in what we offer.',
      },
      {
        q: 'Where are you actually located?',
        a: '43813 Beaver Meadow Rd #100 in Sterling, VA. The shop, the crews, and the plant staging yard all live there, fifteen minutes from most of our routes.',
      },
    ],
  },
}
