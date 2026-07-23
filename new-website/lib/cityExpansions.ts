// City-page expansion content (build-kit/briefs/city-expansions/).
// ADDITIVE layer: rendered below the frozen manifest content on
// /service-areas/[city] pages. Each city's ingredients are exclusive
// per build-kit/DIFFERENTIATION-MATRIX.md. No em dashes in copy.

export type CityFaq = { q: string; a: string }

export interface CityExpansion {
  metaDescription: string
  knowledgeHeading: string
  knowledgePara: string
  proofPara?: string
  extraNeighborhoods: string
  faqs: CityFaq[]
  sibling?: { href: string; label: string; line: string }
  extraSibling?: { href: string; label: string; line: string }
  image?: { src: string; alt: string; width: number; height: number }
}

export const cityExpansions: Record<string, CityExpansion> = {
  'landscaping-leesburg-va': {
    metaDescription:
      'Leesburg landscaping from design through build: patios, plantings, water features. 40 years in Loudoun County. Get a free design consultation.',
    knowledgeHeading: 'Designing for Leesburg Lots, Old and New',
    knowledgePara:
      'Leesburg splits into two design worlds. Around the historic district, front yards are shallow, sight lines matter, and mature trees set the rules, so we design understory plantings and hardscape that defer to what is already there. Out in the newer communities the lots are bigger and blanker, which is where full design and build work shines: structure first, then plantings that will look intentional in year five, not just at install.',
    proofPara:
      'Our Leesburg portfolio includes one of our favorite water feature builds, a lakefront project where the water line and the horizon meet. Design, stonework, and planting came from one team.',
    extraNeighborhoods: 'Raspberry Falls, Tavistock Farms, and the historic district streets.',
    faqs: [
      {
        q: 'Do you handle design and construction in Leesburg, or just one?',
        a: 'Both, under one roof. A designer develops the plan with you, then our own crews build it. No handoff to a subcontractor who never saw the drawings.',
      },
      {
        q: 'Can you work within historic district constraints?',
        a: 'Yes. Shallow setbacks, visible frontages, and established trees shape what we propose. We design to the street context rather than against it.',
      },
      {
        q: 'What do Leesburg landscape projects typically cost?',
        a: 'Planting refreshes often start around five figures, and full design-build projects with hardscape scale from there. A free consultation gets you a real number for your property.',
      },
      {
        q: 'How far ahead should I book a Leesburg project?',
        a: 'Design can start anytime. Construction calendars fill four to eight weeks out in season, and winter is often the fastest route to a spring finish.',
      },
    ],
    sibling: {
      href: '/lawn-care-leesburg-va',
      label: 'Lawn Care in Leesburg',
      line: 'Need mowing, fertilization, or weed control instead of design work?',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/680b44b950db79fc1f54e990_landscape.webp',
      alt: 'Stone walkway to the water on a Sunrise Landscape water feature project in Leesburg, VA',
      width: 768,
      height: 578,
    },
  },

  'landscaping-ashburn-va': {
    metaDescription:
      'Ashburn landscaping for new-build lots: privacy planting, patios, full-yard design. Trusted across Loudoun for 40 years. Free design consultation.',
    knowledgeHeading: 'The Blank-Slate Backyard Problem',
    knowledgePara:
      'Most Ashburn backyards start as a rectangle of builder sod with a fence and zero privacy. The houses sit close, so the first design job is almost always screening: layered evergreens and ornamental trees that create a room without building a wall. From there the yard earns its keep with structure, a patio or deck landing, beds that hold shape year round, and lighting that makes the space usable after commute hours.',
    proofPara:
      'The Ashburn project we call Paradise in Your Backyard started exactly that way, a plain fenced rectangle that became the reason our client stays home on weekends.',
    extraNeighborhoods: 'Belmont, Goose Creek, and Loudoun Valley Estates.',
    faqs: [
      {
        q: 'How do you create privacy between close Ashburn lots?',
        a: 'Layered planting beats a single hedge line: staggered evergreens, ornamental trees, and shrubs at three heights. It screens sight lines fast and looks designed, not defensive.',
      },
      {
        q: 'Do Ashburn HOAs need to approve landscape projects?',
        a: 'Most do for structural changes and many for major plantings. We prepare the application drawings and material lists as part of design, which keeps approvals moving.',
      },
      {
        q: 'Can you phase a full-yard design over a few years?',
        a: 'Yes, and we recommend it for bigger visions. The master plan comes first, then phases install in an order that never looks half-finished.',
      },
      {
        q: 'What makes new-build soil hard on plants?',
        a: 'Grading strips topsoil and compacts what is left. We amend planting beds deeply and pick species that tolerate the transition while the soil rebuilds.',
      },
    ],
    sibling: {
      href: '/lawn-care-ashburn-va',
      label: 'Lawn Care in Ashburn',
      line: 'Weekly mowing and turf programs live on their own page.',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/68247fc088d049498e40412d_dec-protect-img-1.webp',
      alt: 'Backyard waterfall and planting bed built by Sunrise Landscape in Northern Virginia',
      width: 616,
      height: 509,
    },
  },

  'landscaping-herndon-va': {
    metaDescription:
      'Herndon landscaping that solves water first: erosion control, plantings, and outdoor living built for clay soil. Free design consultation.',
    knowledgeHeading: 'Design That Starts With Where Water Goes',
    knowledgePara:
      'In Herndon we design drainage before we design beauty, because clay soil makes water the deciding vote in every yard. Downspouts, swales, and grades get mapped in the first site visit. Then planting plans work with the wet spots instead of fighting them: river birch and inkberry where it stays damp, drought-tough natives up slope. The result reads as a garden. Underneath, it is a water management system.',
    proofPara:
      'Some of our favorite Herndon transformations began as drainage calls that became full landscapes once the yard finally dried out enough to use.',
    extraNeighborhoods: 'Chandon, Kingstream, and the historic downtown blocks.',
    faqs: [
      {
        q: 'My Herndon yard is a swamp every spring. Landscaping or drainage first?',
        a: 'Drainage first, always. Plantings and hardscape built on unresolved water problems fail early. We design both together so the fix disappears into the landscape.',
      },
      {
        q: 'What plants actually thrive in Herndon clay?',
        a: 'More than people expect: itea, inkberry, river birch, switchgrass, and most natives bred for Piedmont soil. Bed preparation matters as much as the plant list.',
      },
      {
        q: 'Do you build rain gardens?',
        a: 'Yes. A planted basin that intercepts roof and driveway runoff is often the prettiest drainage solution available, and it counts as landscaping to every eye that sees it.',
      },
      {
        q: 'Can you renovate an overgrown Herndon foundation planting?',
        a: 'That is a classic project here: remove the tired 1990s shrubs, correct the grade against the foundation, and replant with layered structure that stays in scale.',
      },
    ],
    sibling: {
      href: '/lawn-care-herndon-va',
      label: 'Lawn Service in Herndon',
      line: 'Turf care, aeration, and grub control have a dedicated page.',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/682348cfa19ec32d50466fa3_beyond-img (1).webp',
      alt: 'Stone bridge and waterfall built by Sunrise Landscape to manage a wet Northern Virginia yard',
      width: 617,
      height: 640,
    },
  },

  'landscaping-reston-va': {
    metaDescription:
      'Reston landscaping designed to RA standards: wooded-lot plantings, courtyards, and outdoor living. 40 years in Northern Virginia. Free consultation.',
    knowledgeHeading: 'Working With Reston Association Standards',
    knowledgePara:
      'Reston was planned around trees, and the Reston Association design review process protects that. We design with it, not around it: plans that preserve canopy, use naturalized planting palettes, and meet the covenants the first time they are submitted. Wooded lots in South Lakes and North Point call for shade-layer design, understory trees, ferns, and groundcovers that make a forest floor feel intentional.',
    extraNeighborhoods: 'Lake Anne, South Lakes, and North Point.',
    faqs: [
      {
        q: 'Do you handle Reston Association design review submissions?',
        a: 'Yes. We prepare the drawings and documentation the DRB expects and have a working knowledge of what passes cleanly in each cluster.',
      },
      {
        q: 'What grows under mature Reston oaks?',
        a: 'Shade natives: ferns, heuchera, fothergilla, dogwood, and sedge lawns where turf refuses. Fighting for grass under full canopy is a losing budget line.',
      },
      {
        q: 'Can you redesign a Reston townhome courtyard?',
        a: 'Small-space design is real design: one strong move, generous planting, and materials that handle shade and moisture. Courtyards are some of our favorite briefs.',
      },
      {
        q: 'Do cluster associations restrict plant choices?',
        a: 'Some maintain palettes or prohibit certain species. We check your cluster standards during design so the plan is approvable as drawn.',
      },
    ],
    sibling: {
      href: '/patio-fire-pit-leesburg-ashburn-great-falls',
      label: 'Patio and Fire Pit Construction',
      line: 'Hardscape projects for Reston townhomes and single-family lots:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6821cb4ae52f9959c143a822_work-img-1 (1).webp',
      alt: 'Flagstone patio and seating area built by Sunrise Landscape in Northern Virginia',
      width: 620,
      height: 527,
    },
  },

  'landscaping-sterling-va': {
    metaDescription:
      'Sterling landscaping from the company headquartered here: design, planting, and outdoor living with same-week site visits. Free consultation.',
    knowledgeHeading: 'The Hometown Advantage',
    knowledgePara:
      'Our shop sits on Beaver Meadow Road in Sterling, which changes what service looks like here. Site visits happen the same week you call, crews pass your street daily, and a warranty visit is a five-minute drive instead of a scheduling project. Sterling yards range from Sugarland Run quarter-acres to Lowes Island view lots, and the design work runs the same range: front-yard refreshes, full backyard living spaces, and the commercial corridor properties we maintain along Route 7.',
    extraNeighborhoods: 'Sugarland Run, Cascades, and Lowes Island.',
    faqs: [
      {
        q: 'Does being Sterling-based actually matter?',
        a: 'It shows up in speed: same-week consultations, tight project supervision, and fast follow-ups. Your project manager is never more than minutes away.',
      },
      {
        q: 'Do you do smaller Sterling projects, like a front bed refresh?',
        a: 'Yes. Hometown means we take the projects other design firms skip. Front-yard refreshes are often how long relationships start.',
      },
      {
        q: 'Can you landscape Sterling commercial properties?',
        a: 'We design and maintain commercial sites across the Route 7 corridor, from office frontage plantings to full property maintenance contracts.',
      },
      {
        q: 'What is popular in Cascades and Lowes Island right now?',
        a: 'Outdoor rooms: paver patios with seating walls, low-voltage lighting, and screening plantings that turn golf-adjacent lots into private space.',
      },
    ],
    sibling: {
      href: '/lawn-care-loudoun-county-va',
      label: 'Loudoun County Lawn Care',
      line: 'Turf programs for Sterling run through our county lawn routes.',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6821cb817cc578cffd2d3726_work-img-3 (1).webp',
      alt: 'Outdoor stone fireplace and covered patio built by Sunrise Landscape, based in Sterling, VA',
      width: 620,
      height: 527,
    },
  },

  'landscaping-chantilly-va': {
    metaDescription:
      'Chantilly landscaping for homes and commercial properties: design, planting, patios, and maintenance from one local team. Free consultation and quote.',
    knowledgeHeading: 'What Landscaping Costs in Chantilly',
    knowledgePara:
      'Chantilly homeowners ask us about cost more directly than any other town, so here are honest ranges. A designed planting refresh for a typical Greenbriar or Brookfield front yard generally runs in the low five figures. Full backyard design and build with a patio starts in the mid five figures and scales with materials and grading. Maintenance programs price by property size. Two things move every number: slope and access. A walk-through gives you a fixed proposal, and the consultation costs nothing.',
    proofPara:
      'Chantilly is also where our residential and commercial work overlap most, and the same crews handle both, which keeps quality identical on either side of the line.',
    extraNeighborhoods: 'Greenbriar, Brookfield, and Pleasant Valley.',
    faqs: [
      {
        q: 'Why is Chantilly landscaping quoted by walk-through instead of by phone?',
        a: 'Because slope, access, and soil decide half the cost. A number given without seeing the yard is either padded or wrong, and both waste your time.',
      },
      {
        q: 'Do you serve Chantilly HOA townhome communities?',
        a: 'Yes, both individual townhome yards and common-area contracts. Small yards get real design attention, not a shrub-and-mulch template.',
      },
      {
        q: 'Can one company handle my Chantilly office property and my home?',
        a: 'That happens here more than anywhere we work. One account manager, two properties, the same standard on both.',
      },
      {
        q: 'How long does a full backyard project take in Chantilly?',
        a: 'Design takes two to four weeks. Construction typically runs one to three weeks on site depending on scope and weather.',
      },
    ],
    sibling: {
      href: '/commercial-landscape-maintenance-virginia',
      label: 'Commercial Landscape Maintenance',
      line: 'Chantilly business properties have a dedicated commercial program.',
    },
  },

  'landscaping-mclean-va': {
    metaDescription:
      'McLean landscaping at estate scale: mature tree preservation, formal plantings, and outdoor living designed to last. Free design consultation.',
    knowledgeHeading: 'Estate Work Around Trees Worth Protecting',
    knowledgePara:
      "McLean properties in Langley and Chesterbrook carry the kind of mature canopy you cannot buy back once it is damaged. Estate-scale design here starts with an honest tree assessment: which oaks and beeches set the structure, where root zones forbid grading, and how drives, walls, and plantings can be placed without paying for it a decade later in declining trees. The formality level is the client's call. The tree protection is not.",
    extraNeighborhoods: 'Langley, Salona Village, and Chesterbrook.',
    faqs: [
      {
        q: 'How do you protect mature trees during McLean construction?',
        a: 'Root zone fencing, no-dig zones, air-spade work near critical roots, and designs that route hardscape outside drip lines wherever possible.',
      },
      {
        q: 'Do you do formal garden design?',
        a: 'Yes, from boxwood parterres to allees, along with the looser naturalistic style many McLean clients now prefer. The property and the architecture guide the vocabulary.',
      },
      {
        q: 'Can you manage a multi-phase estate project?',
        a: 'That is normal at this scale: a master plan first, then phases sequenced over one to three years with a single point of accountability.',
      },
      {
        q: 'Do you coordinate with architects and pool builders?',
        a: 'Regularly. Landscape works best designed alongside the other trades, not after them, and we are comfortable in that room.',
      },
    ],
    sibling: {
      href: '/landscape-design-northern-virginia',
      label: 'Landscape Design',
      line: 'See how our design process works from concept to build:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6821c3be80facb1a793f7612_harmony-img-2 (1).webp',
      alt: 'Koi pond, waterfall, and mature tree canopy on a Sunrise Landscape estate project',
      width: 973,
      height: 457,
    },
  },

  'landscaping-centreville-va': {
    metaDescription:
      'Centreville landscaping built for sloped lots: terracing, retaining walls, plantings, and patios from one design-build team. Free consultation.',
    knowledgeHeading: 'Terracing the Centreville Slope',
    knowledgePara:
      'Walk Sully Station or Virginia Run and you will see the same yard problem repeated: a backyard that falls away from the house fast enough to make flat space rare and erosion common. Terracing is the answer we build most in Centreville. Retaining walls carve usable levels, steps connect them, and plantings hold what the walls do not. Done right, a sloped lot ends up with more interesting outdoor space than a flat one ever gets.',
    extraNeighborhoods: 'Sully Station, Faircrest, and Virginia Run.',
    faqs: [
      {
        q: 'How much usable space can terracing recover?',
        a: 'Often the whole backyard. Two well-placed walls can turn a slope you only mow into a patio level, a lawn level, and a planted bank that needs no mowing at all.',
      },
      {
        q: 'Do Centreville retaining walls need permits?',
        a: 'Fairfax County requires engineering and permits above certain heights. We design to code and handle the paperwork when walls cross that line.',
      },
      {
        q: 'What stops erosion on a planted slope?',
        a: 'Deep-rooted groundcovers, shrubs in staggered rows, and drainage that slows water before it gathers speed. Mulch alone washes; roots hold.',
      },
      {
        q: 'Can a patio work on a sloped Centreville lot?',
        a: 'Yes, that is what the terracing is for. The patio pairs with a wall almost every time, and we design them as one structure.',
      },
    ],
    sibling: {
      href: '/patio-fire-pit-leesburg-ashburn-great-falls',
      label: 'Patio and Fire Pit Construction',
      line: 'Ready for the patio itself? Our hardscape crew covers Centreville:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6822f8c8c8ec5c4eba8b85e6_fall-img (1).webp',
      alt: 'Terraced stone retaining walls and patio steps built by Sunrise Landscape on a sloped lot',
      width: 616,
      height: 640,
    },
  },

  'landscaping-great-falls-va': {
    metaDescription:
      'Great Falls landscaping for acre-plus properties: estate plantings, pools and hardscape surrounds, deer-resistant design. Free consultation.',
    knowledgeHeading: 'Acreage, Deer, and Design That Handles Both',
    knowledgePara:
      'Great Falls properties give a designer room to think in zones: arrival, entertaining, garden, and the wilder edges toward the trees. Two local realities shape every plan. First, scale, because plantings that look right against an estate home are bought in quantities that reward good planning. Second, deer, which treat unfenced hostas as a salad course. We design with deer-resistant structure, boxwood, ferns, ornamental grasses, and protect the exceptions.',
    proofPara:
      'Our recent pool and hardscape work in Great Falls, including the stone surrounds from the Katie Bird project set, shows the standard: masonry and planting finished as one composition.',
    extraNeighborhoods: 'Forestville, the Seneca corridor, and river-adjacent estates.',
    faqs: [
      {
        q: 'What actually survives deer in Great Falls?',
        a: 'Boxwood, ferns, grasses, hellebores, and aromatic herbs form the reliable backbone. Anything deer love gets fencing, repellent rotation, or a spot close to the house.',
      },
      {
        q: 'Can you landscape around a new pool?',
        a: 'Pool surrounds are a specialty: stone decks, privacy planting, and lighting designed with the pool, so the finished space reads as one project rather than two.',
      },
      {
        q: 'How do you plan plantings at estate scale?',
        a: 'In masses, not ones and twos. Big properties need bold drifts and repeated structure to read from the distances involved.',
      },
      {
        q: 'Do you maintain what you install in Great Falls?',
        a: 'Yes, and estate plantings deserve it. Our garden care teams keep the design intent intact instead of shearing it into meatballs.',
      },
    ],
    sibling: {
      href: '/water-features-northern-virginia',
      label: 'Ponds and Water Features',
      line: 'Many Great Falls projects add water. See what we build:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie Bird Pool 3.jpg',
      alt: 'Pool, spa, and stone patio hardscape built by Sunrise Landscape in Great Falls, VA',
      width: 1440,
      height: 1080,
    },
  },

  'landscaping-oakton-va': {
    metaDescription:
      'Oakton landscaping for wooded lots: grand entrances, driveway plantings, and shade gardens designed and built by one team. Free consultation.',
    knowledgeHeading: 'Entrances That Earn the Driveway',
    knowledgePara:
      'Oakton properties hide behind trees, which makes the entrance sequence the design opportunity: the driveway curve, the first view of the house, the planting that carries you to the door. Our Oakton portfolio includes the project we call A Grand Welcome, Grounded in Green, built around exactly that idea. Wooded lots in Vale and Flint Hill want shade-layer gardens instead of struggling lawn, and stone that looks like it grew there.',
    extraNeighborhoods: 'Oakton proper, the Vale corridor, and Flint Hill.',
    faqs: [
      {
        q: 'What makes a driveway entrance feel designed?',
        a: 'Rhythm and restraint: repeated plant masses along the curve, low stone elements, and lighting that guides without glaring. One strong idea beats ten small ones.',
      },
      {
        q: 'Can anything replace lawn under Oakton trees?',
        a: 'Sedge meadows, fern banks, and moss-friendly shade gardens thrive where turf sulks, and they cut mowing to nothing on those areas.',
      },
      {
        q: 'Do you build walkways and stone steps on grades?',
        a: 'Constantly in Oakton. Sloped, wooded frontage almost always wants stone steps and a landing or two, engineered to stay put through freeze and thaw.',
      },
      {
        q: 'Will you work with what is already growing?',
        a: 'A wooded Oakton lot usually has bones worth keeping. We edit first, remove what fails, then add structure around what earned its place.',
      },
    ],
    sibling: {
      href: '/landscape-design-northern-virginia',
      label: 'Landscape Design',
      line: 'Start with the design process behind these projects:',
    },
    extraSibling: {
      href: '/lawn-care-fairfax-va',
      label: 'Lawn Care in Fairfax',
      line: 'Just need mowing and turf care for an Oakton or Fairfax County property?',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/68230187ed0e534a13fbd511_season-img-1 (1).webp',
      alt: 'Flowering shade bed and lawn edge planted by Sunrise Landscape in Northern Virginia',
      width: 616,
      height: 509,
    },
  },

  'landscaping-vienna-va': {
    metaDescription:
      'Vienna landscaping with four-season design: town tree rules handled, gardens in full bloom, patios and plantings by one team. Free consultation.',
    knowledgeHeading: 'Full-Bloom Design Inside Town Rules',
    knowledgePara:
      'The Town of Vienna takes trees seriously enough to regulate their removal, and good design here starts by knowing those ordinances before proposing anything. Our Vienna projects lean into abundance: The Parkland Estate and Estate Elegance in Full Bloom both trade on layered perennial and shrub plantings that hand the garden a different lead performer every month from March to November. Vienna lots reward that approach, established streets, real soil, and neighbors who notice.',
    extraNeighborhoods: 'The Town of Vienna, Wolf Trap corridor, and Dunn Loring.',
    faqs: [
      {
        q: 'Do I need town permission to remove a tree in Vienna?',
        a: 'Inside town limits, often yes above certain sizes. We check the ordinance for your specific trees during design and handle applications when removal is justified.',
      },
      {
        q: 'How do you design a garden that blooms all season?',
        a: 'Succession planning: early bulbs and hellebores, late-spring shrubs, summer perennials in drifts, and fall structure from grasses and asters. Every month gets a headline.',
      },
      {
        q: 'Are your Vienna projects high maintenance?',
        a: 'Abundant does not have to mean needy. Dense planting suppresses weeds, and our garden care visits keep a full design crisp with less work than most lawns demand.',
      },
      {
        q: 'Can you match an older Vienna home with period-appropriate landscaping?',
        a: 'Yes. Established neighborhoods call for plantings that look like they have always been there, and that restraint is a design skill we take seriously.',
      },
    ],
    sibling: {
      href: '/landscape-planting-northern-virginia',
      label: 'Landscape Planting',
      line: 'The planting craft behind these gardens has its own page:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/6823019fb4e4ffb45ca39be9_season-img-2 (1).webp',
      alt: 'Layered spring-blooming shrubs along a stone retaining wall by Sunrise Landscape',
      width: 616,
      height: 266,
    },
  },

  'landscaping-western-loudoun-va': {
    metaDescription:
      'Western Loudoun landscaping for rural and estate properties: long drives, meadow edges, and outdoor living from Purcellville to Aldie. Free consultation.',
    knowledgeHeading: 'Where the Suburbs End and Design Changes',
    knowledgePara:
      'West of Leesburg the design brief changes. Purcellville, Hamilton, and Round Hill properties come with long driveways, real acreage, and views that deserve to stay views. The work is editing at scale: defining mown space versus meadow, planting windbreaks and orchard rows that suit a rural context, and building outdoor living areas that feel connected to the land rather than dropped onto it. Our crews run west from the Sterling shop weekly, so distance never means neglect.',
    extraNeighborhoods: 'Purcellville, Hamilton, Round Hill, and the Willowsford edges.',
    faqs: [
      {
        q: 'Do you really cover western Loudoun regularly?',
        a: 'Weekly routes run through Purcellville and Round Hill all season. Rural addresses get the same scheduling reliability as our Ashburn HOA clients.',
      },
      {
        q: 'What is a managed meadow and should I want one?',
        a: 'A defined area cut once or twice a year instead of weekly. It saves mowing cost, feeds pollinators, and frames the lawn you do keep. On acreage it is often the smartest design move available.',
      },
      {
        q: 'Can you plant for wind and privacy on open land?',
        a: 'Windbreak and screening rows are classic western Loudoun work: staggered evergreens and natives planted at sizes that establish fast without irrigation dependence.',
      },
      {
        q: 'Do you design around wells and septic fields?',
        a: 'Always out here. Septic fields restrict planting and traffic, and we map them before the first sketch so nothing expensive lands in the wrong place.',
      },
    ],
    sibling: {
      href: '/lawn-care-aldie-va',
      label: 'Lawn Care in Aldie',
      line: 'Aldie turf programs, including mosquito control, live here:',
    },
    image: {
      src: '/media/6808afe22b48076cc8e63cef/680b3f278dd4a418016b50d1_Outer-pattio.webp',
      alt: 'Flagstone patio with a pastoral view, built by Sunrise Landscape in western Loudoun County',
      width: 768,
      height: 512,
    },
  },
}
