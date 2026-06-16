# Project Progress: U.BOSE Portfolio

This document serves as the source of truth for the U.BOSE boutique studio portfolio project. Use this to maintain design continuity across sessions.

## 1. Visual Identity & Brand Guidelines

### Typography
- **Headlines / Serif:** `Bodoni Moda` (Google Font)
  - *Styles used:* `font-light` (Hero), `font-black` (Logo), `italic` (Accent words).
- **Body / Sans / UI:** `Hanken Grotesk` (Google Font)
  - *Styles used:* `font-semibold` (Nav), `font-bold` (Labels), `font-normal` (Body text).

### Color Palette
- **Background:** `#F8F5F1` (Warm Cream / `--background`)
- **Primary Foreground:** `#1A1A1A` (Deep Charcoal / `--foreground`)
- **Accent Color:** `#325041` (Husky Lichen Green / `--accent`)
  - *Usage:* "Cognition" and "Scale" text, Top labels, Button hover states.
- **Secondary Text:** `#71717A` (Muted Gray)
  - *Usage:* Navigation links, Scroll indicator text.
- **Body Text:** `#52525B` (Soft Zinc Gray)
- **Utility Background:** `#E4D5B7` (Warm Parchment)
  - *Usage:* Tech Stack and Experience cards.
- **Gallery Tone:** `#D0C8B6` (Warm Dusty Canvas)
  - *Usage:* Visuals Card (Portrait).

## 2. Layout & UI Architecture

### Container & Alignment
- **Max Width:** `1400px`
- **Page Spacing:** Large horizontal padding (`px-12 md:px-32`) for a "framed" editorial look.
- **Alignment:** Logo, Top Label, and Headline all share a strict vertical left-aligned baseline.
- **Centering:** The entire page is centered both vertically and horizontally.
- **Visibility:** Hero height reduced to `85vh` to show a "peek" of the bento grid above the fold.
  - *Tagline:* `FULL-STACK · MACHINE LEARNING · QUANT RESEARCH`
  - *Headline:* `Code Meets Cognition. Systems Meet Scale.`
  - *Description:* `A portfolio of full-stack engineering, applied ML research, and quantitative finance — built with the same modular rigor as the systems behind it.`
- **Global UI:** Browser scrollbar is hidden while maintaining full scroll functionality.
- **Motion:** Integrated minimalist brand loader and choreographed sequential entry animations.

### Bento Grid Section
- **Architecture:** Multiple distinct cards using a consistent `rounded-xl` (12px) radius.
- **Projects Card (Carousel):**
  - **Design:** Dark charcoal background (`#1A1A1A`).
  - **Header:** "02 / PROJECTS" and **clickable GitHub button** linked to specific project repositories.
  - **Animation:** Auto-playing carousel cycling through 5 projects every 4 seconds.
  - **Content:** Project Planner MCP, Research Mind, FootBall Analysis, Splyt, and Portfolio Optimization.
- **About & Education (2x2):** Large accent-colored card (`#325041`) with background symbol. Auto-playing carousel toggling between personal bio and academic history. Optimized for stability and readability.
- **Domain Card (1x1):** "03 / DOMAIN", White card featuring Full-Stack, Machine Learning, and DevOps with custom geometric abstract icons.
- **Tech Stack Card (1x1):** "04 / TECH STACK", Warm parchment card (`#E4D5B7`) auto-carousel with 4 categories (Languages, Web, ML, Infrastructure) using official monochrome logos. **Updated interval: 2.5s**.
- **GitHub Card (2x1):** "05 / GITHUB", Live dashboard for user `NextMutant`.
  - **Features:** High-fidelity interactive heatmap (Warm Green), Language distribution bar (Percentage-based), and Recent Event feed (last 3 events).
- **Experience Card (1x1):** "06 / EXPERIENCE", Warm parchment card (`#E4D5B7`) with vertical "up-down" auto-carousel featuring detailed roles at WorldQuant, IIIT Nagpur, E-Cell, and GDSC.
- **Socials Card (1x1):** "07 / SOCIALS", Black card with functional links to LinkedIn, GitHub, Instagram, and Twitter.
- **Visuals Card (Portrait):** "08 / PORTRAIT", High-fidelity editorial portrait of Uttaran Bose. The image is kept in full color with a slightly reduced brightness/contrast to blend naturally with the Warm Dusty Canvas background, lifting slightly on hover. **Job Title updated to Software Engineer.**

### CTA Section
- **Style:** Compact, sharp-bordered card (`border-[3px]`) based on `footercard.png` with a "Let's build" lead-in.
- **Layout:** Integrated with the Visuals Card (08 / PORTRAIT).
- **Interaction:** "Start a Project" button links directly to `mailto:boseuttaran100@gmail.com`.

## 3. Work Completed
- [x] Initial Hero section layout and font pairing.
- [x] Corrected background to strictly Light Theme.
- [x] Refined brand identity from M.ARCHIVE to U.BOSE / UttaranBose.
- [x] Implemented Bento Grid sections with standardized `rounded-xl` corners.
- [x] Developed auto-playing Projects, About, Tech Stack, and Experience carousels.
- [x] Built live GitHub dashboard for `NextMutant` with interactive heatmap and language analytics.
- [x] Created functional Socials card with updated links.
- [x] Resolved hydration mismatches and optimized above-the-fold visibility.
- [x] Implemented smooth scrolling and header navigation links.
- [x] Integrated profile (1).svg as site favicon and editorial "Visuals Card".
- [x] Implemented minimalist "Drafting Crosshair" (+) cursor.
- [x] Implemented minimalist brand loader and high-fidelity entrance animations.
- [x] Implemented scroll-triggered reveal animations for all bento and CTA sections.
- [x] Verified code quality with successful production builds.
- [x] Cleaned up repository by deleting unused assets and optimizing .gitignore.
- [x] **Updated Job Title to Software Engineer.**
- [x] **Added 5 new high-impact projects with GitHub links and specific preview images.**
- [x] **Relinked project repositories to the GitHub icon for better UX.**
- [x] **Optimized Tech Stack carousel timing to 2.5s.**
- [x] **Updated Portfolio Optimization project image to port.png.**

## 4. Current Status & Next Steps
- **Currently Doing:** Final review and documentation update.
- **Next Steps:**
  - Launch site.
