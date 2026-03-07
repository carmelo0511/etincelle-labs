# Audio AI Landing Page - Design Reference

## Brand
Audio data research company (David AI style). Company name: "Soundwave".
Logo: Small waveform icon + "Soundwave" text.
Mission: Bring AI into the real world through voice, the most important interface to human interaction.

## Color Palette
- **Primary background**: Cream/off-white `#F5F3EE`
- **Secondary background**: Slightly darker cream `#EDE9E1`
- **Dark surfaces**: Navy `#1A1D2E`, lighter navy `#252840`
- **Text primary**: Near-black `#1A1A1A`
- **Text secondary**: Medium gray `#6B6B6B`
- **Text muted**: Light gray `#9B9B9B`
- **Text on dark**: Off-white `#F5F3EE`
- **Borders**: Light `#E5E2DB`, dark `#3A3D50`
- **Accent colors** (for visualizations): Blue `#4A7CFF`, Purple `#8B5CF6`, Green `#34D399`, Orange `#FB923C`, Pink `#EC4899`

## Typography
- **Sans-serif**: Inter — used for all body text, nav links, buttons, labels
- **Serif**: Playfair Display italic — used for accent/emphasis words (e.g., "meaningful" in hero, "the same rigor" in stats)
- **Headline sizes**: Hero `text-5xl md:text-6xl lg:text-7xl`, Section titles `text-3xl md:text-4xl lg:text-5xl`
- **Body**: `text-base` to `text-lg`
- **Labels**: `text-xs uppercase tracking-widest`

## Design Style
- Clean, minimal aesthetic
- Generous whitespace (`py-24` to `py-32` between sections)
- Grid-based layouts with `max-w-7xl` container
- Rounded elements (`rounded-full` buttons, `rounded-xl` cards)
- Subtle scroll-triggered fade-up animations (framer-motion, once)
- No heavy shadows — use `shadow-sm` to `shadow-md` sparingly

## Navbar (Left Sidebar)
- Fixed vertical sidebar on the left (~160px wide)
- Logo (waveform icon + "Soundwave") at top
- Nav links stacked vertically: Mission, Datasets, Careers, News, Contact
- **Active section indicator**: Small vertical bar (2-3px wide, ~20px tall) on the LEFT side of the currently active nav link. The active link text is darker/bolder. Other links are muted gray.
- The active indicator updates as the user scrolls through sections (scroll spy behavior)
- Cream background matching the page

## Section Labels
- Sections use a **numbered label format**: circled number + long dash + section name
- Example: "② —— Process", "③ —— Featured Datasets", "⑤ —— News"
- The circled number is in a thin circle outline, the dash is a long horizontal line, the label text follows

## Page Sections (Top to Bottom)
1. **Hero** — "AI is *meaningful* when you can naturally interact with it." + "Explore datasets" dark pill button
2. **Process** (②) — Centered icon (circled 2), "Process" label. Large centered text: "We develop audio datasets with *the same rigor* researchers bring to models." Below: spectrogram/waveform image with labeled points (a. and b.). Left side has numbered steps starting with "i. Hypothesize" with description.
3. **Featured Datasets** (③) — Section label "③ —— Featured Datasets". Large heading: "A dataset suite designed for speech-to-speech, multilingual, and voice interaction systems". Two large cards side by side:
   - **Converse** card: Icon + title, description about flagship English dataset, shows waveform audio visualizations (dark green/olive bars) at different positions
   - **Atlas** card: Globe icon + title, description about multilingual dataset spanning 15+ languages, shows a world map visualization
4. **News** (⑤) — Section label "⑤ —— News". Heading "Updates on our progress" + "View all" button (outline, rounded-full). Three blog cards in a row:
   - Each card: Image thumbnail (showing funding announcement graphics), title below, date + "News" category
   - Examples: "$50M Series B Led by Meritech", "$25M Series A Led by Alt Capital", "$5M Seed Round Led by First Round"
5. **Footer** — Dark navy/charcoal background. Large serif text "Interested in working with us?" on left. Right side has "Contact us" (outline button) and "See open roles" (filled dark button). Bottom row: copyright "© 2026 Soundwave Labs, Inc. All rights reserved." + "Terms of service" + "Privacy policy" links + social icons (LinkedIn, X)

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations)
- next/font/google (Inter + Playfair Display)

## Component Structure
- `src/components/ui/` — Button, SectionLabel, AnimateOnScroll
- `src/components/layout/` — Navbar, Footer
- `src/components/sections/` — HeroSection, ProcessSection, FeaturedDatasetsSection, NewsSection
- `src/lib/fonts.ts` — Font configuration
- `src/lib/constants.ts` — Static data (nav links, blog posts, datasets)
