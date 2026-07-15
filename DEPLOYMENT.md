# GitHub Pages Deployment Guide

Complete guide to deploying your AI Portfolio to GitHub Pages.

## Prerequisites

✅ GitHub account  
✅ Git installed locally  
✅ Node.js and npm installed  
✅ Portfolio project ready

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `ai-portfolio`)
4. Choose Public or Private
5. DO NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Configure Base Path

Open `vite.config.js` and update the `base` property:

**For user/organization site** (username.github.io):
```javascript
base: '/'
```

**For project site** (username.github.io/ai-portfolio):
```javascript
base: '/ai-portfolio/'  // Replace with your repo name
```

### Step 3: Initialize Git (if not already done)

```bash
cd ai-portfolio
git init
git add .
git commit -m "Initial commit - AI Portfolio"
```

### Step 4: Connect to GitHub

Replace `USERNAME` and `REPO-NAME` with yours:

```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 5: Install Deployment Package

```bash
npm install --save-dev gh-pages
```

### Step 6: Verify package.json Scripts

Ensure these scripts exist in `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your site (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### Step 8: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in sidebar)
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 9: Wait for Deployment

GitHub will build and deploy your site. This takes 2-5 minutes.

You'll see a message: "Your site is live at `https://username.github.io/repo-name/`"

### Step 10: Verify Deployment

Visit your site URL and verify everything works correctly.

## Updating Your Portfolio

After making changes to your portfolio:

```bash
# 1. Commit your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# 2. Redeploy to GitHub Pages
npm run deploy
```

## Custom Domain (Optional)

### To use a custom domain:

1. **Add CNAME file**

Create `public/CNAME` with your domain:
```
yourdomain.com
```

2. **Update vite.config.js**
```javascript
base: '/'
```

3. **Configure DNS**

Add these DNS records with your domain provider:

For apex domain (yourdomain.com):
```
Type: A
Name: @
Value: 185.199.108.153
```

Add 3 more A records with:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

For www subdomain:
```
Type: CNAME
Name: www
Value: username.github.io
```

4. **Update GitHub Pages Settings**

In repository Settings → Pages, enter your custom domain and click Save.

5. **Wait for DNS propagation** (can take up to 48 hours)

6. **Enable HTTPS** in GitHub Pages settings

## Troubleshooting

### Issue: 404 Page Not Found

**Solution 1**: Check `base` path in `vite.config.js`
- For `username.github.io` → use `base: '/'`
- For `username.github.io/repo` → use `base: '/repo/'`

**Solution 2**: Verify gh-pages branch exists
```bash
git branch -a
```

**Solution 3**: Re-deploy
```bash
npm run deploy
```

### Issue: CSS/JS Not Loading

**Cause**: Incorrect base path

**Solution**: Update `vite.config.js` base path to match your deployment structure, then redeploy.

### Issue: "gh-pages not found"

**Solution**: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Issue: Permission Denied

**Solution**: Use SSH or configure Git credentials
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

### Issue: Old Version Showing

**Solution**: Clear browser cache or use hard refresh
- Chrome/Firefox: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or open in incognito mode

## GitHub Actions (Advanced)

For automatic deployment on every push:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

This will auto-deploy whenever you push to the main branch.

## Best Practices

### Version Control
- Commit frequently with descriptive messages
- Keep main branch stable
- Test locally before deploying

### Content Updates
- Always test changes locally first (`npm run dev`)
- Build and preview before deploying (`npm run build && npm run preview`)
- Update one section at a time for easier debugging

### Performance
- Optimize images before adding to `public/`
- Keep dependencies minimal
- Test on mobile devices

### Security
- Never commit API keys or secrets
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit fix`

## Deployment Checklist

Before deploying:

- [ ] All personal information updated in data files
- [ ] Profile image added (or placeholder customized)
- [ ] Social media links updated
- [ ] Contact email configured
- [ ] Base path in vite.config.js is correct
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Preview looks good (`npm run preview`)
- [ ] Git repository initialized and pushed
- [ ] gh-pages package installed

Then run: `npm run deploy`

## Support

For issues:
1. Check this guide first
2. Review [Vite documentation](https://vitejs.dev/)
3. Check [GitHub Pages documentation](https://docs.github.com/pages)
4. Search GitHub Issues for similar problems

---

**Ready to deploy? Run `npm run deploy` and share your portfolio with the world! 🚀**
