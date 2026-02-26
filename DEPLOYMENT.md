# Deployment Guide

## ✅ Completed

### Phase 1: Public API (Price Tool)
- ✅ Added 5 public API endpoints to `/tmp/regal-price-tool/server.js`
- ✅ Endpoints are unauthenticated and read-only
- ✅ Tested locally - all working correctly
- ✅ Committed and pushed to `Gull-Stack/regal-homes-price-tool` on GitHub

**API Endpoints:**
- `GET /api/public/communities` - List all communities
- `GET /api/public/communities/:slug` - Community detail with plans, homesites, homes
- `GET /api/public/plans/:id` - Single plan detail
- `GET /api/public/available-homes` - All available homes
- `GET /api/public/stats` - Summary stats

### Phase 2: Next.js Website
- ✅ Created Next.js 14 app with App Router, TypeScript, Tailwind CSS
- ✅ Built all 7 required pages (Home, Communities, Community Detail, Floor Plans, About, Contact, Process)
- ✅ Implemented luxury design with navy/gold/white color scheme
- ✅ Mobile-first responsive design
- ✅ ISR with 1-hour revalidation
- ✅ API client with TypeScript types
- ✅ Production build successful
- ✅ Tested locally - site renders correctly
- ✅ Committed and pushed to `mojumedia-dev/regal` on GitHub

### Phase 3: Git & Documentation
- ✅ Removed old static files (kept .git)
- ✅ Git config set to `donald@augmentadvertise.com` / `Donald Jay`
- ✅ All changes committed and pushed to `main` branch
- ✅ Comprehensive README.md created
- ✅ Logo preserved at `/public/images/regal-logo.png`

## ⏳ Pending (Railway Auto-Deploy)

The price tool API changes have been pushed to GitHub. Railway should automatically deploy within 2-5 minutes. Once deployed, the website will be able to fetch live data.

**To verify Railway deployment:**
```bash
curl https://regal-homes-price-tool-production-0d02.up.railway.app/api/public/stats
```

Expected response:
```json
{
  "totalCommunities": 5,
  "totalPlans": 42,
  "totalHomesAvailable": 49,
  "totalHomesites": 177,
  "priceRange": {
    "min_price": 595000,
    "max_price": 4300000
  }
}
```

## 🚀 Next Steps

### 1. Deploy Website to Vercel

```bash
cd /tmp/regal-repo

# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

**Environment Variables in Vercel:**
- `NEXT_PUBLIC_API_URL` = `https://regal-homes-price-tool-production-0d02.up.railway.app`

### 2. Alternative: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### 3. Verify Everything Works

After Railway deploys and website is live:

1. Visit homepage - verify communities load
2. Click "Communities" - verify all 5 communities show
3. Click a community (e.g., Parkside) - verify plans, homes, and homesites load
4. Visit "Floor Plans" - verify filtering works
5. Test mobile responsiveness
6. Check all links work

## 📊 Success Criteria (All Met)

- ✅ Public API endpoints work on price tool (tested locally)
- ✅ Next.js app builds successfully (`npm run build`)
- ✅ All pages render with data from API (tested locally)
- ✅ Site pushed to `mojumedia-dev/regal`
- ✅ Clean, professional, luxury design
- ✅ Mobile responsive

## 🎨 Design Features

- **Luxury Feel**: Navy/gold/white color scheme, Georgia serif headings
- **Mobile-First**: Responsive grid layouts, hamburger menu
- **User Experience**: Clear CTAs, easy navigation, contact info prominent
- **Performance**: ISR with 1-hour cache, optimized builds
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 📝 Notes

- The logo at `/public/images/regal-logo.png` is preserved from the original site
- All community data (5 communities: Parkside, Bella Vita, Bristol Farms, Amanti Lago, Windflower) is sourced from the DB schema
- Amanti Lago is the luxury tier ($4M+), others are $595K-$900K range
- Each community has dedicated sales manager contact info displayed

## 🔧 Troubleshooting

**If API returns 404 on Railway:**
- Check Railway dashboard for deployment status
- Verify GitHub webhook is configured
- Manually trigger redeploy if needed

**If images don't show:**
- Verify `/public/images/regal-logo.png` exists
- Check Next.js Image component paths

**If build fails:**
- Run `npm run build` locally to reproduce
- Check TypeScript errors
- Verify environment variables are set
