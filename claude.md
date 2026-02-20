# Ogani - E-Commerce Next.js App

## Project Overview

E-commerce grocery/organic products web application built with Next.js (App Router), React, and Bootstrap 4. Converted from a static HTML template (Colorlib Ogani). All original CSS is preserved and loaded as static files.

## Tech Stack

- **Next.js 15** (App Router) — React framework with file-based routing
- **React 19** — UI components
- **CSS** — Bootstrap 4.4.1 + custom style.css (from original template), loaded via `<link>` tags
- **Fonts** — Google Fonts (Cairo via next/font), Font Awesome 4.7.0, Elegant Icons
- **No jQuery** — all interactivity converted to React state/hooks

## Project Structure

```
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (fonts, CSS, Header, Footer)
│   ├── page.js                 # Homepage (hero, categories, featured, blog)
│   ├── shop/page.js            # Product listing with sidebar filters
│   ├── shop-details/page.js    # Single product page (image gallery, tabs, qty)
│   ├── cart/page.js            # Shopping cart (editable quantities)
│   ├── checkout/page.js        # Checkout form
│   ├── blog/page.js            # Blog listing with sidebar
│   ├── blog-details/page.js    # Blog post detail
│   └── contact/page.js         # Contact page with map and form
├── components/                 # Shared React components
│   ├── Header.js               # Site header + mobile hamburger menu ("use client")
│   ├── Footer.js               # Site footer with newsletter + links
│   ├── HeroNormal.js           # Categories sidebar + search (non-homepage pages)
│   └── Breadcrumb.js           # Breadcrumb bar with background image
├── public/                     # Static assets served at /
│   ├── css/                    # All CSS files (bootstrap, font-awesome, style.css, etc.)
│   ├── img/                    # All images organized by section
│   └── fonts/                  # Icon font files (Elegant Icons, Font Awesome)
├── package.json                # Dependencies: next, react, react-dom
├── next.config.mjs             # Next.js configuration
├── jsconfig.json               # Path alias: @/* -> ./*
├── css/                        # Original CSS source (kept for reference)
├── sass/                       # Original SCSS source files
├── js/                         # Original jQuery JS (kept for reference)
└── *.html                      # Original HTML templates (kept for reference)
```

## Routes

| Route           | File                        | Description            |
|-----------------|-----------------------------|------------------------|
| `/`             | `app/page.js`               | Homepage               |
| `/shop`         | `app/shop/page.js`          | Product grid + filters |
| `/shop-details` | `app/shop-details/page.js`  | Product detail         |
| `/cart`         | `app/cart/page.js`          | Shopping cart           |
| `/checkout`     | `app/checkout/page.js`      | Checkout form          |
| `/blog`         | `app/blog/page.js`          | Blog listing           |
| `/blog-details` | `app/blog-details/page.js`  | Blog post              |
| `/contact`      | `app/contact/page.js`       | Contact page           |

## Code Conventions

### Components
- "use client" only on components that need interactivity (state, event handlers)
- Server components by default for static content pages
- Shared components in `components/` directory
- Import alias: `@/components/Header` resolves to `./components/Header`

### Styling
- All CSS loaded globally via `<link>` tags in `app/layout.js`
- BEM-style class names preserved from original template
- Background images use inline `style={{ backgroundImage: \`url(/img/...)\` }}`
- Primary color: `#7fad39` (green), secondary: `#120851` (dark blue)

### Links
- Use Next.js `Link` component for all internal navigation
- Use plain `<a>` tags for `#` placeholder links and external URLs

## Getting Started

```bash
npm install
npm run dev
```

## When Making Changes

- Edit React components, not the original HTML files
- CSS changes go in `public/css/style.css` (or add a new CSS file and link it in layout.js)
- New pages go in `app/<route>/page.js`
- Shared UI goes in `components/`
- Static assets (images, fonts) go in `public/`
