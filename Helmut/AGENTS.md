# AGENTS.md: Helmut Spares redesign demo

This file is the standing brief for every task in this repo. Read it fully before planning. If a task prompt conflicts with this file, stop and ask in your plan instead of guessing.

## 1. What this is

A private sales demo of a redesigned website for **Helmut Spares** (helmutspares.co.za), a VW Beetle and Beach Buggy parts shop in Vereeniging, South Africa, established 1975. It will be shown to the owners to win the redesign job. It is NOT a live shop: no real payments, no real orders.

It does have a real backend (products, enquiries, price-list sign-ups) and an admin dashboard so the owners can see how they would manage their own products.

## 2. Repo layout

```
/AGENTS.md
/docs/            content.md (original site audit), design-audit.md, recheck.md   [READ-ONLY]
/design/stitch/   one folder per screen with screen.png + code.html              [READ-ONLY]
/frontend/        Vite + React + TypeScript + Tailwind SPA (public site + /admin)
/api/             PHP 8.2 API (no framework, no Composer dependencies)
/database/        schema.sql, seed.sql (or seed script), SKIPPED.md
/uploads/         product images (served by Apache; PHP execution disabled here)
```

Never modify anything in `/docs` or `/design`.

## 3. Stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS + React Router. One SPA; the admin lives under `/admin`.
- **Backend:** PHP 8.2, PDO, MySQL 8. Small custom router in `api/index.php`. No framework, no Composer packages (it must deploy to ordinary cPanel-style hosting by copying files).
- **Local dev:** `docker-compose.yml` (php-apache + mysql) and `.env.example`.
- **Production shape:** Apache serves the built frontend with a rewrite to `index.html`; `/api/*` routes to `api/index.php`.
- **Config:** `.env` only. Never commit secrets. Do not add libraries beyond React, React Router, Tailwind and Vite unless the task says so.

## 4. Source of truth (in priority order)

1. `docs/content.md`: every fact: business details, copy, hours, product names and prices (section 3.8).
2. `design/stitch/*/screen.png` and `code.html`: **layout and visual style only.** Never copy text, prices, product names or colours from Stitch code without checking them against section 4.1 and the tokens below.
3. `docs/recheck.md` and `docs/design-audit.md`: known defects in the Stitch screens. Do not reproduce them.

Stitch screens exist for: Home, About Us, Beetle Price List, Shop, Product Detail, Request a Part (becomes Contact Us), Cart, Checkout (all desktop only). Mobile layouts are NOT provided; derive them from the desktop screens (see section 10).

### 4.1 Facts that must match content.md exactly

- Address: 19 Rhodes Avenue, Vereeniging, 1930
- Phones: 016 421 3559 and 016 455 1520
- Email: info@helmutspares.co.za
- Hours: Mon-Thu 9:00-17:00 · Fri 9:00-12:00 and 14:00-17:00 · Sat 9:00-13:00 · Sun and public holidays closed
- Established 1975. "Over 15,000 parts in stock."
- Social: Instagram @helmutspares and X (links as in content.md)
- Product names and prices: verbatim from content.md section 3.8. No added brands, specs or sizes, no dropped vehicle prefixes ("VW Beetle ..."). Door handles are R349 each. Skip the products content.md flags as having conflicting prices (axle boot kit, replacement carburettor, window trim frames) and list them in `database/SKIPPED.md`.
- Price format everywhere: `R2,499` (R, no space, comma thousands).

## 5. Forbidden: invented claims

Do not write any of these anywhere (UI, seed data, metadata, comments shown to users): a named courier (e.g. "Courier Guy"), "tracked", "same-day dispatch", stock counts or per-product "In Stock" badges, "salt-spray", "triple-plated", warranty or guarantee wording, a returns policy, SKUs or part numbers not in content.md, any PDF price list, invented products or cross-sells, fake placeholder names/emails/phone numbers in form fields.

Allowed wording:
- Delivery: "We deliver country-wide, to your door."
- Stock: "Over 15,000 parts in stock. Call to confirm availability."

Related products on a product page must be real products from the database, chosen from the same category.

