# WEBSITE-BUILDER-PROCESS.md
# Claude Code — Preview Website Builder

## OVERVIEW

You build one-page preview websites for local service businesses. You receive a brief with all business data already researched. Your job is to build a premium React JSX site that looks like a $5,000-$10,000 custom agency build.

Every site must feel like a real business website the owner would be proud to show anyone. Not a PPC squeeze page. Not a template with swapped text. Not aggressive or salesy. The conversion elements are woven in naturally — a phone number in the nav because every real website has one, a form in the hero because it's convenient, reviews displayed because the business is proud of them.

The owner should open it and think "someone already built my website."

**CRITICAL: You are a builder following an exact design system. Do not make creative decisions about colors, fonts, or layout. Follow this document precisely. The design system is what makes every site look premium.**

---

## INPUT

You receive a command block containing:
- Business name, industry, city, state
- Phone number, address, hours
- Owner name and any additional staff
- Year established
- Google rating and review count
- Hue Family (blue, red, green, orange, purple, pink, yellow, teal, black/gray, or "None — use industry default")
- Website status
- Services list
- Service areas list
- Memberships and certifications
- 3-5 real customer reviews with REAL NAMES and sources

All data in the brief is pre-verified. Do not search for additional information. Build from the brief only.

---

## FILE OUTPUT

Output a single self-contained React JSX file with all styles, components, data, and logic in one file. No separate CSS or JS files.

File naming: lowercase business name with hyphens. Example: `advantage-pest.jsx`, `amg-plumbing.jsx`

The file must render correctly as a React component with a default export and no required props.

---

## THE DESIGN SYSTEM

This is the core of everything. Every site follows these exact rules. This is what makes them all look like $5-10K custom builds.

### Color System — Mapped from Hue Family

You receive a "Hue Family" in the brief (e.g., "blue", "red", "green"). Map it to the muted primary and accent colors below. NEVER use the client's actual bright/saturated brand colors. We create a sophisticated, muted version.

**HUE FAMILY → COLOR MAPPING:**

| Hue Family | Muted Primary (--primary) | Accent (--accent) |
|---|---|---|
| blue | #1C2B41 (deep navy) | #C8934F (warm gold) |
| red | #4A1A2E (rich burgundy) | #C17F5E (soft copper) |
| green | #1E3A2F (forest) | #B8694A (warm terracotta) |
| orange | #5C3A1E (deep clay) | #3A7D7E (teal) |
| purple | #2E1E3D (deep plum) | #C4917B (rose gold) |
| pink | #3D2E3A (mauve charcoal) | #D4A0A0 (blush) |
| yellow | #2D2D2D (charcoal) | #D4A03C (amber) |
| teal | #1A3A3F (deep sea) | #C4705A (warm coral) |
| black/gray | #1E1E1E (charcoal) | #D4C5A9 (warm cream) |

**INDUSTRY DEFAULTS (when hue family is "None — use industry default"):**

| Industry | Primary | Accent |
|---|---|---|
| Plumber | #1C2B41 (navy) | #C8934F (warm gold) |
| Electrician | #2D2D2D (charcoal) | #D4A03C (amber) |
| Pest Control | #1E3A2F (forest) | #B8694A (terracotta) |
| HVAC | #1A3A3F (deep sea) | #C4705A (warm coral) |
| Landscaping | #1E3A2F (forest) | #B8694A (terracotta) |
| Roofing | #1E1E1E (charcoal) | #D4C5A9 (warm cream) |
| Cleaning | #1C2B41 (navy) | #C17F5E (soft copper) |
| General/Other | #1C2B41 (navy) | #C8934F (warm gold) |

**FIXED PALETTE (same on EVERY site regardless of hue family):**

