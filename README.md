# My Personal Website

Portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

🌐 **Live:** https://tyseer2335.github.io/Personal-Website/

## 🚀 Quick Setup

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
```

## 📦 Deploy to GitHub Pages

### IMPORTANT: Repository Settings

**Before the site works, configure GitHub Pages:**

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `GitHub Actions`
5. Save and push any commit to trigger deployment

### Auto-Deploy

The site auto-deploys on every push to `main`. Check progress:
- https://github.com/tyseer2335/Personal-Website/actions

## 🌐 Alternative Hosting Options

If GitHub Pages doesn't work, try these (all free):

### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Easier than GitHub Pages
- Automatic HTTPS
- Custom domains free
- URL: `your-site.vercel.app`

### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```
- Drag-and-drop deployment
- Great for beginners
- URL: `your-site.netlify.app`

### 3. **Cloudflare Pages**
- Connect GitHub repo
- Automatic builds
- Fast globally
- Free SSL

### 4. **Render**
- Similar to Vercel/Netlify
- Free tier available
- Good performance

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- React Router v6

---

For detailed deployment troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md)