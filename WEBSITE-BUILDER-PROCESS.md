# WEBSITE-BUILDER-PROCESS.md
# Claude Code — Preview Website Builder

## OVERVIEW

You build one-page landing page previews for local service businesses. You receive a detailed brief with all business data, branding, and reviews already researched. Your job is to build a premium React JSX landing page that looks custom-designed for that specific business.

Every site must feel like a real business website the owner would be proud to show anyone. Not a PPC squeeze page. Not a template with swapped text. Not aggressive or salesy. The conversion elements are there but woven in naturally — a phone number in the nav because every real website has one, a form in the hero because it's convenient, reviews displayed because the business is proud of them.

The owner should open it and think "someone already built my website."

---

## INPUT

You receive a command block containing:
- Business name, industry, city, state
- Phone number, address, hours
- Owner name and any additional staff
- Year established
- Google rating and review count
- Logo URL (or "NONE" for text wordmark)
- Color hex codes (primary, accent, dark, background)
- Website status
- Services list
- Service areas list
- Memberships and certifications
- 3-5 real customer reviews with names and sources
- Call notes with useful context

All data in the brief is pre-verified. Do not search for additional information. Build from the brief only.

---

## FILE OUTPUT

Output a single self-contained React JSX file with all styles, components, data, and logic in one file. No separate CSS or JS files.

File naming: lowercase business name with hyphens. Example: `advantage-pest.jsx`, `amg-plumbing.jsx`

The file must render correctly as a React component with a default export and no required props.

---

## PASSWORD GATE

Every site starts with a password gate. Password is always "2026". Never change this.

The gate screen:
- Centered on page, clean minimal design using the business brand colors
- Business logo displayed above the input (or business name in heading font if no logo)
- Text: "Enter password to view your website preview"
- Single password input field
- Submit button styled in the accent color
- Nothing else — no links, no nav, no distractions

After correct password entry, the gate disappears and the full site loads. Password state persists for the browser session using React state.

---

## BRANDING

