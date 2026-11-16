---
name: Helmut Spares
colors:
  surface: '#fdf9f0'
  surface-dim: '#dddad1'
  surface-bright: '#fdf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e6e2d9'
  on-surface: '#1c1c16'
  on-surface-variant: '#3e4949'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e7'
  outline: '#6e7979'
  outline-variant: '#bdc9c8'
  surface-tint: '#00696a'
  primary: '#005a5b'
  on-primary: '#ffffff'
  primary-container: '#0c7475'
  on-primary-container: '#a2f7f7'
  inverse-primary: '#80d4d5'
  secondary: '#635d5e'
  on-secondary: '#ffffff'
  secondary-container: '#e9e0e1'
  on-secondary-container: '#696364'
  tertiary: '#005d33'
  on-tertiary: '#ffffff'
  tertiary-container: '#267649'
  on-tertiary-container: '#a9fac1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9df1f1'
  primary-fixed-dim: '#80d4d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#e9e0e1'
  secondary-fixed-dim: '#cdc4c5'
  on-secondary-fixed: '#1e1b1c'
  on-secondary-fixed-variant: '#4b4546'
  tertiary-fixed: '#a4f4bc'
  tertiary-fixed-dim: '#88d7a1'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#00522c'
  background: '#fdf9f0'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d9'
typography:
  headline-xl:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Barlow Condensed
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Barlow Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Barlow Condensed
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies a **Clean Heritage Workshop Grid**—a pragmatic, tactile union between German industrial precision, classic workshop parts cataloging, and contemporary e-commerce efficiency. Designed for mechanics, classic car enthusiasts, restoration specialists, and daily vehicle owners, the atmosphere evokes the smell of workshop paper, machined cast iron, and oiled steel.

The system relies on structural clarity, crisp mechanical lines, deliberate vertical rhythms, and unadorned utility. It shuns fleeting SaaS gradients and artificial glossy treatments in favor of an authentic architectural ledger aesthetic: structural divider lines, stark typographic authority, and physical clarity that makes complex parts cataloging immediately legible.

## Colors

The palette establishes an industrial workshop register balanced by tactile, warm paper backdrops:

- **Primary Teal (`#0C7475`)**: The core brand anchor for primary actions, navigational highlights, active states, and structural accents. Interacts on hover at `#095859`. Text on primary is strictly `#FFFFFF`.
- **Charcoal (`#231F20`)**: Anchors high-utility surfaces such as the uppermost utility status bar, global site footer, and high-impact structural tags.
- **Warm Paper Canvas (`#F5F1E8`)**: The primary global background canvas, preventing harsh eye strain common in stark white screens while delivering a tactile catalog feel.
- **Card / Surface (`#FFFFFF`)**: Pure white elevated surfaces providing contrast against the warm paper background for parts cards, configuration drawers, and data sheets.
- **Borders (`#D8D1C2`)**: Crisp hairline frame lines defining data cells, card outlines, and catalog dividers.
- **Ink Typography (`#17181A`)**: Primary high-legibility body, heading, and price text.
- **Muted Text (`#59554E`)**: Subordinate metadata, part reference codes (OEM/SKU), specifications, and passive timestamps.
- **Functional Green (`#2E7D4F`)**: Reserved strictly for operational states such as stock availability and verified fitment badges.
- **WhatsApp Green (`#25D366`)**: External quick-order and live workshop advisory triggers; paired strictly with `#17181A` ink typography for high legibility.

## Typography

Typography establishes an industrial register with instant parts legibility:

- **Headlines & Technical Labels (Barlow Condensed)**: Rendered bold with condensed proportions and tight line heights, echoing vintage parts catalogs, stamped mechanical plates, and inventory ledgers. Titles use uppercase sparingly for category classification and technical tags, while main page headings maintain title or sentence casing for balance.
- **Body & Data Content (Inter)**: Set in clean, balanced sentence casing to guarantee effortless scanability across technical descriptions, fitment tables, and long-form specifications.
- **Numbers & SKUs**: Part numbers, pricing, and stock counts leverage tabular figures when displayed inside data tables or spec sheets for clean vertical alignment.

## Layout & Spacing