```css
:root {
  --primary: [from hue mapping above — used for dark sections, footer, nav on scroll];
  --accent: [from hue mapping above — used for buttons, icons, highlights];
  --cream: #FAF9F6;
  --white: #FFFFFF;
  --text: #2A2A3C;
  --text-mid: #5A5A6E;
  --text-light: #8A8A9A;
  --border: rgba(0,0,0,0.06);
}
```

**NOTE: There is no separate "dark" color. The --primary IS the dark color.** All our muted primaries are deep, dark colors by design. They serve as the background for dark sections, the footer, and the nav on scroll. This keeps the entire site in one cohesive color family.

### Font System — SAME ON EVERY SITE

**Heading font:** Playfair Display (weight 400-600)
**Body font:** DM Sans (weight 400-700)

Every single site uses this pairing. No exceptions. No rotating. This is our agency signature.

Import via Google Fonts:
```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
```

Apply Playfair Display to: H1, H2, H3, wordmark, trust bar numbers, CTA heading.
Apply DM Sans to: everything else — paragraphs, nav links, buttons, form labels, input text, footer text.

### Typography Scale — SAME ON EVERY SITE

```
H1:       clamp(40px, 5vw, 68px)    line-height: 1.05   letter-spacing: -1.5px
H2:       clamp(30px, 3.5vw, 44px)  line-height: 1.15   letter-spacing: -0.5px
H3:       clamp(18px, 2vw, 22px)    line-height: 1.3    font-weight: 600 (DM Sans, not Playfair)
Body:     16-18px                    line-height: 1.7
Small:    13-14px                    line-height: 1.5
Eyebrow:  12px uppercase             letter-spacing: 3px  font-weight: 700
Nav:      14px                       font-weight: 600
Button:   16px                       font-weight: 700     letter-spacing: 0.3px
```

### Wordmark — NEVER USE CLIENT LOGOS

Every site uses a text wordmark built with Playfair Display. Never use the client's logo image.

**Wordmark rules:**
- Use Playfair Display, weight 600
- On light backgrounds: first word in --primary color, second word in --accent color
- On dark backgrounds: first word in white, second word in --accent color
- If business name is one word: full name in white/primary, with any ampersand or "LLC" etc. in --accent
- Font size: 22px in nav, 22px in footer
- Letter-spacing: -0.5px

**Examples:**
- "AMG Plumbing" → "AMG" in navy, "Plumbing" in gold
- "Advantage Pest" → "Advantage" in forest, "Pest" in terracotta
- "Shaw Plumbing LLC" → "Shaw" in navy, "Plumbing" in gold (drop "LLC")

### Icons — ZERO EMOJIS

**CRITICAL: Never use emoji characters anywhere on the site. Not for service cards. Not for service areas. Not for badges. Not for any purpose.**

All icons must be inline SVG elements with these properties:
- Stroke-based (not filled)
- stroke-width: 1.5
- strokeLinecap: "round"
- strokeLinejoin: "round"
- Size: 28x28 for service cards, 18-20 for small UI elements, 14x14 for map pins
- Color: use --accent for icons on light backgrounds, use --accent for icons on dark backgrounds

Create appropriate SVG icons for each service type. Common icons needed:
- Wrench (general repair)
- Flame/fire (water heaters, heating)
- Droplets/water (drain cleaning, leaks, water lines)
- Shield with checkmark (guarantees, safety, inspections)
- Home (residential service)
- Zap/lightning (electrical, emergency)
- Bug (pest control)
- Leaf (landscaping)
- Wind (HVAC)
- Pipe/tube (sewer, gas lines)
- Thermometer (HVAC)
- Truck (delivery, service calls)

For service area tags, use a small SVG map pin icon (14x14), not a pin emoji.

### Spacing System — SAME ON EVERY SITE

```
Section padding (desktop):    110px top, 110px bottom
Section padding (mobile):     64px top, 64px bottom
Section horizontal padding:   40px desktop, 20px mobile
Max content width:            1200px (centered with auto margins)
Card padding:                 36px 30px
Card gap:                     20px
Section heading to content:   56-64px gap
Eyebrow to heading:           14px
Gold line to eyebrow:         20px
```