### Colors
Use the exact hex codes provided in the brief. Set them as CSS variables:
- `--primary`: Primary brand color (used for dark sections, nav background on scroll, Why Us section)
- `--accent`: Accent color (used for CTAs, buttons, stars, highlights, hover states)
- `--dark`: Darkest shade (used for footer, CTA section backgrounds)
- `--background`: Main page background
- `--text`: Dark text color (use #333333 if not specified)
- `--text-light`: Lighter text for subtitles and descriptions (use #666666 if not specified)
- `--white`: #FFFFFF

If the brief notes colors are "industry defaults," still use them as provided. They've been selected for the industry.

### Logo
- If a Logo URL is provided: display it in the nav (left side) and footer. Apply `filter: brightness(10)` or similar when displayed on dark backgrounds so it remains visible. Set height to approximately 40px in the nav.
- If Logo URL is "NONE": create a text wordmark using the business name in the heading font. Style it with the brand colors — for example, the first word in white and the second word in the accent color. Display this in the nav and footer.

### Fonts
Never use the business's existing fonts. Select from these high-quality pairings. Vary across sites — never use the same pairing twice in a row.

Heading fonts (pick one):
- DM Serif Display (classic, trustworthy)
- Playfair Display (elegant, established)
- Merriweather (warm, approachable)
- Lora (professional, refined)
- Libre Baskerville (traditional, authoritative)

Body fonts (pair with heading):
- Open Sans (clean, universal)
- Source Sans Pro (professional, readable)
- Lato (friendly, modern)
- Nunito Sans (soft, approachable)
- DM Sans (geometric, clean)

Import via Google Fonts URL in the CSS. Apply heading font to all h1, h2, h3 elements and the nav brand. Apply body font to everything else.

---

## SITE STRUCTURE

Build every section in this exact order. Do not skip sections. Do not reorder them.

### Section 1: Sticky Navigation Bar

- Logo on the left (image or text wordmark)
- Navigation links on the right: Services, Why Us, Reviews, Areas — anchor links to page sections
- "Call Now" button on far right with the phone number, styled in the accent color with the dark color text
- Nav starts transparent, fills with the primary color on scroll (use scroll event listener with state)
- Transition the background change smoothly (0.3-0.4s ease)
- Mobile: hide nav links, show hamburger button. Hamburger opens full-screen overlay with all links and a prominent call button.

### Section 2: Hero Section

- Full viewport height (min-height: 100vh), padded for nav
- Background: CSS gradient using primary and related colors. No stock photos. Add subtle radial gradient overlays for depth.
- Fade overlay at the bottom transitioning to the page background color

**Left side (desktop):**
- Small badge above headline: Use the strongest credential from the brief — "Family Owned Since [year]" or "Serving [City] Since [year]" or "Licensed & Insured" or "BBB Accredited". Style as a pill with slight transparency background and accent color text.
- H1 headline: MUST contain the city name AND the primary service keyword. Use one of these formats:
  - "[City]'s Trusted [Service] Experts"
  - "Professional [Service] in [City], [State]"
  - "[Service] You Can Count On in [City]"
- Subtitle paragraph: 2-3 sentences mentioning the owner by name (if known), years in business, and rating. Confident and warm, not salesy.
- Short review quote with stars: Pull the strongest one-liner from the reviews. Display as: ★★★★★ "[review text]" — [Reviewer Name]. This puts social proof above the fold.
- Two buttons:
  - Primary: "📞 Call [phone number]" — accent color background, dark text, large, with shadow
  - Secondary: "Our Services" — transparent with white border, links to #services

**Right side (desktop):**
- Lead capture form card with white background, rounded corners, shadow
- Form title: "Get a Free Quote"
- Subtitle: "We'll call you back within the hour"
- Exactly 3 fields:
  - Name (text input, placeholder "John Smith")
  - Phone (tel input, placeholder "(501) 555-0123")
  - Service type (dropdown select populated with actual services from the brief)
- Submit button: "Get My Free Quote →" — primary color background, white text
- NEVER add more than 3 fields. No email. No address. No message box.
- On submit: show confirmation with checkmark, "We Got It!" heading, and "Call us directly at [phone] for emergencies"

**Layout:** Two-column grid on desktop (roughly 55%/45% split). Single column on mobile with the form below the hero text.

### Section 3: Trust Bar

- White background, centered content
- Four stats in a horizontal row (2x2 grid on mobile)
- Each stat:
  - Large number in heading font (e.g., "17+", "5.0", "195+")
  - Label in small bold uppercase (e.g., "Years in Business")
  - Subtle description underneath (e.g., "Serving Arkansas since 2008")
- Stat 1: Years in business (calculate from established year)
- Stat 2: Google rating
- Stat 3: Review count
- Stat 4: Pick the strongest remaining differentiator — "24/7 Service", "Family Owned", "Licensed & Insured", "Humane Methods", "BBB Accredited", etc.

If rating or review count is not available ("Not on Google"), substitute with another differentiator. Never show empty or zero values.

### Section 4: Services Grid

- Section header:
  - Small eyebrow text: "What We Do" (uppercase, letter-spaced, accent or muted color)
  - H2: "[Service] Services in [City], [State]"
  - One-line subtitle about their services
- 3-column card grid on desktop, single column on mobile
- Each card:
  - Relevant emoji icon (pick the best match for the service)
  - Service name as H3
  - 1-2 sentence description specific to that service
  - Hover effect: slight translateY lift, shadow increase, colored top border slides in from left
- Use only services from the brief. If the brief has fewer than 6 services, use however many there are. If more than 6, pick the 6 most important.

**Subtle CTA after this section:**
- Centered text: "Questions about our services? Call [Owner first name or business name] at [phone]"
- Style it small, muted color, with the phone number as a clickable tel: link
- This should feel like a helpful note, not a billboard

### Section 5: Why Us Section

- Dark background using the primary color, white text
- Two-column layout on desktop, single column on mobile

**Left column:**
- H2: "Why [City] Trusts [Owner Name]" (or "Why Choose [Business Name]" if no owner name)
- Paragraph about the owner/business — personal, genuine, not corporate. Mention their story, approach, how long they've been doing this. Use info from the brief's call notes.
- List of credentials with checkmark icons:
  - Family owned & operated (if applicable)
  - Each membership/certification from the brief
  - Emergency service (if applicable)
  - Residential & commercial (if applicable)
  - Any other verified credentials

**Right column:**
- 2x2 grid of badge cards with semi-transparent backgrounds
- Each card: emoji icon, bold title, short description
- Pick the 4 most relevant differentiators for this specific business (Residential, Commercial, Emergency, Licensed, Humane, Eco-Friendly, 24/7, etc.)

### Section 6: Reviews Carousel

- Section header:
  - Eyebrow: "Customer Reviews"
  - H2: "[Rating] Stars on Google" (or "What Our Customers Say" if no Google rating)
  - Subtitle: "Don't take our word for it — hear from the families and businesses we protect."
- Centered review card with white background, rounded corners, shadow
- Large opening quotation mark as decorative element
- Star rating display
- Review text in italics
- Reviewer name with dash below
- Navigation dots to click between reviews
- Auto-rotate every 5 seconds using setInterval
- Display only real reviews from the brief. Never add fake reviews.

**Subtle CTA after this section:**
- Centered text: "Ready to see what the buzz is about? Give us a call at [phone]"
- Same understated style as the post-services CTA

### Section 7: Service Areas

- Section header:
  - Eyebrow: "Where We Serve"
  - H2: "[Service] Service Areas in Central [State/Region]" (use keyword-rich heading)
  - Subtitle about serving the greater metro area
- Pill-shaped tags in a flex-wrap centered layout
- Each tag: location pin emoji + city name
- Each tag has a title attribute: "[Service] in [City], [State]"  (for SEO)
- Hover effect: background inverts to primary color with white text, slight lift

### Section 8: Call-to-Action Section

- Bold background: primary color or gradient from primary to accent
- Large H2: "Got [Problem]? Call [Owner First Name]." or "Ready for a Free Quote?" — confident and direct, not desperate
- Subtitle: one line about free quotes, honest pricing, or owner answers the phone
- Large phone number button: accent color background, dark text, big font, shadow, tel: link
- Hover effect: lift and shadow increase
- Tone: confident invitation, not aggressive sales pitch. "Got pests? Call Jack." not "CALL NOW BEFORE IT'S TOO LATE"

### Section 9: Footer

- Darkest color background (--dark), light text
- Three-column layout (single column on mobile):
  - Column 1: Logo or wordmark, 2-3 sentence business description, full address, phone as click-to-call link
  - Column 2: "Services" heading, list of all services linking to #services
  - Column 3: "Service Areas" heading, list of all areas linking to #areas
- Bottom bar with border-top separator:
  - Copyright: "© [current year] [Business Name]. All rights reserved."
  - Memberships: "Member: BBB | [Association] | [Association]"

### Section 10: Floating Mobile CTA

- Visible ONLY on mobile (hide on desktop using media query)
- Fixed position at bottom of screen
- Full-width bar with accent color background
- Phone icon + "Call Now" text + phone number
- Links to tel: for click-to-call
- z-index above everything else
- This is the single highest-converting element for mobile users. Never skip it.

---

## SEO — BUILT INTO EVERY SITE

These elements are injected via a useEffect hook on component mount. They are not optional.

### Meta Title
Format: "[Primary Service] [City] [State] | [Business Name]"
Example: "Pest Control Little Rock AR | Advantage Mosquito & Pest Control"
Must be under 60 characters.

Set via: `document.title = "..."`

### Meta Description
Format: Short description with keywords + phone number.
Must be under 160 characters.

Create meta element and append to document.head.

### Geo Meta Tags
- `geo.region`: "US-[state code]"
- `geo.placename`: "[City]"

### Schema Markup (JSON-LD)

Create a script element with type "application/ld+json" and append to document.head.

Use the most specific @type:
- Plumber → "Plumber"
- Electrician → "Electrician"
- Pest Control → "PestControlService"
- HVAC → "HVACBusiness"
- Locksmith → "Locksmith"
- Landscaper → "LandscapingService"
- Roofing → "RoofingContractor"
- Cleaning → "HousekeepingService"
- General → "LocalBusiness"

Required schema fields:
- name: exact business name from brief
- image: logo URL (if provided)
- telephone: "+1" + digits only
- address: full PostalAddress object
- geo: GeoCoordinates (look up lat/lng for the address)
- openingHoursSpecification: from hours in brief
- aggregateRating: rating value, review count, bestRating 5 (only if rating exists)
- founder: owner name as Person object (only if known)
- foundingDate: year (only if known)
- description: one paragraph about the business
- areaServed: array of City objects for every service area
- hasOfferCatalog: OfferCatalog with each service as an Offer
- memberOf: array of Organization objects for memberships
- sameAs: social media URLs if known (empty array if none)

Clean up the schema script element on component unmount using the useEffect return function.

### On-Page SEO Rules
- Only ONE H1 on the entire page — must contain city + service keyword
- H2s should include location keywords where natural
- Service area tags must have title attributes: "[service] in [city], [state]"
- Every phone number wrapped in click-to-call tel: link
- All images/emoji have descriptive alt text
- Site must be mobile responsive
- No heavy dependencies that slow load time — Google Fonts is the only external resource

---

## DESIGN RULES

### General Aesthetic
- Clean, professional, confident. Not flashy, not aggressive, not generic.
- Generous whitespace. Don't cram sections together.
- Consistent use of brand colors throughout — primary for dark sections, accent for interactive elements, background for light sections.
- Smooth transitions on all hover states and scroll effects (0.2-0.3s ease).
- No stock photos. Use gradients, colors, and typography for visual impact.
- No emojis in body text (only as service card icons and service area pins).

### Typography
- Heading font for: H1, H2, H3, nav brand, trust bar numbers, form title, CTA heading, review quote marks
- Body font for: everything else — paragraphs, nav links, buttons, form labels, footer text
- Font sizes should be responsive using clamp() for headings: `clamp(32px, 4vw, 62px)` for H1, `clamp(28px, 3.5vw, 44px)` for H2
- Line height: 1.1-1.2 for headings, 1.6-1.7 for body text
- Letter spacing: 0.5-3px for uppercase labels, normal for everything else

### Color Usage
- Primary color: nav on scroll, Why Us section background, service card hover borders, footer elements
- Accent color: all buttons and CTAs, star ratings, badge text, hover states, floating mobile CTA
- Dark color: footer background, CTA section background or gradient, deep shadows
- Background color: main page background, form card background, service card background
- White: text on dark backgrounds, form card, review card, trust bar

### Responsive Design
- Breakpoint at 900px for mobile
- Desktop: multi-column grids, side-by-side hero layout
- Mobile: single column everything, hamburger nav, floating CTA bar appears, trust bar goes to 2x2
- All padding reduces on mobile (80px sections → 60px, 40px horizontal → 20px)
- Font sizes naturally scale down via clamp()
- Form goes full-width on mobile below the hero text

### Borders and Shadows
- Cards: 1px solid border in a subtle color (rgba of primary at 0.06-0.1 opacity)
- Shadows: use layered shadows for depth — `0 4px 24px rgba(primary, 0.12)` for standard, `0 12px 48px rgba(primary, 0.15)` for featured elements
- Hover shadows increase depth: more Y offset, more blur, slightly more opacity
- Border radius: 8px for buttons, 12px for cards, 16px for featured cards, 30px for pills/tags

---

## QUALITY CHECK

Before outputting the file, verify every item. Fix any failures before delivering.

### Content
- [ ] Every review is real and matches what was provided in the brief
- [ ] Every review has a real person's name
- [ ] Every service matches the brief — no additions, no generic placeholders
- [ ] Every service area matches the brief
- [ ] Business name is spelled exactly as in the brief
- [ ] Phone number matches the brief
- [ ] Owner name (if shown) matches the brief
- [ ] Year established (if shown) matches the brief
- [ ] No placeholder text anywhere — no "Lorem ipsum," no "[Insert]," no "Your description"
- [ ] Memberships and certifications match the brief — don't add any not listed

### Conversion Elements
- [ ] Phone number in at least 6 places: nav, hero button, hero form confirmation, post-services CTA, CTA section, footer, floating mobile bar
- [ ] All phone numbers are tel: links
- [ ] Form has exactly 3 fields: name, phone, service dropdown
- [ ] Form dropdown contains actual services from the brief
- [ ] Form button says something specific ("Get My Free Quote →")
- [ ] Form confirmation includes phone number
- [ ] Review quote with stars appears in hero area above the fold
- [ ] Subtle CTAs appear after services and after reviews sections
- [ ] Floating mobile CTA bar is present and only visible on mobile

### SEO
- [ ] H1 contains city AND service keyword
- [ ] Only one H1 on the page
- [ ] Meta title is set, under 60 characters, contains city + service + business name
- [ ] Meta description is set, under 160 characters
- [ ] Schema JSON-LD is present with all available fields from the brief
- [ ] Geo meta tags present
- [ ] Service area tags have title attributes

### Design
- [ ] Logo displays correctly in nav and footer (or text wordmark if no logo)
- [ ] Colors match the hex codes from the brief
- [ ] Site is mobile responsive — test mental model of 375px width
- [ ] Hamburger menu works on mobile
- [ ] Floating mobile CTA appears on mobile only
- [ ] Password gate works with "2026"
- [ ] No console errors in the JSX
- [ ] Font import URL is correct and loads both heading and body fonts
- [ ] The site feels like a real business website, not a landing page or sales funnel

### Final Gut Check
- [ ] If this business owner opened this link, would they be impressed?
- [ ] Does it feel custom-built for THEIR business, or does it look like a template?
- [ ] Would they show this to their spouse and say "look what someone built for us"?

If the answer to any of those is no, revise before delivering.

---

## DELIVERY

After building the file:
1. Save it to the previews project directory with the correct filename
2. Deploy to Vercel (git add, commit, push — or Vercel CLI deploy)
3. Confirm the site is live at the expected URL
4. Report back with:
   - Live URL
   - File name
   - Business name and owner
   - Any notes about the build (missing data, logo issues, etc.)
