# Deployment Guide

Complete guide to deploy your Mrunal Dhongle portfolio website to various platforms.

## 🚀 One-Click Deployments

### 1. Deploy to Vercel (Recommended)

**Easiest Way:**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Via CLI:**
```bash
npm install -g vercel
vercel
```

### 2. Deploy to Netlify

**Option A: Via Drag & Drop**
```bash
npm run build
```
Then visit [netlify.com](https://netlify.com) and drag the `dist` folder

**Option B: Via CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option C: GitHub Integration**
1. Push to GitHub
2. Go to Netlify
3. Click "New site from Git"
4. Select your GitHub repo
5. Netlify auto-detects Vite configuration
6. Click Deploy

### 3. Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',  // Replace 'portfolio' with your repo name
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. Go to Repository Settings > Pages
4. Set source to "Deploy from a branch"
5. Select "main" branch and "/root" folder

## 📋 Pre-Deployment Checklist

- [ ] All personal information updated in `portfolioData.js`
- [ ] Resume PDF added to `public/resume.pdf`
- [ ] All social media links updated
- [ ] Projects information is complete and accurate
- [ ] No console errors: `npm run build` runs cleanly
- [ ] Tested locally: `npm run preview`
- [ ] Images optimized (if any)
- [ ] Meta tags updated in `index.html`

## 🌍 Custom Domain Setup

### For Vercel
1. After deployment, go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

### For Netlify
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records at your domain registrar

## 📊 Performance Optimization

After deployment, test your performance:

- **Google Lighthouse**: chrome://extensions -> Lighthouse
- **PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **GTmetrix**: [gtmetrix.com](https://gtmetrix.com)

## 🔍 SEO Optimization

### Meta Tags (already configured)
The `index.html` contains:
- Title tag
- Meta description
- Viewport meta tag
- Theme color

### Additional SEO Tips
1. Add `sitemap.xml` for better indexing
2. Create `robots.txt`
3. Submit to Google Search Console
4. Add Open Graph meta tags for social sharing

### Create `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 🔐 Security Best Practices

- [ ] Remove sensitive information from `portfolioData.js`
- [ ] Don't commit `.env` files with secrets
- [ ] Use HTTPS only (automatic on Vercel/Netlify)
- [ ] Enable CORS if needed
- [ ] Add git hooks: `npm install husky`

## 📱 Progressive Web App (PWA) - Optional

To add PWA support:

1. Install vite-plugin-pwa:
```bash
npm install vite-plugin-pwa
```

2. Update `vite.config.js`
3. Create `public/manifest.json`

## 🚨 Troubleshooting Deployment Issues

### Routes not working on GitHub Pages
The `_redirects` file in `public/` handles this for Netlify.

For GitHub Pages, add to `vite.config.js`:
```javascript
base: '/portfolio/',
```

### Build fails during deployment
```bash
# Clear cache and rebuild
npm ci  # instead of npm install
npm run build
```

### Routes 404 on Netlify
Make sure `public/_redirects` exists with proper routing rules.

### Assets not loading
Check if `base` path is correctly set in `vite.config.js`

## 📧 Email Form Setup (Optional)

To enable email submission in the contact form:

### Using EmailJS

1. Create account at [emailjs.com](https://emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update `src/components/Contact.jsx`:

```javascript
import emailjs from 'emailjs-com';

emailjs.init('YOUR_PUBLIC_KEY');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      formData
    );
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  }
};
```

### Using a Backend API
Alternatively, create a backend endpoint to handle form submissions securely.

## 🎉 Post-Deployment Steps

1. **Test Everything**
   - All links work
   - Mobile responsive
   - Dark mode functional
   - Forms work
   - All sections load

2. **Update Social Links**
   - Post your portfolio URL
   - Update LinkedIn
   - Add GitHub repo link

3. **Monitor**
   - Check analytics
   - Monitor performance
   - Fix any issues

4. **Continuous Updates**
   - Keep projects updated
   - Add new projects regularly
   - Update certifications
   - Keep dependencies updated

## 🔄 Automatic Deployment

All platforms support automatic deployment on push to GitHub:

**Vercel**: Automatic (no setup needed)

**Netlify**: 
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**GitHub Pages**:
Use GitHub Actions with `.github/workflows/deploy.yml`

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev)

## ❓ FAQ

**Q: How to update portfolio after deployment?**
A: Push changes to GitHub, and deployment platform will auto-redeploy.

**Q: Can I use my own domain?**
A: Yes, all platforms support custom domains.

**Q: Is HTTPS included?**
A: Yes, automatic on Vercel and Netlify.

**Q: How to add a blog?**
A: Create a `blog` folder in components and add blog functionality.

---

**Happy Deploying! 🚀**

Still need help? Check README.md or open an issue on GitHub.
