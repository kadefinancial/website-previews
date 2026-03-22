# WEBSITE-BUILDER-PROCESS.md
# Claude Code — Preview Website Builder

## OVERVIEW

You build one-page preview websites for local service businesses. You receive a brief with all business data already researched. Your job is to build a premium React JSX site that looks like a $5,000-$10,000 custom build.

Every site must feel like a real business website the owner would be proud to show anyone. Not a PPC squeeze page. Not a template with swapped text. Not aggressive or salesy. The conversion elements are woven in naturally — a phone number in the nav because every real website has one, a form in the hero because it's convenient, reviews displayed because the business is proud of them.

The owner should open it and think "someone already built my website."

**CRITICAL: You are NOT a designer. You are a builder following an exact design system. Do not make creative decisions. Do not freestyle colors, fonts, spacing, or layouts. Follow this document to the pixel. Every site comes out of the same premium system — that's what makes them all look expensive.**

---

## INPUT

You receive a command block containing:
- Business name, industry, city, state
- Phone number, address, hours
- Owner name and any additional staff
- Year established
- Google rating and review count
- Logo URL (or "NONE" for text wordmark)
- Primary Color hex code (or "NONE" for industry default)
- Website status
- Services list
- Service areas list
- Memberships and certifications
- 3-5 real customer reviews with names and sources

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
- Centered on page, clean minimal design
- Background: primary color as a subtle gradient
- Business logo displayed above the input (or business name in heading font if no logo)
- Text: "Enter password to view your website preview"
- Single password input field with rounded corners
- Submit button in the CTA color (see color system below)
- Nothing else — no links, no nav, no distractions

After correct password entry, the gate disappears and the full site loads. Password state persists for the browser session using React state.

---

## DESIGN SYSTEM — THE RULES

This is the core of the system. Every site uses these exact same rules. This is what makes them all look like they came from the same premium agency.

### Font System — SAME ON EVERY SITE

**Heading font:** DM Serif Display
**Body font:** Source Sans Pro

Every single site uses this pairing. No exceptions. No rotating. No matching the business's existing fonts. This is our agency signature.

Import via Google Fonts:
```
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
```

Apply heading font to: H1, H2, H3, nav brand/wordmark, trust bar numbers, form title, CTA heading, large review quote marks.

Apply body font to: everything else — paragraphs, nav links, buttons, form labels, input text, footer text, badge text, service descriptions.

### Typography Scale — SAME ON EVERY SITE

```
H1:       clamp(36px, 4.5vw, 64px)   line-height: 1.1    font-weight: 400
H2:       clamp(28px, 3.5vw, 44px)   line-height: 1.15   font-weight: 400
H3:       clamp(20px, 2vw, 26px)     line-height: 1.3    font-weight: 400
Body:     16px-18px                   line-height: 1.7    font-weight: 400
Small:    14px                        line-height: 1.5    font-weight: 400
Eyebrow:  12px-13px uppercase         letter-spacing: 2-3px  font-weight: 600
Nav:      15px                        font-weight: 600
Button:   16px                        font-weight: 600    letter-spacing: 0.5px
```

### Color System — GENERATED FROM ONE INPUT

You receive ONE color from the brief: the business's primary brand color. You generate EVERYTHING else from rules. If the brief says "Primary Color: NONE", use the industry default below.

**Industry default primary colors (only used when brief says NONE):**
- Plumbers: #1B3A5C (deep navy)
- Electricians: #0A2463 (dark blue)
- Pest Control: #7A1B1B (deep crimson)
- HVAC: #2C5F8A (steel blue)
- Landscaping: #2D5A3F (forest green)
- Roofing: #2D2D2D (charcoal)
- Cleaning: #2A6496 (ocean blue)
- General/Other: #1A1A2E (near-black navy)

**From the primary color, generate these CSS variables:**

```css
:root {
  /* PROVIDED */
  --primary: [from brief or industry default];

  /* GENERATED — darken primary by ~25% for deep sections */
  --primary-dark: [darken primary 25%];

  /* FIXED — never changes */
  --bg-light: #F9FAFB;
  --bg-white: #FFFFFF;
  --text-heading: #1A1A1A;
  --text-body: #4A4A4A;
  --text-subtle: #717171;
  --text-on-dark: #FFFFFF;
  --text-on-dark-muted: rgba(255, 255, 255, 0.75);
  --border-subtle: rgba(0, 0, 0, 0.06);
  --shadow-color: rgba(0, 0, 0, 0.08);

  /* CTA COLOR — the most important rule */
  --cta: [see CTA color rules below];
  --cta-text: [see CTA color rules below];
}
```

