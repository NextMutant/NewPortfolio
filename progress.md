# Project Progress: M.ARCHIVE Portfolio

This document serves as the source of truth for the M.ARCHIVE boutique studio portfolio project. Use this to maintain design continuity across sessions.

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
  - *Usage:* "Integrity" text, Top labels, Button hover states.
- **Secondary Text:** `#71717A` (Muted Gray)
  - *Usage:* Navigation links, Scroll indicator text.
- **Body Text:** `#52525B` (Soft Zinc Gray)
- **Utility Background:** `#E4D5B7` (Warm Parchment)
  - *Usage:* Tech Stack and Experience cards.

## 2. Layout & UI Architecture

### Container & Alignment
- **Max Width:** `1400px`
- **Page Spacing:** Large horizontal padding (`px-12 md:px-32`) for a "framed" editorial look.
- **Alignment:** Logo, Top Label, and Headline all share a strict vertical left-aligned baseline.
- **Centering:** The entire page is centered both vertically and horizontally.
- **Visibility:** Hero height reduced to `85vh` to show a "peek" of the bento grid above the fold.
- **Global UI:** Browser scrollbar is hidden while maintaining full scroll functionality.

### Bento Grid Section
- **Architecture:** Multiple distinct cards using a consistent `rounded-xl` (12px) radius.
- **Projects Card (Carousel):**
  - **Design:** Dark charcoal background (`#1A1A1A`).
  - **Header:** "02 / PROJECTS" and GitHub button overlaid on the image.
  - **Animation:** Auto-playing carousel cycling through 3 projects every 4 seconds.
- **About & Education (2x2):** Large accent-colored card (`#325041`) with background symbol. Auto-playing carousel toggling between personal bio and academic history.
- **Domain Card (1x1):** "03 / DOMAIN", White card featuring Full-Stack, Machine Learning, and DevOps with custom geometric abstract icons.
- **Tech Stack Card (1x1):** "04 / TECH STACK", Warm parchment card (`#E4D5B7`) auto-carousel with 4 categories (Languages, Web, ML, Infrastructure) using official monochrome logos.
- **GitHub Card (2x1):** "05 / GITHUB", Live dashboard for user `NextMutant`.
  - **Features:** High-fidelity interactive heatmap (Warm Green), Language distribution bar (Percentage-based), and Recent Event feed (last 3 events).
  - **Layout:** Top-aligned editorial dashboard with horizontal column split.
- **Experience Card (1x1):** "06 / EXPERIENCE", Warm parchment card (`#E4D5B7`) with vertical "up-down" auto-carousel featuring detailed roles at WorldQuant, IIIT Nagpur, E-Cell, and GDSC.
- **Socials Card (1x1):** "07 / SOCIALS", Black card with functional links to LinkedIn, GitHub, Instagram, and Twitter using inline monochrome SVGs.

### CTA Section
- **Style:** Compact, sharp-bordered card (`border-[3px]`) based on `footercard.png`.
- **Layout:** Two-column; "Let's build" and personal email (`boseuttaran100@gmail.com`) on left, group of message/arrow icons on right. Open source availability text.
- **Width:** Constrained to match the width of the "Visuals" card (50% width on desktop).

### Footer (Main)
- **Style:** Minimalist three-column footer based on `footer2.png`.
- **Layout:** Divider line restricted to the width of the content container.
- **Content:** Left (Copyright `2026 Uttaran Bose`), Center (Nav Links), Right (Location `Guwahati, Ind / Remote`).

## 3. Work Completed
- [x] Initial Hero section layout.
- [x] Font pairing and integration (Bodoni Moda & Hanken Grotesk).
- [x] Corrected background to strictly Light Theme.
- [x] Precise alignment of logo and typography.
- [x] Refined header scale and interaction states.
- [x] Adjusted page-wide spacing for premium framing.
- [x] Implemented Bento Grid sections with standardized `rounded-xl` corners.
- [x] Developed auto-playing Projects carousel with overlaid header and indicators.
- [x] Converted About card into an auto-playing bio/education carousel.
- [x] Refactored Strategy into a 3-part Domain card with custom abstract geometry.
- [x] Upgraded Tech Stack into a 4-part carousel featuring official monochrome logos (React, Python, TF, Docker, etc.) via Simple Icons CDN.
- [x] Implemented vertical "up-down" Experience carousel with 4 detailed quantitative roles.
- [x] Built live GitHub dashboard for `NextMutant` with interactive heatmap and language analytics.
- [x] Created functional Socials card with interactive inline SVGs for LinkedIn, GitHub, X, and Instagram.
- [x] Resolved hydration mismatches using mounted state gating.
- [x] Created bold CTA section with personalized email and open-source collaboration status.
- [x] Completed the detailed brand footer with localized details and updated 2026 copyright.
- [x] Hidden global scrollbars for a cleaner UI.
- [x] Optimized layout for above-the-fold visibility.
- [x] Verified code quality with successful lint and build.
- [x] Refined .gitignore for cleaner repository management.

## 4. Current Status & Next Steps
- **Currently Doing:** Project finalized with high-fidelity live data integrations and refined layouts.
- **Next Steps:**
  - Launch site or begin further content management integration.
