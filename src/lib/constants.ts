export const navLinks = [
  { label: "About", href: "#mission" },
  { label: "Pricing", href: "#pricing" },
  { label: "Works", href: "#news" },
  { label: "Contact", href: "/contact" },
];

export const blogPosts = [
  {
    title: "How We Built a Custom Dashboard That Saves 8hrs/Week",
    date: "Feb 12, 2026",
    category: "Case Study",
    href: "#",
    amount: "8hrs",
    subtitle: "Saved per week",
    lead: "ALPHAWAVE",
  },
  {
    title: "Why AI-Native Studios Are Replacing Traditional Agencies",
    date: "Jan 28, 2026",
    category: "Insight",
    href: "#",
    amount: "5 days",
    subtitle: "Average time to live",
    lead: "ETINCELLE",
  },
  {
    title: "From Manual to Automated: A Toronto Gym's Digital Transformation",
    date: "Dec 15, 2025",
    category: "Case Study",
    href: "#",
    amount: "+11%",
    subtitle: "Increase in leads",
    lead: "FOURPOINTS",
  },
];

export const processSteps = [
  {
    numeral: "i",
    title: "Audit",
    description:
      "We map your current tools, workflows, and time drains. One call, no fluff.",
  },
  {
    numeral: "ii",
    title: "Design",
    description:
      "We architect the system — dashboards, automations, AI tools — tailored to your operations.",
  },
  {
    numeral: "iii",
    title: "Build",
    description:
      "We develop and ship in days, not months. You see progress every step of the way.",
  },
  {
    numeral: "iv",
    title: "Test & Iterate",
    description:
      "We measure what matters and fine-tune until the system runs flawlessly.",
  },
  {
    numeral: "v",
    title: "Launch",
    description:
      "Your system goes live. You own everything — no retainer traps.",
  },
  {
    numeral: "vi",
    title: "Support",
    description:
      "Ongoing maintenance and improvements to keep your system ahead of the curve.",
  },
];

export const services = [
  {
    number: "01.",
    title: "Operations Dashboards",
    tags: "DATA, INSIGHTS, DECISIONS",
    description:
      "See everything that matters in one place. We build custom dashboards that pull data from your systems so you can make decisions in minutes, not hours.",
  },
  {
    number: "02.",
    title: "Workflow Automation",
    tags: "SCHEDULING, INVOICING, FOLLOW-UPS",
    description:
      "Eliminate the repetitive busywork. We connect your tools and automate the processes that eat up your team's time.",
  },
  {
    number: "03.",
    title: "AI-Powered Tools",
    tags: "CHATBOTS, CLASSIFICATION, ROUTING",
    description:
      "Embed AI into your daily operations — auto-categorize inquiries, generate supplier comparisons, or draft customer responses.",
  },
  {
    number: "04.",
    title: "Operations Redesign",
    tags: "WEBSITE, SYSTEMS, DIGITAL PRESENCE",
    description:
      "Redesign how your business runs digitally — from a refreshed website to connected booking, lead capture, and follow-up systems that work together.",
  },
];

export const pricingTiers = [
  {
    name: "Project",
    price: "$1,999",
    currency: "CAD",
    period: "one-time",
    description:
      "A complete system — designed, built, and delivered in days. You own everything.",
    features: [
      "Full audit of your current operations",
      "Custom dashboard, automation, or website",
      "Delivered in 5 business days",
      "100% ownership — code, designs, accounts",
      "No retainer, no lock-in",
    ],
    cta: "Get started",
    href: "https://cal.com/bryan-nakache-vse3wk",
  },
  {
    name: "Support",
    price: "$199",
    currency: "CAD",
    period: "/month",
    description:
      "Keep your system running and improving. Optional after any project delivery.",
    features: [
      "Ongoing maintenance & bug fixes",
      "Monthly performance check-ins",
      "Priority response within 24 hours",
      "System updates & improvements",
      "Cancel anytime — no contracts",
    ],
    cta: "Get in touch",
    href: "https://cal.com/bryan-nakache-vse3wk",
  },
];

