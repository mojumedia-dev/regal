# Regal Homes Utah - Dynamic Website

This is the public-facing website for Regal Homes Utah, built with Next.js 14, TypeScript, and Tailwind CSS. The website dynamically fetches data from the Regal Homes Price Tool API.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ISR (Incremental Static Regeneration)** with 1-hour revalidation

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── communities/       # Communities listing & detail
│   ├── floorplans/        # All floor plans
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── process/           # Building process
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation
│   └── Footer.tsx        # Footer
├── lib/                  # Utilities
│   └── api.ts           # API client & types
└── public/              # Static assets
    └── images/          # Images (logo, etc.)
```

## Pages

1. **Home** (`/`) - Hero, featured communities, CTA sections
2. **Communities** (`/communities`) - Grid of all communities
3. **Community Detail** (`/communities/[slug]`) - Full community page with plans, homes, and homesites
4. **Floor Plans** (`/floorplans`) - All plans across all communities with filtering
5. **About** (`/about`) - Company story and values
6. **Contact** (`/contact`) - Contact form and office locations
7. **Process** (`/process`) - 4-step home buying process

## Design System

### Colors
- **Navy**: `#0a1f44` - Primary brand color
- **Gold**: `#d4af37` - Accent color (luxury feel)
- **Gold Light**: `#f4e4bc` - Secondary accent
- **Gray Light**: `#f8f9fa` - Backgrounds
- **Gray Dark**: `#2c3e50` - Text

### Typography
- **Headings**: Georgia serif (regal feel)
- **Body**: Inter sans-serif (readability)

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://regal-homes-price-tool-production-0d02.up.railway.app
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Integration

The website fetches data from the Price Tool's public API:

- `GET /api/public/communities` - List all communities
- `GET /api/public/communities/:slug` - Community detail
- `GET /api/public/plans/:id` - Single plan
- `GET /api/public/available-homes` - All available homes
- `GET /api/public/stats` - Summary statistics

Data is cached and revalidated every hour using Next.js ISR.

## Deployment

This site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- Any Node.js hosting platform

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Communities

- **Parkside** - Mapleton, UT
- **Bella Vita** - Mapleton, UT
- **Bristol Farms** - Ogden/West Weber, UT
- **Amanti Lago** - Heber City, UT (Luxury)
- **Windflower** - Heber City, UT

## Features

- ✅ Fully responsive mobile-first design
- ✅ Dynamic data from price tool API
- ✅ ISR for performance and freshness
- ✅ Luxury design aesthetic
- ✅ SEO-friendly with metadata
- ✅ TypeScript for type safety
- ✅ Accessible navigation
- ✅ Contact form with validation

## Future Enhancements

- [ ] Add image gallery for communities
- [ ] Interactive floor plan viewers
- [ ] Virtual tour integration
- [ ] Testimonials section
- [ ] Blog/news section
- [ ] Mortgage calculator
- [ ] Favorites/comparison feature

## License

© 2026 Regal Homes Utah. All rights reserved.