### Section Background Rhythm — SAME ON EVERY SITE

This alternating pattern creates the premium feel. Never deviate.

```
1. Nav:           transparent → fills with --primary on scroll
2. Hero:          --cream (#FAF9F6)
3. Trust Bar:     --white (#FFFFFF) with top and bottom 1px --border
4. Services:      --cream (#FAF9F6)
5. Why Us:        --primary — the ONE dark section
6. Reviews:       --white (#FFFFFF)
7. Service Areas: --cream (#FAF9F6)
8. CTA:           --white (#FFFFFF) with top 1px --border
9. Footer:        --primary
```

**The --primary color is used as a full background ONLY for: the dark section(s), the footer, the nav on scroll, the mobile menu overlay, and the password gate. It should NEVER be used as a background for light sections like Services, Trust Bar, or Service Areas. The --accent color should NEVER be used as a full section background — only for buttons, icons, and small highlights.**

**CRITICAL RULE: No two adjacent sections can share the same background color.** If the CTA section is directly above the Footer, the CTA MUST be white or cream — never --primary. The Footer is always --primary, so the section above it must always contrast. This prevents the "dark blob" problem where two sections melt together.

### The Gold Line

Every section heading starts with a 48px wide, 2px tall horizontal line in the --accent color, centered above the eyebrow text. This is our agency signature element. It appears on: Services, Why Us, Reviews, Service Areas. It does NOT appear on: Hero, Trust Bar, CTA, Footer.

### Card System — SAME ON EVERY SITE

```
Background:      --white (#FFFFFF)
Border:          1px solid var(--border)
Border radius:   10-12px
Padding:         36px 30px
Shadow:          none by default (clean, not floaty)
Hover shadow:    0 12px 40px rgba(0,0,0,0.1)
Hover transform: translateY(-4px)
Hover top border: 2px solid var(--accent) — slides in from left using width transition
Transition:      all 0.3s ease
```

All service cards, review cards, and form cards use this exact system. NO tinted backgrounds. NO colored cards. ALL white with subtle border.

### Button System — SAME ON EVERY SITE

**Primary CTA button (calls to action):**
```
Background:      var(--accent)
Text color:      #FFFFFF
Padding:         18px 36px
Border radius:   6px
Font:            16px DM Sans, weight 700
Shadow:          0 4px 20px rgba([accent], 0.3)
Hover:           translateY(-2px), shadow increases
```

**Secondary button:**
```
Background:      transparent
Border:          1.5px solid var(--border) (on light bg) or rgba(255,255,255,0.3) (on dark bg)
Text color:      var(--primary) (on light bg) or #FFFFFF (on dark bg)
Padding:         18px 32px
Border radius:   6px
Hover:           border darkens, slight background fill
```

**Nav CTA button:**
```
Same as primary but smaller: 10px 24px padding, 14px font
```

---

## LAYOUT ROTATION SYSTEM

There are 4 layout variants: A, B, C, and D. Every site gets one. They all contain the same conversion elements (form, trust bar, reviews, services, CTA, etc.) but arranged differently so no two sites for the same industry in the same city look the same.

### How to Pick the Layout

**Before building, check the existing files in src/sites/.** Each JSX file has a comment on line 1 in this format:

```
// Layout: A | Industry: Plumber | City: Little Rock
```

1. Look at the last 4 sites built (the 4 most recent files).
2. Pick the next layout in the rotation: A → B → C → D → A → B...
3. **Same-city-same-industry check:** If that layout was already used for the same industry in the same city within the last 4 builds, skip to the next one in rotation.
4. Add the layout comment as the FIRST LINE of every new JSX file you create.

This guarantees that if you build 5 plumber sites in Little Rock, they cycle through A, B, C, D, A — and the first and fifth are separated by 4 completely different sites in between.

