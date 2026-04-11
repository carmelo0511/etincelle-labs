export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "AI Audit", href: "#ai-audit" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "/works" },
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
      "We map your current tools, workflows, and time drains. Available as a standalone $999 offer — or included when you start a build.",
  },
  {
    numeral: "ii",
    title: "Design",
    description:
      "We architect the system — AI agents, automations, and integrations — tailored to your operations.",
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
      "Ongoing optimization — your AI agents get smarter over time.",
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
    name: "AI Audit",
    price: "$999",
    period: "",
    subtitle: "Not sure where to start? This is it.",
    features: [
      "60-min process mapping call",
      "Written report ranking your biggest time and money wasters",
      "Prioritized automation roadmap with specific AI recommendations",
      "Credited toward your build if you move forward",
    ],
    popular: false,
    cta: "Book your audit",
    href: "#contact",
  },
  {
    name: "AI Agent",
    price: "from $500",
    period: "",
    subtitle: "One agent. One problem solved.",
    features: [
      "$500–$1,000 one-time setup depending on complexity",
      "$300–$500/month to keep it running and optimized",
      "Business-specific training and integrations",
      "Email support included",
    ],
    popular: true,
    cta: "Get started",
    href: "#contact",
  },
  {
    name: "Custom Project",
    price: "from $1,500",
    period: "",
    subtitle: "Something bigger? We build it.",
    features: [
      "AI agents, workflow automations, and internal tools",
      "Multi-step systems connecting your existing stack",
      "Full integrations with your CRM, POS, booking tools, and more",
      "Fixed price agreed upfront — no hourly surprises",
      "You own everything we build",
    ],
    popular: false,
    cta: "Let\u2019s talk",
    href: "#contact",
  },
];

