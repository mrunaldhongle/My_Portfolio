# ⚡ Quick Reference Card

Quick commands and essential information at a glance.

## 🚀 3-Step Start

```bash
npm install              # Step 1: Install
npm run dev             # Step 2: Run (opens http://localhost:5173)
# Edit src/data/portfolioData.js    # Step 3: Customize
```

---

## 📝 Essential Files to Edit

| What | File | Why |
|------|------|-----|
| Your Info | `src/data/portfolioData.js` | All content in one place |
| Colors | `tailwind.config.js` | Primary & secondary colors |
| Resume | `public/resume.pdf` | Add your resume here |
| Styling | `src/index.css` | Global CSS |
| Structure | `src/App.jsx` | Main application |

---

## 🎨 Edit Your Info (In `src/data/portfolioData.js`)

```javascript
// Update hero section
hero: { name, title, description }

// Update about section  
about: { intro }

// Update skills (add categories)
skills: { "Category": ["Skill1", "Skill2"] }

// Update experience
experience: { company, position, duration, responsibilities }

// Update projects
projects: { title, description, technologies, features, github, live }

// Update education
education: { level, field, institution, duration }

// Update certifications
certifications: { title, issuer, date }

// Update contact
contact: { email, phone, linkedin, github }
```

---

## 🎨 Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#6366f1",      // Main color
  secondary: "#ec4899",    // Accent color
}
```

---

## 📚 Documentation Map

| File | Purpose | Read Time |
|------|---------|-----------|
| INDEX.md | 📍 Navigation guide | 5 min |
| GETTING_STARTED.md | 🚀 Getting started | 5 min |
| SETUP.md | ⚙️ Setup instructions | 2 min |
| README.md | 📖 Full docs | 10 min |
| DEPLOYMENT.md | 🌐 Deploy guide | 10 min |
| COMPONENTS_REFERENCE.md | 🎨 Component details | 15 min |

---

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder
```

---

## 📊 Commands

```bash
npm install              Install dependencies
npm run dev             Start development server (http://localhost:5173)
npm run build           Build for production
npm run preview         Preview production build
npm update              Update all dependencies
```

---

## 🔍 Structure Overview

```
portfolio/
├── src/
│   ├── components/         (11 React components)
│   ├── data/
│   │   └── portfolioData.js (EDIT THIS!)
│   ├── App.jsx            (Main component)
│   ├── main.jsx           (Entry point)
│   └── index.css          (Global styles)
├── public/
│   └── resume.pdf         (ADD YOUR RESUME!)
├── tailwind.config.js     (COLORS HERE!)
├── package.json           (Dependencies)
└── index.html             (HTML template)
```

---

## ✨ Key Features

✅ Responsive & Mobile-friendly
✅ Dark mode toggle
✅ Smooth animations
✅ Contact form included
✅ Timeline layouts
✅ Skill progress bars
✅ Project showcase
✅ Social media integration
✅ Back-to-top button
✅ Scroll progress indicator

---

## 🎯 Customization Checklist

- [ ] Update name, title, description
- [ ] Add skills and categories
- [ ] Add work experience
- [ ] Add projects with links
- [ ] Add education
- [ ] Add certifications
- [ ] Update contact info
- [ ] Add resume.pdf to public/
- [ ] Change primary color
- [ ] Change secondary color
- [ ] Test on mobile
- [ ] Run `npm run build` (check errors)
- [ ] Ready to deploy!

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | `npm run dev -- --port 3000` |
| Build fails | `npm install && npm run build` |
| Dark mode not working | Check App.jsx state |
| Data not showing | Check portfolioData.js structure |
| Styles not applied | Check Tailwind classes |
| Mobile menu not working | Check Navbar.jsx onClick |

---

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

(Tailwind automatically uses sm, md, lg breakpoints)

---

## 🔑 Key Imports

```javascript
import { motion } from 'framer-motion'      // Animations
import { FaXXX } from 'react-icons/fa'      // Icons
import { portfolioData } from '../data/..'   // Your data
import Navbar from './Navbar'               // Components
```

---

## 🎨 Common Customizations

### Add New Skill Category
```javascript
// In portfolioData.js
skills: {
  "Frontend": ["React", ...],
  "New Category": ["Skill1", "Skill2"],
}
```

### Update Project Link
```javascript
// In portfolioData.js
projects: [{
  github: "https://github.com/your-link",
  live: "https://deployed-site.com",
}]
```

### Change Font
Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

---

## ⚡ Performance Tips

- Images are optimized
- CSS is minified
- JavaScript is bundled
- Production build is optimized
- Animations use GPU acceleration

---

## 🔗 Important Links

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 Pro Tips

1. **Keep content updated** regularly
2. **Add real project links** (GitHub & live demos)
3. **Use high-quality resume** PDF
4. **Test on mobile** before deploy
5. **Check Lighthouse** score after deploy
6. **Share on LinkedIn** and GitHub
7. **Monitor analytics** after deployment
8. **Update projects** as you build new ones

---

## 🚨 Before Deployment

- [ ] No console errors
- [ ] `npm run build` succeeds
- [ ] `npm run preview` works
- [ ] All links are correct
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Resume accessible
- [ ] Images load correctly

---

## 📞 When Stuck

1. Check [INDEX.md](./INDEX.md) - Documentation map
2. Check [COMPONENTS_REFERENCE.md](./COMPONENTS_REFERENCE.md) - Component guide
3. Read [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment help
4. Check error messages in browser console
5. Verify file paths and imports

---

## ✅ Success Indicators

✅ Portfolio loads at http://localhost:5173
✅ Dark mode toggle works
✅ Navigation is smooth
✅ Mobile menu appears on small screens
✅ Skills show with progress bars
✅ Experience timeline displays correctly
✅ Projects show with links
✅ Contact form appears
✅ Footer shows social links
✅ No console errors

---

## 🎉 You're Ready!

Your portfolio is ready to customize and deploy.

**Next step**: Edit `src/data/portfolioData.js`

**Questions**: Check [INDEX.md](./INDEX.md)

**Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Last Updated**: March 2026
**Version**: 1.0.0

Good luck! 🚀
