# Helmut Spares Website Redesign Audit: Stitch Redesign vs. Original Site

**Audit Target:** Stitch Redesign Prototype (`stitch_helmut_spares_e_commerce_store/`)  
**Reference Baseline:** Original Website Mirror & Content Audit (`audit/content.md`, `helmutspares.co.za`)  
**Date of Audit:** November 2026  
**Auditor:** Antigravity Engineering (Read-Only Pair Programmer)  
**File Output:** `audit/design-audit.md` (written adjacent to `audit/content.md`)

---

## Table of Contents
1. [Executive Summary: Top 10 Discrepancies](#executive-summary-top-10-discrepancies)
2. [1. Screen Inventory](#1-screen-inventory)
3. [2. Page Parity with the Original Site](#2-page-parity-with-the-original-site)
   - [2.1 Original Page Mapping](#21-original-page-mapping)
   - [2.2 Extra Screens & Business Verdicts](#22-extra-screens--business-verdicts)
   - [2.3 Navigation and Footer Parity](#23-navigation-and-footer-parity)
4. [3. Colour Audit & Proposed Reconciled Palette](#3-colour-audit--proposed-reconciled-palette)
   - [3.1 Redesign Colour Usage Inventory](#31-redesign-colour-usage-inventory)
   - [3.2 Original vs. Redesign Colour Departure](#32-original-vs-redesign-colour-departure)
   - [3.3 Proposed Reconciled Brand Palette](#33-proposed-reconciled-brand-palette)
   - [3.4 WCAG 2.1 AA Contrast Calculations](#34-wcag-21-aa-contrast-calculations)
5. [4. Typography Analysis](#4-typography-analysis)
6. [5. Content Fidelity Against content.md](#5-content-fidelity-against-contentmd)
   - [5.1 Business Identity, Address, and Contacts](#51-business-identity-address-and-contacts)
   - [5.2 Trading Hours Discrepancy](#52-trading-hours-discrepancy)
   - [5.3 Product Names, SKUs, and Prices](#53-product-names-skus-and-prices)
   - [5.4 Unsubstantiated & Invented Marketing Claims](#54-unsubstantiated--invented-marketing-claims)
   - [5.5 Social Media Links](#55-social-media-links)
   - [5.6 Residual Template Artifacts & Placeholder Data](#56-residual-template-artifacts--placeholder-data)
7. [6. Functional Parity & Form Analysis](#6-functional-parity--form-analysis)
   - [6.1 Forms Comparison](#61-forms-comparison)
   - [6.2 E-Commerce & Interactive Feature Evaluation](#62-e-commerce--interactive-feature-evaluation)
   - [6.3 Technical Feasibility & Data Dependencies](#63-technical-feasibility--data-dependencies)
8. [7. Consistency Across Screens](#7-consistency-across-screens)
9. [8. Accessibility and SEO Readiness](#8-accessibility-and-seo-readiness)
   - [8.1 Heading Hierarchy (H1–H4)](#81-heading-hierarchy-h1h4)
   - [8.2 Form Label Association](#82-form-label-association)
   - [8.3 Image Accessibility (Alt Text)](#83-image-accessibility-alt-text)
   - [8.4 Page Titles & Meta Descriptions](#84-page-titles--meta-descriptions)
10. [9. Images and Asset Inventory](#9-images-and-asset-inventory)
    - [9.1 Redesign Image Mapping to Original Assets](#91-redesign-image-mapping-to-original-assets)
    - [9.2 Brand Logo & Favicon Strategy](#92-brand-logo--favicon-strategy)
11. [10. Missing States and Edge Cases](#10-missing-states-and-edge-cases)
12. [11. Handoff Readiness for the Build](#11-handoff-readiness-for-the-build)
    - [11.1 Reconciled Design Tokens (CSS Custom Properties)](#111-reconciled-design-tokens-css-custom-properties)
    - [11.2 Reusable Component Inventory](#112-reusable-component-inventory)
    - [11.3 301 URL Redirection & Routing Map](#113-301-url-redirection--routing-map)
13. [12. Additional Risks, Observations & Recommendations](#12-additional-risks-observations--recommendations)

---

## Executive Summary: Top 10 Discrepancies

The following table summarizes the ten most critical discrepancies identified between the Stitch redesign export (`stitch_helmut_spares_e_commerce_store/`) and the original production baseline detailed in `audit/content.md`. Items are ranked by severity (**HIGH**, **MEDIUM**, **LOW**).

| # | Severity | Screen / Component | Element / Observation | One-Line Fix |
|---|---|---|---|---|
| **1** | **HIGH** | Global Navigation & Information Architecture | Essential core pages missing: `About Us`, `Contact Us`, `Beetle Price List`, and `Cart/Checkout` have no screen files. | Scaffold dedicated screens or routes for About Us, Contact Us, Price List, and Cart/Checkout before starting build. |
| **2** | **HIGH** | Global Header & CTA Buttons | Hardcoded WhatsApp link `https://wa.me/27164213559` uses the landline number `016 421 3559`. | Replace landline WhatsApp link with a placeholder or prompt the owner for a confirmed WhatsApp Business mobile number. |
| **3** | **HIGH** | Product Detail Desktop (`product_detail_desktop/code.html`) | Cross-sell bundle invents 4 nonexistent parts: Bumper Bracket Kit (R285), Over-Riders (R450), Bolt Set (R120), Grommets (R95). | Remove invented cross-sell products from the template or confirm catalog additions and live wholesale pricing with the owners. |
| **4** | **HIGH** | Global Palette (`DESIGN.md` & `tailwind.config`) | Complete abandonment of original brand teal (`#11A1A2`/`#16CFD0`) in favor of burnt orange (`#A73400`/`#D9531E`) and petrol green. | Adopt the reconciled palette restoring deep brand teal (`#0C7475`) as primary interactive accent to preserve brand recognition. |
| **5** | **HIGH** | All Redesign Screens (`code.html`) | `<title>` tags and `<meta name="description">` tags are completely empty or omitted across all 4 exported screens. | Add unique, SEO-optimized `<title>` and `<meta name="description">` tags to every HTML document template. |
| **6** | **MEDIUM** | Header Top Bar vs. Footer | Header states "Trading Hours: Mon-Fri 9-5 · Sat 9-1", omitting Friday's mandatory 12:00–14:00 closure listed in footer and `content.md`. | Correct header hours to "Mon-Thu 9-5, Fri 9-12 & 14-17, Sat 9-1" or "Mon-Fri 9-5 (Fri closed 12-2)". |
| **7** | **MEDIUM** | Shop Beetle Parts (`shop_beetle_parts_desktop/code.html`) | Faceted sidebar filters (by vehicle model, engine cc, year range) assume structured metadata that does not exist in the 69-product database. | Implement faceted filters only if the client commits to tagging products with year/engine data; otherwise fall back to category tabs. |
| **8** | **MEDIUM** | Home & Request a Part Forms | Forms display invented dummy data: `johan@workshop.co.za`, `082 123 4567`, and promise a non-existent "Official PDF Price List". | Remove dummy data placeholders, change "PDF link" copy to "Receive parts catalogue via email", and align inputs with real business workflows. |
| **9** | **MEDIUM** | Global Accessibility (All Screens) | Form labels lack `for` attributes matching `<input id="...">`, and muted text `#87827A` fails WCAG AA (3.38:1 on `#F5F1E8`). | Connect all `<label for="id">` tags to input IDs and darken muted text token to `#59554E` (4.8:1 contrast). |
| **10** | **LOW** | Global Footer & Social Presence | Redesign drops Instagram (`@helmutspares`) and Twitter/X links completely; header active indicator incorrectly highlights "Shop" on Home page. | Restore verified social links in the footer and fix the active navigation class so `aria-current="page"` targets the current route. |

---

## 1. Screen Inventory

The Stitch export package is located in `stitch_helmut_spares_e_commerce_store/`. An inspection of the workspace confirms that **only desktop screens were designed and exported**. No tablet or mobile breakpoint screens (`_mobile`, `_tablet`, or mobile responsive HTML files) are present.

| Screen Directory | Filename | Page Purpose / Description | Desktop Version | Mobile Version | Associated Design Tokens File |
|---|---|---|:---:|:---:|---|
| `helmut_spares_home_desktop/` | `code.html`, `screen.png` | Homepage featuring hero banner, vehicle fitment selector, category tiles, featured spares cards, price list signup section, and store depot locator. | **YES** | **NO** | `heritage_workshop_precision_spares/DESIGN.md` |
| `helmut_spares_shop_beetle_parts_desktop/` | `code.html`, `screen.png` | Catalog / Shop page featuring faceted sidebar filtering (model, engine, year, price), active filter chips, sort dropdown, and a 12-item product grid. | **YES** | **NO** | `heritage_workshop_precision_spares/DESIGN.md` |
| `helmut_spares_product_detail_desktop/` | `code.html`, `screen.png` | Product Detail page featuring image gallery, pricing, stock badge, fitment data tabs, delivery guarantees, and a multi-part cross-sell bundle selector. | **YES** | **NO** | `heritage_workshop_precision_spares/DESIGN.md` |
| `helmut_spares_request_a_part_desktop/` | `code.html`, `screen.png` | Dedicated Part Request page featuring vehicle platform selector, part description input, file upload for broken component photos, and counter visit hours. | **YES** | **NO** | `heritage_workshop_precision_spares/DESIGN.md` |

> [!WARNING]
> **Mobile Screens Completely Missing:** Over 60% of South African e-commerce and local parts sourcing traffic occurs on mobile devices. The absence of mobile breakpoint screens (`< 768px`) means mobile navigation, mobile filter drawers, product gallery carousels, and tap targets must be specified and reviewed prior to development.

---

## 2. Page Parity with the Original Site

### 2.1 Original Page Mapping

The original website (`www.helmutspares.co.za`) consists of **7 unique primary functional pages** and 69 product detail pages (catalog categories were empty or redundant VirtueMart aliases).

| Original Page (`content.md`) | Original URL Path | Redesign Screen Found? | Redesign Screen Name / Status | Parity Notes |
|---|---|:---:|---|---|
| **Home** | `/` (`index.html`) | **YES** | `helmut_spares_home_desktop` | **Complete.** Replaces 1980s slider with modern workshop hero, parts grid, and fitment finder. |
| **About Us** | `/about-helmut-spares` | **NO** | *MISSING* | **Missing.** Original page had company history (est. 1975), family business background, and workshop ethos. In the redesign, About Us is reduced to a 3-sentence blurb in the homepage footer. |
| **Beetle Price List** | `/beetle-price-list` | **INCOMPLETE** | Folded into `helmut_spares_home_desktop` | **Incomplete.** The original standalone page with customer signup form is omitted as a separate page. It is condensed into a CTA section on the homepage. |
| **Shop Online (Catalog)** | `/buy-vw-beetle-spares-parts-online` | **YES** | `helmut_spares_shop_beetle_parts_desktop` | **Incomplete Catalog Depth.** Screen exists and functions as a catalog, but displays only 12 of the 69 active products in `content.md`. |
| **Product Detail** | `/buy-vw-beetle-spares-parts-online/[slug]-detail` (69 pages) | **YES** | `helmut_spares_product_detail_desktop` | **Complete Template.** Displays `VW Beetle Chrome Rear Bumper` (R2,499). Structure serves as the template for all 69 products. |
| **Contact Us** | `/contact-helmut-spares` | **NO** | *MISSING* (Partially displaced by Request a Part) | **Missing.** Original page contained phone numbers, trading hours, Google Map iframe, and general enquiry form. Redesign has no dedicated Contact screen. |
| **Cart / Checkout** | `/index.php?option=com_virtuemart&view=cart` | **NO** | *MISSING* | **Critical Gap.** No cart page, drawer, or checkout flow was designed. The header shows only an unclickable `shopping_cart 2` badge. |

### 2.2 Extra Screens & Business Verdicts

The redesign introduces **one new standalone screen**:

#### Screen: `helmut_spares_request_a_part_desktop` (`code.html`)
- **What it is:** A specialized multi-field form allowing customers to select their vehicle platform (Beetle, Buggy, Kombi, Golf Mk1, etc.), enter model year and engine displacement, describe hard-to-find parts, upload a photo of a broken part or chassis plate, and select a preferred response channel (WhatsApp, phone, or email).
- **Parity Status:** Extra page with no direct equivalent on the original site (original only had a generic 5-field "Send Us An Enquiry" form).
- **Verdict:** **ESSENTIAL (Retain & Integrate)**
  - **Business Case:** Helmut Spares stocks over 15,000 parts in their physical warehouse at 19 Rhodes Avenue, but only 69 parts are digitized in the online catalog. In the air-cooled VW restoration industry, customers frequently require uncatalogued or rare components (e.g., German NOS distributor drives, specific year-model pushrod tubes, Weber linkage arms). The photo upload feature solves a major workshop bottleneck: counter staff receiving phone descriptions of unknown parts.
  - **Implementation Recommendation:** Do **not** discard this screen. However, rather than having *both* an empty Contact page and a Request a Part page competing in the top navigation, merge general contact details (map, phone lines, operating hours) into a unified **"Contact & Part Sourcing"** hub, or maintain `Request a Part` as a prominent high-converting utility page.

### 2.3 Navigation and Footer Parity

#### Top Navigation Menu
- **Original (`content.md` Section 2):**
  1. `Home`
  2. `About Us`
  3. `Beetle Price List`
  4. `Shop Online`
  5. `Contact Us`
- **Redesign (`helmut_spares_*_desktop` Header):**
  1. `[Logo]` (Acts as Home link)
  2. `Shop` *(Renamed from "Shop Online")*
  3. `Request a Part` *(NEW navigation item)*
  4. `Price List` *(Renamed from "Beetle Price List")*
  5. `About` *(Renamed from "About Us")*
  6. `Contact` *(Renamed from "Contact Us")*
  7. `[Cart Badge: 2 items]`
- **Discrepancy Analysis:**
  - `Home` text link is removed; users must click the logo.
  - `Request a Part` is inserted into prime navigation real estate.
  - Links for `Price List`, `About`, and `Contact` all point to dummy anchor `#` targets because corresponding standalone screens were not designed.
  - **Defect in Active Indicator:** On `helmut_spares_home_desktop/code.html`, the navigation item marked with `border-primary` and `aria-current="page"` is **`Shop`**, not Home!

#### Footer Navigation & Content
- **Original (`content.md` Section 2 & 4):**
  - Repeated main navigation links: Home, About Us, Beetle Price List, Shop Online, Contact Us.
  - Sub-footer designer attribution: *"Proudly Designed by Bunnypants Graphic & Web Design Studio"*.
- **Redesign (`helmut_spares_*_desktop` Footer):**
  - Completely drops the original page links.
  - Replaces them with **Category Quick Links**: `Rubbers & Window Seals`, `Chrome & Body Trim`, `Brake Drums, Discs & Kits`, `Engine Components & Mahle Kits`, `Suspension & Steering`, and `Official PDF Price List`.
  - Sub-footer credit: Changed to *"© 2024 Helmut Spares. All Rights Reserved. Est. 1975 Vereeniging. Proudly Serving South African VW Enthusiasts"*. Bunnypants attribution is removed.

---

## 3. Colour Audit & Proposed Reconciled Palette

### 3.1 Redesign Colour Usage Inventory

An automated scan of all 4 Stitch redesign HTML files and `DESIGN.md` identified **46 unique hex color values** declared across inline styles, Tailwind configuration objects, and arbitrary utility classes.

| Hex Code | Redesign Token Name | Usage Location | Total Count Across Screens |
|---|---|---|:---:|
| `#FFFFFF` | `surface-pure` / `on-primary` | Product card surfaces, button text, input backgrounds, modal surfaces | 24 |
| `#FAF9FB` | `surface` / `background` | Primary page canvas background (declared in Tailwind body default) | 12 |
| `#1B1C1E` | `on-surface` / `on-background` | High-contrast heading typography, icon glyphs | 8 |
| `#E3E2E4` | `surface-variant` | Section divider hairlines, secondary chip backgrounds | 8 |
| `#BEECE2` | `secondary-container` | Informational pill fills, fitment alert badges | 8 |
| `#FFB59C` | `inverse-primary` | Focus rings, accent borders on interactive tiles | 8 |
| `#17181A` | `text-primary` | Primary body and heading text across cards and data tables | 4 |
| `#5C5852` | `text-secondary` | Secondary product attributes, engine fitment tags | 4 |
| `#87827A` | `text-muted` | Part SKUs, metadata labels, copyright text | 4 |
| `#D8D1C2` | `border-subtle` | 1px mechanical joinery borders on cards, filters, and inputs | 4 |
| `#F5F1E8` | `paper-bg` | Warm newsprint / workshop canvas background | 4 |
| `#FAF7F2` | `surface-card` | Product listing card backgrounds, filter sidebar background | 4 |
| `#A73400` | `primary` (Tailwind Config) | Primary CTA buttons, price tags, active tab underlines | 4 |
| `#D9531E` | Primary Accent (`DESIGN.md`) | Specified in design documentation as the primary burnt orange CTA | Doc |
| `#3C665E` | `secondary` (Tailwind Config) | Utility strip background, technical spec header backgrounds | 4 |
| `#1F4A43` | Secondary Accent (`DESIGN.md`) | Specified in design documentation as petrol green utility bar | Doc |
| `#15693D` | `tertiary` (Tailwind Config) | Stock status dot indicators, verified badge text | 4 |
| `#2E7D4F` | Tertiary Success (`DESIGN.md`) | Specified in design documentation as deep forest green | 3 |
| `#25D366` | `whatsapp-green` | WhatsApp chat buttons and text highlights | 4 |
| `#BA1A1A` | `error` | Form error outlines, required asterisk indicators | 4 |
| `#303032` | `inverse-surface` | Footer background surface container | 4 |

### 3.2 Original vs. Redesign Colour Departure

- **Original Palette (`content.md` Section 7):**
  - **Teal Accent (`#11A1A2`):** 123 declarations in original CSS. Used for all primary buttons, interactive links, active tabs, and branding highlights.
  - **Teal Hover (`#16CFD0`):** 25 declarations in original CSS.
  - **Charcoal Black (`#231F20`):** Full-width footer section background.
  - **Dark Neutral Grey (`#313131`):** Main navigation menu links.
  - **Muted Grey (`#787878`):** Secondary metadata and subtext.
  - **Pure White (`#FFFFFF`) & Light Greys (`#F5F5F5`, `#DEDEDE`):** Backgrounds and table borders.
  - *(Note: Residual coffee browns `#411B01` and `#713101` were template leftovers from Aura Bean Roastery and are ignored).*
- **Degree of Departure:** **MAJOR DEPARTURE**.
  - The Stitch redesign completely strips out the signature teal (`#11A1A2`) and teal hover (`#16CFD0`). Not a single instance of `#11A1A2` appears in any redesign screen or design token file.
  - The redesign substitutes an industrial motorsport palette: Burnt Orange (`#A73400` / `#D9531E`) and Petrol Green (`#3C665E` / `#1F4A43`).
  - While this creates an attractive vintage workshop aesthetic, it breaks 10+ years of digital brand recognition for customers accustomed to Helmut Spares' teal branding.

### 3.3 Proposed Reconciled Brand Palette

To maintain recognizable continuity with Helmut Spares' original brand identity while retaining the sophisticated, warm heritage workshop atmosphere of the Stitch layout, we propose a **reconciled palette**. 

This palette re-establishes **Deep Heritage Teal** as the primary interactive and brand accent, uses a deeper teal hover, grounds the layout in the original **Charcoal Footer**, and uses the redesign's warm paper canvas and mechanical borders.

| Role | Proposed Reconciled Token | Hex Value | Rationale & Continuity Source |
|---|---|:---:|---|
| **Primary Accent** | `--color-primary` | **`#0C7475`** | **Reconciled Teal:** Deepens original `#11A1A2` slightly so that white button text achieves a crisp **5.57:1** WCAG AA pass (original failed at 3.16:1). Preserves brand recognition. |
| **Primary Hover** | `--color-primary-hover` | **`#095859`** | Provides a rich, darkening interactive state for buttons and links. |
| **Secondary Accent** | `--color-secondary` | **`#1F4A43`** | Retains the redesign's petrol green for technical utility strips, vehicle fitment bars, and spec tables. Harmonizes naturally with teal. |
| **Dark / Footer Surface** | `--color-footer-bg` | **`#231F20`** | **Original Charcoal:** Restores Helmut's original dark footer background (`#section-id-1521448645`), grounding the page. |
| **Primary Text** | `--color-text-primary` | **`#17181A`** | Dense technical black from redesign. Exceptional readability across all surfaces. |
| **Muted Text** | `--color-text-muted` | **`#59554E`** | **Adjusted from `#87827A`:** Darkened slightly to guarantee a compliant **4.80:1** contrast ratio on warm paper background. |
| **Canvas Background** | `--color-bg-canvas` | **`#F5F1E8`** | Redesign warm workshop paper; eliminates sterile glare and complements vintage VW aesthetic. |
| **Card / Container Surface**| `--color-surface-card` | **`#FFFFFF`** | Crisp pure white tiles for product photography and checkout forms. |
| **Subtle Mechanical Border**| `--color-border-subtle` | **`#D8D1C2`** | 1px precision outline from redesign for industrial parts-bin feel. |
| **Success / In-Stock** | `--color-success` | **`#2E7D4F`** | Deep forest green for stock verification badges and confirmed fitment indicators. |
| **Error / Required** | `--color-error` | **`#BA1A1A`** | High-visibility warning red for missing form fields and out-of-stock notices. |
| **WhatsApp Action** | `--color-whatsapp` | **`#25D366`** | Official WhatsApp green; paired strictly with dark text `#17181A` for legibility. |

### 3.4 WCAG 2.1 AA Contrast Calculations

Every key text/background and button combination in the original, redesign, and proposed reconciled palettes was tested for WCAG 2.1 Level AA compliance (minimum **4.5:1** for normal text under 18pt/24px, **3.0:1** for large text ≥18pt or bold ≥14pt).

```
========================================================================================================
Palette Combination Tested                      Color Codes          Contrast Ratio  AA Normal  AA Large
========================================================================================================
ORIGINAL PALETTE:
  Original Teal on White (Text link)             #11A1A2 on #FFFFFF      3.16:1        FAIL       PASS
  White on Original Teal (Primary Button)        #FFFFFF on #11A1A2      3.16:1        FAIL       PASS
  Original Teal Hover on White                   #16CFD0 on #FFFFFF      1.93:1        FAIL       FAIL
  Original Menu Grey on White                    #313131 on #FFFFFF     13.01:1        PASS       PASS
  Original Muted Grey on White                   #787878 on #FFFFFF      4.42:1        FAIL       PASS
  White on Original Charcoal Footer              #FFFFFF on #231F20     16.30:1        PASS       PASS

REDESIGN PALETTE:
  Burnt Orange (Tailwind Config) on White        #A73400 on #FFFFFF      6.70:1        PASS       PASS
  White on Burnt Orange (Tailwind Config Button) #FFFFFF on #A73400      6.70:1        PASS       PASS
  Burnt Orange (DESIGN.md) on White              #D9531E on #FFFFFF      4.03:1        FAIL       PASS
  White on Burnt Orange (DESIGN.md Button)       #FFFFFF on #D9531E      4.03:1        FAIL       PASS
  Text Primary on Warm Paper Canvas              #17181A on #F5F1E8     15.76:1        PASS       PASS
  Text Secondary on Warm Paper Canvas            #5C5852 on #F5F1E8      6.27:1        PASS       PASS
  Text Muted on Warm Paper Canvas                #87827A on #F5F1E8      3.38:1        FAIL       PASS
  Text Muted on Pure White Surface               #87827A on #FFFFFF      3.82:1        FAIL       PASS
  White Text on WhatsApp Green Pill              #FFFFFF on #25D366      1.98:1        FAIL       FAIL
  Dark Text on WhatsApp Green Pill               #17181A on #25D366      8.96:1        PASS       PASS

PROPOSED RECONCILED PALETTE:
  Reconciled Deep Teal on White                  #0C7475 on #FFFFFF      5.57:1        PASS       PASS
  White on Reconciled Deep Teal (Button)         #FFFFFF on #0C7475      5.57:1        PASS       PASS
  Reconciled Deep Teal on Warm Paper Canvas      #0C7475 on #F5F1E8      4.91:1        PASS       PASS
  Dark Text on Warm Paper Canvas                 #17181A on #F5F1E8     15.76:1        PASS       PASS
  Adjusted Muted Text on Warm Paper Canvas       #59554E on #F5F1E8      4.80:1        PASS       PASS
  Adjusted Muted Text on Pure White Surface      #59554E on #FFFFFF      5.45:1        PASS       PASS
  White Text on Reconciled Charcoal Footer       #FFFFFF on #231F20     16.30:1        PASS       PASS
  Dark Text on WhatsApp Green                    #17181A on #25D366      8.96:1        PASS       PASS
========================================================================================================
```

> [!CAUTION]
> **Accessibility Defects Flagged in Redesign:**
> 1. `text-muted` (`#87827A`): Fails AA normal contrast on both paper (`3.38:1`) and white (`3.82:1`). In the redesign, this colour is applied to crucial part numbers, SKUs, and vehicle fitment years.
> 2. `whatsapp-green` (`#25D366`): In multiple instances (e.g. `helmut_spares_home_desktop/code.html` top bar and quick help button), white text `text-surface-pure` is layered over `bg-whatsapp-green`. The contrast is **1.98:1**, creating an illegible element for visually impaired users. It must use dark text `#17181A` (**8.96:1**).

---

## 4. Typography Analysis

### 4.1 Fonts in Use
- **Original Site (`content.md` Section 7):**
  - **Audiowide** (Google Font, regular weight 400).
  - Applied globally to `body`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and menu links.
  - Evaluation: Audiowide is an exaggerated 1980s techno/synthwave display typeface. Using it for paragraphs, product descriptions, and technical specifications created severe eye fatigue and illegibility.
- **Redesign (`DESIGN.md` & HTML `<head>`):**
  - **Headings, Badges & Labels:** `Barlow Condensed` (Google Font, weights 400, 600, 700, 800).
  - **Body Text & Technical Data:** `Inter` (Google Font, weights 400, 500, 600, 700).
  - **Icon Typographic System:** `Material Symbols Outlined` (Google Fonts).

### 4.2 Consistency Across Screens
All 4 redesign HTML screens import identical Google Font stylesheet links in their `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
```
No screen deviates from this font stack.

### 4.3 Legibility & Ergonomics Evaluation
1. **Body Copy Ergonomics:** Shifting body text, tables, and product copy to `Inter` (16px base, 1.6 line-height) is an enormous improvement over the original site. Reading comfort, parts comparison, and tabular scanning are modern and functional.
2. **Industrial Headings:** `Barlow Condensed` uppercase styling delivers a stamped-alloy, workshop-manual aesthetic that fits an authentic automotive parts depot without sacrificing readability.
3. **Typography Defect — ALL-CAPS Overuse:** In `helmut_spares_product_detail_desktop/code.html`, several technical spec rows and multi-sentence vehicle fitment notes are set in `uppercase tracking-wider`. While acceptable for short labels (`SKU: 113-807-301`), multi-line descriptions in ALL-CAPS decrease reading speed by ~15%. Body paragraphs and detailed specs should remain standard sentence case.

---

## 5. Content Fidelity Against content.md

### 5.1 Business Identity, Address, and Contacts

| Item | Original Baseline (`content.md` Section 4) | Redesign Value | Discrepancy / Fidelity Status |
|---|---|---|---|
| **Business Name** | Helmut Motor Spares / Helmut Spares | HELMUT SPARES (Est. 1975 · Vereeniging) | **MATCH.** Accurate. Appropriately modernised. |
| **Physical Address** | 19 Rhodes Avenue, Vereeniging, 1930 | 19 Rhodes Avenue, Vereeniging, Gauteng, 1930 | **MATCH.** Perfectly accurate; adds province. |
| **Official Phone 1** | `016 421 3559` | `016 421 3559` | **MATCH.** Present in top header and footer. |
| **Official Phone 2** | `016 455 1520` | `016 455 1520` | **MATCH.** Retained in footer contact block. |
| **Official Email** | `info@helmutspares.co.za` | `info@helmutspares.co.za` | **MATCH.** Accurate across all footers. |
| **WhatsApp Number** | *None found / Unknown on original site* | `https://wa.me/27164213559` | **DISCREPANCY (CRITICAL).** Hardcodes the landline `016 421 3559` as a WhatsApp link. Unless registered through WhatsApp Business Landline Verification, this link will trigger a client-side error. |
| **Invented Phone Placeholders** | *None* | `082 123 4567` and `082 000 0000` | **INVENTED.** Form input placeholders display fabricated mobile numbers. |
| **Invented Email Placeholder** | *None* | `johan@workshop.co.za` | **INVENTED.** Fabricated email in homepage price list form. |

### 5.2 Trading Hours Discrepancy

- **Original Baseline (`content.md` Section 4):**
  - Monday to Thursday: `09:00 - 17:00`
  - Friday: `09:00 - 12:00` and `14:00 - 17:00` *(Closed 12:00–14:00 for religious observance / prayer)*
  - Saturday: `09:00 - 13:00`
  - Sunday & Public Holidays: Closed
- **Redesign Header Top Bar:**
  - Displays: `"Trading Hours: Mon-Fri 9-5 · Sat 9-1"`
  - **Discrepancy:** Fails to disclose the 2-hour Friday midday closure. A customer driving from Johannesburg or Vanderbijlpark between 12:00 and 14:00 on a Friday would encounter locked doors.
- **Redesign Footer:**
  - Displays: `"Mon - Thu: 09:00 - 17:00 | Friday: 09:00 - 12:00 & 14:00 - 17:00 | Saturday: 09:00 - 13:00 | Sunday & Public Holidays: Closed"`
  - **Status:** The footer is 100% accurate, but conflicts directly with the redesign's own header bar!

### 5.3 Product Names, SKUs, and Prices

A side-by-side audit of all products featured on the redesign screens against the 69 products in `content.md` Section 3.8 reveals substantial renamings and invented products:

```
========================================================================================================================
Redesign Screen      Redesign Product Name & Price         Original Product Name & Price (`content.md`)  Discrepancy Status
========================================================================================================================
Home Desktop         VW Beetle Chrome Rear Bumper          VW Beetle Chrome Rear Bumper                  MATCH
                     (1965-1978) - R 2,499                 Item #28 - R 2499,00                          (Title expanded)
------------------------------------------------------------------------------------------------------------------------
Home Desktop         Door Rubber Seal Set                  VW Beetle Door Rubber Set                     MATCH
                     (Type 1 Beetle Pair) - R 995          Item #34 - R 995,00                           (Title expanded)
------------------------------------------------------------------------------------------------------------------------
Home Desktop         Mahle 1600cc Piston & Barrel Set      VW Beetle / Beach Buggy Mahle Sleeve Kit      MATCH
                     (85.5mm) - R 5,499                    Item #57 - R 5499,00                          (Title rephrased)
------------------------------------------------------------------------------------------------------------------------
Home Desktop         Chrome Door Handles with Keys         VW Beetle Chrome Door Handle With Keys        PARTIAL CONFLICT
                     (Pair) - R 349                        Item #25 - R 349,00                           Orig was R349 EACH,
                                                                                                         redesign says PAIR.
------------------------------------------------------------------------------------------------------------------------
Shop Beetle Parts    Chrome Rear Bumper Assembly - R 2,499 Item #28 - R 2499,00                          MATCH
Shop Beetle Parts    Door Rubber Set (Complete Pair) - R 995 Item #34 - R 995,00                         MATCH
Shop Beetle Parts    Distributor Cap Bosch Type - R 99     Item #8 - R 99,00                             MATCH (Renamed)
Shop Beetle Parts    Front Brake Shoes Set (4 Pcs) - R 399 Item #11 - R 399,00                           MATCH (Renamed)
Shop Beetle Parts    Window Winder Handle + Escutcheon - R 89 Item #67 - R 89,00                         MATCH (Renamed)
Shop Beetle Parts    Shock Absorbers (Heavy Duty Oil) - R 699 Item #56 - R 699,00                        MATCH (Renamed)
Shop Beetle Parts    Fender Beading Rubber Set (Black) - R 699 Item #38 - R 699,00                       MATCH (Renamed)
Shop Beetle Parts    German Spec Clutch Cable - R 249      Item #31 - R 249,00                           MATCH (Renamed)
Shop Beetle Parts    Hella Style Rear Tail Light Lens - R 349 Item #49 (Medium Lens) - R 349,00          MATCH (Renamed)
Shop Beetle Parts    12V High-Torque Starter Motor - R 1,799 Item #19 (VW Beetle Starter) - R 1799,00   MATCH (Renamed)
------------------------------------------------------------------------------------------------------------------------
Product Detail       Bumper Bracket Kit (Pair) - R 285     DOES NOT EXIST IN ORIGINAL CATALOG            INVENTED PRODUCT
Product Detail       Bumper Over-Riders + Strip - R 450    DOES NOT EXIST IN ORIGINAL CATALOG            INVENTED PRODUCT
Product Detail       Stainless Bumper Bolt Set (10pc) - R 120 DOES NOT EXIST IN ORIGINAL CATALOG        INVENTED PRODUCT
Product Detail       Bumper Rubber Grommets (Pack 4) - R 95 DOES NOT EXIST IN ORIGINAL CATALOG           INVENTED PRODUCT
========================================================================================================================
```

> [!WARNING]
> **Conflicting Prices from Original Site:**
> `content.md` Section 4 flagged three critical pricing contradictions on the original site:
> 1. *Axle Boot Kit:* Listed price tag R199,00, but copy stated *"Sold @ R129.00 per kit"*.
> 2. *Replacement Carburetor:* Listed price tag R2295,00, but copy stated *"Sold on special @ R1695.00"*.
> 3. *Window Trim Frames:* Listed price tag R1999,00, but copy stated *"Sold @ R1895.00 per side"*.
> 
> The Stitch redesign sidestepped these by omitting these three products from its 12-item demo catalog. When loading the full 69-item inventory, client sign-off on the correct active retail prices will be mandatory.

### 5.4 Unsubstantiated & Invented Marketing Claims

The following claims appear in the redesign copy and design specifications but **have no basis in `content.md`**:

1. **"Tracked Courier Delivery via The Courier Guy" / "Dispatched within 24 hours":**  
   *Original:* Only stated *"We deliver country wide, to your door"*. No logistics partner was named.  
   *Status:* **INVENTED / NEEDS OWNER CONFIRMATION.**
2. **"Orders placed before 12:00 dispatch same working day":**  
   *Original:* No dispatch turnaround commitment existed.  
   *Status:* **INVENTED / NEEDS OWNER CONFIRMATION.**
3. **"In Stock at Vereeniging Depot - 8 units remaining" / Live Stock Counters:**  
   *Original:* Stated *"Over 15000 parts in stock"*, but had no live inventory management or per-item quantity tracking.  
   *Status:* **INVENTED FEATURE.** Showing fake stock quantities ("8 remaining") risks misleading customers.
4. **"Salt-Spray Tested" / "Triple-Plated Chrome Guarantee":**  
   *Original:* Only stated *"High quality chrome"*.  
   *Status:* **INVENTED TECHNICAL SPECIFICATION.**
5. **"Helmut Guarantee - 12-Month Mechanical & Finish Warranty":**  
   *Original:* Contained no written warranty or guarantee policy.  
   *Status:* **INVENTED / LEGAL RISK.** Cannot publish a 12-month warranty without client authorisation.
6. **"Hassle-Free 14-Day Workshop Return Policy":**  
   *Original:* The original VirtueMart terms of service mistakenly had Aura Bean coffee returns. No formal return window was published for Helmut Spares.  
   *Status:* **INVENTED / NEEDS OWNER CONFIRMATION.**
7. **"Official PDF Price List" / "Detailed 2025 Parts & Price List":**  
   *Original:* `content.md` Section 6 explicitly confirmed **0 PDF documents exist**. The Price List was an online webpage subscription, not a downloadable PDF document.  
   *Status:* **INVENTED ASSET.** If a PDF is promised upon form submission, a real document must be generated.

### 5.5 Social Media Links
- **Original (`content.md` Section 4):**
  - Instagram: `https://www.instagram.com/helmutspares/` (Linked from homepage button)
  - Twitter / X: `https://twitter.com/helmutspares` (Linked from homepage button)
- **Redesign:**
  - **DROPPED COMPLETELY.** No social media icons or profile links exist in either the header or footer of any redesign screen.

### 5.6 Residual Template Artifacts & Placeholder Data
- **"Aura Bean Roastery" Pollution:** The redesign **completely eliminated** all traces of Aura Bean Roastery, the residual coffee company that plagued the original Joomla site's legal terms, auto-responders, and telephone listings.
- **Lorem Ipsum:** Zero instances of "lorem ipsum" text exist.
- **Form Placeholders:** As noted in 5.1, dummy names (`Johan van der Merwe`) and dummy emails (`johan@workshop.co.za`) should be replaced with clear field prompts.

---

## 6. Functional Parity & Form Analysis

### 6.1 Forms Comparison

The original site hosted two active forms powered by Joomla's `com_breezingforms`. The redesign replaces these with modern HTML5 forms:

```
========================================================================================================================
Original Form (`content.md` Sec 5)    Redesign Form Equivalent              Field Comparison & Parity Status
========================================================================================================================
1. General Enquiry Form               Partially replaced by                 ORIGINAL FIELDS:
   ("Send Us An Enquiry")             Request a Part Screen                 - Name, Surname, Email, Phone, Enquiry, Captcha
   Pages: Home, About Us, Contact     (`request_a_part_desktop/code.html`)  REDESIGN FIELDS:
                                                                            - Vehicle Platform (Select dropdown)
                                                                            - Model Year / Engine Size (Text input)
                                                                            - Part Description / Specifics (Textarea)
                                                                            - Photo Upload (File input)
                                                                            - Full Name, Phone, Email
                                                                            - Preferred Contact Channel (Radio pills)
                                                                            PARITY: Much richer automotive context, but
                                                                            drops Surname and Captcha.
------------------------------------------------------------------------------------------------------------------------
2. Beetle Price List Subscription     Price List Download Section           ORIGINAL FIELDS:
   Form                               (`helmut_spares_home_desktop/code.html`) - Name & Surname (Single field)
   Page: `/beetle-price-list`                                               - Email Address
                                                                            - Contact Number
                                                                            REDESIGN FIELDS:
                                                                            - Your Full Name
                                                                            - Email Address (for PDF link)
                                                                            - Phone / WhatsApp (Optional for stock alerts)
                                                                            PARITY: Matches fields closely; drops standalone
                                                                            page in favor of homepage lead magnet.
------------------------------------------------------------------------------------------------------------------------
3. Add to Cart & Checkout             NONE                                  ORIGINAL:
   Pages: Catalog, Product, Cart      (Only static header button)           - Quantity input, Cart view, Billing address,
                                                                            Shipping method, Coupon code, Customer note,
                                                                            PayFast payment gateway integration.
                                                                            REDESIGN:
                                                                            - Completely absent from Stitch screens.
========================================================================================================================
```

### 6.2 E-Commerce & Interactive Feature Evaluation

1. **Vehicle Fitment Selector (Homepage Hero):**  
   The redesign introduces an interactive selector with dropdowns for *Vehicle Model*, *Production Year Range*, and *Part Category*. This is an excellent UX pattern for automotive parts stores, immediately directing users to relevant spares.
2. **Catalog Faceted Sidebar Filters:**  
   The Shop page features faceted filtering for *Vehicle Generation*, *Engine Displacement*, *Category*, and *Price Range*.
3. **Cross-Sell Component Bundle (Product Detail):**  
   The Product Detail page features a "Complete Your Rear End Assembly" bundle box with individual checkboxes that dynamically recalculate the total order value before adding to cart.

### 6.3 Technical Feasibility & Data Dependencies

> [!IMPORTANT]
> **Severe Data Dependency Risk for Faceted Filters:**
> In the original VirtueMart database (`content.md`), products possessed **zero structured fitment attributes**. Compatibility was mentioned haphazardly in unstructured body copy (e.g. *"1968-1978"* or *"1600cc"*), and 35+ products had no year or engine data at all.
> 
> To make the redesign's faceted sidebar filters and vehicle selector work in production:
> 1. A relational database schema (or e-commerce taxonomy such as WooCommerce / Shopify metafields) must be built with fields: `compatible_models`, `year_start`, `year_end`, `engine_codes`.
> 2. The client must manually audit and tag every product with these values. If the business lacks the capacity to supply this data, building the faceted filters will result in empty search results or broken filtering.

---

## 7. Consistency Across Screens

An automated structural audit comparing common interface modules across all 4 HTML files revealed high consistency with a few specific defects:

| Component | Consistency Status | Detailed Observations & Deviations |
|---|:---:|---|
| **Header Shell & Top-Bar** | **98% Identical** | Header height, top-bar contact details, logo typography, and search inputs are identical. **Defect:** `helmut_spares_home_desktop/code.html` applies the active navigation classes (`border-primary`, `aria-current="page"`) to **Shop** rather than Home. |
| **Footer Component** | **100% Identical** | The 4-column footer layout (About bio, Shop Quick Links, Contact & Workshop, Hours & Shipping, Copyright) is character-for-character identical across all 4 screens. |
| **Primary Buttons** | **Consistent** | Solid accent buttons use `rounded-DEFAULT` (4px radius), `Barlow Condensed` bold uppercase text, and matching padding (`px-4 py-2.5` or `px-6 py-3`). |
| **Secondary Buttons** | **Consistent** | Outlined buttons use `border border-border-subtle` with crisp hover transitions to dark text. |
| **Product Cards** | **Consistent** | Product cards on both Home and Shop use identical structural framing: `bg-surface-pure`, `border border-border-subtle`, 4px corner radius, image aspect container, stock chip, bold headline, and orange price display. |
| **Spacing & Grid Rhythm** | **Consistent** | All pages adhere to a 1280px max-width container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) with 24px/32px section vertical spacing. |
| **Border Radius** | **Consistent** | Soft mechanical radius (`rounded-DEFAULT` = `0.25rem` / 4px) is maintained across cards, inputs, and buttons. No pill buttons or sharp square edges conflict with the system. |
| **Iconography** | **Consistent** | All screens exclusively use Google `Material Symbols Outlined` with standard optical sizing. |

---

## 8. Accessibility and SEO Readiness

### 8.1 Heading Hierarchy (H1–H4)
The original website suffered from severe SEO defects (`content.md` Section 3.1 & 3.6 noted that neither Home nor Contact Us had an `<H1>` tag). The redesign resolves this issue:

- **Home Desktop:** Exactly one `<h1>`: `Keeping Beetles on the Road Since 1975`. Subheadings follow a logical progression through `<h2>` (features, categories, CTA) to `<h3>` (card titles).
- **Shop Desktop:** Exactly one `<h1>`: `BEETLE & BEACH BUGGY PARTS`. Filter sidebar uses `<h2>`, product cards use `<h3>`.
- **Product Detail:** Exactly one `<h1>`: `VW BEETLE CHROME REAR BUMPER`. Feature sections use `<h2>`, specs and bundle items use `<h3>`.
- **Request a Part:** Exactly one `<h1>`: `CAN'T FIND IT? WE'LL FIND IT FOR YOU.`. Form uses `<h2>`, counter info uses `<h3>`, footer uses `<h4>`.

### 8.2 Form Label Association
- In `helmut_spares_home_desktop`, `helmut_spares_shop_beetle_parts_desktop`, and `helmut_spares_product_detail_desktop`, **zero `<label for="...">` tags match an input `id`**. Inputs either rely on implicit nesting or have detached label text, preventing screen readers from announcing input names when focused.
- Only `helmut_spares_request_a_part_desktop` implements valid explicit label associations (`for="engineYear"`, `for="vehicleModel"`, `for="contactPhone"`, `for="contactName"`, `for="partNeeded"`, `for="contactEmail"`).

### 8.3 Image Accessibility (Alt Text)
- Total images across all screens: **31 images**.
- **Alt Text Coverage:** **100% of images include populated `alt` attributes**.
- **Quality of Alt Text:** Exceptionally high descriptive fidelity (e.g. `alt="VW Beetle Chrome Rear Bumper high quality replacement assembly for 1965 to 1978 Type 1 Beetles"`).

### 8.4 Page Titles & Meta Descriptions

> [!CRITICAL]
> **SEO Showstopper Across Redesign Export:**
> In all four HTML export files, the `<title>` tag is either completely omitted or contains an empty string (`<title></title>`). Furthermore, zero `<meta name="description">` tags are present in any document `<head>`.

The table below details the original SEO state, the errors fixed, and the recommended production metadata:

| Screen | Original Title & Issues (`content.md`) | Redesign Export State | Proposed Production `<title>` & `<meta name="description">` |
|---|---|:---:|---|
| **Home** | Title: `Helmut Spares - VW, Beetle, and Audi Parts...`<br>Issue: Meta description was duplicate of title; no H1. | `<title>` missing.<br>Meta missing. | **Title:** `Helmut Spares \| Classic VW Beetle, Buggy & Audi Parts South Africa`<br>**Meta:** `Specialist supplier of classic air-cooled VW Beetle, Beach Buggy, and Audi spares in South Africa. Over 15,000 parts in stock in Vereeniging. Nationwide courier delivery.` |
| **Shop (Catalog)** | Title: `Buy VW Beetle Spares & Parts Online`<br>Issue: VirtueMart category alias was named "404". | `<title>` missing.<br>Meta missing. | **Title:** `Buy Classic VW Beetle & Beach Buggy Parts Online \| Helmut Spares`<br>**Meta:** `Browse replacement bumpers, rubber seals, Mahle engine kits, brakes, and electrical spares for classic VW Beetles and Beach Buggies. Fast dispatch across SA.` |
| **Product Detail** | Title: `VW Beetle Chrome Rear Bumper`<br>Issue: Inconsistent breadcrumb links. | `<title>` missing.<br>Meta missing. | **Title:** `VW Beetle Chrome Rear Bumper (1965–1978) \| Helmut Spares`<br>**Meta:** `Buy high-grade chrome replacement rear bumpers for Type 1 VW Beetles (1965-1978). Direct replacement, pre-drilled brackets. In stock at Helmut Spares Vereeniging.` |
| **Request a Part** | *New Page (replaces Contact Us: "About Helmute Spares" had typo; meta claimed non-existent Vanderbijlpark branch).* | `<title>` missing.<br>Meta missing. | **Title:** `Request Hard-to-Find VW Beetle & Vintage Spares \| Helmut Spares`<br>**Meta:** `Can't find your vintage VW part online? Submit your model, year, and photo to Helmut Spares. Our Vereeniging workshop team will source it for you.` |

---

## 9. Images and Asset Inventory

### 9.1 Redesign Image Mapping to Original Assets

Every image in the Stitch redesign currently links to external Google placeholder URLs (`https://lh3.googleusercontent.com/aida/...`). Below is the mapping from redesign placeholders to real, high-resolution original image files documented in `content.md` Section 6:

```
========================================================================================================================
Redesign Screen  Element / Subject                      Original File in content.md Section 6  Status & Action
========================================================================================================================
Home Desktop     Workshop Hero Banner                   `shoppic2.jpg` (Original stock)        NEEDS REAL PHOTO:
                 (Beetle on hoist in workshop)          or `slide1.jpg` / `slide2.jpg`         Client must photograph actual
                                                                                               19 Rhodes Ave workshop interior.
------------------------------------------------------------------------------------------------------------------------
Home & Shop      VW Beetle Chrome Rear Bumper           `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-bumper-rear4.jpg` (540x710px)   Original photo exists; crop to
                                                                                               neutral white square.
------------------------------------------------------------------------------------------------------------------------
Home & Shop      Door Rubber Set                        `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-door-rubbers9.jpg` (540x710px)  Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Home & Shop      Mahle Sleeve / Piston Kit              `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-sleeve-kit1.jpg` (540x710px)    Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Home & Shop      Chrome Door Handles                    `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-chrome-door-handles8.jpg`       Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Distributor Cap                        `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-distributor-cap3.jpg`           Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Front Brake Shoes Set                  `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-brake-shoes-front7.jpg`         Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Window Winder Handle                   `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-window-winder-handle1.jpg`      Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Shock Absorbers                        `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-shocks3.jpg` (540x710px)        Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Fender Rubber Set                      `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-fender-rubber7.jpg`             Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             12V Starter Motor                      `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-starter-front1.jpg`             Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Clutch Cable                           `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-clutch-cable6.jpg`              Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Shop             Rear Tail Light Lens                   `images/stories/virtuemart/product/    CAN MAP:
                                                        beetle-tail-light-lens-small-orange1`  Original photo exists.
------------------------------------------------------------------------------------------------------------------------
Product Detail   Bumper Cross-Sell Bundle:              DOES NOT EXIST                         NEEDS REAL PHOTOS / SOURCING:
                 Brackets, Overriders, Bolts, Grommets                                         Must be photographed if added
                                                                                               to catalog.
========================================================================================================================
```

### 9.2 Brand Logo & Favicon Strategy
- **Original Logo Asset:** `images/aura-bean/Logo.jpg` (131x78 px, 6.4 KB). A low-resolution raster JPEG saved in the `aura-bean` folder with a solid white background. No vector SVG exists.
- **Original Favicon:** Non-existent; original site declared the 131x78 JPEG logo as `shortcut icon`.
- **Redesign Handling:** The redesign renders the brand mark as pure HTML/CSS text: `"HELMUT SPARES"`, styled in `Barlow Condensed` bold uppercase with a petrol green heritage badge (`EST. 1975 · VEREENIGING`).
- **Recommendation:** Do **not** use the original low-res 131x78 JPEG logo. The HTML/CSS typography treatment in the redesign is clean, crisp, and scales flawlessly across all screen resolutions. Export this text lockup as an SVG asset and generate proper 16x16, 32x32, and 180x180 Apple touch `.png` favicons.

---

## 10. Missing States and Edge Cases

The Stitch prototype delivers static "happy path" desktop screens. The following critical states and edge cases have **no design screens** and must be specified before frontend coding:

1. **Empty Shopping Cart:** When a user clicks the cart icon before adding items, there is no empty-cart illustration, "Browse Catalogue" CTA, or return link.
2. **Form Submission Success States:** Neither the Request a Part form nor the Homepage Price List signup form provides a confirmation message, thank-you banner, or modal feedback.
3. **Form Error & Validation States:** No visual treatment exists for invalid email formats, missing mandatory inputs, or rejected file upload types.
4. **Out-of-Stock Product Card State:** Every item in the redesign is hardcoded as "IN STOCK". No state exists for out-of-stock items, backorders, or "Notify Me When Available" badges.
5. **No Search Results / Empty Filter State:** If a user selects a vehicle model and year combination that has zero matching parts, no empty-state message or "Request This Part" fallback is provided.
6. **Active / Open Mobile Navigation Drawer:** The mobile hamburger menu, mobile category accordion, and mobile contact quick-actions are completely absent.
7. **404 Not Found Page:** No branded 404 page exists to catch legacy Joomla URL traffic.
8. **Asynchronous Loading & Skeleton Screens:** No loading states are defined for faceted filter updates or product detail image thumbnail switching.

---

## 11. Handoff Readiness for the Build

### 11.1 Reconciled Design Tokens (CSS Custom Properties)

The following CSS variables block provides the implementation team with the exact reconciled tokens combining Helmut Spares' brand continuity with the redesign's mechanical design language:

```css
:root {
  /* Brand Identity & Interactive Accents (Reconciled Teal) */
  --color-primary: #0C7475;              /* Reconciled Deep Brand Teal (5.57:1 AA on white) */
  --color-primary-hover: #095859;        /* Deep interactive hover teal */
  --color-primary-contrast: #FFFFFF;     /* Text on primary buttons */
  
  /* Workshop & Structural Neutrals */
  --color-secondary: #1F4A43;            /* Petrol green utility bars & fitment headers */
  --color-secondary-contrast: #FFFFFF;   /* Text on secondary headers */
  --color-footer-bg: #231F20;            /* Original Helmut charcoal footer background */
  --color-footer-contrast: #FFFFFF;      /* Text on dark footer */
  
  /* Canvas & Surface Layers */
  --color-bg-canvas: #F5F1E8;            /* Warm workshop newsprint/paper background */
  --color-surface-card: #FAF7F2;         /* Tinted container surface for cards & filters */
  --color-surface-pure: #FFFFFF;         /* Pure white container for product tiles & inputs */
  --color-border-subtle: #D8D1C2;        /* 1px mechanical joinery border */
  --color-border-focus: #0C7475;         /* Sharp focus ring color */
  
  /* Typography Colors */
  --color-text-primary: #17181A;         /* Dense technical black (15.76:1 AA on paper) */
  --color-text-secondary: #5C5852;       /* Secondary specs & vehicle fitment tags */
  --color-text-muted: #59554E;           /* Adjusted muted text for strict WCAG AA (4.80:1) */
  
  /* System Feedback & Third-Party */
  --color-success: #2E7D4F;              /* Deep forest green for stock verification */
  --color-error: #BA1A1A;                /* Industrial warning red for required/out-of-stock */
  --color-whatsapp: #25D366;             /* Official WhatsApp green (use with dark text) */
  --color-whatsapp-contrast: #17181A;    /* Dark text on WhatsApp green for 8.96:1 AA pass */

  /* Typography Stacks */
  --font-heading: 'Barlow Condensed', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Spacing Scale (4px / 8px mechanical increments) */
  --space-2xs: 0.25rem;  /* 4px */
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 0.75rem;   /* 12px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2.5rem;    /* 40px */
  --space-2xl: 4rem;     /* 64px */

  /* Structural Geometry */
  --radius-sm: 2px;
  --radius-default: 4px; /* 0.25rem - soft mechanical corner radius */
  --radius-lg: 8px;
  --border-width-subtle: 1px;
}
```

### 11.2 Reusable Component Inventory

The redesign codebase contains 10 distinct UI components ready for extraction into modular components (e.g. React, Blade, or Astro templates):

1. **TopUtilityBar:** Full-width utility banner displaying phone numbers, Rhodes Ave address, verified hours, and WhatsApp link.
2. **MainHeader:** Logo lockup with heritage badge, primary navigation links, search input, and cart counter badge.
3. **FitmentSelectorHero:** Split homepage hero containing vehicle dropdowns (Model, Year, Category) and direct search trigger.
4. **CategoryTileGrid:** 8-column visual category card selector featuring industrial part silhouettes.
5. **ProductCard:** Universal e-commerce card featuring image aspect wrapper, stock dot badge, headline title, vehicle compatibility tag, SKU, price, and "Add to Cart" button.
6. **CrossSellBundleBox:** Tabular add-on module with itemized checkboxes, individual pricing, and dynamic total calculation.
7. **AccordionSpecs:** Tabbed specifications container (Detailed Description, Vehicle Fitment Chart, Logistics & Returns).
8. **PriceListLeadMagnet:** Full-width promotional banner with name, email, and phone inputs for automated catalog delivery.
9. **PartRequestForm:** Comprehensive 10-field technical enquiry form featuring platform select, year input, file upload, and contact preference radios.
10. **GlobalFooter:** 4-column structured footer with brand bio, category links, workshop contact info, trading hours matrix, and copyright credit.

### 11.3 301 URL Redirection & Routing Map

To preserve 10+ years of Google search rankings and prevent 404 errors when replacing the Joomla/VirtueMart site, the following 301 permanent redirect table must be configured in Nginx or Apache:

| Legacy Joomla / VirtueMart URL | Proposed Redesign Route | Redirection Purpose & SEO Target |
|---|---|---|
| `/` or `/index.html` | `/` | Homepage route retention. |
| `/about-helmut-spares` | `/about` | Preserves legacy About Us backlinks. |
| `/beetle-price-list` | `/#price-list` or `/price-list` | Redirects price list visitors to lead capture section. |
| `/buy-vw-beetle-spares-parts-online` | `/shop` | Primary catalog archive redirection. |
| `/buy-vw-beetle-spares-parts-online/accessories` | `/shop?category=accessories` | Cleans up empty category route. |
| `/buy-vw-beetle-spares-parts-online/404/*` | `/shop/*` | Cleans up legacy VirtueMart "404" category alias bug. |
| `/buy-vw-beetle-spares-parts-online/[slug]-detail` | `/product/[slug]` | Individual 301 redirects for all 69 legacy products. |
| `/contact-helmut-spares` | `/contact` or `/request-a-part` | Preserves local SEO citations for 19 Rhodes Ave. |
| `/index.php?option=com_virtuemart&view=cart` | `/cart` | Ensures legacy cart bookmarks resolve cleanly. |

---

## 12. Additional Risks, Observations & Recommendations

1. **South African POPI Act (Protection of Personal Information) Compliance:**  
   The Request a Part form and Price List signup collect full names, email addresses, phone numbers, and customer photographs. The redesign contains **no privacy policy link or POPI Act consent checkbox**. South African data privacy legislation requires explicit consent before storing customer contact data in a database.
2. **File Upload Security Risks:**  
   The photo upload field on `helmut_spares_request_a_part_desktop/code.html` is an unconstrained `<input type="file">`. The backend implementation must enforce strict MIME-type validation (`image/jpeg`, `image/png`, `image/webp`), restrict file sizes to ≤ 5MB, and store assets in isolated cloud storage to prevent remote code execution vulnerabilities.
3. **WhatsApp Link Protocol:**  
   The hardcoded link `https://wa.me/27164213559` uses the landline prefix (`016`). While WhatsApp Business supports landline verification via voice call, this must be verified with the business owners before launch. If Helmut Spares has not verified their landline on WhatsApp Business, the link will fail. A mobile number or generic contact link should be used as fallback.
4. **Currency Formatting Standardization:**  
   The original site formatted prices using South African space/comma convention (`R 2499,00`). The redesign uses Anglo comma notation (`R 2,499`). This format is clean, modern, and standard for South African e-commerce (Takealot, etc.), but should be applied consistently across all screens.
5. **No Mobile Hamburger Menu Code:**  
   The redesign HTML hides nav items on smaller screens via standard CSS without providing an expandable drawer. Mobile navigation must be coded from scratch during frontend implementation.

---
*End of Design Audit Report.*