### CTA Color Rules — THIS IS WHAT MAKES OR BREAKS THE SITE

The CTA (call-to-action) color is used for ALL buttons, the floating mobile bar, star ratings, badge accents, and hover states. It must POP against every background it appears on.

**Rule: Analyze the primary color's lightness and hue. Then pick the CTA color:**

1. If primary is DARK (navy, dark blue, charcoal, dark green, dark red, forest, etc.):
   - `--cta: #D4A03C` (warm gold)
   - `--cta-text: #1A1A1A` (dark text on gold)

2. If primary is MID-TONE (medium blue, medium green, burgundy, etc.):
   - `--cta: #FFFFFF` (white)
   - `--cta-text: var(--primary)` (primary text on white)

3. If primary is LIGHT or PASTEL (sky blue, lavender, light green, etc.):
   - `--cta: #1A1A1A` (near-black)
   - `--cta-text: #FFFFFF` (white text on black)

4. If primary is RED or WARM (crimson, red, orange, warm brown):
   - `--cta: #FFD700` (bright gold)
   - `--cta-text: #1A1A1A` (dark text on gold)

**The test:** Put the CTA button on a white background AND on the primary color background. If it doesn't instantly grab your eye on BOTH, pick a different CTA. Buttons must NEVER blend into their surroundings.

**NEVER use the primary color as the CTA color.** The CTA must contrast against the primary. If primary is blue, CTA cannot be blue. If primary is red, CTA cannot be red.

### Spacing System — SAME ON EVERY SITE

```
Section padding (desktop):    100px top, 100px bottom
Section padding (mobile):     64px top, 64px bottom
Section horizontal padding:   max(5vw, 24px)
Max content width:            1200px (centered with auto margins)
Card padding:                 32px
Card gap:                     24px
Heading to content gap:       48px (space between section heading and section content)
Eyebrow to heading gap:       12px
Heading to subtitle gap:       16px
Between paragraphs:           20px
```

### Section Rhythm — SAME ON EVERY SITE

This alternating light/dark pattern is what makes expensive sites feel expensive. Every section has clear visual separation.

```
1. Nav:           transparent → fills with --primary on scroll
2. Hero:          gradient using --primary and --primary-dark
3. Trust Bar:     --bg-white (white)
4. Services:      --bg-light (near-white gray #F9FAFB)
5. Why Us:        --primary (bold, dark, full-width color block)
6. Reviews:       --bg-white (white)
7. Service Areas: --bg-light (near-white gray)
8. CTA Section:   --primary-dark (darkest section on the page)
9. Footer:        #111111 (near-black, always)
```

Never deviate from this pattern. The rhythm creates visual hierarchy.

### Card System — SAME ON EVERY SITE

```
Background:      --bg-white
Border:          1px solid var(--border-subtle)
Border radius:   12px
Padding:         32px
Shadow:          0 2px 12px var(--shadow-color)
Hover shadow:    0 8px 32px rgba(0,0,0,0.12)
Hover transform: translateY(-4px)
Transition:      all 0.25s ease
```

All service cards, review cards, and form cards use this exact same system. No tinted backgrounds. No colored borders by default. On hover, a 3px top border in `--cta` color slides in.

### Button System — SAME ON EVERY SITE

**Primary button (all main CTAs):**
```
Background:      var(--cta)
Text color:      var(--cta-text)
Padding:         16px 32px
Border radius:   8px
Font:            16px Source Sans Pro, weight 600
Shadow:          0 4px 16px rgba(0,0,0,0.15)
Hover:           brightness(1.08), shadow increases, translateY(-2px)
```

**Secondary button (less important actions):**
```
Background:      transparent
Border:          2px solid var(--text-on-dark) (on dark bg) or var(--primary) (on light bg)
Text color:      var(--text-on-dark) (on dark bg) or var(--primary) (on light bg)
Padding:         14px 28px
Border radius:   8px
Hover:           background fills with slight opacity
```

**Nav CTA button:**
```
Same as primary button but slightly smaller: 12px 24px padding
```

---

## SITE STRUCTURE

Build every section in this exact order. Do not skip sections. Do not reorder them.

