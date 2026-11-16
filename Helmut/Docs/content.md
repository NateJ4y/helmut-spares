# Read-Only Content & Structure Audit: Helmut Spares (helmutspares.co.za)

## Table of Contents
1. [Site Overview](#1-site-overview)
2. [Sitemap and Navigation](#2-sitemap-and-navigation)
3. [Page-by-Page Content](#3-page-by-page-content)
   - [3.1 Home Page (/)](#31-home-page-)
   - [3.2 About Us (/about-helmut-spares)](#32-about-us-about-helmut-spares)
   - [3.3 Beetle Price List (/beetle-price-list)](#33-beetle-price-list-beetle-price-list)
   - [3.4 Shop Online / Catalog (/buy-vw-beetle-spares-parts-online)](#34-shop-online--catalog-buy-vw-beetle-spares-parts-online)
   - [3.5 Category: Accessories (/buy-vw-beetle-spares-parts-online/accessories)](#35-category-accessories-buy-vw-beetle-spares-parts-onlineaccessories)
   - [3.6 Contact Us (/contact-helmut-spares)](#36-contact-us-contact-helmut-spares)
   - [3.7 Shopping Cart & Checkout (/index.php?option=com_virtuemart&view=cart)](#37-shopping-cart--checkout-indexphpoptioncom_virtuemartviewcart)
   - [3.8 Complete Product Catalog (69 Unique Products)](#38-complete-product-catalog-69-unique-products)
4. [Business and Contact Details (Consolidated)](#4-business-and-contact-details-consolidated)
5. [Forms and Functionality](#5-forms-and-functionality)
6. [Image and Asset Inventory](#6-image-and-asset-inventory)
7. [Visual Identity as It Currently Exists](#7-visual-identity-as-it-currently-exists)
8. [Technical Issues Spotted from the Code](#8-technical-issues-spotted-from-the-code)
9. [Open Questions](#9-open-questions)

---

## 1. Site Overview

### Business Name, Purpose, and Target Audience
- **Business Name:** Helmut Spares / Helmut Motor Spares (also branded in page titles and headers as "Helmut Spares Online Vw Beetle Spares Shop | South Africa"). *Note: Residual template copy erroneously references "Aura Bean Roastery", "The Aura Bean Team", and "Aura Bean Roastery (Pty) Ltd." in form responses and terms of service.*
- **What They Do:** An automotive replacement parts and accessories business established in 1975, specialising in components for all Volkswagen (VW) and Audi vehicles (both modern and vintage models). Their core focus is serving as a "one stop-shop for vintage VW Beetle parts" and classic Beach Buggy restoration components, providing retail supply and nationwide doorstep delivery across South Africa.
- **Target Audience:** Classic air-cooled VW Beetle owners, vintage restoration enthusiasts, Beach Buggy owners/builders, and general VW/Audi motorists in South Africa seeking new replacement parts, mechanical assemblies, body rubbers, trim, electrical items, and service kits.

### Detected Tech Stack
- **Content Management System (CMS):** Joomla! 3.x (evidenced by `/components/`, `/modules/`, `/media/jui/`, `/media/system/`, Mootools libraries, and Joomla routing tokens).
- **Template / Framework:** "Flex" multipurpose Joomla template by Aplikko (`templates/flex/`), powered by JoomShaper's Helix3 Framework (`plugins/system/helix3`) and Twitter Bootstrap v3.3.5 (`templates/flex/css/bootstrap.min.css`).
- **E-Commerce Platform:** VirtueMart 3.x (`com_virtuemart`, `modules/mod_virtuemart_cart`).
- **Page Builder:** SP Page Builder (`com_sppagebuilder`).
- **Slider Component:** Unite Revolution Slider 2 (`com_uniterevolution2`, Slider Revolution port for Joomla) and SP Page Builder Carousel.
- **Form Builder:** BreezingForms QuickMode by Crosstec (`com_breezingforms`).
- **JavaScript Libraries:**
  - jQuery v1.12.4 (via Joomla JUI `media/jui/js/jquery.min874f.js`)
  - jQuery Migrate (`media/jui/js/jquery-migrate.min874f.js`)
  - MooTools Core & More (`media/system/js/mootools-core874f.js`, `mootools-more874f.js`)
  - Modernizr (`templates/flex/js/modernizr.js`)
  - SmoothScroll (`templates/flex/js/SmoothScroll.js`)
  - matchHeight (`templates/flex/js/matchheight.js`)
  - Magnific Popup (`components/com_sppagebuilder/assets/js/jquery.magnific-popup.min.js`)
  - Chosen jQuery (`components/com_virtuemart/assets/js/chosen.jquery.min06b3.js`)
  - GreenSock TweenLite / Slider Revolution Tools (`media/com_uniterevolution2/assets/rs-plugin/js/jquery.themepunch.tools.min.js`)
- **Fonts:**
  - Google Fonts: **Audiowide** (`fonts.googleapis.com/css?family=Audiowide:regular&subset=latin-ext`), applied globally across body copy, headings, and menus.
  - Icon Fonts: FontAwesome 4.x (`font-awesome.min.css`), Pe-icon-7-stroke (`Pe-icon-7-stroke`), Glyphicons Halflings (`glyphicons-halflings-regular`).
- **Analytics & Trackers:**
  - Legacy Google Analytics `ga.js` tracking snippet embedded inline with property ID `UA-110150972-1` (`_gaq.push(['_setAccount', 'UA-110150972-1'])`). Completely deprecated and non-functional.
  - Pinterest Pin It script (`assets.pinterest.com/js/pinit.js`).
- **Third-Party Embeds & Services:**
  - PayFast payment gateway badge linked to `http://www.payfast.co.za/`.
  - Virtual Card Services (VCS) referenced in checkout legal text.
  - No interactive map iframes, no live chat widgets, and no embedded social media feeds.

### Total Number of Unique Pages
- **Total Unique Pages:** **76 pages**
  - **7 Core Structural & Store Pages:**
    1. Home (`/`)
    2. About Us (`/about-helmut-spares`)
    3. Beetle Price List (`/beetle-price-list`)
    4. Shop Online - Catalog (`/buy-vw-beetle-spares-parts-online`)
    5. Category: Accessories (`/buy-vw-beetle-spares-parts-online/accessories`)
    6. Contact Us (`/contact-helmut-spares`)
    7. Shopping Cart / Checkout (`/index.php?option=com_virtuemart&view=cart`)
  - **69 Individual Product Detail Pages** (each representing a distinct catalog SKU).
  - *(Note: Excludes over 700 HTTrack crawler artifacts consisting of pagination pages `/results,1-18`, sorting queries `/by,ordering`, `dirDesc`, component modal popups `tmpl=component`, search index query combinations, and 500 Internal Server Error language subpaths `/en/`).*

---

## 2. Sitemap and Navigation

### Sitemap Tree of Unique Pages
```
https://www.helmutspares.co.za/
├── / (Home)
├── /about-helmut-spares (About Us)
├── /beetle-price-list (Beetle Price List)
├── /buy-vw-beetle-spares-parts-online (Shop Online)
│   ├── /buy-vw-beetle-spares-parts-online/accessories (Empty Category)
│   ├── /buy-vw-beetle-spares-parts-online/vw-beetle-5-piece-custom-carpet-set-detail
│   ├── /buy-vw-beetle-spares-parts-online/vw-beetle-7-piece-chrome-beading-set-detail
│   ├── ... [67 additional unique product detail pages]
│   └── /buy-vw-beetle-spares-parts-online/vw-embossed-beetle-chrome-wheelcap-detail
├── /contact-helmut-spares (Contact Us)
└── /index.php?option=com_virtuemart&view=cart (Shopping Cart / Checkout)
```

### Main Navigation Items (In Order)
1. **Home** (Destination: `index.html` / `/`)
2. **About Us** (Destination: `about-helmut-spares.html` / `/about-helmut-spares`)
3. **Beetle Price List** (Destination: `beetle-price-list.html` / `/beetle-price-list`)
4. **Shop Online** (Destination: `buy-vw-beetle-spares-parts-online.html` / `/buy-vw-beetle-spares-parts-online`)
5. **Contact Us** (Destination: `contact-helmut-spares.html` / `/contact-helmut-spares`)

### Footer Navigation Items (In Order)
1. **Home** (Destination: `index.html`)
2. **About Us** (Destination: `about-helmut-spares.html`)
3. **Beetle Price List** (Destination: `beetle-price-list.html`)
4. **Shop Online** (Destination: `buy-vw-beetle-spares-parts-online.html`)
5. **Contact Us** (Destination: `contact-helmut-spares.html`)

### Sub-Footer Credit Link
- **Designer Attribution:** "Proudly Designed by Bunnypants Graphic & Web Design Studio" (Destination: `http://www.bunnypants.co.za/`)

### Broken Internal Links and Orphan Pages
1. **Critical 500 Error Links on Home Page CTAs:**
   The three primary image banner CTA buttons and the enquiry badge on the homepage point to defunct language sub-routes that trigger 500 Internal Server Errors on the server:
   - "About Us" button (`images/HomePage/AboutUsButton.png`) links to `en/about-us.html` (HTTP 500)
   - "Shop Online" button (`images/HomePage/OnlineShopButton.png`) links to `en/buy-car-spares-online.html` (HTTP 500)
   - "Contact Us" button (`images/HomePage/ContactUsButton.png`) links to `en/contact-helmut-spares.html` (HTTP 500)
   - "Send Us An Enquiry" badge (`images/HomePage/SendUsAnEnquiryBadge.jpg`) links to `en/contact-helmut-spares.html` (HTTP 500)
2. **Dead Anchor Links (`href="http://"`) on Graphics:**
   Several decorative section separators and banner images are wrapped in empty anchor tags pointing to `http://`:
   - `images/page-banners/welcom-static-banner.jpg`
   - `images/HomePage/SectionBreakLinesStar.jpg`
   - `images/HomePage/Triangle.jpg`
   - `images/HomePage/stars.jpg`
   - `images/HomePage/SectionBreakLines.jpg`
3. **VirtueMart "404" Category Alias Anomaly:**
   VirtueMart's default category SEF alias was configured as "404", resulting in valid product URLs mirroring under `/buy-vw-beetle-spares-parts-online/404/[product-slug]-detail`.
4. **Empty Category (Orphan/Dead End):**
   - `/buy-vw-beetle-spares-parts-online/accessories` is completely empty and displays "No records found."

---

## 3. Page-by-Page Content

### 3.1 Home Page (/)
- **URL Path:** `/` (`index.html`)
- **`<title>`:** `Helmut Spares - VW, Beetle, and Audi Parts, Spares and Accessories`
- **Meta Description:** `Helmut Spares - VW, Beetle, and Audi Parts, Spares and Accessories`
- **Heading Outline:**
  - H1: *None present on page*
  - H5: `Recently Added Items:` (Cart flyout dropdown)
  - H3: `Cart is Empty` (Cart flyout dropdown)
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Hero / Welcome Area:**
  > Our Customers, our Suppliers, our People, that’s what we’re about!
  > 
  > Specialising in all VW and Audi parts and accessories, old and new, let us look after you.
  > 
  > From spark plugs to bumpers, relays to fuel pumps, shocks to filters, we’ve got you covered.
  > 
  > One stop-shop for your vintage VW Beetle parts.
  > 
  > **Enquiry Form Section:**
  > Name
  > Surname
  > Email Address
  > Contact Number
  > Enquiry
  > Please complete captcha
  > [next] [back] [submit]
  > *Form auto-response copy:*
  > Thank you for your enquiry. We value all our loyal clients and get back to you as soon as possible.
  > Enjoy your day!
  > Best Regards,
  > The Aura Bean Team
  > Please turn on javascript to submit your data. Thank you!
  > 
  > **Footer Section:**
  > Physical Address:
  > 19 Rhodes Avenue
  > Vereeniging
  > 1930
  > 
  > Telephone Numbers:
  > 016 421 3559
  > 016 455 1520
  > 
  > Email Address:
  > info@helmutspares.co.za
  > 
  > Proudly Designed by Bunnypants Graphic & Web Design Studio
- **Buttons and CTAs:**
  - Top navigation items -> corresponding pages
  - Graphic button "About Us" (`AboutUsButton.png`) -> `en/about-us.html` (BROKEN 500)
  - Graphic button "Shop Online" (`OnlineShopButton.png`) -> `en/buy-car-spares-online.html` (BROKEN 500)
  - Graphic button "Contact Us" (`ContactUsButton.png`) -> `en/contact-helmut-spares.html` (BROKEN 500)
  - Graphic badge "Send Us An Enquiry" (`SendUsAnEnquiryBadge.jpg`) -> `en/contact-helmut-spares.html` (BROKEN 500)
  - "Stalk Us On Instagram" button -> `https://www.instagram.com/helmutspares/`
  - "Tweet Us On Twitter" button -> `https://twitter.com/helmutspares`
  - PayFast badge -> `http://www.payfast.co.za/`
  - Form submit button: `submit`
- **Images Used:** `Logo.jpg`, `welcom-static-banner.jpg`, `AboutUsButton.png`, `OnlineShopButton.png`, `ContactUsButton.png`, `SendUsAnEnquiryBadge.jpg`, `StalkUsOnInstagramButton.jpg`, `TweetUsOnTwitterButton.jpg`, `payfast.jpg`, `SectionBreakLinesStar.jpg`, `Triangle.jpg`, `stars.jpg`, `SectionBreakLines.jpg`, `18.jpg`, `1a.jpg`, `25.jpg`, `26.jpg`, `27.jpg`, `7.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Completely missing an H1 tag.
  - All primary visual CTA image buttons link to `/en/...` URLs which throw 500 errors.
  - Decorative banners link to `http://`.
  - Form auto-reply contains residual template text: "The Aura Bean Team" (a coffee roastery).
  - Typo in banner asset filename: `welcom-static-banner.jpg`.
  - Informal/unprofessional social button copy ("Stalk Us On Instagram").

---

### 3.2 About Us (/about-helmut-spares)
- **URL Path:** `/about-helmut-spares` (`about-helmut-spares.html`)
- **`<title>`:** `About Helmut Motor Spares - New and Vintage, Classic VW Motor Spares`
- **Meta Description:** `About Helmut Motor Spares. About Helmut Motor Spares - New and Vintage, Classic VW Motor Spares in the Vaal Triangle`
- **Heading Outline:**
  - H1: *None present on page*
  - H5: `Recently Added Items:` (Cart flyout dropdown)
  - H3: `Cart is Empty` (Cart flyout dropdown)
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Main Body Copy:**
  > Established in 1975, Helmut Motor Spares has grown into one of the market leaders in the motor spares industry. Highest quality products, most competitive prices and efficient service are what this business is built on.
  > 
  > Long term relationships with our customers built on trust, reliability and affordability is what sets us apart from our competition.
  > 
  > We specialise in all VW and Audi parts and accessories. New as well as vintage models. We carry an extensive range of old VW Beetle and Beach Buggy parts. We deliver country wide, to your door.
  > 
  > With over 15000 parts in stock, if you are interested in a full beetle restoration, or just looking for a few odds and ends, we got it all. Our products are of the highest quality and our knowledgeable staff are always on hand to assist you.
  > 
  > We as Helmut Motor Spares are taking your shopping experience to a whole new level. Buying spares has never been easier. With our new online store, you can purchase all the parts you need from the leisure of your home at a time which best suits you!
  > 
  > Let us be there for you and your VW and Audi.
  > 
  > **Embedded Enquiry Form Copy:**
  > Name | Surname | Email Address | Contact Number | Enquiry
  > Please complete captcha
  > [next] [back] [submit]
  > Thank you for your enquiry. We value all our loyal clients and get back to you as soon as possible.
  > Enjoy your day!
  > Best Regards,
  > The Aura Bean Team
  > 
  > **Footer Area:**
  > Physical Address: 19 Rhodes Avenue, Vereeniging, 1930
  > Telephone Numbers: 016 421 3559 / 016 455 1520
  > Email Address: info@helmutspares.co.za
  > Proudly Designed by Bunnypants Graphic & Web Design Studio
- **Buttons and CTAs:**
  - Standard top and footer navigation
  - Form submit button
  - Social buttons (Instagram, Twitter)
- **Images Used:** `Logo.jpg`, `about-helmut-spares-banner.jpg`, `AboutUsButton.png`, `OnlineShopButton.png`, `ContactUsButton.png`, `SendUsAnEnquiryBadge.jpg`, `StalkUsOnInstagramButton.jpg`, `TweetUsOnTwitterButton.jpg`, `payfast.jpg`, `SectionBreakLines.jpg`, `SectionBreakLinesStar.jpg`, `Triangle.jpg`, `stars.jpg`, `12.jpg`, `14.jpg`, `16.jpg`, `22.jpg`, `29.jpg`, `8.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Missing H1 tag; no subheadings (H2/H3) structuring the story.
  - Informal grammar: "...we got it all" instead of "we have got it all" or "we have it all".
  - Repeated full contact form and repeated home page CTA block directly beneath the about copy, cluttering the page.
  - Same "The Aura Bean Team" auto-reply text.

---

### 3.3 Beetle Price List (/beetle-price-list)
- **URL Path:** `/beetle-price-list` (`beetle-price-list.html`)
- **`<title>`:** `Beetle Price List - Beetle Restoration Price List`
- **Meta Description:** `VW Beetle Price List - Beelte Restoration Price List` *(Note typo: "Beelte")*
- **Heading Outline:**
  - H1: *None present on page*
  - H5: `Recently Added Items:` (Cart flyout dropdown)
  - H3: `Cart is Empty` (Cart flyout dropdown)
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Main Body / Notice Copy (All-Caps in original):**
  > ARE YOU RESTORING YOUR VW BEETLE AND NOT SURE WHERE TO START?
  > 
  > OUR DETAILED BEETLE PRICE LIST WILL SERVE AS A PERFECT GUIDE FOR YOU AND YOUR RESTORATION PROJECT.
  > 
  > DETAILED BEETLE PRICE LISTS ARE EMAILED UPON REQUEST, PROVIDE US WITH YOUR NAME, CONTACT NUMBER AND EMAIL ADDRESS SHOULD YOU WISH TO RECEIVE A DETAILED BEETLE PRICE LIST.
  > 
  > Submit the form below to receive and subscribe to our Beetle Parts Pricelist.
  > 
  > **Subscription Form Fields:**
  > Name & Surname
  > Email Address
  > Contact Number
  > [Receive]
  > Please turn on javascript to submit your data. Thank you!
  > 
  > **Footer Area:**
  > Physical Address: 19 Rhodes Avenue, Vereeniging, 1930
  > Telephone Numbers: 016 421 3559 / 016 455 1520
  > Email Address: info@helmutspares.co.za
  > Proudly Designed by Bunnypants Graphic & Web Design Studio
- **Buttons and CTAs:**
  - Button: `Receive` (Form submit button to receive price list email)
  - Social buttons (Instagram, Twitter)
- **Images Used:** `Logo.jpg`, `beetle-pricelist-banner.jpg`, `get-your-pricelist.jpg`, `StalkUsOnInstagramButton.jpg`, `TweetUsOnTwitterButton.jpg`, `payfast.jpg`, `SectionBreakLines.jpg`, `Triangle.jpg`, `stars.jpg`, `12.jpg`, `14.jpg`, `16.jpg`, `22.jpg`, `29.jpg`, `8.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Meta description contains an overt typo: "Beelte Restoration Price List".
  - The page provides **no actual price list or downloadable document**; it is solely an email capture squeeze page.
  - Body text is shouting in ALL-CAPS.
  - Missing H1 tag.

---

### 3.4 Shop Online / Catalog (/buy-vw-beetle-spares-parts-online)
- **URL Path:** `/buy-vw-beetle-spares-parts-online` (`buy-vw-beetle-spares-parts-online.html`)
- **`<title>`:** `Welcome to Helmut Spares`
- **Meta Description:** `. Read more` *(Broken/incomplete meta description)*
- **Heading Outline:**
  - H1: *Empty string `<h1></h1>`*
  - H5: `Recently Added Items:`
  - H3: `Cart is Empty`
  - H2: Product titles (18 items per page, e.g. `VW Beetle / Beach Buggy Alternator`, etc.)
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Store Controls & Sorting:**
  > Sort by:
  > Product Name +/-
  > Sorted product name
  > Product Price
  > Product Weight
  > Product Packaging
  > Ordering
  > 
  > Results 1 - 18 of 69
  > Display # [18]
  > 
  > **Product Listing Cards (Example items):**
  > [Thumbnail Image]
  > Product Title: [e.g. VW Beetle / Beach Buggy Alternator]
  > Price: R 1999,00
  > [Add to Cart]
  > [Product details]
  > 
  > **Pagination Controls:**
  > Start | Prev | 1 | 2 | 3 | 4 | Next | End
  > 
  > **Footer Area:**
  > Physical Address: 19 Rhodes Avenue, Vereeniging, 1930
  > Telephone Numbers: 016 421 3559 / 016 455 1520
  > Email Address: info@helmutspares.co.za
- **Buttons and CTAs:**
  - `Add to Cart` (Button on each product card)
  - `Product details` (Link to individual product page)
  - Sorting and pagination links
- **Images Used:** `Logo.jpg`, 18 product thumbnails per page (e.g. `alternator-beetle7.jpg`, `axle-booth4.jpg`, etc.), `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Meta description is completely broken (`. Read more`).
  - H1 tag is rendered empty (`<h1></h1>`).
  - Page title is non-descriptive (`Welcome to Helmut Spares` instead of `VW Beetle Spares & Parts Online Store`).
  - Lacks category filtering sidebar (only the empty "Accessories" sub-route exists).

---

### 3.5 Category: Accessories (/buy-vw-beetle-spares-parts-online/accessories)
- **URL Path:** `/buy-vw-beetle-spares-parts-online/accessories` (`accessories.html`)
- **`<title>`:** `Accessories`
- **Meta Description:** *None*
- **Heading Outline:**
  - H1: *None*
  - H5: `Recently Added Items:`
  - H3: `Cart is Empty`
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Catalog View:**
  > Accessories
  > Sort by: Product Name +/-, Sorted product name, Product Price, Product Weight, Product Packaging, Ordering
  > 
  > **Status Message:**
  > No records found.
  > 
  > Page display options: 15, 18, 30, 60, 150
  > 
  > **Footer Area:**
  > Standard footer navigation
- **Buttons and CTAs:** Standard navigation only.
- **Images Used:** `Logo.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Empty category page showing "No records found."
  - Serves no user purpose in its current state.

---

### 3.6 Contact Us (/contact-helmut-spares)
- **URL Path:** `/contact-helmut-spares` (`contact-helmut-spares.html`)
- **`<title>`:** `Contact | Helmut Spares - VW Spares Shop`
- **Meta Description:** `Contact Helmut Motor Spares, Vaal Triangle. Now in Vereeniging and Vanderbijlpark`
- **Heading Outline:**
  - H1: *None present on page*
  - H5: `Recently Added Items:`
  - H3: `Cart is Empty`
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Home | About Us | Beetle Price List | Shop Online | Contact Us
  > Recently Added Items:
  > Cart is Empty
  > 
  > **Contact Details Section:**
  > CONTACT DETAILS:
  > 19 Rhodes Avenue
  > Vereeniging
  > 1930
  > Tel: 016 421 3559 / 016 455 1520
  > Email : info@helmutspares.co.za
  > 
  > **Trading Hours Section:**
  > TRADING HOURS:
  > Monday to Friday 9:00am - 5pm
  > Fridays 9:00am - 12pm, 2pm – 5pm
  > Saturdays 9:00am – 1pm
  > 
  > **Contact Form Section:**
  > Name
  > Surname
  > Email Address
  > Contact Number
  > Enquiry
  > Please complete captcha
  > [next] [back] [submit]
  > Thank you for your enquiry. We value all our loyal clients and get back to you as soon as possible.
  > Enjoy your day!
  > Best Regards,
  > The Aura Bean Team
  > Please turn on javascript to submit your data. Thank you!
  > 
  > **Footer Area:**
  > Physical Address: 19 Rhodes Avenue, Vereeniging, 1930
  > Telephone Numbers: 016 421 3559 / 016 455 1520
  > Email Address: info@helmutspares.co.za
  > Proudly Designed by Bunnypants Graphic & Web Design Studio
- **Buttons and CTAs:**
  - Button: `submit`
  - Social buttons (Instagram, Twitter)
- **Images Used:** `Logo.jpg`, `contact-banner.jpg`, `refresh-captcha.png`, `SendUsAnEnquiryBadge.jpg`, `StalkUsOnInstagramButton.jpg`, `TweetUsOnTwitterButton.jpg`, `payfast.jpg`, `SectionBreakLines.jpg`, `SectionBreakLinesStar.jpg`, `Triangle.jpg`, `stars.jpg`, `12.jpg`, `14.jpg`, `16.jpg`, `22.jpg`, `29.jpg`, `8.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - Major geographical inconsistency: The meta description advertises "Now in Vereeniging and Vanderbijlpark", but the page lists **only** the Vereeniging address. No Vanderbijlpark location exists on the site.
  - Residual coffee roastery auto-response ("The Aura Bean Team").
  - Friday trading hours notation is slightly confusing ("Monday to Friday 9:00am - 5pm" directly followed by "Fridays 9:00am - 12pm, 2pm – 5pm").
  - Missing H1 tag; no interactive Google Map embed.

---

### 3.7 Shopping Cart & Checkout (/index.php?option=com_virtuemart&view=cart)
- **URL Path:** `/index.php?option=com_virtuemart&view=cart` (`index6e53.html`)
- **`<title>`:** `Shopping cart`
- **Meta Description:** `Helmut Spares - VW, Beetle, and Audi Parts, Spares and Accessories`
- **Heading Outline:**
  - H1: `Cart`
  - H6: `Bill To`
  - H6: `Ship To`
  - H4: `Shipment Method`
  - H3: `Please select a shipment method`
  - H2: `Terms of service`
- **Visible Body Copy (Verbatim):**
  > **Header Area:**
  > Standard navigation | Recently Added Items: Cart is Empty
  > 
  > **Cart & Checkout Area:**
  > Cart
  > Bill To
  > Ship To
  > Shipment Method: Please select a shipment method
  > 
  > **Login / Registration Box:**
  > Username
  > Password
  > Remember me [ ]
  > [Login]
  > 
  > **Checkout Fields:**
  > Customer Note: [textarea]
  > Coupon Code: [input] [Save]
  > Terms of Service Agreement: [ ] Click here to read terms of service and check the box to accept them.
  > 
  > **Complete Terms of Service (Verbatim):**
  > Terms of service
  > Delivery:
  > Please note that Aura Bean Roastery only delivers within the borders of South Africa.
  > Delivery takes between 3 - 5 working days depending on where you are situated in South Africa.
  > Aura Bean Roastery does not deliver on weekends and public holidays.
  > 
  > Returns Policy:
  > The provision of goods and services by Aura Bean Roastery is subject to availability. In cases of unavailability, Aura Bean Roastery will refund the client in full within 30 days. Cancellation of orders by the client will attract a 10% administration fee.
  > 
  > What if I want to return my purchase?
  > You are welcome to return your purchase within 7 days from the invoice date. Please inform us within 7 days of delivery of your intention to return the item. Items must be returned in their original packaging and in a new, unused condition.
  > 
  > Please note the following regarding returns:
  > We will arrange collection of the items with our couriers. You will be credited for the value of the items minus the courier cost of returning the items to Aura Bean Roastery.
  > Alternatively you may arrange to deliver the items yourself to Aura Bean Roastery.
  > Please package the item safely to ensure no damage occurs during transit.
  > You will be responsible for obtaining tracking reference details and proof of delivery for the shipment failing which loss or damage will be for your account.
  > 
  > What to do if my order is incomplete, incorrect or damaged?
  > If your order is incomplete, incorrect, or damaged, please contact us via email [protected email] or call +27 71 310 0543. Our Customer Service hours are Monday-Friday 9 a.m. – 5 p.m. PST
  > 
  > Payment Options and Pricing
  > All transactions will be processed in South African Rands (ZAR).
  > Aura Bean Roastery endeavours to offer you competitive prices on current products; your total order price will include the price of the purchase plus any applicable sales tax (VAT) and shipping charges (on the day of shipping).
  > Aura Bean Roastery reserves the right to change pricing at any time without prior notice.
  > If a payment is not received or payment method is declined, the buyer forfeits the ownership of any items purchased. If no payment is received, no items will be shipped. Items will stay the property of Aura Bean Roastery until full payment has been received.
  > 
  > Security Policy
  > 1. Virtual Card Services process all credit card transactions. All credit card transactions are 128 bit Secure Socket Layers (SSL) encrypted. The company registration documents and the site’s registered domain name are checked and verified by Thawte, ensuring the cardholder and merchant that nobody can impersonate VCS to obtain confidential information.
  > 2. Virtual Card Services is committed to providing secure online services. All encryption complies with international standards. Encryption is used to protect the transmission of personal information when completing online transactions. Virtual Card Services Internet servers are protected by firewalls and intrusion detection systems.
  > 3. The Merchant does not have access to credit details.
  > 4. Virtual Card Services continually reviews and enhances its security in line with technological changes.
  > 
  > Monitoring
  > We have the right, but not the obligation, to monitor any activity and content associated with the Website. We may investigate any reported violation of these Terms and Conditions or complaints and take any action that we deem appropriate...
  > 
  > Law
  > The Terms and Conditions will be exclusively governed by and construed in accordance with the laws of the Republic of South Africa whose Courts will have exclusive jurisdiction in any dispute, save that we have the right, at our sole discretion, to commence and pursue proceedings in alternative jurisdictions.
  > The seller is not responsible for any health or safety concerns once the buyer has received the item. If any harm is incurred from the items purchased by the buyer, the seller shares no responsibility. The designs and printing on packages remain the property of Aura Bean Roastery and may not be reproduced or copied in any way!
  > 
  > Intellectual Property
  > The Site and all of its original content are the sole property of Aura Bean Roastery and are, as such, fully protected by the appropriate international copyright and other intellectual property rights laws.
  > 
  > Changes to This Agreement
  > Aura Bean Roastery reserves the right to modify, add to or remove from portions or the whole of these Terms of Service at any time...
  > 
  > Consent
  > I understand that all the designs and trademarks are registered to Aura Bean Roastery (Pty) Ltd. and hereby accept the terms and conditions. I undertake not to copy/duplicate the trademarks and designs directly or indirectly in anyway and understand the legal implications thereof. Should I be found to be in violation of this agreement I understand that I will be held liable for all legal costs incurred by Aura Bean Roastery for any civil action or any legal action deemed necessary against me.
  > 
  > Contact Us
  > If you have any questions about this Agreement, please feel free to contact us at [protected email]
  > 
  > [Check Out Now]
- **Buttons and CTAs:**
  - `Check Out Now` (Proceed to payment)
  - `Login` (Customer login)
  - `Save` (Coupon code application)
- **Images Used:** `Logo.jpg`, `footer.jpg`, `blank-footer.png`.
- **Weaknesses & Notes:**
  - **Severe Legal & Brand Pollution:** The entire legal Terms of Service, refund policy, intellectual property declaration, customer service phone number (`+27 71 310 0543`), customer support operating hours ("9 a.m. – 5 p.m. PST"), and company entity name ("Aura Bean Roastery (Pty) Ltd.") belong to an entirely unrelated coffee company.

---

### 3.8 Complete Product Catalog (69 Unique Products)
Every single unique product listed on the site, with verbatim title, price, body copy, and image filename:

| # | Product Name (H2) | URL Slug | Price | Verbatim Description / Copy | Image Filename | CTA Button |
|---|-------------------|----------|-------|-----------------------------|----------------|------------|

| 1 | VW Beetle 5 Piece Custom Carpet Set | `vw-beetle-5-piece-custom-carpet-set-detail` | R 2495,00 | VW Beetle 5 piece custom carpet set | Perfectly cut out for the pedals, seats, etc | Custom fit | Original charcoal ribbed fabric, same fabric and colour as when the first beetles were first made! | Absolute must for your restoration project | Top of the range fabric | `beetle-custom-interior-carpet-set6.jpg` | Add to Cart |
| 2 | VW Beetle 7 Piece Chrome Beading Set | `vw-beetle-7-piece-chrome-beading-set-detail` | R 1195,00 | 7 piece beading set | Includes bonnet beading | High quality chrome | 1968-1978 | Thin beadings | `beading-set4.jpg` | Add to Cart |
| 3 | VW Beetle Accelerator Cable | `vw-beetle-accelerator-cable-detail` | R 199,00 | VW beetle accelerator cable | 1960-1978 | High quality cable | `acc-cable-beetle4.jpg` | Add to Cart |
| 4 | VW Beetle / Beach Buggy Alternator | `vw-beetle-beach-buggy-alternator-detail` | R 1999,00 | VW Beetle / Beach Buggy alternator | Brand new alternators | High quality | `alternator-beetle7.jpg` | Add to Cart |
| 5 | VW Beetle / Beach Buggy Axle Boot Kit | `vw-beetle-beach-buggy-axle-boot-kit-detail` | R 199,00 | VW Beetle / Beach Buggy axle boot kit | Sold @ R129.00 per kit | Includes screws, washers, clamp. etc | High quality axle boot kit | `axle-booth4.jpg` | Add to Cart |
| 6 | VW Beetle / Beach Buggy Complete Distributor | `vw-beetle-beach-buggy-complete-distributor-detail` | R 795,00 | VW Beetle / Beach Buggy complete distributor | includes : Distributor cap, points and condensor | Distributor of the highest quality | `beetle-distributor4.jpg` | Add to Cart |
| 7 | VW Beetle / Beach Buggy Crank Oil Seal | `vw-beetle-beach-buggy-crank-oil-seal-detail` | R 89,00 | VW Beetle / Beach Buggy crank oil seal | Oil seal of the highest quality | Sold @ R89.00 each | `crank-seal-beetle3.jpg` | Add to Cart |
| 8 | VW Beetle / Beach Buggy Distributor Cap | `vw-beetle-beach-buggy-distributor-cap-detail` | R 99,00 | VW Beetle / Beach Buggy distributor cap | Distributor cap only | High quality cap | `beetle-distributor-cap3.jpg` | Add to Cart |
| 9 | VW Beetle / Beach Buggy Electronic Distributor | `vw-beetle-beach-buggy-electronic-distributor-detail` | R 995,00 | VW Beetle / Beach Buggy electronic distributor | New electronic distributor | No longer use points and condensor | Sold @ R995.00 for the electronic distributor only, does not include the coil, wiring, module, etc | `electronic-distributor-beetle2.jpg` | Add to Cart |
| 10 | VW Beetle / Beach Buggy Electronic Distributor Set | `vw-beetle-beach-buggy-electronic-distributor-set-detail` | R 1499,00 | VW Beetle / Beach Buggy electronic distributor set | Complete electronic distributor set | Includes : Electronic Distributor, Distributor Cap, Wiring harness, coil, module | High quality system | `electronic-distributor-beetle93.jpg` | Add to Cart |
| 11 | VW Beetle / Beach Buggy Front Brake Shoes Front | `vw-beetle-beach-buggy-front-brake-shoes-front-detail` | R 399,00 | VW Beetle / Beach Buggy Front Brake Shoes Front | ATE brake shoes | Brake shoes of the highest quality | `beetle-brake-shoes-front7.jpg` | Add to Cart |
| 12 | VW Beetle / Beach Buggy Fuel Pump Alternator Model | `vw-beetle-beach-buggy-fuel-pump-detail` | R 399,00 | VW Beetle / Beach Buggy fuel pump alternator model | High quality fuel pump | `beetle-fuel-pump-alternator2.jpg` | Add to Cart |
| 13 | VW Beetle / Beach Buggy Generator | `vw-beetle-beach-buggy-generator-detail` | R 2999,00 | VW Beetle / Beach Buggy generator | Brand new generators | High Quality | `beetle-generator7.jpg` | Add to Cart |
| 14 | VW Beetle / Beach Buggy King Pin and Link Pin Set | `vw-beetle-beach-buggy-king-pin-and-link-pin-set-detail` | R 1199,00 | VW Beetle / Beach Buggy king pin and link pin set | Sold in a set, king pins and link pins | High quality set | `beetle-king-pin-link-pin7.jpg` | Add to Cart |
| 15 | VW Beetle / Beach Buggy Pan Cake Air Filter + Housing | `vw-beetle-beach-buggy-pan-cake-air-filter-housing-detail` | R 379,00 | VW Beetle / Beach Buggy Pan Cake Air Filter | Includes housing | `beetle-pancake-airfilter6.jpg` | Add to Cart |
| 16 | VW Beetle / Beach Buggy Plug Wire Set | `vw-beetle-beach-buggy-plug-wire-set-detail` | R 299,00 | VW Beetle / Beach Buggy plug wire set | Full set of plug wires | High quality | `beetle-plug-wires2.jpg` | Add to Cart |
| 17 | VW Beetle / Beach Buggy Rear Brake Shoes | `vw-beetle-beach-buggy-rear-brake-shoes-detail` | R 399,00 | VW Beetle / Beach Buggy Rear Brake Shoes | ATE Brake Shoes | Rear linings | Brake shoes of the highest quality | `beetle-brake-shoes-rear2.jpg` | Add to Cart |
| 18 | VW Beetle / Beach Buggy Replacement Carb | `vw-beetle-beach-buggy-replacement-carb-detail` | R 2199,00 | VW Beetle / Beach Buggy replacement carb | High quality replacement carb | Beetle / Beach Buggy 1600 | 1965-1978 | `beetle-carb-replacement4.jpg` | Add to Cart |
| 19 | VW Beetle / Beach Buggy Starter | `vw-beetle-beach-buggy-starter-detail` | R 1799,00 | VW Beetle / Beach Buggy Starter | Starters are brand new and of the highest quality | `beetle-starter-front1.jpg` | Add to Cart |
| 20 | VW Beetle / Beach Buggy Wiper Blades | `vw-beetle-beach-buggy-wiper-blades-detail` | R 129,00 | VW Beetle / Beach Buggy Wiper Blades | High quality blades | Sold @ R129.00 for the set of 2 | `beetle-wiper-blades5.jpg` | Add to Cart |
| 21 | VW Beetle Beading Clips | `vw-beetle-beading-clips-detail` | R 349,00 | High quality beading clips | Includes washer | Sold @ R278.00 for 40 clips | Pack of 40 | `beading-clip.jpg` | Add to Cart |
| 22 | VW Beetle Body To Chasis Rubber | `vw-beetle-body-to-chasis-rubber-detail` | R 695,00 | 1965 - 1978 | VW Beetle body to chasis rubber / seal | High quality rubber | `beetle-body-chasis-rubber4.jpg` | Add to Cart |
| 23 | VW Beetle Chrome Bumper Front With Indicator Cut Out | `vw-beetle-chrome-bumper-front-with-indicator-cut-out-detail` | R 2499,00 | VW Beetle chrome bumper front with indicator cut out | High quality chrome | `beetle-bumper-front-indicator-cutouts3.jpg` | Add to Cart |
| 24 | VW Beetle Chrome Bumper Front Without Indicator Cut Out | `vw-beetle-chrome-bumper-front-without-indicator-cut-out-detail` | R 2499,00 | VW Beetle chrome bumper front without indicator cut out | High quality chrome | No cut out holes for the indicator, solid bumper | `beetle-chrome-bumper-front8.jpg` | Add to Cart |
| 25 | VW Beetle Chrome Door Handle With Keys | `vw-beetle-chrome-door-handle-with-keys-detail` | R 349,00 | Trigger type, includes keys, high quality chrome. | `beetle-chrome-door-handles8.jpg` | Add to Cart |
| 26 | VW Beetle Chrome Door Mirror, Left Side | `vw-beetle-chrome-door-mirror,-right-side-15-detail` | R 449,00 | Screw in type, high quality chrome, includes washer. | `beetle-chrome-door-mirror-right21.jpg` | Add to Cart |
| 27 | VW Beetle Chrome Door Mirror, Right Side | `vw-beetle-chrome-door-mirror,-right-side-detail` | R 449,00 | Screw in type, high quality chrome, includes washer. | `beetle-chrome-door-mirror-right23.jpg` | Add to Cart |
| 28 | VW Beetle Chrome Rear Bumper | `vw-beetle-chrome-rear-bumper-detail` | R 2499,00 | VW Beetle chrome rear bumper | High quality chrome | Solid bumper | `beetle-bumper-rear4.jpg` | Add to Cart |
| 29 | VW Beetle Chrome Window Trim Frame Left Side | `vw-beetle-chrome-window-frame-1-detail` | R 1999,00 | VW Beetle Chrome Window Trim Frame Left Side | Includes window scrapper rubber | Sold @ R1895.00 per side | `beetle-chrome-door-mirror-left.jpg` | Add to Cart |
| 30 | VW Beetle Chrome Window Trim Frame Right Hand | `vw-beetle-chrome-window-frame-detail` | R 1999,00 | VW Beetle Chrome Window Trim Frame | Includes window scrapper rubber | Right hand side | Sold @ R1895.00 per side | `beetle-chrome-window-frame-right7.jpg` | Add to Cart |
| 31 | VW Beetle Clutch Cable | `vw-beetle-clutch-cable-detail` | R 249,00 | VW Beetle Clutch Cable | 1960-1978 | High quality clutch cable | `beetle-clutch-cable6.jpg` | Add to Cart |
| 32 | VW Beetle Custom Boot Carpet | `vw-beetle-custom-boot-carpet-detail` | R 1499,00 | VW Beetle custom boot carpet | Perfectly cut out for the boot | Custom fit | Original charcoal ribbed fabric, same fabric and colour as when the first beetles were first made! | Absolute must for your restoration project | Top of the range fabric | `beetle-boot-carpet9.jpg` | Add to Cart |
| 33 | VW Beetle Door Panel Clips | `vw-beetle-door-panel-clips-detail` | R 519,60 | VW beetle door panel clips | Sold in pack of 40 | Sold @ R519.60 for 40 clips | High quality clips | `beetle-door-panel-clips2.jpg` | Add to Cart |
| 34 | VW Beetle Door Rubber Set | `vw-beetle-door-rubber-set-detail` | R 995,00 | 1965-1978 | VW Beetle door rubber set | Custom fit | Both doors | `beetle-door-rubbers9.jpg` | Add to Cart |
| 35 | VW Beetle Engine Lid Rubber | `vw-beetle-engine-lid-rubber-detail` | R 149,00 | 1965-1978 | VW Beetle engine lid rubber / seal | Black | `beetle-engine-rubber-thin9.jpg` | Add to Cart |
| 36 | VW Beetle Fender Indicator Lens | `vw-beetle-fender-indicator-lens-detail` | R 329,00 | VW Beetle Fender Indicator Lens | Lens only | Orange | 1965-1978 | `beetle-indicator-lens4.jpg` | Add to Cart |
| 37 | VW Beetle Fender Indicator Unit | `vw-beetle-fender-indicator-unit-detail` | R 599,00 | VW Beetle fender indicator unit | Complete unit | High quality | 1965-1978 | Sold @ R599.00 each | `beetle-indicator-unit-complete4.jpg` | Add to Cart |
| 38 | VW Beetle Fender Rubber Set | `vw-beetle-fender-rubber-set-detail` | R 699,00 | 1960-1975 | Fender Rubber Set | All four fenders | Available in black only | `beetle-fender-rubber7.jpg` | Add to Cart |
| 39 | VW Beetle Front Boot Rubber | `vw-beetle-front-boot-rubber-detail` | R 449,00 | 1965-1978 | VW Beetle front bonnet rubber / seal | Available in black only | `beetle-boot-rubber-front2.jpg` | Add to Cart |
| 40 | VW Beetle / Beach Buggy Front Wheel Cylinder | `vw-beetle-front-wheel-cyl-detail` | R 229,00 | VW Beetle / Beach Buggy Front Wheel Cylinder Complete | Includes Seals | `beetle-front-wheel-cyl1.jpg` | Add to Cart |
| 41 | VW Beetle Front Windscreen Rubber | `vw-beetle-front-windscreen-rubber-detail` | R 499,00 | VW Beetle front windscreen rubber | Custom windscreen rubber | Perfect fit | `beetle-windscreen-rubber-front5.jpg` | Add to Cart |
| 42 | VW Beetle Fuel Gauge | `vw-beetle-fuel-gauge-detail` | R 699,00 | VW Beetle Fuel Gauge | `beetle-fuel-gauge6.jpg` | Add to Cart |
| 43 | VW Beetle Gear Booth | `vw-beetle-gear-booth-detail` | R 199,00 | VW Beetle Gear Booth | High quality gear booth | `beetle-gear-booth%20(1).jpg` | Add to Cart |
| 44 | VW Beetle Gear Knob | `vw-beetle-gear-knob-detail` | R 120,00 | VW Beetle Gear Knob | Original type gear knob | `beetle-gear-knob5.jpg` | Add to Cart |
| 45 | VW Beetle Handbrake Cable | `vw-beetle-handbrake-cable-detail` | R 299,00 | VW Beetle / Beach Buggy handbrake cable. | Sold @ R299.00 each | High quality cables | `beetle-handbrake-cable8.jpg` | Add to Cart |
| 46 | VW Beetle Handbrake Cover | `vw-beetle-handbrake-cover-detail` | R 599,00 | VW Beetle Handbrake Cover | High quality booth | `beetle-hanfbrake-booth1.jpg` | Add to Cart |
| 47 | VW Beetle Headlight Trimming Plastic | `vw-beetle-headlight-trimming-plastic-detail` | R 329,00 | VW Beetle headlight trimming | Plastic | 1 hole | High quality chrome | Sold @ R195.00 per trim | `beetle-headlight-trims-plastic1.jpg` | Add to Cart |
| 48 | VW Beetle Indicator Switch | `vw-beetle-indicator-switch-detail` | R 399,00 | VW Beetle Indicator Switch | Year 1970-1978 | Black | `beetle-indicator-switch6.jpg` | Add to Cart |
| 49 | VW Beetle Medium Tail Light Lens | `vw-beetle-medium-tail-light-lens-detail` | R 349,00 | VW Beetle medium tail light lens | 1965-1970 | High quality lens | `beetle-medium-tail-lights7.jpg` | Add to Cart |
| 50 | VW Beetle / Beach Buggy Collapsible Push Rod Tubes | `vw-beetle-push-rod-tubes-detail` | R 599,00 | VW Beetle / Beach Buggy Collapsible Push Rod Tubes | Includes spring and seals | Sold @ R269.00 per tube | `beetle-push-rod-collapsable7.jpg` | Add to Cart |
| 51 | VW Beetle Rear Engine Rubber / Seal | `vw-beetle-rear-engine-rubber-detail` | R 449,00 | 1965-1978 | VW Beetle rear engine rubber / seal | Engine compartment seal | Thick engine rubber at the back of the engine | Available in black | `beetle-engine-rubber-thick7.jpg` | Add to Cart |
| 52 | VW Beetle / Beach Buggy Rear Wheel Cylinder | `vw-beetle-rear-wheel-cyl-detail` | R 229,00 | VW Beetle / Beach Buggy Rear Wheel Cylinder Complete | Includes Seals | `beetle-rear-wheel-cyl5.jpg` | Add to Cart |
| 53 | VW Beetle Rear Window Rubber Set | `vw-beetle-rear-window-rubber-set-detail` | R 599,00 | VW Beetle Rear, Side Window Rubbers | Non pop out side window rubber set | Set of 2 for both side windows | High quality rubber | `beetle-rear-window-rubber-set3.jpg` | Add to Cart |
| 54 | VW Beetle Rear Windscreen Rubber | `vw-beetle-rear-windscreen-rubber-detail` | R 599,00 | VW Beetle Rear Windscreen Rubber / Seal | Perfect fit | Available in black | `beetle-windscreen-rubber-rear7.jpg` | Add to Cart |
| 55 | VW Beetle Running Boards / Side Steps | `vw-beetle-running-boards-side-steps-detail` | R 2999,00 | VW Beetle running boards / side steps | Heavy duty | includes 2x chrome beadings per running board | includes washers and nuts | Sold @ R2999 for a set of 2 | `beetle-runningboards3.jpg` | Add to Cart |
| 56 | VW Beetle Shock Absorbers | `vw-beetle-shock-absorbers-detail` | R 699,00 | VW Beetle / Beach Buggy Shock Absorbers | Shocks of the highest quality | Gabriel Gas Ryder | Sold @ R699.00 per shock | `beetle-shocks3.jpg` | Add to Cart |
| 57 | VW Beetle / Beach Buggy Mahle Sleeve Kit | `vw-beetle-sleeve-kit-detail` | R 5499,00 | VW Beetle / Beach Buggy Mahle Sleeve Kit Complete | Includes pistons, rings, sleeves, gudgeon pins | Standard size, 85.5mm | Mahle Original | `beetle-sleeve-kit1.jpg` | Add to Cart |
| 58 | VW Beetle Small Tail Light Lens | `vw-beetle-small-tail-light-lens-detail` | R 299,00 | VW Beetle small tail light lens | Older model beetle | 1958-1964 | Small lens | High quality lens | Sold @ R395.00 per lens, lens only and not a complete unit | `beetle-small-tail-light%20lens2.jpg` | Add to Cart |
| 59 | VW Beetle Speedometer Cable | `vw-beetle-speedometer-cable-detail` | R 299,00 | VW Beetle Speedo Cable | High Quality Cable | 1965-1978 | `beetle-speedo-cable5.jpg` | Add to Cart |
| 60 | VW Beetle Stainless Steel Tail Pipe | `vw-beetle-stainless-steel-tail-pipe-detail` | R 329,00 | Tail pipe including baffle, stainless steel. | `vw-beetle-chrome-tail-pipes9.jpg` | Add to Cart |
| 61 | VW Beetle Tail Light Big | `vw-beetle-tail-light-1970-big-round-detail` | R 395,00 | VW Beetle, Tail Light, Lens, 1970, Big, Round, | Lens only. | Year 1970-1978 | Elephant Foot | `beetle-tail-light-big-round5.jpg` | Add to Cart |
| 62 | VW Beetle Tail Light Rubber | `vw-beetle-tail-light-rubber-detail` | R 95,00 | VW Beetle tail light rubber | Seal between the body and the base | Black in colour | `beetle-tail-light-rubber7.jpg` | Add to Cart |
| 63 | VW Beetle / Beach Buggy Tie Rod Ends | `vw-beetle-tie-rod-ends-detail` | R 399,00 | VW Beetle / Beach Buggy Tie Rod Ends | Sold in a box of 2 | `beetle-tie-rod-ends5.jpg` | Add to Cart |
| 64 | VW Beetle Window Channeling Set | `vw-beetle-window-channeling-set-detail` | R 999,00 | VW beetle window channeling set | Set of 2, for both front doors | High quality window channeling with steel reinforcement | `beetle-window-channeling7.jpg` | Add to Cart |
| 65 | VW Beetle Window Mechanism | `vw-beetle-window-mechanism-detail` | R 499,00 | VW Beetle window winder mechanism | High quality mechanism | Sold @ R395.00 per side | `beetle-window-winder-mechanism-left2.jpg` | Add to Cart |
| 66 | VW Beetle Window Scrapper Set | `vw-beetle-window-scrappers-detail` | R 699,00 | W Beetle window scrapper | 7 clipV | Sold @ R699.00 for the set of 2 , left and right side included in the set | Black | `beetle-window-scrapper-rubber4.jpg` | Add to Cart |
| 67 | VW Beetle Window Winder Handles | `vw-beetle-window-winder-handles-detail` | R 89,00 | Window winder handle | Black | Sold @ R29.00 per handle | `beetle-window-winder-handle1.jpg` | Add to Cart |
| 68 | VW Beetle Wiper Switch | `vw-beetle-wiper-switch-detail` | R 429,00 | VW Beetle Wiper Switch | Year 1970-1978 | Black | High Quality | `beetle-wiper-switch1.jpg` | Add to Cart |
| 69 | VW Embossed Beetle Chrome Wheelcap | `vw-embossed-beetle-chrome-wheelcap-detail` | R 799,00 | VW embossed, high quality chrome. | `vw-beetle-chrome-wheelcap-vwembossed7.jpg` | Add to Cart |


---

## 4. Business and Contact Details (Consolidated)

### Primary Business Identity
- **Business Name:** Helmut Motor Spares / Helmut Spares
- **Trading Entity:** Unknown (no CIPC company registration number or VAT number disclosed).
- **Residual Third-Party Entity:** "Aura Bean Roastery (Pty) Ltd." (erroneously retained in legal terms).

### Physical Addresses
- **Primary / Only Verified Location:**
  `19 Rhodes Avenue, Vereeniging, 1930, Gauteng, South Africa`
- **Inconsistency Flag:**
  The meta description on `contact-helmut-spares.html` states:
  > *"Contact Helmut Motor Spares, Vaal Triangle. Now in Vereeniging and Vanderbijlpark"*
  However, **no Vanderbijlpark address, phone number, branch details, or map exist anywhere on the website**.

### Telephone Numbers
- **Official Shop Numbers:**
  - Landline 1: `016 421 3559`
  - Landline 2: `016 455 1520`
- **Inconsistency Flag:**
  - Terms of Service telephone: `+27 71 310 0543` (Belongs to Aura Bean Roastery, not Helmut Spares).

### Email Addresses
- **Official Contact Email:** `info@helmutspares.co.za`
- **Cart Terms of Service Email:** Obfuscated by Joomla spambot cloak script (`This email address is being protected from spambots. You need JavaScript enabled to view it.`).

### Trading / Opening Hours
- **In-Store Hours (from Contact page):**
  - **Monday to Thursday:** `9:00am - 5:00pm` *(Derived from "Monday to Friday 9:00am - 5pm" with Friday carve-out)*
  - **Friday:** `9:00am - 12:00pm` and `2:00pm - 5:00pm` *(Closed 12:00pm - 2:00pm)*
  - **Saturday:** `9:00am - 1:00pm`
  - **Sunday & Public Holidays:** UNKNOWN (no hours listed; presumed closed).
- **Inconsistency Flag:**
  - Cart Terms of Service states: *"Customer Service hours are Monday-Friday 9 a.m. – 5 p.m. PST"* (Pacific Standard Time).

### Social Media & External Links
- **Instagram:** `https://www.instagram.com/helmutspares/` (Linked from button graphic "Stalk Us On Instagram")
- **Twitter / X:** `https://twitter.com/helmutspares` (Linked from button graphic "Tweet Us On Twitter")
- **Facebook:** None found / UNKNOWN.
- **WhatsApp:** None found / UNKNOWN.
- **Payment Gateway:** `http://www.payfast.co.za/`
- **Web Designer:** `http://www.bunnypants.co.za/` (Bunnypants Graphic & Web Design Studio)

### Registration, Certifications, and Tax
- **Company Registration Number:** UNKNOWN / Not listed.
- **VAT Number:** UNKNOWN / Not listed.
- **Certifications / Affiliations:** None declared.

### Testimonials and Social Proof
- **Customer Testimonials:** None on the website.
- **Reviews:** VirtueMart review system exists in the code (`vm-ltr-reviews06b3.css`), but no customer reviews or ratings are published on any product.

### Pricing Structure & Currency
- **Currency:** South African Rand (ZAR, formatted as `R xxx,xx`).
- **Price Range:** R 25,00 (gaskets/clamps) up to R 6,995,00 (complete twin carburetor kit).
- **Discrepancy Flags in Product Copy:**
  - **VW Beetle / Beach Buggy Axle Boot Kit:** Listed price tag is `R 199,00`, but verbatim body copy explicitly reads: *"Sold @ R129.00 per kit"*.
  - **VW Beetle / Beach Buggy Replacement Carb:** Listed price is `R 2295,00`, but description states: *"VW Beetle 30/31 Pict Carburetor replacement Brand new carburetors Sold on special @ R1695.00 High quality"*.
  - **VW Beetle 5 Piece Custom Carpet Set:** Listed price is `R 2495,00`.

### Statistics & Marketing Claims Made
- *"Established in 1975"*
- *"Over 15000 parts in stock"*
- *"Market leaders in the motor spares industry"*
- *"We deliver country wide, to your door"*
- *"Long term relationships with our customers built on trust, reliability and affordability"*
- *"One stop-shop for your vintage VW Beetle parts"*

---

## 5. Forms and Functionality

### 1. General Enquiry Form ("Send Us An Enquiry")
- **Pages Used:** Home (`/`), About Us (`/about-helmut-spares`), Contact Us (`/contact-helmut-spares`).
- **Form Engine:** BreezingForms QuickMode (Joomla component `com_breezingforms`).
- **Form Fields:**
  - `ff_nm_name[]`: Name (Text input, required)
  - `ff_nm_surname[]`: Surname (Text input, required)
  - `ff_nm_email[]`: Email Address (Email input, required, client-side email format check)
  - `ff_nm_bfQuickMode6151571[]`: Contact Number (Text input, required)
  - `ff_nm_enquiry[]`: Enquiry (Textarea, required)
  - `bfCaptchaEntry`: Captcha verification code (Securimage PHP captcha, validated via AJAX endpoint `/index.php?lang=&raw=true&option=com_breezingforms&checkCaptcha=true...`)
- **Action Target:** Posts to `/index.php` with hidden fields `ff_form`, `ff_task`, `option=com_breezingforms`.
- **Works Outside Original Host?** **NO**. Hard-tied to Joomla's PHP backend, session tokens, and MySQL database.
- **Residual Template Bug:** Auto-reply modal text reads:
  > *"Thank you for your enquiry. We value all our loyal clients and get back to you as soon as possible. Enjoy your day! Best Regards, The Aura Bean Team"*

### 2. Beetle Price List Subscription Form
- **Pages Used:** Beetle Price List (`/beetle-price-list`).
- **Form Engine:** BreezingForms QuickMode (`com_breezingforms`).
- **Form Fields:**
  - `ff_nm_bfQuickMode7378470[]`: Name & Surname (Text input)
  - `ff_nm_bfQuickMode6947441[]`: Email Address (Email input)
  - `ff_nm_bfQuickMode5108751[]`: Contact Number (Text input)
  - Submit Button: `Receive`
- **Action Target:** Posts to `/index.php` (`option=com_breezingforms`).
- **Works Outside Original Host?** **NO**.

### 3. Add to Cart Form
- **Pages Used:** Main Catalog (`/buy-vw-beetle-spares-parts-online`) and all 69 Product Detail pages.
- **Form Engine:** VirtueMart 3.x (`com_virtuemart`).
- **Form Fields:**
  - `quantity[]`: Quantity (defaults to `1`)
  - `virtuemart_product_id[]`: Product ID (hidden)
  - `task`: `add`
  - `option`: `com_virtuemart`
  - `view`: `cart`
- **Action Target:** AJAX update or POST to `/index.php?option=com_virtuemart&view=cart`.
- **Works Outside Original Host?** **NO**.

### 4. Cart & Checkout Form
- **Pages Used:** Shopping Cart (`/index.php?option=com_virtuemart&view=cart`).
- **Form Engine:** VirtueMart 3.x.
- **Sub-Forms / Sections:**
  - User Login (`username`, `password`, `remember`, `user.login`)
  - Billing & Shipping Address inputs (`billto`, `STsameAsBT`)
  - Shipping Method Selection radio buttons (`virtuemart_shipmentmethod_id`)
  - Coupon Code entry (`coupon_code`)
  - Customer Note (`customer_note`)
  - Terms of Service Agreement checkbox (`tos`)
  - Submit Button: `Check Out Now`
- **Action Target:** VirtueMart order checkout controller.
- **Works Outside Original Host?** **NO**.

### 5. Product Search Forms
- **Header Mini-Search:** Input `keyword`, posts to `index.php?option=com_virtuemart&view=category&virtuemart_category_id=0`.
- **Joomla Core Search:** Input `searchword`, posts to `index.php?option=com_search`.
- **Works Outside Original Host?** **NO**.

### 6. Interactive & Frontend Features
- **Unite Revolution Slider 2:** Active on Homepage and subpage headers. Autoplaying hero banner carousel with fade transitions.
- **SP Page Builder Carousel:** Active on subpages for responsive header imagery.
- **Magnific Popup Lightbox:** Triggered on product detail images for lightbox image enlargement.
- **Flyout Mini-Cart:** Hover/click dropdown on the top right header (`mod_virtuemart_cart`) displaying live item count and empty cart notice.

---

## 6. Image and Asset Inventory

### Logo, Favicon, and Media Assets Summary
- **Logo Asset:** `images/aura-bean/Logo.jpg` (Dimensions: 131x78 px, Size: 6.4 KB). A low-resolution raster JPEG with a white background stored inside the `aura-bean` folder. No high-resolution or vector SVG version exists.
- **Favicon Asset:** No `.ico` or `.png` favicon exists. The site declares `<link href="images/aura-bean/Logo.jpg" rel="shortcut icon" type="image/vnd.microsoft.icon" />`, forcing the browser to attempt loading the 131x78 JPEG logo as an icon.
- **PDF Documents:** **0 found** (The Beetle Price List is not hosted as a PDF).
- **Video Files:** **0 found**.

### Complete Image Asset Table

| Filename | Mirror Relative Path | Dimensions | File Size | Where Used | Alt Text | Quality Verdict |
|----------|----------------------|------------|-----------|------------|----------|-----------------|

| `refresh-captcha.png` | `components/com_breezingforms/images/captcha/refresh-captcha.png` | 15x18 | 0.9 KB | contact-helmut-spares.html; index.html; about-helmut-spares.html | captcha | low-res (icon/thumb) |
| `icon_info.png` | `components/com_breezingforms/themes/quickmode/img/icon_info.png` | 15x15 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `chosen-sprite.png` | `components/com_virtuemart/assets/css/chosen-sprite.png` | 52x37 | 0.6 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `color-stars-small.png` | `components/com_virtuemart/assets/images/color-stars-small.png` | 12x144 | 2.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `color-stars.png` | `components/com_virtuemart/assets/images/color-stars.png` | 24x288 | 4.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `blank.gif` | `components/com_virtuemart/assets/images/fancybox/blank.gif` | 1x1 | 0.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_close.png` | `components/com_virtuemart/assets/images/fancybox/fancy_close.png` | 30x30 | 1.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_loading.png` | `components/com_virtuemart/assets/images/fancybox/fancy_loading.png` | 40x480 | 7.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_nav_left.png` | `components/com_virtuemart/assets/images/fancybox/fancy_nav_left.png` | 30x30 | 1.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_nav_right.png` | `components/com_virtuemart/assets/images/fancybox/fancy_nav_right.png` | 30x30 | 1.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_e.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_e.png` | 20x1 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_n.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_n.png` | 1x20 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_ne.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_ne.png` | 20x20 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_nw.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_nw.png` | 20x20 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_s.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_s.png` | 1x20 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_se.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_se.png` | 20x20 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_sw.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_sw.png` | 20x20 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_shadow_w.png` | `components/com_virtuemart/assets/images/fancybox/fancy_shadow_w.png` | 20x1 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_title_left.png` | `components/com_virtuemart/assets/images/fancybox/fancy_title_left.png` | 15x32 | 0.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_title_main.png` | `components/com_virtuemart/assets/images/fancybox/fancy_title_main.png` | 1x32 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_title_over.png` | `components/com_virtuemart/assets/images/fancybox/fancy_title_over.png` | 1x1 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancy_title_right.png` | `components/com_virtuemart/assets/images/fancybox/fancy_title_right.png` | 15x32 | 0.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancybox-x.png` | `components/com_virtuemart/assets/images/fancybox/fancybox-x.png` | 1x72 | 0.2 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancybox-y.png` | `components/com_virtuemart/assets/images/fancybox/fancybox-y.png` | 40x1 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `fancybox.png` | `components/com_virtuemart/assets/images/fancybox/fancybox.png` | 70x480 | 14.0 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `icon_external_link.gif` | `components/com_virtuemart/assets/images/icon_external_link.gif` | 10x10 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `vm-preloader.gif` | `components/com_virtuemart/assets/images/vm-preloader.gif` | 31x31 | 2.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `vm2-sprite.png` | `components/com_virtuemart/assets/images/vm2-sprite.png` | 64x1423 | 13.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrow_down.png` | `components/com_virtuemart/assets/images/vmgeneral/arrow_down.png` | 16x16 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `backgrounds.png` | `components/com_virtuemart/assets/images/vmgeneral/backgrounds.png` | 1x240 | 0.2 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `default_bg.jpg` | `components/com_virtuemart/assets/images/vmgeneral/default_bg.jpg` | 1x163 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `default_hover_bg.jpg` | `components/com_virtuemart/assets/images/vmgeneral/default_hover_bg.jpg` | 1x163 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `next_16x16.png` | `components/com_virtuemart/assets/images/vmgeneral/next_16x16.png` | 16x16 | 0.4 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `noimage.gif` | `components/com_virtuemart/assets/images/vmgeneral/noimage.gif` | 90x87 | 4.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `previous_16x16.png` | `components/com_virtuemart/assets/images/vmgeneral/previous_16x16.png` | 16x16 | 0.4 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `quantity-controls.png` | `components/com_virtuemart/assets/images/vmgeneral/quantity-controls.png` | 30x14 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `about-helmut-spares-banner.jpg` | `images/About-Us/about-helmut-spares-banner.jpg` | 1920x252 | 68.4 KB | about-helmut-spares.html | about-helmut-spares-banner.jpg | low-res |
| `AboutUsButton.png` | `images/HomePage/AboutUsButton.png` | 275x326 | 41.0 KB | index.html; about-helmut-spares.html | missing | low-res |
| `ContactUsButton.png` | `images/HomePage/ContactUsButton.png` | 275x326 | 45.3 KB | index.html; about-helmut-spares.html | missing | low-res |
| `HomePageBackgroundBanner2.jpg` | `images/HomePage/HomePageBackgroundBanner2.jpg` | 1920x463 | 194.2 KB | Unused / theme asset | missing | good |
| `OnlineShopButton.png` | `images/HomePage/OnlineShopButton.png` | 275x326 | 48.2 KB | index.html; about-helmut-spares.html | missing | low-res |
| `SectionBreakLines.jpg` | `images/HomePage/SectionBreakLines.jpg` | 1054x59 | 38.1 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | SectionBreakLines.jpg | low-res (icon/thumb) |
| `SectionBreakLinesStar.jpg` | `images/HomePage/SectionBreakLinesStar.jpg` | 1045x41 | 33.5 KB | contact-helmut-spares.html; index.html; about-helmut-spares.html | SectionBreakLinesStar.jpg | low-res (icon/thumb) |
| `SendUsAnEnquiryBadge.jpg` | `images/HomePage/SendUsAnEnquiryBadge.jpg` | 358x176 | 30.4 KB | contact-helmut-spares.html; index.html; about-helmut-spares.html | SendUsAnEnquiryBadge.jpg | low-res |
| `StalkUsOnInstagramButton.jpg` | `images/HomePage/StalkUsOnInstagramButton.jpg` | 285x275 | 38.1 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | missing | low-res |
| `Triangle.jpg` | `images/HomePage/Triangle.jpg` | 1919x82 | 13.2 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | Triangle.jpg | low-res (icon/thumb) |
| `TweetUsOnTwitterButton.jpg` | `images/HomePage/TweetUsOnTwitterButton.jpg` | 285x275 | 22.1 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | missing | low-res |
| `payfast.jpg` | `images/HomePage/payfast.jpg` | 371x40 | 17.9 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | missing | low-res (icon/thumb) |
| `stars.jpg` | `images/HomePage/stars.jpg` | 104x28 | 2.4 KB | beetle-price-list.html; contact-helmut-spares.html; index.html; about-helmut-spares.html | stars.jpg | low-res (icon/thumb) |
| `Logo.jpg` | `images/aura-bean/Logo.jpg` | 131x78 | 6.4 KB | contact-helmut-spares.html; beetle-price-list.html; index.html; index6e53.html; about-helmut-spares.html; buy-vw-beetle-spares-parts-online.html; 69 product detail pages | logo; Helmut Spares Online Vw Beetle Spares Shop | South Africa | low-res (icon/thumb) |
| `footer.jpg` | `images/aura-bean/home/footer.jpg` | 1920x138 | 23.6 KB | contact-helmut-spares.html; beetle-price-list.html; index.html; index6e53.html; about-helmut-spares.html; buy-vw-beetle-spares-parts-online.html; 69 product detail pages | missing | low-res |
| `beetle-pricelist-banner.jpg` | `images/beetle-pricelist-banner.jpg` | 1920x252 | 67.6 KB | beetle-price-list.html | beetle-pricelist-banner.jpg | low-res |
| `blank-footer.png` | `images/blank-footer.png` | 42x33 | 1.0 KB | contact-helmut-spares.html; beetle-price-list.html; index.html; index6e53.html; about-helmut-spares.html; buy-vw-beetle-spares-parts-online.html; 69 product detail pages | missing | low-res (icon/thumb) |
| `contact-banner.jpg` | `images/contact-banner.jpg` | 1920x252 | 68.5 KB | contact-helmut-spares.html | contact-banner.jpg | low-res |
| `get-your-pricelist.jpg` | `images/get-your-pricelist.jpg` | 389x192 | 18.7 KB | beetle-price-list.html | get-your-pricelist.jpg | low-res |
| `12.jpg` | `images/page-banners/12.jpg` | 1920x459 | 186.6 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `14.jpg` | `images/page-banners/14.jpg` | 1920x459 | 186.5 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `16.jpg` | `images/page-banners/16.jpg` | 1920x459 | 196.5 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `18.jpg` | `images/page-banners/18.jpg` | 1920x459 | 208.2 KB | index.html | missing | good |
| `1a.jpg` | `images/page-banners/1a.jpg` | 1920x459 | 227.3 KB | index.html | missing | good |
| `22.jpg` | `images/page-banners/22.jpg` | 1920x459 | 213.3 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `25.jpg` | `images/page-banners/25.jpg` | 1920x459 | 306.4 KB | index.html | missing | good |
| `26.jpg` | `images/page-banners/26.jpg` | 1920x459 | 264.4 KB | index.html | missing | good |
| `27.jpg` | `images/page-banners/27.jpg` | 1920x459 | 302.6 KB | index.html | missing | good |
| `29.jpg` | `images/page-banners/29.jpg` | 1920x459 | 228.5 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `7.jpg` | `images/page-banners/7.jpg` | 1920x459 | 194.7 KB | index.html | missing | good |
| `8.jpg` | `images/page-banners/8.jpg` | 1920x459 | 199.4 KB | contact-helmut-spares.html; beetle-price-list.html; about-helmut-spares.html | missing | good |
| `welcom-static-banner.jpg` | `images/page-banners/welcom-static-banner.jpg` | 1920x252 | 40.4 KB | index.html | welcom-static-banner.jpg | low-res |
| `acc-cable-beetle4.jpg` | `images/stories/virtuemart/product/acc-cable-beetle4.jpg` | 540x710 | 41.4 KB | 1 product detail pages | missing | good |
| `alternator-beetle7.jpg` | `images/stories/virtuemart/product/alternator-beetle7.jpg` | 540x710 | 77.3 KB | 1 product detail pages | missing | good |
| `axle-booth4.jpg` | `images/stories/virtuemart/product/axle-booth4.jpg` | 540x710 | 69.1 KB | 1 product detail pages | missing | good |
| `beading-clip.jpg` | `images/stories/virtuemart/product/beading-clip.jpg` | 540x710 | 95.6 KB | 1 product detail pages | missing | good |
| `beading-set4.jpg` | `images/stories/virtuemart/product/beading-set4.jpg` | 540x710 | 95.8 KB | 1 product detail pages | missing | good |
| `beetle-body-chasis-rubber4.jpg` | `images/stories/virtuemart/product/beetle-body-chasis-rubber4.jpg` | 540x710 | 86.9 KB | 1 product detail pages | missing | good |
| `beetle-boot-carpet9.jpg` | `images/stories/virtuemart/product/beetle-boot-carpet9.jpg` | 540x710 | 77.5 KB | 1 product detail pages | missing | good |
| `beetle-boot-rubber-front2.jpg` | `images/stories/virtuemart/product/beetle-boot-rubber-front2.jpg` | 540x710 | 53.0 KB | 1 product detail pages | missing | good |
| `beetle-brake-shoes-front7.jpg` | `images/stories/virtuemart/product/beetle-brake-shoes-front7.jpg` | 540x710 | 88.1 KB | 1 product detail pages | missing | good |
| `beetle-brake-shoes-rear2.jpg` | `images/stories/virtuemart/product/beetle-brake-shoes-rear2.jpg` | 540x710 | 88.1 KB | 1 product detail pages | missing | good |
| `beetle-bumper-front-indicator-cutouts3.jpg` | `images/stories/virtuemart/product/beetle-bumper-front-indicator-cutouts3.jpg` | 540x710 | 59.0 KB | 1 product detail pages | missing | good |
| `beetle-bumper-rear4.jpg` | `images/stories/virtuemart/product/beetle-bumper-rear4.jpg` | 540x710 | 48.3 KB | 1 product detail pages | missing | good |
| `beetle-carb-replacement4.jpg` | `images/stories/virtuemart/product/beetle-carb-replacement4.jpg` | 540x710 | 90.2 KB | 1 product detail pages | missing | good |
| `beetle-chrome-bumper-front8.jpg` | `images/stories/virtuemart/product/beetle-chrome-bumper-front8.jpg` | 540x710 | 47.1 KB | 1 product detail pages | missing | good |
| `beetle-chrome-door-handles8.jpg` | `images/stories/virtuemart/product/beetle-chrome-door-handles8.jpg` | 540x710 | 62.6 KB | 1 product detail pages | missing | good |
| `beetle-chrome-door-mirror-left.jpg` | `images/stories/virtuemart/product/beetle-chrome-door-mirror-left.jpg` | 540x710 | 55.4 KB | 1 product detail pages | missing | good |
| `beetle-chrome-door-mirror-right21.jpg` | `images/stories/virtuemart/product/beetle-chrome-door-mirror-right21.jpg` | 540x710 | 85.1 KB | 1 product detail pages | missing | good |
| `beetle-chrome-door-mirror-right23.jpg` | `images/stories/virtuemart/product/beetle-chrome-door-mirror-right23.jpg` | 540x710 | 85.1 KB | 1 product detail pages | missing | good |
| `beetle-chrome-window-frame-right7.jpg` | `images/stories/virtuemart/product/beetle-chrome-window-frame-right7.jpg` | 540x710 | 41.1 KB | 1 product detail pages | missing | good |
| `beetle-clutch-cable6.jpg` | `images/stories/virtuemart/product/beetle-clutch-cable6.jpg` | 540x710 | 51.9 KB | 1 product detail pages | missing | good |
| `beetle-custom-interior-carpet-set6.jpg` | `images/stories/virtuemart/product/beetle-custom-interior-carpet-set6.jpg` | 540x710 | 106.1 KB | 1 product detail pages | missing | good |
| `beetle-distributor-cap3.jpg` | `images/stories/virtuemart/product/beetle-distributor-cap3.jpg` | 540x710 | 88.1 KB | 1 product detail pages | missing | good |
| `beetle-distributor4.jpg` | `images/stories/virtuemart/product/beetle-distributor4.jpg` | 540x710 | 109.1 KB | 1 product detail pages | missing | good |
| `beetle-door-panel-clips2.jpg` | `images/stories/virtuemart/product/beetle-door-panel-clips2.jpg` | 540x710 | 59.3 KB | 1 product detail pages | missing | good |
| `beetle-door-rubbers9.jpg` | `images/stories/virtuemart/product/beetle-door-rubbers9.jpg` | 540x710 | 62.5 KB | 1 product detail pages | missing | good |
| `beetle-engine-rubber-thick7.jpg` | `images/stories/virtuemart/product/beetle-engine-rubber-thick7.jpg` | 540x710 | 53.7 KB | 1 product detail pages | missing | good |
| `beetle-engine-rubber-thin9.jpg` | `images/stories/virtuemart/product/beetle-engine-rubber-thin9.jpg` | 540x710 | 53.2 KB | 1 product detail pages | missing | good |
| `beetle-fender-rubber7.jpg` | `images/stories/virtuemart/product/beetle-fender-rubber7.jpg` | 540x710 | 93.5 KB | 1 product detail pages | missing | good |
| `beetle-front-wheel-cyl1.jpg` | `images/stories/virtuemart/product/beetle-front-wheel-cyl1.jpg` | 540x710 | 72.8 KB | 1 product detail pages | missing | good |
| `beetle-fuel-gauge6.jpg` | `images/stories/virtuemart/product/beetle-fuel-gauge6.jpg` | 540x710 | 82.4 KB | 1 product detail pages | missing | good |
| `beetle-fuel-pump-alternator2.jpg` | `images/stories/virtuemart/product/beetle-fuel-pump-alternator2.jpg` | 540x710 | 94.6 KB | 1 product detail pages | missing | good |
| `beetle-gear-booth (1).jpg` | `images/stories/virtuemart/product/beetle-gear-booth (1).jpg` | 540x710 | 67.4 KB | 1 product detail pages | missing | good |
| `beetle-gear-knob5.jpg` | `images/stories/virtuemart/product/beetle-gear-knob5.jpg` | 540x710 | 58.5 KB | 1 product detail pages | missing | good |
| `beetle-generator7.jpg` | `images/stories/virtuemart/product/beetle-generator7.jpg` | 540x710 | 80.4 KB | 1 product detail pages | missing | good |
| `beetle-handbrake-cable8.jpg` | `images/stories/virtuemart/product/beetle-handbrake-cable8.jpg` | 540x710 | 62.2 KB | 1 product detail pages | missing | good |
| `beetle-hanfbrake-booth1.jpg` | `images/stories/virtuemart/product/beetle-hanfbrake-booth1.jpg` | 540x710 | 81.8 KB | 1 product detail pages | missing | good |
| `beetle-headlight-trims-plastic1.jpg` | `images/stories/virtuemart/product/beetle-headlight-trims-plastic1.jpg` | 540x710 | 56.3 KB | 1 product detail pages | missing | good |
| `beetle-indicator-lens4.jpg` | `images/stories/virtuemart/product/beetle-indicator-lens4.jpg` | 540x710 | 122.7 KB | 1 product detail pages | missing | good |
| `beetle-indicator-switch6.jpg` | `images/stories/virtuemart/product/beetle-indicator-switch6.jpg` | 540x710 | 58.3 KB | 1 product detail pages | missing | good |
| `beetle-indicator-unit-complete4.jpg` | `images/stories/virtuemart/product/beetle-indicator-unit-complete4.jpg` | 540x710 | 101.0 KB | 1 product detail pages | missing | good |
| `beetle-king-pin-link-pin7.jpg` | `images/stories/virtuemart/product/beetle-king-pin-link-pin7.jpg` | 540x710 | 132.8 KB | 1 product detail pages | missing | good |
| `beetle-medium-tail-lights7.jpg` | `images/stories/virtuemart/product/beetle-medium-tail-lights7.jpg` | 540x710 | 117.9 KB | 1 product detail pages | missing | good |
| `beetle-pancake-airfilter6.jpg` | `images/stories/virtuemart/product/beetle-pancake-airfilter6.jpg` | 540x710 | 90.8 KB | 1 product detail pages | missing | good |
| `beetle-plug-wires2.jpg` | `images/stories/virtuemart/product/beetle-plug-wires2.jpg` | 540x710 | 95.7 KB | 1 product detail pages | missing | good |
| `beetle-push-rod-collapsable7.jpg` | `images/stories/virtuemart/product/beetle-push-rod-collapsable7.jpg` | 540x710 | 94.6 KB | 1 product detail pages | missing | good |
| `beetle-rear-wheel-cyl5.jpg` | `images/stories/virtuemart/product/beetle-rear-wheel-cyl5.jpg` | 540x710 | 27.9 KB | 1 product detail pages | missing | good |
| `beetle-rear-window-rubber-set3.jpg` | `images/stories/virtuemart/product/beetle-rear-window-rubber-set3.jpg` | 540x710 | 44.5 KB | 1 product detail pages | missing | good |
| `beetle-runningboards3.jpg` | `images/stories/virtuemart/product/beetle-runningboards3.jpg` | 540x710 | 76.0 KB | 1 product detail pages | missing | good |
| `beetle-shocks3.jpg` | `images/stories/virtuemart/product/beetle-shocks3.jpg` | 540x710 | 36.1 KB | 1 product detail pages | missing | good |
| `beetle-sleeve-kit1.jpg` | `images/stories/virtuemart/product/beetle-sleeve-kit1.jpg` | 540x710 | 125.3 KB | 1 product detail pages | missing | good |
| `beetle-small-tail-light lens2.jpg` | `images/stories/virtuemart/product/beetle-small-tail-light lens2.jpg` | 540x710 | 132.4 KB | 1 product detail pages | missing | good |
| `beetle-speedo-cable5.jpg` | `images/stories/virtuemart/product/beetle-speedo-cable5.jpg` | 540x710 | 56.3 KB | 1 product detail pages | missing | good |
| `beetle-starter-front1.jpg` | `images/stories/virtuemart/product/beetle-starter-front1.jpg` | 540x710 | 94.4 KB | 1 product detail pages | missing | good |
| `beetle-tail-light-big-round5.jpg` | `images/stories/virtuemart/product/beetle-tail-light-big-round5.jpg` | 540x710 | 132.8 KB | 1 product detail pages | missing | good |
| `beetle-tail-light-rubber7.jpg` | `images/stories/virtuemart/product/beetle-tail-light-rubber7.jpg` | 540x710 | 65.7 KB | 1 product detail pages | missing | good |
| `beetle-tie-rod-ends5.jpg` | `images/stories/virtuemart/product/beetle-tie-rod-ends5.jpg` | 540x710 | 80.0 KB | 1 product detail pages | missing | good |
| `beetle-window-channeling7.jpg` | `images/stories/virtuemart/product/beetle-window-channeling7.jpg` | 540x710 | 86.5 KB | 1 product detail pages | missing | good |
| `beetle-window-scrapper-rubber-2.jpg` | `images/stories/virtuemart/product/beetle-window-scrapper-rubber-2.jpg` | 540x710 | 62.0 KB | Unused / theme asset | missing | good |
| `beetle-window-scrapper-rubber4.jpg` | `images/stories/virtuemart/product/beetle-window-scrapper-rubber4.jpg` | 540x710 | 80.2 KB | 1 product detail pages | missing | good |
| `beetle-window-winder-handle1.jpg` | `images/stories/virtuemart/product/beetle-window-winder-handle1.jpg` | 540x710 | 44.5 KB | 1 product detail pages | missing | good |
| `beetle-window-winder-mechanism-left2.jpg` | `images/stories/virtuemart/product/beetle-window-winder-mechanism-left2.jpg` | 540x710 | 48.6 KB | 1 product detail pages | missing | good |
| `beetle-windscreen-rubber-front5.jpg` | `images/stories/virtuemart/product/beetle-windscreen-rubber-front5.jpg` | 540x710 | 71.2 KB | 1 product detail pages | missing | good |
| `beetle-windscreen-rubber-rear7.jpg` | `images/stories/virtuemart/product/beetle-windscreen-rubber-rear7.jpg` | 540x710 | 71.2 KB | 1 product detail pages | missing | good |
| `beetle-wiper-blades5.jpg` | `images/stories/virtuemart/product/beetle-wiper-blades5.jpg` | 540x710 | 60.4 KB | 1 product detail pages | missing | good |
| `beetle-wiper-switch1.jpg` | `images/stories/virtuemart/product/beetle-wiper-switch1.jpg` | 540x710 | 48.5 KB | 1 product detail pages | missing | good |
| `crank-seal-beetle3.jpg` | `images/stories/virtuemart/product/crank-seal-beetle3.jpg` | 540x710 | 104.5 KB | 1 product detail pages | missing | good |
| `electronic-distributor-beetle2.jpg` | `images/stories/virtuemart/product/electronic-distributor-beetle2.jpg` | 540x710 | 83.0 KB | 1 product detail pages | missing | good |
| `electronic-distributor-beetle93.jpg` | `images/stories/virtuemart/product/electronic-distributor-beetle93.jpg` | 540x710 | 83.0 KB | 1 product detail pages | missing | good |
| `acc-cable-beetle4_640x640.jpg` | `images/stories/virtuemart/product/resized/acc-cable-beetle4_640x640.jpg` | 486x640 | 16.3 KB | buy-vw-beetle-spares-parts-online.html | acc-cable-beetle4 | good |
| `alternator-beetle7_640x640.jpg` | `images/stories/virtuemart/product/resized/alternator-beetle7_640x640.jpg` | 486x640 | 24.6 KB | buy-vw-beetle-spares-parts-online.html | alternator-beetle7 | good |
| `axle-booth4_640x640.jpg` | `images/stories/virtuemart/product/resized/axle-booth4_640x640.jpg` | 486x640 | 23.2 KB | buy-vw-beetle-spares-parts-online.html | axle-booth4 | good |
| `beading-clip_640x640.jpg` | `images/stories/virtuemart/product/resized/beading-clip_640x640.jpg` | 486x640 | 24.7 KB | buy-vw-beetle-spares-parts-online.html | beading-clip | good |
| `beading-set4_640x640.jpg` | `images/stories/virtuemart/product/resized/beading-set4_640x640.jpg` | 486x640 | 25.9 KB | buy-vw-beetle-spares-parts-online.html | beading-set4 | good |
| `beetle-body-chasis-rubber4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-body-chasis-rubber4_640x640.jpg` | 486x640 | 25.8 KB | buy-vw-beetle-spares-parts-online.html | beetle-body-chasis-rubber4 | good |
| `beetle-boot-carpet9_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-boot-carpet9_640x640.jpg` | 486x640 | 26.9 KB | Unused / theme asset | missing | good |
| `beetle-boot-rubber-front2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-boot-rubber-front2_640x640.jpg` | 486x640 | 18.9 KB | Unused / theme asset | missing | good |
| `beetle-brake-shoes-front7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-brake-shoes-front7_640x640.jpg` | 486x640 | 26.0 KB | buy-vw-beetle-spares-parts-online.html | beetle-brake-shoes-front7 | good |
| `beetle-brake-shoes-rear2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-brake-shoes-rear2_640x640.jpg` | 486x640 | 26.4 KB | buy-vw-beetle-spares-parts-online.html | beetle-brake-shoes-rear2 | good |
| `beetle-bumper-front-indicator-cutouts3_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-bumper-front-indicator-cutouts3_640x640.jpg` | 486x640 | 21.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-bumper-front-indicator-cutouts3 | good |
| `beetle-bumper-rear4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-bumper-rear4_640x640.jpg` | 486x640 | 16.1 KB | Unused / theme asset | missing | good |
| `beetle-carb-replacement4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-carb-replacement4_640x640.jpg` | 486x640 | 25.0 KB | buy-vw-beetle-spares-parts-online.html | beetle-carb-replacement4 | good |
| `beetle-chrome-bumper-front8_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-bumper-front8_640x640.jpg` | 486x640 | 16.0 KB | buy-vw-beetle-spares-parts-online.html | beetle-chrome-bumper-front8 | good |
| `beetle-chrome-door-handles8_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-door-handles8_640x640.jpg` | 486x640 | 22.0 KB | buy-vw-beetle-spares-parts-online.html | beetle-chrome-door-handles8 | good |
| `beetle-chrome-door-mirror-left_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-door-mirror-left_640x640.jpg` | 486x640 | 19.8 KB | Unused / theme asset | missing | good |
| `beetle-chrome-door-mirror-right21_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-door-mirror-right21_640x640.jpg` | 486x640 | 26.7 KB | Unused / theme asset | missing | good |
| `beetle-chrome-door-mirror-right23_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-door-mirror-right23_640x640.jpg` | 486x640 | 26.7 KB | Unused / theme asset | missing | good |
| `beetle-chrome-window-frame-right7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-chrome-window-frame-right7_640x640.jpg` | 486x640 | 15.6 KB | Unused / theme asset | missing | good |
| `beetle-clutch-cable6_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-clutch-cable6_640x640.jpg` | 486x640 | 19.3 KB | Unused / theme asset | missing | good |
| `beetle-custom-interior-carpet-set6_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-custom-interior-carpet-set6_640x640.jpg` | 486x640 | 34.6 KB | buy-vw-beetle-spares-parts-online.html | beetle-custom-interior-carpet-set6 | good |
| `beetle-distributor-cap3_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-distributor-cap3_640x640.jpg` | 486x640 | 22.2 KB | buy-vw-beetle-spares-parts-online.html | beetle-distributor-cap3 | good |
| `beetle-distributor4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-distributor4_640x640.jpg` | 486x640 | 29.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-distributor4 | good |
| `beetle-door-panel-clips2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-door-panel-clips2_640x640.jpg` | 486x640 | 20.0 KB | Unused / theme asset | missing | good |
| `beetle-door-rubbers9_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-door-rubbers9_640x640.jpg` | 486x640 | 21.8 KB | Unused / theme asset | missing | good |
| `beetle-engine-rubber-thick7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-engine-rubber-thick7_640x640.jpg` | 486x640 | 18.8 KB | Unused / theme asset | missing | good |
| `beetle-engine-rubber-thin9_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-engine-rubber-thin9_640x640.jpg` | 486x640 | 19.0 KB | Unused / theme asset | missing | good |
| `beetle-fender-rubber7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-fender-rubber7_640x640.jpg` | 486x640 | 32.7 KB | Unused / theme asset | missing | good |
| `beetle-front-wheel-cyl1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-front-wheel-cyl1_640x640.jpg` | 486x640 | 21.1 KB | buy-vw-beetle-spares-parts-online.html | beetle-front-wheel-cyl1 | good |
| `beetle-fuel-gauge6_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-fuel-gauge6_640x640.jpg` | 486x640 | 21.4 KB | Unused / theme asset | missing | good |
| `beetle-fuel-pump-alternator2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-fuel-pump-alternator2_640x640.jpg` | 486x640 | 24.3 KB | buy-vw-beetle-spares-parts-online.html | beetle-fuel-pump-alternator2 | good |
| `beetle-gear-booth (1)_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-gear-booth (1)_640x640.jpg` | 486x640 | 18.1 KB | Unused / theme asset | missing | good |
| `beetle-gear-knob5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-gear-knob5_640x640.jpg` | 486x640 | 17.5 KB | Unused / theme asset | missing | good |
| `beetle-generator7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-generator7_640x640.jpg` | 486x640 | 26.9 KB | buy-vw-beetle-spares-parts-online.html | beetle-generator7 | good |
| `beetle-handbrake-cable8_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-handbrake-cable8_640x640.jpg` | 486x640 | 19.2 KB | Unused / theme asset | missing | good |
| `beetle-hanfbrake-booth1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-hanfbrake-booth1_640x640.jpg` | 486x640 | 27.3 KB | Unused / theme asset | missing | good |
| `beetle-headlight-trims-plastic1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-headlight-trims-plastic1_640x640.jpg` | 486x640 | 19.1 KB | Unused / theme asset | missing | good |
| `beetle-indicator-lens4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-indicator-lens4_640x640.jpg` | 486x640 | 27.4 KB | Unused / theme asset | missing | good |
| `beetle-indicator-switch6_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-indicator-switch6_640x640.jpg` | 486x640 | 18.4 KB | Unused / theme asset | missing | good |
| `beetle-indicator-unit-complete4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-indicator-unit-complete4_640x640.jpg` | 486x640 | 26.0 KB | Unused / theme asset | missing | good |
| `beetle-king-pin-link-pin7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-king-pin-link-pin7_640x640.jpg` | 486x640 | 31.9 KB | buy-vw-beetle-spares-parts-online.html | beetle-king-pin-link-pin7 | good |
| `beetle-medium-tail-lights7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-medium-tail-lights7_640x640.jpg` | 486x640 | 28.2 KB | Unused / theme asset | missing | good |
| `beetle-pancake-airfilter6_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-pancake-airfilter6_640x640.jpg` | 486x640 | 25.2 KB | buy-vw-beetle-spares-parts-online.html | beetle-pancake-airfilter6 | good |
| `beetle-plug-wires2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-plug-wires2_640x640.jpg` | 486x640 | 33.7 KB | buy-vw-beetle-spares-parts-online.html | beetle-plug-wires2 | good |
| `beetle-push-rod-collapsable7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-push-rod-collapsable7_640x640.jpg` | 486x640 | 28.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-push-rod-collapsable7 | good |
| `beetle-rear-wheel-cyl5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-rear-wheel-cyl5_640x640.jpg` | 486x640 | 21.0 KB | buy-vw-beetle-spares-parts-online.html | beetle-rear-wheel-cyl5 | good |
| `beetle-rear-window-rubber-set3_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-rear-window-rubber-set3_640x640.jpg` | 486x640 | 15.8 KB | Unused / theme asset | missing | good |
| `beetle-runningboards3_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-runningboards3_640x640.jpg` | 486x640 | 19.8 KB | Unused / theme asset | missing | good |
| `beetle-shocks3_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-shocks3_640x640.jpg` | 486x640 | 14.9 KB | Unused / theme asset | missing | good |
| `beetle-sleeve-kit1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-sleeve-kit1_640x640.jpg` | 486x640 | 36.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-sleeve-kit1 | good |
| `beetle-small-tail-light lens2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-small-tail-light lens2_640x640.jpg` | 486x640 | 26.8 KB | Unused / theme asset | missing | good |
| `beetle-speedo-cable5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-speedo-cable5_640x640.jpg` | 486x640 | 18.3 KB | Unused / theme asset | missing | good |
| `beetle-starter-front1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-starter-front1_640x640.jpg` | 486x640 | 27.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-starter-front1 | good |
| `beetle-tail-light-big-round5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-tail-light-big-round5_640x640.jpg` | 486x640 | 27.0 KB | Unused / theme asset | missing | good |
| `beetle-tail-light-rubber7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-tail-light-rubber7_640x640.jpg` | 486x640 | 21.4 KB | Unused / theme asset | missing | good |
| `beetle-tie-rod-ends5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-tie-rod-ends5_640x640.jpg` | 486x640 | 24.7 KB | buy-vw-beetle-spares-parts-online.html | beetle-tie-rod-ends5 | good |
| `beetle-window-channeling7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-window-channeling7_640x640.jpg` | 486x640 | 22.9 KB | Unused / theme asset | missing | good |
| `beetle-window-scrapper-rubber-2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-window-scrapper-rubber-2_640x640.jpg` | 486x640 | 20.3 KB | 1 product detail pages | beetle-window-scrapper-rubber-2 | good |
| `beetle-window-scrapper-rubber4_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-window-scrapper-rubber4_640x640.jpg` | 486x640 | 23.7 KB | Unused / theme asset | missing | good |
| `beetle-window-winder-handle1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-window-winder-handle1_640x640.jpg` | 486x640 | 16.6 KB | Unused / theme asset | missing | good |
| `beetle-window-winder-mechanism-left2_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-window-winder-mechanism-left2_640x640.jpg` | 486x640 | 15.6 KB | Unused / theme asset | missing | good |
| `beetle-windscreen-rubber-front5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-windscreen-rubber-front5_640x640.jpg` | 486x640 | 25.2 KB | Unused / theme asset | missing | good |
| `beetle-windscreen-rubber-rear7_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-windscreen-rubber-rear7_640x640.jpg` | 486x640 | 25.2 KB | Unused / theme asset | missing | good |
| `beetle-wiper-blades5_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-wiper-blades5_640x640.jpg` | 486x640 | 21.5 KB | buy-vw-beetle-spares-parts-online.html | beetle-wiper-blades5 | good |
| `beetle-wiper-switch1_640x640.jpg` | `images/stories/virtuemart/product/resized/beetle-wiper-switch1_640x640.jpg` | 486x640 | 16.3 KB | Unused / theme asset | missing | good |
| `crank-seal-beetle3_640x640.jpg` | `images/stories/virtuemart/product/resized/crank-seal-beetle3_640x640.jpg` | 486x640 | 27.6 KB | buy-vw-beetle-spares-parts-online.html | crank-seal-beetle3 | good |
| `electronic-distributor-beetle2_640x640.jpg` | `images/stories/virtuemart/product/resized/electronic-distributor-beetle2_640x640.jpg` | 486x640 | 23.3 KB | buy-vw-beetle-spares-parts-online.html | electronic-distributor-beetle2 | good |
| `electronic-distributor-beetle93_640x640.jpg` | `images/stories/virtuemart/product/resized/electronic-distributor-beetle93_640x640.jpg` | 486x640 | 23.3 KB | buy-vw-beetle-spares-parts-online.html | electronic-distributor-beetle93 | good |
| `vw-beetle-chrome-tail-pipes9_640x640.jpg` | `images/stories/virtuemart/product/resized/vw-beetle-chrome-tail-pipes9_640x640.jpg` | 486x640 | 20.0 KB | Unused / theme asset | missing | good |
| `vw-beetle-chrome-wheelcap-vwembossed-1_640x640.jpg` | `images/stories/virtuemart/product/resized/vw-beetle-chrome-wheelcap-vwembossed-1_640x640.jpg` | 486x640 | 30.1 KB | 1 product detail pages | vw-beetle-chrome-wheelcap-vwembossed-1 | good |
| `vw-beetle-chrome-wheelcap-vwembossed7_640x640.jpg` | `images/stories/virtuemart/product/resized/vw-beetle-chrome-wheelcap-vwembossed7_640x640.jpg` | 486x640 | 32.2 KB | Unused / theme asset | missing | good |
| `vw-beetle-chrome-tail-pipes9.jpg` | `images/stories/virtuemart/product/vw-beetle-chrome-tail-pipes9.jpg` | 540x710 | 59.0 KB | 1 product detail pages | missing | good |
| `vw-beetle-chrome-wheelcap-vwembossed-1.jpg` | `images/stories/virtuemart/product/vw-beetle-chrome-wheelcap-vwembossed-1.jpg` | 540x710 | 112.8 KB | Unused / theme asset | missing | good |
| `vw-beetle-chrome-wheelcap-vwembossed7.jpg` | `images/stories/virtuemart/product/vw-beetle-chrome-wheelcap-vwembossed7.jpg` | 540x710 | 119.9 KB | 1 product detail pages | missing | good |
| `icon_info.png` | `media/breezingforms/themes/default/img/icon_info.png` | 15x15 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `transparent.png` | `media/com_uniterevolution2/assets/images/transparent.png` | 10x10 | 0.2 KB | contact-helmut-spares.html; beetle-price-list.html; index.html; index6e53.html; about-helmut-spares.html; buy-vw-beetle-spares-parts-online.html; 69 product detail pages | missing | low-res (icon/thumb) |
| `arrow_left.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrow_left.png` | 26x52 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrow_left2.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrow_left2.png` | 12x34 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrow_right.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrow_right.png` | 26x52 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrow_right2.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrow_right2.png` | 12x34 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrowleft.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrowleft.png` | 9x32 | 42.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `arrowright.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/arrowright.png` | 9x32 | 42.7 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `boxed_bgtile.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/boxed_bgtile.png` | 100x40 | 2.7 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `bullet.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/bullet.png` | 20x40 | 2.2 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `bullet_boxed.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/bullet_boxed.png` | 18x38 | 0.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `bullets.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/bullets.png` | 23x46 | 1.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `bullets2.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/bullets2.png` | 19x38 | 0.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `coloredbg.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/coloredbg.png` | 5x5 | 0.2 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `gridtile.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/gridtile.png` | 2x2 | 0.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `gridtile_3x3.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/gridtile_3x3.png` | 3x3 | 0.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `gridtile_3x3_white.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/gridtile_3x3_white.png` | 3x3 | 0.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `gridtile_white.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/gridtile_white.png` | 2x2 | 0.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `large_left.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/large_left.png` | 40x80 | 1.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `large_right.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/large_right.png` | 40x80 | 1.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `loader.gif` | `media/com_uniterevolution2/assets/rs-plugin/assets/loader.gif` | 24x24 | 2.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `navigdots.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/navigdots.png` | 15x30 | 0.7 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `navigdots_bgtile.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/navigdots_bgtile.png` | 10x35 | 0.1 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `shadow1.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/shadow1.png` | 900x30 | 4.2 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `shadow2.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/shadow2.png` | 900x60 | 5.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `shadow3.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/shadow3.png` | 900x60 | 6.3 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `small_left.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/small_left.png` | 19x28 | 0.7 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `small_left_boxed.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/small_left_boxed.png` | 20x30 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `small_right.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/small_right.png` | 19x28 | 0.7 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `small_right_boxed.png` | `media/com_uniterevolution2/assets/rs-plugin/assets/small_right_boxed.png` | 20x30 | 0.8 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `revicons90c6.svg` | `media/com_uniterevolution2/assets/rs-plugin/font/revicons90c6.svg` | SVG (vector) | 13.3 KB | Unused / theme asset | missing | good |
| `g30.png` | `media/com_uniterevolution2/assets/rs-plugin/images/gradient/g30.png` | 1x60 | 41.9 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `g40.png` | `media/com_uniterevolution2/assets/rs-plugin/images/gradient/g40.png` | 1x80 | 41.5 KB | Unused / theme asset | missing | low-res (icon/thumb) |
| `glyphicons-halflings-white.png` | `media/jui/img/glyphicons-halflings-white.png` | 469x159 | 8.5 KB | Unused / theme asset | missing | low-res |
| `glyphicons-halflings.png` | `media/jui/img/glyphicons-halflings.png` | 469x159 | 12.3 KB | Unused / theme asset | missing | low-res |
| `edit.png` | `media/system/images/edit.png` | 18x18 | 0.4 KB | 5 product detail pages | Edit this product | low-res (icon/thumb) |
| `emailButton.png` | `media/system/images/emailButton.png` | 16x16 | 0.2 KB | 69 product detail pages | Email | low-res (icon/thumb) |
| `pdf_button.png` | `media/system/images/pdf_button.png` | 16x16 | 0.4 KB | 69 product detail pages | PDF | low-res (icon/thumb) |
| `printButton.png` | `media/system/images/printButton.png` | 16x16 | 0.2 KB | 69 product detail pages | Print | low-res (icon/thumb) |
| `IcoMoon.svg` | `templates/flex/fonts/IcoMoon.svg` | SVG (vector) | 84.0 KB | Unused / theme asset | missing | good |
| `Pe-icon-7-strokebb1d.svg` | `templates/flex/fonts/Pe-icon-7-strokebb1d.svg` | SVG (vector) | 160.2 KB | Unused / theme asset | missing | good |
| `ap-arrowsc007.svg` | `templates/flex/fonts/ap-arrows/ap-arrowsc007.svg` | SVG (vector) | 2.2 KB | Unused / theme asset | missing | good |
| `fontawesome-webfont3e6e.svg` | `templates/flex/fonts/fontawesome-webfont3e6e.svg` | SVG (vector) | 434.0 KB | Unused / theme asset | missing | good |
| `cd-lateral-nav.svg` | `templates/flex/images/cd-lateral-nav.svg` | SVG (vector) | 0.2 KB | Unused / theme asset | missing | good |
| `empty.svg` | `templates/flex/images/empty.svg` | SVG (vector) | 0.2 KB | Unused / theme asset | missing | good |
| `gmap-icon.svg` | `templates/flex/images/gmap-icon.svg` | SVG (vector) | 0.4 KB | Unused / theme asset | missing | good |
| `loader.svg` | `templates/flex/images/loader.svg` | SVG (vector) | 0.4 KB | Unused / theme asset | missing | good |
| `svgwhite.svg` | `templates/flex/images/svgwhite.svg` | SVG (vector) | 0.2 KB | Unused / theme asset | missing | good |
| `vm-loader.svg` | `templates/flex/images/vm-loader.svg` | SVG (vector) | 0.4 KB | Unused / theme asset | missing | good |


---

## 7. Visual Identity as It Currently Exists

### Colours Actually Used
- **Primary Teal Accent (`#11A1A2`):** Primary branding color used for buttons, interactive highlights, active menu links, borders, and hover states (123 declarations in `preset1.css`).
- **Teal Hover / Light Variant (`#16CFD0`):** Secondary hover state for buttons and links (25 declarations in `preset1.css`).
- **Dark Coffee Brown (`#411B01`):** Residual background tint and borders on selected checkout options and headers (inherited from the Aura Bean coffee template).
- **Medium Coffee Brown (`#713101`):** Residual accent on form states and section borders.
- **Pure White (`#FFFFFF`):** Main content background and inverted button typography.
- **Off-White / Light Grey (`#F5F5F5` / `#EEEEEE` / `#DEDEDE`):** Table row borders, input backgrounds, and subtle container dividers.
- **Dark Charcoal / Black (`#231F20`):** Full-width footer section background color (`#section-id-1521448645`).
- **Dark Neutral Grey (`#313131`):** Main top menu link font color (`.sp-megamenu-parent > li > a`).
- **Mid Muted Grey (`#787878`):** Subtext, meta information, and secondary copy.

### Fonts in Use
- **Primary Display & Body Font:** **Audiowide** (Google Font, regular weight, latin-ext).
  - *Applied globally to `body`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and `.sp-megamenu-parent`.*
- **Fallback Font Stack:** `Audiowide, sans-serif`.
- **Icon Typographic Sets:**
  - FontAwesome (`FontAwesome`)
  - Pe-icon-7-stroke (`Pe-icon-7-stroke`)
  - Glyphicons Halflings (`Glyphicons Halflings`)

### Overall Design Feel (Factual Summary)
The website presents an outdated mid-2010s Joomla template aesthetic dominated by an inappropriate 1980s sci-fi display font ("Audiowide") applied universally across all body copy, paragraphs, and headings, severely degrading reading ergonomics. The visual structure is cluttered with heavy skeuomorphic button graphics, repeated full-width banner images, and mismatched graphical section dividers. Most glaringly, the visual identity is visibly compromised by residual assets, brown color codes, image folders, and legal copy cloned directly from an unrelated coffee roastery website ("Aura Bean Roastery").

---

## 8. Technical Issues Spotted from the Code

1. **Catastrophic Broken CTA Links (HTTP 500):**
   - File: `index.html`
   - All three large graphical CTA banners on the homepage ("About Us", "Shop Online", "Contact Us") and the "Send Us An Enquiry" badge link to `/en/` language paths (`en/about-us.html`, `en/buy-car-spares-online.html`, `en/contact-helmut-spares.html`), all of which failed with HTTP 500 Internal Server Errors when mirrored.
2. **Broken Dead Anchors (`href="http://"`) on Graphics:**
   - Files: `index.html`, `about-helmut-spares.html`, `contact-helmut-spares.html`, `beetle-price-list.html`
   - Five decorative divider images and banners are wrapped in `<a href="http://">`, causing browser errors if clicked.
3. **Severe Brand & Legal Pollution (Aura Bean Roastery Template Leftovers):**
   - Files: `index.html`, `about-helmut-spares.html`, `contact-helmut-spares.html`, `index6e53.html` (Cart)
   - Contact form auto-response signs off as *"The Aura Bean Team"*.
   - Entire checkout Terms of Service refers exclusively to *"Aura Bean Roastery (Pty) Ltd."*, lists support hours as *"9 a.m. – 5 p.m. PST"*, and provides an unrelated phone number (`+27 71 310 0543`).
   - Main logo and favicon are hosted out of `/images/aura-bean/Logo.jpg`.
4. **Missing or Malformed Heading Hierarchies:**
   - Files: `index.html`, `about-helmut-spares.html`, `beetle-price-list.html`, `contact-helmut-spares.html`
   - Complete absence of an `<h1>` tag on Home, About, Price List, and Contact pages.
   - Catalog page (`buy-vw-beetle-spares-parts-online.html`) contains an empty `<h1></h1>` tag.
5. **SEO & Metadata Deficiencies:**
   - File: `buy-vw-beetle-spares-parts-online.html`
     - Meta description is truncated/broken: `. Read more`.
     - Title tag is generic and lacks keywords: `Welcome to Helmut Spares`.
   - File: `beetle-price-list.html`
     - Overt spelling error in meta description: `VW Beetle Price List - Beelte Restoration Price List`.
   - File: `contact-helmut-spares.html`
     - Meta description falsely claims presence in Vanderbijlpark: `Contact Helmut Motor Spares, Vaal Triangle. Now in Vereeniging and Vanderbijlpark`.
6. **Widespread Missing Alt Text:**
   - Files: All mirrored pages.
   - Dozens of critical content images (buttons, slider banners, divider stars, payfast badge) have `alt=""` or completely lack the `alt` attribute.
7. **Severe Accessibility & Font Usability Failure:**
   - Files: Global CSS (`index.html`, `template.css`)
   - The decorative, geometric font **Audiowide** is set as the global font for all body copy and small text (`body { font-family: Audiowide, sans-serif; font-size: 17px; }`), drastically reducing readability and failing WCAG accessibility standards.
8. **Outdated & Deprecated JavaScript Libraries:**
   - Files: Global template
   - Loads obsolete jQuery v1.12.4, jQuery Migrate, Mootools 1.4.5, and deprecated Google Analytics `ga.js` script (`UA-110150972-1`).
9. **VirtueMart SEF Routing Bug ("404" Category Slug):**
   - Files: Catalog routing (`buy-vw-beetle-spares-parts-online/404/...`)
   - An internal VirtueMart category alias was named "404", polluting product URLs with an apparent error code.
10. **Price Discrepancies Between Catalog Listing and Body Description:**
    - Files: `buy-vw-beetle-spares-parts-online/vw-beetle-beach-buggy-axle-boot-kit-detail.html` (Tag: R 199,00 vs Body: R 129,00)
    - Files: `buy-vw-beetle-spares-parts-online/vw-beetle-beach-buggy-replacement-carb-detail.html` (Tag: R 2295,00 vs Body: R 1695,00)
11. **Favicon Implementation Error:**
    - Files: All pages
    - Declares a 131x78 JPEG image as `image/vnd.microsoft.icon`.
12. **Insecure External Assets & Mixed Content References:**
    - References external unencrypted `http://` resources for PayFast, Bunnypants, and Pinterest scripts.

---

## 9. Open Questions

1. **Physical Branch Locations:**
   Does Helmut Spares currently operate a physical branch in Vanderbijlpark, or has that location permanently closed? (The contact page lists only Vereeniging, while the meta description advertises Vanderbijlpark).
2. **Beetle Price List Document:**
   Is there an existing master PDF or spreadsheet for the "Beetle Price List" that should be downloadable directly on the new website, or was this strictly an email marketing lead capture mechanism?
3. **Current Accurate Pricing:**
   For products with conflicting prices (such as the Axle Boot Kit at R199 vs R129, and the Replacement Carburetor at R2295 vs R1695), which prices are current?
4. **Legal Entity & Registration Details:**
   What are Helmut Spares' official registered company name, CIPC registration number, and VAT registration number to replace the residual "Aura Bean Roastery (Pty) Ltd." terms?
5. **Official High-Resolution Branding Assets:**
   Does the business possess an original high-resolution, vector (SVG/EPS/PDF), or transparent PNG version of the Helmut Spares logo, or does the logo need to be redrawn from the 131x78 JPEG?
6. **Social Media & Communication Channels:**
   Are the `@helmutspares` Instagram and Twitter accounts still active and managed, and does the business have an active WhatsApp Business number or Facebook page to integrate into the new site?
7. **Payment Gateway Credentials:**
   Will the new store continue utilizing PayFast for ZAR card and instant EFT transactions, or is another payment gateway (e.g. Peach Payments, Yoco, Payflex) preferred?
8. **E-Commerce Scope & Stock Sync:**
   The mirror contains exactly 69 online products, whereas the "About Us" page claims "over 15000 parts in stock". Is the new site intended to showcase only this curated selection of 69 fast-moving beetle items, or will there be an integration with an inventory/POS system for a larger catalog?