---

## SHARED ELEMENTS (used in ALL layouts)

These elements appear in every layout. The layouts below specify WHERE they go and HOW they're arranged, but these specs define WHAT they contain.

### Navigation Bar (all layouts)

- Wordmark on the left (Playfair Display text, NOT a logo image)
- On transparent nav: first word --primary, second word --accent
- On scrolled nav: first word white, second word --accent
- Navigation links on the right: Services, About, Reviews, Areas — anchor links
- "Call Now" phone button on far right — --accent background, white text, with phone SVG icon
- Nav starts transparent, fills with --primary on scroll
- Transition: all 0.4s ease, backdrop-filter: blur(12px) on scroll
- Mobile: hamburger SVG icon → full-screen --primary overlay with centered links and accent-colored call button

### Lead Capture Form (all layouts — placement varies)

- White card with subtle border and shadow: 0 4px 40px rgba(0,0,0,0.08)
- Title: "Get a Free Quote" in Playfair Display
- Subtitle: "We respond within the hour." in --text-light
- Exactly 3 fields (--cream background tint):
  - Name (text, placeholder "Your name")
  - Phone (tel, placeholder "Phone number")
  - Service (select dropdown with actual services from brief)
- Submit button: --primary background, white text, "Get My Free Quote"
- NEVER more than 3 fields. No email. No address. No message.
- On submit: check SVG icon in accent circle, "We Got It!" heading, "Call [phone] for emergencies" with tel: link

### Trust Stats (all layouts — arrangement varies)

Four stats, each with:
- Large number in Playfair Display, --primary color
- Label: 12px uppercase, letter-spacing 2px, DM Sans weight 700
- Description: 13px, --text-light

**RATING DISPLAY RULES — READ CAREFULLY:**

- **4.5+ stars:** Show rating prominently as a stat (e.g., "4.9" with label "Google Rating"). Use this as Stat 1.
  - Stat 1: Google rating | Stat 2: Review count | Stat 3: Guarantee or years | Stat 4: Best differentiator
- **4.0–4.4 stars:** DO NOT show the overall rating number anywhere on the site. Replace it with the review COUNT as the lead stat. 216 reviews is impressive. 4.0 stars is not. Lead with strength.
  - Stat 1: Review count (e.g., "216+") | Stat 2: Years in business | Stat 3: Guarantee or certification | Stat 4: Best differentiator
- **Below 4.0:** This lead should not have been sent to Claude Code. Flag it and skip the build.

**HERO REVIEW QUOTE RULE:** The review displayed in the hero section must ALWAYS show 5 filled stars — because you are displaying ONE specific 5-star review, not the overall business rating. Even if the business is 4.0 overall, the individual review you're quoting IS a 5-star review. Always pick the strongest 5-star review for the hero quote and show 5 stars next to it.

### Services (all layouts — grid style varies)

- Each service has: SVG line icon (28x28, --accent, stroke-based, NO EMOJI), H3 name (DM Sans 600), 1-2 sentence description
- Use only services from brief. Max 6 items.
- Subtle CTA text after: "Questions? Call [Owner] directly at [phone]" — phone in --accent as tel: link

### Why Us Content (all layouts — arrangement varies)

- About the owner/business: personal, genuine paragraphs using brief data
- Credential list with SVG check icons in --accent
- 4 badge cards: SVG icon, title, short description — pick 4 relevant differentiators

### Reviews (all layouts — display style varies)

- Real reviews from the brief with REAL NAMES only
- Each individual review shows 5 filled SVG stars (all reviews in the brief ARE 5-star reviews — display them as such)
- Review text in quotes, italic
- Reviewer name (bold, --primary) and source
- If the overall business rating is 4.5+, the section heading can say "[Rating] Stars on Google"
- If the overall business rating is 4.0-4.4, the section heading should say "What Our Customers Say" — do NOT mention the overall rating number
- Subtle CTA after: "Ready to experience the difference? Call [phone]"

