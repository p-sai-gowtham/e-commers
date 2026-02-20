# Ogani - E-Commerce HTML Template

## Project Overview

Static e-commerce grocery/organic products template built with HTML5, SCSS, Bootstrap 4, and jQuery. Created by Colorlib. No backend, no build system, no package manager — all assets are pre-compiled and vendored.

## Tech Stack

- **HTML5** — 9 page templates (index, shop-grid, shop-details, shoping-cart, checkout, blog, blog-details, contact, main)
- **SCSS/CSS** — Modular SCSS in `sass/`, compiled output in `css/style.css`
- **JavaScript** — jQuery 3.3.1, Bootstrap 4.4.1, jQuery UI 1.12.1
- **Libraries** — Owl Carousel, MixItUp, Nice Select, SlickNav
- **Fonts** — Google Fonts (Cairo), Font Awesome 4.7.0, Elegant Icons

## Project Structure

```
├── index.html              # Homepage
├── shop-grid.html          # Product listing with filters
├── shop-details.html       # Single product page
├── shoping-cart.html       # Cart page
├── checkout.html           # Checkout form
├── blog.html               # Blog listing
├── blog-details.html       # Blog post
├── contact.html            # Contact page
├── main.html               # Minimal starter template
├── css/                    # Compiled CSS (Bootstrap, vendor libs, style.css)
├── sass/                   # SCSS source files (20 partials)
│   ├── style.scss          # Main entry point — imports all partials
│   ├── _variable.scss      # Colors and font variables
│   ├── _mixins.scss        # Reusable mixins
│   ├── _base.scss          # Global styles, typography, helpers
│   ├── _header.scss        # Header/navigation
│   ├── _responsive.scss    # Media queries for all breakpoints
│   └── _*.scss             # One partial per page section/component
├── js/                     # JavaScript (jQuery + vendor plugins + main.js)
├── fonts/                  # Icon font files (Elegant Icons, Font Awesome)
├── img/                    # Image assets organized by section
└── Source/                 # Archived vendor library zip files
```

## Code Conventions

### CSS/SCSS
- BEM-style naming with double underscores: `.header__top__left`, `.product__discount__item__pic`
- Component-based SCSS partials — one file per page section
- Variables for colors and fonts defined in `_variable.scss`
- Primary color: `#7fad39` (green), secondary: `#120851` (dark blue)
- Responsive breakpoints: mobile (<768px), tablet (768–991px), desktop (992–1199px), large (1200px+)

### HTML
- Semantic HTML5 elements (header, nav, section, footer)
- Section comments: `<!-- Header Section Begin -->` / `<!-- Header Section End -->`
- Consistent header/footer across all pages
- Data attributes for dynamic content (e.g., `data-setbg` for background images)

### JavaScript
- jQuery IIFE pattern: `(function($) { 'use strict'; ... })(jQuery)`
- Event binding with `.on()`
- Custom JS lives in `js/main.js`; all other JS files are vendor libraries — do not edit them

## Key Patterns

- **Background images** are set via `data-setbg` attribute, processed by `main.js`
- **Product filtering** uses MixItUp library with filter controls
- **Carousels** use Owl Carousel with configuration in `main.js`
- **Price range slider** uses jQuery UI slider widget
- **Mobile navigation** uses SlickNav for responsive hamburger menu
- **Quantity selectors** on cart/detail pages use custom +/- button handlers in `main.js`

## No Build System

There is no package.json, no bundler, no task runner. SCSS must be compiled manually if edited (e.g., using `sass sass/style.scss css/style.css`). Vendor libraries are committed directly — not installed via npm.

## When Making Changes

- Edit SCSS partials in `sass/`, not `css/style.css` directly
- Custom JavaScript goes in `js/main.js` — do not modify vendor JS files
- Keep the existing BEM naming convention for new CSS classes
- Maintain the section comment markers in HTML files
- All pages share the same header and footer — changes to navigation must be replicated across all 9 HTML files