### Section 1: Sticky Navigation Bar

- Logo on the left (image or text wordmark)
- Navigation links on the right: Services, Why Us, Reviews, Areas — anchor links
- "Call Now" button on far right — uses the primary button style (--cta color)
- Nav starts transparent with white text, fills with --primary on scroll
- Transition: background 0.35s ease
- Mobile: hide nav links, show hamburger. Hamburger opens full-screen overlay with all links and a prominent call button.

**Logo display:**
- If Logo URL provided: display at ~40px height in nav. On transparent nav, use as-is or apply brightness filter if logo is dark. On scrolled nav (primary background), ensure visibility — use `filter: brightness(10)` if needed.
- If Logo URL is "NONE": create text wordmark using DM Serif Display. First word in white, second word in --cta color. Or full name in white if single word.

### Section 2: Hero Section

- min-height: 100vh, padded for nav
- Background: CSS gradient from --primary to --primary-dark. Add subtle radial gradient overlays for depth. No stock photos.
- Fade overlay at bottom transitioning to --bg-white

**Left side (desktop, ~55% width):**
- Small badge above headline: strongest credential from brief — "Family Owned Since [year]" or "Serving [City] Since [year]" or "Licensed & Insured" or "BBB Accredited". Style: pill shape, rgba(255,255,255,0.15) background, white text, --cta left border or icon.
- H1: MUST contain city name AND primary service keyword. Formats:
  - "[City]'s Trusted [Service] Experts"
  - "Professional [Service] in [City], [State]"
  - "[Service] You Can Count On in [City]"