### Service Areas (all layouts)

- Pill tags with SVG map pin icon (14px) + area name
- title attribute: "[Service] in [Area], [State]" for SEO
- Hover: --primary background, white text

### CTA (all layouts — background varies)

- H2 in Playfair: "Got a [problem]?\n*Call [Owner].*" — accent italic phrase
- Subtitle about honest pricing / guarantee
- Large accent-colored phone button with SVG icon
- Tone: confident, not desperate

### Footer (all layouts)

- Background: --primary
- Three columns: wordmark + description + address + phone | Services list | Areas list
- Bottom bar: copyright + memberships

### Floating Mobile CTA (all layouts)

- Mobile only (below 900px), fixed bottom, full-width
- --accent background, white text, phone SVG icon, tel: link
- z-index 998, shadow: 0 -4px 20px rgba(0,0,0,0.15)
- Add 60px bottom padding on mobile

---

## LAYOUT A — "SPLIT HERO"

**Personality:** Clean, balanced, professional. The safest layout — works for everything.

**Section order and specifics:**

1. **Nav** — standard
2. **Hero** — --cream background (LIGHT, not dark)
   - Two-column grid: left text (~55%) / right form (~45%)
   - Left: badge → H1 (one phrase italic in --accent) → subtitle → star row with mini review quote → two buttons (accent primary, outlined secondary)
   - Right: form card
   - H1 example: "Little Rock's\n*Most Trusted*\nPlumber"
3. **Trust Bar** — --white, horizontal 4-stat row, top/bottom borders
4. **Services** — --cream, 3-column card grid (1 col mobile), standard card system with hover
5. **Why Us** — --primary (THE dark section), 2-column: text+credentials left / 2x2 badge grid right
6. **Reviews** — --white, centered single-card carousel with dots, max-width 800px
7. **Service Areas** — --cream, centered flex-wrap pills
8. **CTA** — --white with top border, centered text + single large accent button
9. **Footer** — --primary, 3-column

**Section backgrounds:** cream → white → cream → --primary → white → cream → white → --primary

---

## LAYOUT B — "CENTERED HERO"

**Personality:** Editorial, dramatic, statement-making. Feels like a magazine.

**Section order and specifics:**

1. **Nav** — standard
2. **Hero** — --cream background (LIGHT)
   - Full-width CENTERED layout, no form in hero
   - Center-aligned: badge → very large H1 (one phrase italic in --accent, dramatically sized with clamp(44px, 6vw, 80px)) → subtitle → star row → two buttons centered
   - NO form in this section — form comes later
   - H1 example: "Professional Plumbing\n*Little Rock Trusts*"
3. **Form Section** — --white with top/bottom borders
   - Centered form card, max-width 480px, with trust stats as a horizontal row BELOW the form inside the same section
   - This combines form + trust into one clean section
4. **Services** — --cream, 2-column card grid (larger cards, more padding: 44px 36px, more breathing room), 1 col mobile
5. **Why Us** — --primary (THE dark section), SINGLE COLUMN centered
   - No badge grid — just centered Playfair heading, 2 paragraphs of story text (max-width 700px), then credentials as a horizontal flex row of check items (not a vertical list)
6. **Reviews** — --white, 3 review cards side by side in a row (1 col mobile), NO carousel, all visible at once
   - Each card: --cream background, quote mark, stars, text, name
7. **Service Areas** — --cream, centered flex-wrap pills
8. **CTA** — --white with top border, centered, accent button (NEVER dark — must contrast against footer below)
9. **Footer** — --primary (the only dark section at the bottom)

**Section backgrounds:** cream → white → cream → --primary → white → cream → white → --primary

---

## LAYOUT C — "BOLD STATEMENT"

**Personality:** Confident, high-contrast, modern. The dark hero makes an immediate impact.