export const works = [
  {
    title: "Miso Ramen Bar",
    slug: "miso-ramen-bar",
    category: "AI REVIEWS",
    categoryColor: "#22C55E",
    description:
      "AI review manager for a busy Toronto ramen spot — every Google and Yelp review handled automatically.",
    longDescription:
      "Miso Ramen Bar was getting 40+ reviews a month across Google and Yelp but had no time to respond. We built an AI review manager that monitors every platform in real-time, drafts personalized on-brand responses, and flags negative reviews for immediate attention. Response time dropped from 3 days to under 15 minutes — and their Google rating went from 4.2 to 4.6 in two months.",
    sketchType: "burst" as const,
    deliverables: ["AI Review Manager", "Multi-Platform Monitoring", "Reputation Dashboard"],
    timeline: "3 days",
    year: "2025",
  },
  {
    title: "Glow Studio",
    slug: "glow-studio",
    category: "INSTAGRAM AUTOMATION",
    categoryColor: "#EC4899",
    description:
      "ManyChat Instagram automation that turns DMs into booked appointments for a Queen West salon.",
    longDescription:
      "Glow Studio was spending hours replying to Instagram DMs and story mentions manually. We set up a ManyChat automation that auto-replies to story mentions with a personalized booking link, runs flash promo sequences for slow days, and captures lead info from DM conversations. Bookings from Instagram doubled in the first month — without the owner touching her phone.",
    sketchType: "flow" as const,
    deliverables: ["ManyChat DM Automation", "Story Mention Auto-Reply", "Promo Sequence Builder"],
    timeline: "4 days",
    year: "2025",
  },
  {
    title: "ClearView Dental",
    slug: "clearview-dental",
    category: "AI RECEPTIONIST",
    categoryColor: "#4A7CFF",
    description:
      "An AI receptionist that answers every call, books hygiene appointments, and handles insurance questions 24/7.",
    longDescription:
      "ClearView Dental's front desk was overwhelmed — missing calls during lunch, losing new patients to voicemail, and spending hours answering the same insurance questions. We deployed an AI receptionist trained on their services, insurance policies, and scheduling rules. It picks up every call on the first ring, books directly into their calendar, and forwards urgent cases to the dentist. Missed calls dropped to zero and new patient bookings increased 35%.",
    sketchType: "head" as const,
    deliverables: ["AI Phone Receptionist", "Calendar Integration", "Insurance FAQ Handler"],
    timeline: "5 days",
    year: "2025",
  },
  {
    title: "UrbanNest Realty",
    slug: "urbannest-realty",
    category: "WORKFLOW AUTOMATION",
    categoryColor: "#FB923C",
    description:
      "Lead capture chatbot and CRM automation for a Toronto real estate brokerage.",
    longDescription:
      "UrbanNest Realty's agents were losing leads to slow follow-ups and manual CRM entry. We built a website chatbot that qualifies buyers instantly (budget, timeline, neighbourhood preference), syncs every lead to GoHighLevel, and triggers personalized drip email sequences. The system also auto-assigns leads to the right agent by zone. Lead response time went from 6 hours to under 2 minutes.",
    sketchType: "wave" as const,
    deliverables: ["Lead Capture Chatbot", "GoHighLevel CRM Sync", "Automated Drip Sequences"],
    timeline: "5 days",
    year: "2025",
  },
  {
    title: "Iron Republic",
    slug: "iron-republic",
    category: "OPERATIONS DASHBOARD",
    categoryColor: "#8B5CF6",
    description:
      "Member dashboard and class booking automation for a Liberty Village gym.",
    longDescription:
      "Iron Republic was tracking everything in spreadsheets — class attendance, memberships, coach schedules. We built a custom operations dashboard that gives them real-time visibility into attendance trends, automates class booking and waitlists, and sends churn prediction alerts when members start dropping off. Monthly cancellations decreased 22% after implementing proactive re-engagement automations.",
    sketchType: "geometric" as const,
    deliverables: ["Operations Dashboard", "Class Booking Automation", "Churn Prediction Alerts"],
    timeline: "5 days",
    year: "2025",
  },
  {
    title: "Maple HVAC",
    slug: "maple-hvac",
    category: "AI BOOKING",
    categoryColor: "#22C55E",
    description:
      "AI booking assistant for a GTA home services company — dispatching techs and confirming jobs automatically.",
    longDescription:
      "Maple HVAC was losing service calls to voicemail and spending hours dispatching technicians manually. We built an AI booking assistant that handles inbound calls, checks technician availability by zone, books the right tech for the job type, and sends confirmations via SMS. Dispatch time dropped from 45 minutes to instant, and weekend call capture went from 30% to 95%.",
    sketchType: "target" as const,
    deliverables: ["AI Booking Assistant", "Zone-Based Tech Dispatch", "SMS Confirmations"],
    timeline: "4 days",
    year: "2025",
  },
  {
    title: "Paws & Play",
    slug: "paws-and-play",
    category: "LEAD CAPTURE",
    categoryColor: "#34D399",
    description:
      "Website chatbot that captures leads and follows up via SMS for a Leslieville dog daycare.",
    longDescription:
      "Paws & Play's website was getting traffic but visitors were leaving without signing up. We deployed an AI chatbot trained on their services, pricing, and availability. It engages visitors naturally, answers questions about daycare packages and vaccination requirements, captures contact info, and triggers an SMS follow-up sequence. Website-to-lead conversion jumped from 2% to 11% in the first month.",
    sketchType: "lightning" as const,
    deliverables: ["AI Website Chatbot", "Lead Capture Flow", "SMS Follow-Up Automation"],
    timeline: "3 days",
    year: "2025",
  },
  {
    title: "The Bridal Edit",
    slug: "the-bridal-edit",
    category: "AI REVIEWS + SOCIAL",
    categoryColor: "#A855F7",
    description:
      "AI review manager and Instagram DM automation for a Yorkville bridal boutique.",
    longDescription:
      "The Bridal Edit needed to protect their premium reputation and convert Instagram followers into appointments. We built a combined system — an AI review manager that responds to every Google review with personalized, elegant replies, plus a ManyChat Instagram automation that handles DM inquiries about designers, availability, and pricing, then books private appointments directly. Review response went from sporadic to same-day, and Instagram-sourced appointments tripled.",
    sketchType: "key" as const,
    deliverables: ["AI Review Manager", "Instagram DM Automation", "Appointment Booking Flow"],
    timeline: "5 days",
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
    question: "How do I get started if I\u2019m not sure what I need?",
    answer:
      "Start with our $999 AI Audit. In one 60-min call we map your entire operation, rank your biggest time and money wasters, and deliver a prioritized automation roadmap. If you move forward with a build, the $999 is credited toward your project.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Any business that's losing time to manual work, missed calls, or slow follow-ups. We've worked with restaurants, clinics, studios, home service companies, and more — but our AI agents adapt to any industry.",
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
      "Absolutely. We integrate with whatever you already use — Google Workspace, Notion, Airtable, Shopify, Square, Make.com, Zapier, GoHighLevel, and hundreds more via APIs and automation platforms.",
  },
  {
    question: "What's an AI agent?",
    answer:
      "An AI agent is a system that handles a specific job for your business automatically — like answering phone calls, responding to reviews, capturing leads on your website, or booking appointments. It runs 24/7, learns your business, and gets better over time.",
  },
  {
    question: "Can I start small and upgrade later?",
    answer:
      "Yes. Most clients start with a single AI agent solving their biggest pain point. Once they see results, they expand to a custom project to automate more of their operations.",
  },
];
