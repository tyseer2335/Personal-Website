# 🚀 Quick Deploy Guide

## Option 1: GitHub Pages (Current Setup)

**Status:** Configured but requires repository settings

### Setup Steps:

1. **Configure GitHub Repository:**
   - Go to: https://github.com/tyseer2335/Personal-Website/settings/pages
   - Under "Build and deployment"
   - Set **Source** to: `GitHub Actions`
   - Click Save

2. **Trigger Deployment:**
   ```bash
   git add .
   git commit -m "Trigger deployment"
   git push origin main
   ```

3. **Monitor:**
   - Check: https://github.com/tyseer2335/Personal-Website/actions
   - Wait 2-3 minutes
   - Visit: https://tyseer2335.github.io/Personal-Website/

### If it Still Doesn't Work:

The issue might be that GitHub Pages source is set to a branch instead of GitHub Actions. Double-check step 1 above.

---

## Option 2: Vercel (EASIEST - Recommended)

Vercel is easier and more reliable than GitHub Pages for React apps.

### Deploy in 2 Minutes:

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/in with your GitHub account

2. **Import Repository:**
   - Click "Add New" → "Project"
   - Select `Personal-Website` from your GitHub repos
   - Click "Import"

3. **Configure (Auto-detected):**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - **IMPORTANT:** Add environment variable:
     - Name: `VITE_BASE_PATH`
     - Value: `/`

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live at: `personal-website-xyz.vercel.app`

### Vercel Advantages:
✅ No configuration needed  
✅ Automatic deployments on push  
✅ Free custom domains  
✅ Better performance  
✅ Easier debugging  

---

## Option 3: Netlify

1. **Go to Netlify:**
   - Visit: https://netlify.com
   - Sign up with GitHub

2. **Deploy:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub → Select `Personal-Website`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variable:
     - `VITE_BASE_PATH` = `/`
   - Click "Deploy"

---

## Option 4: Cloudflare Pages

1. Visit: https://pages.cloudflare.com
2. Connect GitHub account
3. Select `Personal-Website` repository
4. Framework: `Vite`
5. Build command: `npm run build`
6. Output: `dist`
7. Environment variable: `VITE_BASE_PATH` = `/`
8. Deploy!

---

## If You Change Hosting (from GitHub Pages to others):

Update these files:

**`src/App.tsx`** - Remove or update basename:
```tsx
// For GitHub Pages:
<BrowserRouter basename="/Personal-Website">

// For Vercel/Netlify/Cloudflare (root domain):
<BrowserRouter>
```

**`vite.config.ts`** - Already configured with env variable support!

---

## Troubleshooting

### GitHub Pages shows blank/404:
- Check repository Settings → Pages → Source is "GitHub Actions"
- Check Actions tab for failed workflows
- Make sure `base` and `basename` match

### Works locally but not deployed:
- Check browser console for 404 errors on assets
- Verify base path matches deployment URL
- Check build output in deployment logs

### "Failed to load resource" errors:
- Wrong base path in vite.config.ts
- Assets not found - check dist folder was uploaded

---

## My Recommendation

**Use Vercel** - It's way easier than GitHub Pages for React apps:
- No configuration hassle
- Better error messages
- Automatic preview deployments
- Faster builds
- Free SSL and CDN

GitHub Pages works but requires more setup and has quirks with SPAs.