**Section order and specifics:**

1. **Nav** — standard (starts transparent on dark hero, so text is WHITE from the start)
2. **Hero** — **--primary background (DARK hero — the exception in this layout)**
   - Two-column grid: left text / right form
   - All hero text is WHITE (not dark)
   - Badge: rgba(255,255,255,0.1) background, --accent text
   - H1: white, italic phrase in --accent
   - Subtitle: rgba(255,255,255,0.75)
   - Stars: --accent or gold
   - Buttons: accent primary (same), white-bordered secondary
   - Form card: white, creates strong contrast floating on the dark background, extra shadow: 0 8px 48px rgba(0,0,0,0.3)
   - H1 example: "Little Rock's\n*Go-To Plumber*\nSince 2023"
3. **Trust Bar** — --white, horizontal 4-stat row (no borders needed — the dark-to-white transition is already strong)
4. **Services** — --cream, ALTERNATING LEFT-RIGHT ROWS instead of a grid
   - Each service is a full-width row: icon + text on one side, description on the other
   - Odd rows: icon+title left, description right
   - Even rows: description left, icon+title right
   - Creates a zigzag reading pattern that feels dynamic
   - Thin 1px --border line separating each row
   - On mobile: stacks to single column, no zigzag
5. **Why Us** — --cream (NOT dark — the hero already used the dark slot)
   - --primary colored text for headings instead of white
   - Credentials in --text color with --accent check icons
   - Left column: text. Right column: 2x2 badge grid with --white card backgrounds and --border borders
   - A large decorative accent-colored quotation mark or pull quote from a review breaks up the section
6. **Reviews** — --white, single LARGE testimonial display (not a carousel)
   - One featured review, oversized: 20px text, large quote mark, prominent name
   - Below it: small centered text "One of 195+ five-star reviews on Google" in --text-light
   - No dots, no rotation — just the single strongest review, displayed big
7. **Service Areas** — --cream, centered flex-wrap pills
8. **CTA** — --white with top border, centered, accent button
9. **Footer** — --primary

**Section backgrounds:** --primary → white → cream → cream → white → cream → white → --primary

---

## LAYOUT D — "EDITORIAL ASYMMETRIC"

**Personality:** Unique, sophisticated, design-forward. Feels like a boutique agency built it.

**Section order and specifics:**

1. **Nav** — standard
2. **Hero** — --cream background (LIGHT)
   - ASYMMETRIC layout: headline takes ~65% width, form tucked smaller on the right (~35%)
   - H1 is EXTRA LARGE: clamp(48px, 6vw, 84px), tight line-height (1.0), dramatic
   - No subtitle paragraph — just the H1, a star row, and one button (accent primary)
   - The secondary button is removed — cleaner, more confident
   - Form card is vertically centered with the headline, slightly smaller padding (32px 28px)
   - Minimal hero — big type, form, done. No badge in this layout.
   - H1 example: "The Plumber\n*Little Rock*\nCalls First"
3. **Trust Bar** — --white, but displayed as a VERTICAL SIDEBAR on the left of the services section (desktop only)
   - On desktop: trust stats stack vertically in a narrow left column alongside the services grid
   - Each stat has the number, label, and a thin accent-colored left border (4px)
   - On mobile: falls back to standard horizontal 2x2 grid above services
4. **Services + Trust combined section** — --cream
   - Desktop: 2-column layout — narrow trust sidebar left (~20%) + services grid right (~80%)
   - Services grid: MASONRY-STYLE staggered layout — cards have varying heights based on description length, 2 columns
   - Cards alternate between standard padding and slightly larger "featured" padding for visual rhythm
   - Mobile: trust stats as 2x2 grid on top, then single-column service cards below
