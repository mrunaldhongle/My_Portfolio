# Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

## 📝 Customize Your Portfolio

### 1. Update Personal Information
Open `src/data/portfolioData.js` and update:

```javascript
hero: {
  name: "Mrunal Dhongle",
  title: "Frontend Developer | Software Engineer",
  description: "Your professional description...",
}
```

### 2. Add Your Projects
In the same file, update the `projects` array with your projects

### 3. Add Resume
Add your resume PDF to the `public` folder as `resume.pdf`

### 4. Update Social Links
Update email, LinkedIn, and GitHub URLs in `portfolioData.js`

## 🎨 Styling Customization

### Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: "#6366f1",    // Change primary color
      secondary: "#ec4899",  // Change secondary color
    },
  },
},
```

### Dark Mode
Dark mode is built-in! It's toggled in the Navbar component.

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📚 File Structure

```
portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── data/           # Portfolio data
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind config
└── vite.config.js      # Vite config
```

## ✅ Pre-Deployment Checklist

- [ ] Update name and title in Hero section
- [ ] Update all social links
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update project information
- [ ] Customize colors if desired
- [ ] Test on mobile devices
- [ ] Run `npm run build` and verify no errors
- [ ] Test the production build: `npm run preview`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm install` | Install dependencies |

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Dark Mode Not Working
The dark mode toggle is in the Navbar. Click the sun/moon icon to switch themes.

## 📞 Need Help?

Check the main README.md file for more detailed information and features.

---

**Happy coding! 🎉**
