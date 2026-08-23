---
name: Radical Precision
colors:
  surface: '#faf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5d4038'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#926f66'
  outline-variant: '#e7bdb2'
  surface-tint: '#b12d00'
  primary: '#ad2c00'
  on-primary: '#ffffff'
  primary-container: '#d83900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb5a0'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5a5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#737575'
  on-tertiary-container: '#fcfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 84px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-label:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 160px
  container-padding: 40px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

This design system is built for a specialty cafe that operates more like a premium fashion house than a traditional coffee shop. The aesthetic is rooted in **Minimalism** and **High-Contrast Boldness**, drawing inspiration from 20th-century Swiss design and modern editorial layouts. 

The brand personality is confident, experimental, and unapologetically modern. It prioritizes clarity, structural integrity, and the "slash" as a geometric motif. Visuals should feel expansive, utilizing heavy whitespace to frame content like gallery art. Every element is intentional, stripping away the "cozy" clutter of coffee tropes in favor of a clinical yet vibrant sophistication.

## Colors

The palette is built on extreme contrast. The primary driver is **International Orange-Red**, used sparingly as a high-energy "slash" of color against a monochromatic foundation. 

- **Primary (#FF4500):** Reserved for core branding elements, primary calls to action, and the iconic slash motif.
- **Deep Charcoal (#1A1A1A):** Used for primary text and dark-mode surfaces to provide a weightier, more premium feel than pure black.
- **Off-White (#FAFAFA):** The primary canvas color, providing a gallery-like backdrop that feels cleaner and more editorial than standard white.
- **Functional Grays:** A neutral scale is used only for secondary information and borders to maintain the high-contrast aesthetic.

## Typography

Typography is the primary visual anchor. We utilize **Hanken Grotesk** for display and headlines to provide a sharp, modern, and slightly aggressive geometric feel. 

- **Scale:** Oversized display type is used to break the layout and create a sense of scale.
- **Rhythm:** Use "label-caps" (Geist) for technical data like coffee origins, tasting notes, or price points to evoke a technical, developer-centric aesthetic.
- **Alignment:** Headlines should often be tight-leaded (low line height) to feel like a singular block of visual weight.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, but with intentionally asymmetrical content placement.

- **Grid:** A 12-column grid with generous 24px gutters. Use "empty" columns to create dramatic whitespace.
- **Section Gaps:** Vertical rhythm is extremely loose. Use `section-gap` to separate primary content blocks, forcing the user to focus on one idea at a time.
- **The Slash Grid:** Use 45-degree angles in background partitions or image crops to mirror the brand's primary visual asset.
- **Mobile:** Transition to a 4-column fluid grid with 20px margins. Reduce typography scale but maintain the bold weight.

## Elevation & Depth

This design system rejects traditional shadows and blurs. Depth is achieved through **Tonal Layers** and **Hard Borders**.

- **Flat Stack:** Elements sit on the surface. Depth is communicated through overlapping elements (e.g., a text block partially covering a product image).
- **Ghost Borders:** Use 1px solid borders in Charcoal (#1A1A1A) or Light Gray (#E0E0E0) to define containers without adding visual bulk.
- **High-Contrast Inversion:** Use color blocking (Dark Charcoal sections following Off-White sections) to create a "depth" of narrative sequence rather than physical Z-axis elevation.

## Shapes

The shape language is primarily **Sharp**. We use a very subtle "Soft" radius (4px) only on interactive components to provide a hint of modern tactility without compromising the architectural rigidity of the brand.

- **Square Containers:** Images and cards should generally maintain 90-degree corners.
- **The Slash:** Any decorative lines or separators should be set at a 45-degree angle, consistent with the logo's geometry.

## Components

### Buttons
Primary buttons are solid Charcoal with White text, featuring a 4px radius. On hover, they transition to the Red-Orange accent. Secondary buttons are outlined (Ghost) with a 1px border.

### Input Fields
Inputs are minimalist: a single 1px bottom border that thickens to 2px and changes to Red-Orange on focus. No background fill.

### Cards
Cards do not use shadows. They are defined by 1px borders or simple background color shifts. Content within cards follows a strict vertical stack with oversized price labels in the top-right corner.

### Chips / Tags
Small, rectangular tags using the `label-caps` typography. Used for categorization (e.g., "POUR OVER", "LIMITED RELEASE"). Solid background with high-contrast text.

### The "Slash" Progress Bar
For multi-step flows or loading states, use a thick, 45-degree angled bar in Red-Orange that grows horizontally.

### Product Lists
List items are separated by full-width 1px lines. Hovering over a list item reveals a thumbnail image at the cursor position (experimental magazine style).