5. **Why Us** — --primary (THE dark section)
   - Layout: a GIANT accent-colored number (e.g., "195+" in 120px Playfair, --accent color, 0.15 opacity) as a background decorative element behind the text
   - Content flows over it: heading, story paragraphs, credentials
   - Single column, max-width 800px, centered
   - No badge grid in this layout — just pure storytelling with credentials woven in
6. **Reviews** — --white, HORIZONTAL SCROLLING strip
   - Reviews displayed as cards in a horizontal row that scrolls (overflow-x: auto, snap scrolling)
   - Each card: fixed width ~320px, --cream background, standard review content
   - Scroll indicators: subtle left/right fade gradients on the edges
   - Mobile: same horizontal scroll, cards snap into place
7. **Service Areas** — --cream, centered flex-wrap pills
8. **CTA** — --white with top border, centered, accent button
9. **Footer** — --primary

**Section backgrounds:** cream → cream (combined trust+services) → --primary → white → cream → white → --primary

---

## LAYOUT REFERENCE SUMMARY

| Element | Layout A | Layout B | Layout C | Layout D |
|---|---|---|---|---|
| Hero bg | Light (cream) | Light (cream) | DARK (--primary) | Light (cream) |
| Hero style | Split 55/45 | Full-width centered | Split with dark bg | Asymmetric 65/35 |
| Form location | In hero (right) | Separate section below hero | In hero (right) | In hero (right, compact) |
| Trust bar | Horizontal row | Below form in same section | Horizontal row | Vertical sidebar |
| Services | 3-col grid | 2-col grid (large) | Alternating rows (zigzag) | Masonry staggered |
| Why Us | 2-col (text + badges) | Single col centered | Light bg + pull quote | Giant number bg, centered |
| Reviews | Carousel with dots | 3 cards side by side | Single large feature | Horizontal scroll strip |
| Dark sections | 1 (Why Us) | 1 (Why Us) | 1 (Hero) | 1 (Why Us) |
| CTA bg | White | White | White | White |
| Vibe | Professional | Editorial | Bold/modern | Boutique/unique |

---

## PASSWORD GATE

Every site starts with a password gate. Password is always "2026". Never change this.

The gate screen:
- Background: --primary
- Centered white card: 16px radius, 56px 44px padding, strong shadow
- Wordmark at top: Playfair Display, "Business Name" split with accent color, 28px
- "WEBSITE PREVIEW" label: 13px, --text-light, letter-spacing 1px
- Password input: centered text, letter-spacing 6px, 2px border, 8px radius
- Submit button: --primary background, white text, "View Site", weight 700
- Error state: red border on input, "Incorrect password" text below

After correct password, gate disappears, full site loads. State persists via React useState.

---

## SEO — BUILT INTO EVERY SITE

Injected via useEffect on mount. Not optional.

### Meta Title
Format: "[Primary Service] [City] [State] | [Business Name]"
Under 60 characters. Set via document.title.

### Meta Description
Under 160 characters. Short description with keywords + phone number.

### Geo Meta Tags
- geo.region: "US-[state code]"
- geo.placename: "[City]"

### Schema Markup (JSON-LD)
Script element with type "application/ld+json" appended to document.head.

Most specific @type:
- Plumber → "Plumber"
- Electrician → "Electrician"
- Pest Control → "PestControlService"
- HVAC → "HVACBusiness"
- Locksmith → "Locksmith"
- Landscaper → "LandscapingService"
- Roofing → "RoofingContractor"
- Cleaning → "HousekeepingService"
- General → "LocalBusiness"

Required fields: name, telephone (+1 digits), address (PostalAddress), geo (GeoCoordinates for city), openingHoursSpecification, aggregateRating (if exists), founder (if known), foundingDate (if known), description, areaServed (City objects), hasOfferCatalog (services as Offers), memberOf (organizations), sameAs (empty array).

Clean up on unmount.