The layout model is governed by a rigorous 12-column workshop grid across desktop viewports, folding into 6 columns on tablet and 4 columns on mobile devices:

- **Canvas Framing**: The interface sits on a warm paper background (`#F5F1E8`), contained within bounded panels and structured borders rather than floating randomly on endless empty space.
- **Grid Density**: Content aligns to a regular 4px base rhythm. Dense data grids (such as compatibility matrices and spec sheets) feature compact horizontal spacing (`space-sm` to `space-md`), preserving vertical scanning efficiency for workshop users comparing multiple part numbers.
- **Structural Rhythm**: Section breaks are separated by `space-xl` with thin 1px `#D8D1C2` borders, enforcing an organized architectural blueprint structure.

## Elevation & Depth

Visual hierarchy is constructed primarily through **structural framing and low-contrast borders**, supplemented by soft ambient physical resting shadows:

- **Surface Layers**: The lowest layer is the `#F5F1E8` Warm Paper canvas. Cards, tables, and detail panels exist as raised `#FFFFFF` sheets framed by a crisp 1px solid border (`#D8D1C2`).
- **Subtle Physical Shadows**: Elevation is understated. Resting cards feature a warm, faint ambient drop shadow (`0 1px 3px rgba(35, 31, 32, 0.05), 0 1px 2px rgba(35, 31, 32, 0.03)`).
- **Hovered & Active Elevation**: Interactive cards lift slightly on hover (`0 4px 12px rgba(35, 31, 32, 0.08)`), maintaining the 1px `#D8D1C2` border or transitioning the border to primary teal (`#0C7475`).
- **Utility Layers**: Overlays, dropdown menus, and quick-view parts trays use a clean `#FFFFFF` surface with a deeper technical drop shadow (`0 8px 24px rgba(35, 31, 32, 0.12)`) and a defined 1px `#D8D1C2` outline.

## Shapes

The design system strictly adheres to an industrial **4px corner radius** (`roundedness: 1`), embodying machined parts, stamped steel labels, and traditional index cards:

- **Containers & Cards**: Finished with an exact 4px radius (`rounded-sm`), preventing floaty or overly playful shapes and reinforcing architectural order.
- **Buttons, Form Inputs & Chips**: Harmonized at the 4px boundary. Pill shapes and circular components are explicitly avoided, except for compact count badges and icon buttons which maintain a subtle 4px squared chassis.

## Components

### Buttons
- **Primary**: Solid teal (`#0C7475`), `#FFFFFF` text, 4px border radius. Hover transitions to `#095859`. Focus ring is 2px `#0C7475` offset by 2px `#F5F1E8`.
- **Secondary / Utility**: Solid Charcoal (`#231F20`), `#FFFFFF` text. Used for system-level actions and account tools.
- **Outline / Workshop**: White background with 1px `#D8D1C2` border and `#17181A` text. Hover applies `#F5F1E8` fill and `#0C7475` text.
- **WhatsApp Action**: Background `#25D366`, typography strictly dark ink `#17181A` (Barlow Condensed bold, sentence or uppercase depending on context), providing high legibility for direct workshop communication.

### Cards & Parts Tiles
- Backed with `#FFFFFF`, bounded by a 1px `#D8D1C2` border and 4px radius. 
- Technical metadata (OEM Part No., Vehicle Chassis Code) is rendered in Barlow Condensed label sizing with `#59554E` ink.
- Prices use bold Barlow Condensed in `#17181A` or `#0C7475`.

### Chips & Badges
- **Stock Status**: `#2E7D4F` text on a light tinted green background with a 1px border.
- **Filter Chips**: `#FFFFFF` background with 1px `#D8D1C2` border and 4px corners; when active, transitions to `#0C7475` with `#FFFFFF` text.

### Form Inputs & Selectors
- Background `#FFFFFF`, 1px `#D8D1C2` border, 4px radius, padded with `space-sm` vertically and `space-md` horizontally.
- On focus, border transitions directly to `#0C7475` with zero color drift. Placeholder text is `#59554E`.

### Data Lists & Fitment Tables
- Alternating row borders using 1px solid `#D8D1C2`.
- Headers rendered on `#F5F1E8` with Barlow Condensed bold labels and muted text `#59554E`.