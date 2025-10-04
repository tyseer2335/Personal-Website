# 🚀 GitHub Pages Deployment Guide

## The Issue We Fixed

When deploying a React SPA to GitHub Pages at `username.github.io/repository-name/`, you need to configure **two things**:

### 1. Vite Base Path (`vite.config.ts`)
```typescript
base: '/Personal-Website/',
```
This tells Vite where to find assets (CSS, JS, images).

### 2. React Router Basename (`App.tsx`)
```typescript
<BrowserRouter basename="/Personal-Website">
```
This tells React Router the base URL for all routes.

## ✅ Current Configuration

- **Repository:** `tyseer2335/Personal-Website`
- **URL:** https://tyseer2335.github.io/Personal-Website/
- **Base Path:** `/Personal-Website/`

## 📦 Deployment Process

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **GitHub Actions automatically:**
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages

3. **Check deployment:**
   - Go to: https://github.com/tyseer2335/Personal-Website/actions
   - Wait 2-3 minutes for workflow to complete
   - Visit: https://tyseer2335.github.io/Personal-Website/

## 🌐 Using a Custom Domain

If you want to use `tyseer.ca` instead:

### Step 1: Update Configuration

**`vite.config.ts`:**
```typescript
base: '/',  // Change from '/Personal-Website/'
```

**`App.tsx`:**
```typescript
<BrowserRouter>  // Remove basename
```

### Step 2: Configure DNS

Add these records at your domain provider:
```
Type  Name  Value
----  ----  -----
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   tyseer2335.github.io
```

### Step 3: GitHub Settings

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter: `tyseer.ca`
3. Check "Enforce HTTPS"
4. Wait for DNS check to pass (can take up to 24 hours)

### Step 4: Deploy

```bash
git add .
git commit -m "Configure custom domain"
git push origin main
```

## 🛠️ Local Testing

```bash
# Development
npm run dev

# Test production build locally
npm run build
npm run preview
# Visit http://localhost:4173/Personal-Website/
```

## ⚠️ Troubleshooting

### White Screen
- Check `base` in `vite.config.ts` matches your URL path
- For `username.github.io/repo-name/` use `base: '/repo-name/'`
- For custom domains, use `base: '/'`

### 404 Errors on Refresh
- Ensure `basename` prop is set on `<BrowserRouter>`
- Check `public/404.html` exists
- Verify `index.html` has the SPA redirect script

### Assets Not Loading
- Build the project: `npm run build`
- Check `dist/index.html` - script/link tags should include base path
- Example: `<script src="/Personal-Website/assets/index-xxx.js">`

### Routes Not Working
- Verify `<BrowserRouter basename="/Personal-Website">`
- Use `<Link>` components, not `<a>` tags for internal navigation
- Basename must match the `base` in vite config

## 📝 Files Modified for GitHub Pages

- `.github/workflows/deploy.yml` - Auto-deployment workflow
- `vite.config.ts` - Base path configuration
- `src/App.tsx` - Router basename
- `public/404.html` - SPA routing support
- `public/.nojekyll` - Disable Jekyll processing
- `index.html` - SPA redirect script