### On-Page SEO Rules
- ONE H1 only — must contain city + service keyword
- H2s include location keywords naturally
- Service area tags have title attributes: "[service] in [city], [state]"
- All phone numbers are tel: links
- All SVG icons have aria-label or are decorative (aria-hidden)
- Fully mobile responsive
- Google Fonts is the only external resource

---

## QUALITY CHECK

Before outputting, verify every item. Fix failures before delivering.

### Content
- [ ] Every review is real and matches the brief
- [ ] Every review has a REAL person's name — no "Satisfied Customer," no "Verified Review," no initials
- [ ] Every service matches the brief — no additions
- [ ] Every service area matches the brief
- [ ] Business name spelled exactly as in brief
- [ ] Phone number matches brief
- [ ] Owner name matches brief
- [ ] No placeholder text anywhere

### Design System Compliance
- [ ] Fonts are Playfair Display + DM Sans — nothing else
- [ ] Wordmark uses Playfair Display text — NO logo image used
- [ ] Colors mapped correctly from hue family (check the mapping table)
- [ ] --primary used as background ONLY for dark sections, footer, nav scroll, and password gate — never for light sections
- [ ] --accent NEVER used as a full section background — only buttons, icons, highlights
- [ ] Section backgrounds follow the correct rhythm for the chosen layout
- [ ] All cards are pure white with subtle border — no tinted backgrounds
- [ ] Accent-colored 48px gold line appears above section headings where specified
- [ ] ZERO emojis anywhere — all icons are inline SVGs
- [ ] Hero headline has one italic phrase in --accent color (the "design moment")
- [ ] Nav scrolls to --primary (matching the dark sections and footer)
- [ ] **No two adjacent sections share the same background color — especially CTA and Footer**
- [ ] **FIRST LINE of JSX file is the layout comment: `// Layout: [A/B/C/D] | Industry: [type] | City: [city]`**
- [ ] Layout chosen follows rotation rules (checked last 4 files in src/sites/)

### Conversion Elements
- [ ] Phone number in 6+ places: nav, hero button, form confirmation, post-services CTA, CTA section, footer, floating mobile bar
- [ ] All phone numbers are tel: links
- [ ] Form has exactly 3 fields: name, phone, service dropdown
- [ ] Form dropdown has actual services from brief
- [ ] Star rating + review quote visible in hero above the fold — MUST show 5 filled stars (it's a 5-star individual review, not the overall rating)
- [ ] If business is 4.0-4.4 overall: rating number is NOT displayed anywhere — review count shown instead
- [ ] If business is 4.5+: rating displayed prominently in trust bar and reviews heading
- [ ] Subtle CTA text after services and reviews
- [ ] Floating mobile CTA bar present, --accent background, mobile only

### SEO
- [ ] H1 contains city AND service keyword
- [ ] Only one H1
- [ ] Meta title under 60 chars
- [ ] Meta description under 160 chars
- [ ] Schema JSON-LD present
- [ ] Geo meta tags present
- [ ] Service area tags have title attributes

### Responsive
- [ ] Works at 375px width
- [ ] Hamburger menu on mobile
- [ ] Floating CTA appears on mobile only
- [ ] Trust bar goes 2x2 on mobile
- [ ] All grids collapse to single column on mobile

### Final Gut Check
- [ ] Does this look like a $5-10K custom agency build?
- [ ] Would the owner be impressed and want to show someone?
- [ ] Is there a clear "design moment" in the hero (italic accent text)?
- [ ] Are the buttons impossible to miss?
- [ ] Does every section breathe with generous whitespace?

If any answer is no, revise before delivering.

---

## DELIVERY

After building the file:
1. Save to the previews project directory
2. Deploy to Vercel
3. Confirm live at expected URL
4. Report back with:
   - Live URL
   - File name
   - Business name and owner
   - **Layout used (A, B, C, or D) and why it was chosen (rotation order)**
   - Hue family received and colors used (primary + accent hex codes)
   - Any reviews skipped due to missing real names
   - Any missing data from the brief