export const works = [
  {
    title: "Berry Fertility",
    slug: "berry-fertility",
    category: "FINTECH",
    categoryColor: "#22C55E",
    description:
      "A modern fertility platform that supports patients and supercharges clinics.",
    longDescription:
      "Berry Fertility needed a system to streamline patient onboarding, automate appointment workflows, and give clinicians a clear view of their pipeline. We designed and shipped a custom operations dashboard that reduced administrative overhead by 60% and improved patient communication with automated status updates.",
    sketchType: "burst" as const,
    deliverables: ["Operations Dashboard", "Patient Workflow Automation", "Clinic Analytics"],
    timeline: "5 days",
    year: "2025",
  },
  {
    title: "North Trials",
    slug: "north-trials",
    category: "FINTECH",
    categoryColor: "#22C55E",
    description:
      "Cutting edge technology to connect cancer patients with clinical trials.",
    longDescription:
      "North Trials was built to solve a critical gap — helping cancer patients find and enroll in relevant clinical trials. We developed an AI-powered matching engine and a streamlined intake process that reduced time-to-enrollment by 70%. The system intelligently surfaces trials based on patient profiles and location.",
    sketchType: "head" as const,
    deliverables: ["AI Matching Engine", "Patient Intake System", "Trial Management Dashboard"],
    timeline: "8 days",
    year: "2025",
  },
  {
    title: "Relay",
    slug: "relay",
    category: "DATA HEALTH",
    categoryColor: "#EF4444",
    description:
      "A tool for teachers to create assessments customized to their students and curriculum.",
    longDescription:
      "Relay empowers educators to build assessments that adapt to their specific curriculum and student needs. We created an AI-assisted question generator and a grading automation pipeline that saves teachers an average of 4 hours per week on assessment creation and marking.",
    sketchType: "wave" as const,
    deliverables: ["AI Question Generator", "Grading Automation", "Curriculum Dashboard"],
    timeline: "6 days",
    year: "2025",
  },
  {
    title: "Ké",
    slug: "ke",
    category: "PERSONAL",
    categoryColor: "#3B82F6",
    description:
      "The accountability monster for people who are easily distracted.",
    longDescription:
      "Ké is a personal productivity tool designed for people who struggle with focus. The system uses behavioral nudges, smart scheduling, and progress tracking to keep users accountable. We built an adaptive notification engine that learns when users are most productive and intervenes when they drift.",
    sketchType: "spiral" as const,
    deliverables: ["Adaptive Notification Engine", "Progress Tracking", "Smart Scheduling"],
    timeline: "5 days",
    year: "2024",
  },
  {
    title: "gENSMAU",
    slug: "gensmau",
    category: "CONSUMER",
    categoryColor: "#A855F7",
    description: "A trivia game for all generations.",
    longDescription:
      "gENSMAU bridges generational gaps through trivia. We built a multiplayer game platform with AI-generated questions that span decades of pop culture, history, and science — ensuring every age group has questions they'll love and questions that challenge them.",
    sketchType: "geometric" as const,
    deliverables: ["Game Platform", "AI Question Engine", "Multiplayer System"],
    timeline: "7 days",
    year: "2024",
  },
  {
    title: "Bad Chef",
    slug: "bad-chef",
    category: "CONSUMER",
    categoryColor: "#A855F7",
    description: "A fast paced card game of delicious deception.",
    longDescription:
      "Bad Chef is a social deduction card game where players bluff their way to culinary glory. We designed the game mechanics, created the digital companion app for score tracking and rules reference, and built a print-ready asset pipeline for the physical card deck.",
    sketchType: "flow" as const,
    deliverables: ["Game Design", "Digital Companion App", "Print Asset Pipeline"],
    timeline: "10 days",
    year: "2024",
  },
  {
    title: "Rubric",
    slug: "rubric",
    category: "BRAND ASSETS",
    categoryColor: "#F97316",
    description: "Stealth product in the education space.",
    longDescription:
      "Rubric is a stealth-mode product reimagining how educational institutions evaluate student work. We can't share all the details yet, but the system involves AI-assisted evaluation, real-time collaboration between educators, and standardized rubric templates that adapt to different disciplines.",
    sketchType: "geometric" as const,
    deliverables: ["AI Evaluation System", "Collaboration Tools", "Rubric Templates"],
    timeline: "Ongoing",
    year: "2025",
  },
  {
    title: "Artefact Writer",
    slug: "artefact-writer",
    category: "PERSONAL",
    categoryColor: "#3B82F6",
    description:
      "A tool for editing your writing, like you edit a photo.",
    longDescription:
      "Artefact Writer treats written text like a visual medium — with layers, filters, and non-destructive editing. We built an AI writing assistant that helps users restructure, rephrase, and refine their prose through an intuitive visual interface inspired by photo editing workflows.",
    sketchType: "head" as const,
    deliverables: ["Visual Text Editor", "AI Writing Assistant", "Export Pipeline"],
    timeline: "6 days",
    year: "2025",
  },
];

export const teamMembers = [
  {
    name: "BRYAN NAKACHE",
    role: "Founder",
    initials: "BN",
    color: "#1a1a19",
  },
];

export const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Service businesses in Toronto — restaurants, photo studios, salons, gyms, retail shops, clinics. Anyone whose online presence isn't converting visitors into customers, or whose operations are eating up hours that should be spent on clients.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects go live within 5 business days. We move fast because we use AI-native tools and proven systems — no committees, no scope creep.",
  },
  {
    question: "Do you charge hourly or per project?",
    answer:
      "Per project with a fixed price. You know exactly what you're paying before we start. No surprise invoices, no retainer lock-ins.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "You own everything. The system runs whether we're involved or not. If you want ongoing support, we offer optional monthly plans.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Absolutely. We integrate with whatever you already use — Google Workspace, Notion, Airtable, Shopify, Square, and hundreds more via APIs and automation platforms.",
  },
];