## 6. Pages

### Public (nav order is fixed)
Home, About Us, Beetle Price List, Shop Online, Contact Us. Highlight the current page with `aria-current="page"`. There is **no "Request a Part" nav item.**

Other public routes: Product Detail (`/product/:slug`), Cart, Checkout (demo), Privacy Policy (plain text), branded 404.

- **Contact Us** = the Stitch "Request a Part" screen renamed, plus map placeholder, address, both phones, email and the hours table. Fields: Name, Surname, Email, Phone, Vehicle (Beetle, Beach Buggy, Golf, Polo, Audi, Other), Model year, Part needed / message, Preferred contact method (WhatsApp, Phone, Email), consent checkbox. **No file upload.**
- **Beetle Price List** = standalone page with a sign-up form: Name and Surname, Email, Contact Number, consent checkbox. Success text: "Thanks, we'll email you the price list."
- **Checkout (demo)**: contact details, delivery address, delivery method (Courier or Collect in store at 19 Rhodes Avenue), PayFast badge, order summary, terms checkbox. Placing the order shows a confirmation screen marked as a demo. It stores nothing and takes no payment.
- Cart: client-side state (persist in localStorage, wrapped in try/catch).

### Admin (under `/admin`, not in public nav, `noindex`)
Login, Products (list with search, category filter, hide/show toggle, delete with confirmation), Product editor (add/edit with image upload), Categories, Enquiries (list, mark new/handled), Price-list sign-ups (list + CSV export).

"Remove" on a product offers **Hide** (default; keeps it in the database, off the site) and **Delete permanently** (with a confirmation dialog).

## 7. Design tokens (single source of truth: Tailwind config + CSS variables)

| Token | Value |
|---|---|
| primary | #0C7475 |
| primary-hover | #095859 |
| primary-contrast | #FFFFFF |
| footer / top strip | #231F20 (text on it #FFFFFF) |
| background | #F5F1E8 |
| surface (cards, inputs) | #FFFFFF |
| border | #D8D1C2 |
| text | #17181A |
| text-muted | #59554E |
| success | #2E7D4F |
| error | #BA1A1A |
| whatsapp | #25D366 (always with dark text #17181A, never white) |

