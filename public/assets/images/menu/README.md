# Menu Images

Drop your actual menu files here.

- `menu-1.svg` / `menu-1.jpg` — first menu page (e.g., espresso & filter)
- `menu-2.svg` / `menu-2.jpg` — second menu page (e.g., iced & seasonal)

The placeholders (`menu-1.svg`, `menu-2.svg`) are Stitch-styled SVGs so the page looks intentional before you add real photos. To replace:

1. Export your designed menu pages as **JPG or PNG** (recommended: 1600×2200px, sRGB, < 500 KB each).
2. Name them `menu-1.jpg` and `menu-2.jpg` and place them in this folder.
3. If you use `.jpg`, update `public/menu.html` image `src` attributes:
   - `assets/images/menu/menu-1.svg` → `assets/images/menu/menu-1.jpg`
   - `assets/images/menu/menu-2.svg` → `assets/images/menu/menu-2.jpg`
   (Or keep both extensions — the page will prefer `.jpg` if present via `onerror` fallback.)

Add more pages by duplicating the `<figure id="menu-page-3">` block in `public/menu.html` and adding `menu-3.jpg`.

Images are displayed with `object-contain` inside a bordered, gallery-style container to match the Stitch design system — no cropping.
