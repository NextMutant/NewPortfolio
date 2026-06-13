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
- **Capabilities (2x2):** Large accent-colored card (`#325041`) with background symbol.
- **Domain Card (1x1):** "03 / DOMAIN", White card with accent-colored icon/label.
- **Tech Stack Card (1x1):** "04 / TECH STACK", Warm parchment card (`#E4D5B7`) with charcoal text.
- **GitHub Card (2x1):** "05 / GITHUB", Horizontal white card.
- **Experience Card (1x1):** "06 / EXPERIENCE", Warm parchment card (`#E4D5B7`) with vertical carousel and charcoal text.
- **Socials Card (1x1):** "07 / SOCIALS", Black card with dynamic interface bars.

### CTA Section
- **Style:** Compact, sharp-bordered card (`border-2`) based on `footercard.png`.
- **Layout:** Two-column; "Let's build" and email on left, group of message/arrow icons on right.
- **Width:** Constrained to match the width of the "Visuals" card (50% width on desktop).

### Footer (Main)
- **Style:** Minimalist three-column footer based on `footer2.png`.
- **Layout:** Divider line restricted to the width of the content container.
- **Content:** Left (Copyright), Center (Nav Links), Right (Location).

## 3. Work Completed
- [x] Initial Hero section layout.
- [x] Font pairing and integration (Bodoni Moda & Hanken Grotesk).
- [x] Corrected background to strictly Light Theme.
- [x] Iterative color grading for the "Husky Green" accent.
- [x] Precise alignment of logo and typography.
- [x] Refined header scale and interaction states.
- [x] Adjusted page-wide spacing for premium framing.
- [x] Implemented Bento Grid sections with standardized `rounded-xl` corners.
- [x] Developed auto-playing Projects carousel with overlaid header and indicators.
- [x] Created compact, sharp-bordered CTA section.
- [x] Completed the detailed brand footer (Redesigned to `footer2.png` with container-aligned divider).
- [x] Hidden global scrollbars for a cleaner UI.
- [x] Optimized layout for above-the-fold visibility.
- [x] Verified code quality with successful lint and build.
- [x] Refined .gitignore for cleaner repository management.

## 4. Current Status & Next Steps
- **Currently Doing:** Project finalized and refined with high-fidelity interactions.
- **Next Steps:**
  - Launch site or begin further content management integration.