- Fonts: **Barlow Condensed** (headings, uppercase for H1/H2 and short labels) and **Inter** (body, 16px minimum). Sentence case for anything longer than a short label. Self-host or load via Google Fonts with a real fallback stack.
- Style: warm paper background, thin 1px borders, 4px corner radius, subtle shadows only, no gradients.
- **Never use** orange, petrol green, or raw Material 3 greys (#fdf9f0, #31302b, #6e7979 and similar). No hex colour outside this table may appear in code.

## 8. Shared components (build once, reuse everywhere)

- **TopStrip** (charcoal): phone 016 421 3559 and hours "Mon-Thu 9-5 · Fri 9-12 & 2-5 · Sat 9-1".
- **Header**: logo wordmark "HELMUT SPARES" with "EST. 1975" tag (text, not an image), the five nav links, search, cart with item count, WhatsApp button. Working mobile drawer menu.
- **Footer** (charcoal #231F20): five page links, shop categories, address, both phones, email, hours table, Instagram and X icons, Privacy Policy link, "© 2026 Helmut Spares. Est. 1975."
- **WhatsApp button**: `href="#"` with a `TODO: confirm WhatsApp number with owner` comment. Never link the landline or any real number.
- **ProductCard**, **Button** (primary, outline), **FormField** (label always associated with input via `for`/`id`), **ConsentCheckbox** (required on every form, links to Privacy Policy), **Breadcrumbs**, **EmptyState**.

Header, TopStrip and Footer must be identical on every page. Do not re-implement them per page.

## 9. Data and API

### Database (MySQL, utf8mb4, foreign keys, sensible indexes)
```
categories(id, slug UNIQUE, name, sort_order)
products(id, slug UNIQUE, name, description, price DECIMAL(10,2), category_id, image_path,
         is_active, sort_order, created_at, updated_at)
enquiries(id, name, surname, email, phone, vehicle, model_year, part_needed, message,
          preferred_contact, consent_at, status ENUM('new','handled'), created_at)
price_list_signups(id, name, email, phone, consent_at, created_at)
admin_users(id, email UNIQUE, password_hash, created_at)
```
Seed categories and products from content.md section 3.8. Both the public site and the admin read from the database; never from hardcoded arrays.

### Endpoints
Public: `GET /api/products` (category, q, min, max, sort, page), `GET /api/products/{slug}`, `GET /api/categories`, `POST /api/enquiries`, `POST /api/price-list-signups`.

Admin (session required): `POST /api/admin/login`, `POST /api/admin/logout`, `GET /api/admin/me`; products CRUD (`GET/POST /api/admin/products`, `PUT/DELETE /api/admin/products/{id}`, `PATCH` to toggle `is_active`); `POST /api/admin/uploads`; categories CRUD; `GET/PATCH /api/admin/enquiries`; `GET /api/admin/signups` and `/api/admin/signups.csv`.

All responses are JSON: `{ ok: true, data }` or `{ ok: false, error: { code, message, fields? } }`. Validate on the server; never trust the client.

## 10. Responsive behaviour and states not covered by Stitch

- Mobile first, supports 360px up. Wide tables scroll inside their own container, never the page body.
- Mobile header: hamburger opens a full-height drawer with the five links, search, and Call + WhatsApp buttons. Mobile pages also get a sticky bottom bar with **Call** and **WhatsApp**.
- Shop filters collapse into a "Filters" button that opens a bottom sheet on mobile.
- Required states: empty cart, form success, form error (inline, per field), no search results ("No parts found. Ask us on the Contact page."), loading skeletons, 404, admin login error, delete confirmation.
- Filters on the Shop page: Category, Price range, Sort. (No engine or year filters: the data has no structured fitment.) The Home "find your part" selector filters by model and category using the product data.

## 11. Security rules (mandatory)

- PDO prepared statements only. Never build SQL by string concatenation.
- Passwords: `password_hash` / `password_verify` (argon2id or bcrypt). No default or hardcoded admin password; the first admin is created with `php api/bin/create-admin.php`.
- Sessions: cookie HttpOnly, SameSite=Lax, Secure in production, regenerate the session id on login.
- CSRF token required on every admin write request.
- Login rate limiting: 5 failures per 15 minutes per IP + email.
- Uploads: jpg/png/webp only, verified with `finfo` (not the file extension), max 5 MB, random filenames, stored in `/uploads`, with an `.htaccess` that disables PHP execution there.
- Escape all output. No `dangerouslySetInnerHTML` with user or database content.
- Public forms: honeypot field plus per-IP rate limit; `consent_at` is required and set server-side.
- Secrets only in `.env`; commit `.env.example`.

## 12. Quality rules

- One H1 per page. Unique `<title>` and meta description per page (a small `usePageMeta` hook). Labels associated with inputs. Visible focus states. Tap targets at least 44px.
- All images have alt text and use local files (`/uploads` for products, `frontend/public/images` for site imagery). No remote image hosts. If a product photo is missing, use a neutral placeholder and list it in `MISSING_IMAGES.md`.
- Site-wide `<meta name="robots" content="noindex, nofollow">` (this is a private demo). Admin pages also noindex.
- Lighthouse mobile targets: performance 90+, accessibility 95+, best practices 95+, SEO 95+.
- Text contrast meets WCAG AA (muted text is #59554E on the warm background).
- `npm run build` and `npm run lint` pass with no errors; PHP tests pass.

## 13. How to work

- Write a plan first and list the files you will create. Wait for approval on large tasks.
- Do exactly what the task says; do not add features, pages or dependencies that were not requested.
- If something is missing or ambiguous (for example a product photo, a fact not in content.md), do not invent it: use a clearly marked placeholder and list it in your summary.
- Before finishing, grep the codebase to verify: no forbidden wording from section 5, no hex colours outside section 7, no real phone number in any WhatsApp link, no remote image URLs.
- Keep commits small and descriptive. End your final message with: files changed, assumptions made, and anything left undone.