# FIVE SLASH — Premium Coffee House

A high-fidelity, mobile-first static site for the FIVE SLASH specialty coffee brand. Built as a gallery-like digital experience with sharp minimalism, surgical typography, and the signature slash motif.

Source of truth: [`design/reference/DESIGN.md`](design/reference/DESIGN.md) and the Stitch reference files in [`design/reference/`](design/reference/).

## Tech Stack

- **HTML5** — two pages, no framework
- **Tailwind CSS (CDN)** — `forms` + `container-queries` plugins, tokens in `public/assets/js/tailwind-config.js`
- **Vanilla JS** — drawer, smooth scroll, branch selector, checkout bar (`public/assets/js/main.js`)
- **No build step** — zero dependencies, no bundler

Fonts: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [Geist](https://vercel.com/geist) (labels) + [Material Symbols Outlined](https://fonts.google.com/icons).

## Project Structure

```
.
├── public/                      # Deploy this folder (static hosting, Vercel, Netlify, etc.)
│   ├── index.html               # Home — hero, manifesto, signatures, gallery, CTAs
│   ├── menu.html                # Menu — sidebar filters + product grid (desktop) / list + cards (mobile)
│   └── assets/
│       ├── css/main.css         # Slash motifs, grid hairlines, scrollbar hides
│       └── js/
│           ├── tailwind-config.js  # Centralized design tokens (colors, type, spacing)
│           └── main.js          # Drawer, anchors, branch slider/buttons, checkout
├── design/
│   └── reference/               # Stitch source of truth — do not edit for implementation
│       ├── DESIGN.md            # Full design system (Radical Precision)
│       ├── desktop-home.html / .png
│       ├── mobile-home.html / .png
│       ├── desktop-menu.html / .png
│       ├── mobile-menu.html / .png
│       └── slash-logo.png
├── .gitignore
└── README.md
```

### Where to make changes

| Task | File(s) |
|---|---|
| Colors, type scale, spacing | `public/assets/js/tailwind-config.js` → update, hard-refresh |
| Shared motifs / utilities | `public/assets/css/main.css` |
| Navigation, interactions | `public/assets/js/main.js` (feature-guarded per page) |
| Page content / sections | `public/index.html` or `public/menu.html` |
| Design tokens reference | `design/reference/DESIGN.md` |

## Installation

No install required — the site has no dependencies.

```bash
git clone <repo-url>
cd <repo>
```

To serve locally (any one):

```bash
# Python
python -m http.server --directory public 8000
# Node (no install needed)
npx serve public
# VS Code: Live Server → open public/index.html
```

Then open `http://localhost:8000`.

## Available Commands

| Command | Purpose |
|---|---|
| `python -m http.server --directory public 8000` | Serve locally on :8000 |
| `npx serve public` | Alternative static server |
| Open `public/index.html` directly | Works via `file://` (no server needed) |

No build, lint, or test commands — the site is intentionally dependency-free.

## Environment Variables

None. All configuration is in `public/assets/js/tailwind-config.js`. No secrets are used or required.