- Subtitle: 2-3 sentences mentioning owner by name (if known), years in business, rating. White text, slightly muted opacity. Confident and warm, not salesy.
- Review quote with stars: ★★★★★ "[best one-liner from reviews]" — [Name]. Gold stars (--cta if gold, otherwise #FFD700). This puts social proof above the fold.
- Two buttons:
  - Primary: "📞 Call [phone]" — --cta background, --cta-text color, large with shadow
  - Secondary: "Our Services" — transparent, white border, white text

**Right side (desktop, ~45% width):**
- Lead capture form card
- White background, 12px radius, strong shadow
- Form title in DM Serif Display: "Get a Free Quote"
- Subtitle: "We'll call you back within the hour" — --text-subtle
- Exactly 3 fields:
  - Name (text, placeholder "John Smith")
  - Phone (tel, placeholder "(501) 555-0123" — use local area code from brief)
  - Service (dropdown select with actual services from brief)
- Submit button: "Get My Free Quote →" — --primary background, white text, full width
- NEVER more than 3 fields. No email. No address. No message box.
- On submit: checkmark animation, "We Got It!" heading, "Call us at [phone] for emergencies"

**Mobile layout:** Single column, hero text first, form below.

### Section 3: Trust Bar

- Background: --bg-white
- Four stats in horizontal row (2x2 on mobile)
- Each stat:
  - Large number in DM Serif Display, --text-heading color (e.g., "17+", "5.0", "195+")
  - Label: small bold uppercase in Source Sans Pro, --text-body
  - Subtle description: --text-subtle, 14px
- Stat 1: Years in business (calculate from established year)
- Stat 2: Google rating (show as "X.X ★")
- Stat 3: Review count (e.g., "195+")
- Stat 4: Best remaining differentiator — "24/7 Service", "Family Owned", "Licensed & Insured", etc.

If rating or reviews unavailable, substitute with another differentiator. Never show empty values.

### Section 4: Services Grid

- Background: --bg-light
- Eyebrow: "WHAT WE DO" — uppercase, letter-spaced, --text-subtle
- H2: "[Service] Services in [City], [State]" — --text-heading
- Subtitle: one line about their services — --text-body
- 3-column card grid (1 column mobile)
- Each card uses the standard card system:
  - Relevant emoji icon at top (large, 40px)
  - Service name as H3
  - 1-2 sentence description
  - Hover: lift + shadow + --cta top border
- Use only services from the brief. Max 6 cards. If fewer services exist, use what's there.

**Subtle CTA after services:**
A gentle centered line, NOT a button or a section. Just: "Questions about our services? Call [Owner first name] at [phone number]" — phone is a tel: link in --cta color.

### Section 5: Why Us

- Background: --primary, full width
- All text white
- Eyebrow: "WHY [CITY] TRUSTS US" or "WHY CHOOSE [BUSINESS NAME]" — uppercase, rgba(255,255,255,0.7)
- H2: "Why [City] Trusts [Owner Name]" or "Why Choose [Business Name]" — white
- Content: 2-3 paragraphs about the owner and business. Use information from the brief:
  - Owner name and role
  - Year established and years of experience
  - Family-owned status
  - Certifications and memberships (weave them in naturally, don't just list)
  - What makes them different (from reviews — what customers consistently praise)
- This section tells the owner's story. Make it feel personal and authentic.
- If owner name is unknown, focus on the business's track record and values.
- 2-column on desktop: story text on left (~60%), key credentials as icon-list on right (~40%)
- Credentials list: 3-5 items with subtle icons (✓ or similar), each in white with slight muted opacity for the icon

### Section 6: Reviews Carousel

- Background: --bg-white
- Eyebrow: "WHAT OUR CUSTOMERS SAY" — uppercase, --text-subtle
- H2: "Real Reviews from Real Customers" — --text-heading
- Display reviews as cards using standard card system
- Each review card:
  - Five gold stars at top (use --cta if gold, else #FFD700)
  - Review text in quotes, italic, --text-body
  - Reviewer name: bold, --text-heading
  - Source badge: "Google", "Yelp", "Facebook" — small pill, --bg-light background
- Desktop: show 3 cards at once, navigation dots below
- Mobile: show 1 card, swipeable or dot-navigated
- Navigation dots: circles, --primary for active, --border-subtle for inactive
- Use ONLY real reviews from the brief. Never fabricate.

**Subtle CTA after reviews:**
Centered line: "Ready to see why [Review Count]+ customers trust [Business Name]? Call [phone]" — phone in --cta color as tel: link.

### Section 7: Service Areas

- Background: --bg-light
- Eyebrow: "WHERE WE SERVE" — uppercase, --text-subtle
- H2: "Serving [City] and Surrounding Areas" — --text-heading
- Display as wrapped pill/tag layout:
  - Each area as a rounded pill: --bg-white background, 1px --border-subtle border, --text-body
  - Padding: 10px 20px
  - Border radius: 30px
  - Each pill has a subtle 📍 pin emoji before the name
  - title attribute on each: "[primary service] in [area name], [state]"
- Centered layout, max-width 900px
- Use ALL service areas from the brief.

### Section 8: CTA Section

- Background: --primary-dark (darkest section)
- All text white, centered
- H2 in DM Serif Display: "Got [Problem Noun]? Call [Owner First Name]." — Examples:
  - Plumber: "Got a Plumbing Problem? Call [Name]."
  - Electrician: "Got an Electrical Issue? Call [Name]."
  - Pest Control: "Got Unwanted Guests? Call [Name]."
  - HVAC: "AC Not Working? Call [Name]."
  - If owner unknown: "Got [Problem]? We're Here to Help."
- Subtitle: one sentence, confident, warm. "Same-day service, honest pricing, and a team that answers the phone." — muted white
- Two buttons:
  - Primary: "📞 Call Now: [phone]" — --cta background, --cta-text
  - Secondary: "Get a Free Quote" — transparent, white border, scrolls to hero form
- This is NOT desperate or aggressive. It's confident. Like a trusted friend saying "just call me."

### Section 9: Footer

- Background: #111111 (near-black, always — never primary or dark variant)
- Text: rgba(255,255,255,0.7) for body, white for headings
- Three columns (single column stacked on mobile):
  - Column 1: Logo (brightened) or wordmark, 2-sentence business description, phone as tel: link
  - Column 2: "Quick Links" — Services, Why Us, Reviews, Areas, Get a Quote (anchor links)
  - Column 3: "Contact" — full address, phone, hours summary
- Bottom bar: "© [year] [Business Name]. All rights reserved." — centered, separated by subtle top border, small muted text
- Footer links in --cta color on hover

### Section 10: Floating Mobile CTA Bar

- Fixed to bottom of screen, only visible on mobile (below 900px breakpoint)
- Background: --cta color
- Text: --cta-text color
- Content: phone emoji + "Call [Business Name] Now" — tappable, full-width tel: link
- Height: ~56-60px
- Shadow: 0 -4px 16px rgba(0,0,0,0.15)
- z-index above everything
- Add bottom padding to the footer so it's not obscured by this bar on mobile

---

## SEO — BUILT INTO EVERY SITE

These elements are injected via a useEffect hook on component mount. They are not optional.

### Meta Title
Format: "[Primary Service] [City] [State] | [Business Name]"
Example: "Pest Control Little Rock AR | Advantage Mosquito & Pest Control"
Must be under 60 characters.
Set via: `document.title = "..."`

### Meta Description
Short description with keywords + phone number. Under 160 characters.
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
- name, image (logo URL if provided), telephone ("+1" + digits only)
- address: full PostalAddress object
- geo: GeoCoordinates (look up approximate lat/lng for the city)
- openingHoursSpecification from hours in brief
- aggregateRating: rating value and review count (only if rating exists)
- founder: owner name as Person (only if known)
- foundingDate: year (only if known)
- description: one paragraph about the business
- areaServed: array of City objects for every service area
- hasOfferCatalog: OfferCatalog with each service as an Offer
- memberOf: array of Organization objects for memberships
- sameAs: empty array (we don't have social URLs)

Clean up schema script on unmount via useEffect return.

### On-Page SEO Rules
- Only ONE H1 on the entire page — must contain city + service keyword
- H2s should include location keywords where natural
- Service area tags have title attributes: "[service] in [city], [state]"
- Every phone number wrapped in tel: link
- All images/emoji have descriptive alt text
- Fully mobile responsive
- Google Fonts is the only external resource — no heavy dependencies

---

## QUALITY CHECK

Before outputting the file, verify every item. Fix any failures before delivering.

### Content
- [ ] Every review is real and matches the brief exactly
- [ ] Every review has a real person's name
- [ ] Every service matches the brief — no additions, no generic placeholders
- [ ] Every service area matches the brief
- [ ] Business name spelled exactly as in the brief
- [ ] Phone number matches the brief
- [ ] Owner name (if shown) matches the brief
- [ ] Year established (if shown) matches the brief
- [ ] No placeholder text anywhere — no "Lorem ipsum," no "[Insert]"
- [ ] Memberships and certifications match the brief

### Design System Compliance
- [ ] Font is DM Serif Display + Source Sans Pro — nothing else
- [ ] Only ONE color from the brief was used (primary). All other colors generated by rules.
- [ ] CTA color contrasts against BOTH white and primary backgrounds
- [ ] CTA color is NOT the same as the primary color
- [ ] Section backgrounds follow the exact rhythm: transparent → gradient → white → light → primary → white → light → dark → near-black
- [ ] All cards use the same card system (white bg, subtle border, 12px radius, same shadow)
- [ ] No tinted card backgrounds. No colored card borders (except hover state).
- [ ] All buttons use the button system (--cta bg for primary, transparent for secondary)
- [ ] Spacing matches the system: 100px section padding desktop, 64px mobile
- [ ] Max content width is 1200px

### Conversion Elements
- [ ] Phone number in at least 6 places: nav, hero button, form confirmation, post-services CTA, CTA section, footer, floating mobile bar
- [ ] All phone numbers are tel: links
- [ ] Form has exactly 3 fields: name, phone, service dropdown
- [ ] Form dropdown contains actual services from the brief
- [ ] Review quote with stars appears in hero above the fold
- [ ] Subtle CTAs after services and after reviews (text only, not buttons)
- [ ] Floating mobile CTA bar present, only visible on mobile

### SEO
- [ ] H1 contains city AND service keyword
- [ ] Only one H1 on the page
- [ ] Meta title set, under 60 chars
- [ ] Meta description set, under 160 chars
- [ ] Schema JSON-LD present with all available fields
- [ ] Geo meta tags present
- [ ] Service area tags have title attributes

### Responsive
- [ ] Site works at 375px width (mobile)
- [ ] Hamburger menu works on mobile
- [ ] Floating CTA bar appears on mobile only
- [ ] Trust bar goes to 2x2 grid on mobile
- [ ] Form goes full-width below hero text on mobile
- [ ] Font sizes scale down smoothly via clamp()

### Final Gut Check
- [ ] If this business owner opened this link, would they be impressed?
- [ ] Does every site from this system look like it came from the same premium agency?
- [ ] Would the owner show this to their spouse and say "look what someone built for us"?
- [ ] Are the buttons impossible to miss on every section?

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
   - Primary color used and CTA color generated
   - Any notes about the build (missing data, logo issues, etc.)
