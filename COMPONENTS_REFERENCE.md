# 📚 Portfolio Components Reference Guide

Complete reference for all portfolio components and how to customize them.

## 📋 Complete File Structure

```
portfolio/
├── Configuration & Setup
│   ├── package.json                  # npm dependencies
│   ├── vite.config.js               # Vite build configuration
│   ├── tailwind.config.js           # Tailwind color & theme config
│   ├── postcss.config.js            # PostCSS plugins
│   └── vercel.json                  # Vercel deployment settings
│
├── Documentation
│   ├── README.md                    # Main documentation
│   ├── SETUP.md                     # Quick start
│   ├── DEPLOYMENT.md                # Deployment guide
│   ├── GETTING_STARTED.md           # Getting started overview
│   └── COMPONENTS_REFERENCE.md      # This file
│
├── Root Files
│   ├── index.html                   # HTML template
│   ├── .gitignore                   # Git ignore patterns
│   ├── .env.example                 # Environment variables template
│   └── vite.config.js               # Vite configuration
│
├── src/
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # Main app component
│   ├── index.css                    # Global styles
│   │
│   ├── components/                  # React components
│   │   ├── Navbar.jsx               # ⭐ Navigation bar
│   │   ├── Hero.jsx                 # ⭐ Hero/intro section
│   │   ├── About.jsx                # ⭐ About section
│   │   ├── Skills.jsx               # ⭐ Skills with categories
│   │   ├── Experience.jsx           # ⭐ Work experience timeline
│   │   ├── Projects.jsx             # ⭐ Projects showcase
│   │   ├── Education.jsx            # ⭐ Education timeline
│   │   ├── Certifications.jsx       # ⭐ Certifications display
│   │   ├── Contact.jsx              # ⭐ Contact form & info
│   │   ├── Footer.jsx               # ⭐ Footer
│   │   ├── ScrollProgress.jsx       # ✨ Scroll progress bar
│   │   └── BackToTop.jsx            # ✨ Back to top button
│   │
│   └── data/
│       └── portfolioData.js         # 📝 ALL portfolio content
│
└── public/
    └── _redirects                   # Netlify routing config
```

## 🎨 Key Components Overview

### 1. **Navbar.jsx** - Navigation Bar
**Location**: `src/components/Navbar.jsx`

**Features**:
- Sticky navigation with scroll detection
- Dark mode toggle button
- Mobile hamburger menu
- Smooth navigation to sections

**Customization**:
```javascript
// Update menu items
const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // Add more items here
];

// Change colors
className="text-primary" // Uses primary color from tailwind config
```

**Data Source**: Hardcoded in component

---

### 2. **Hero.jsx** - Hero Section
**Location**: `src/components/Hero.jsx`

**Features**:
- Large attention-grabbing intro
- Animated avatar/emoji
- CTA buttons
- Social media links
- Animated background

**Customization**:
```javascript
// Uses data from portfolioData.js
const { name, title, description, avatar } = portfolioData.hero;

// Add resume PDF to public folder:
// public/resume.pdf
```

**Data Source**: `src/data/portfolioData.js` → `hero` object

---

### 3. **About.jsx** - About Section
**Location**: `src/components/About.jsx`

**Features**:
- Professional summary
- Statistics cards
- Highlight cards with traits

**Customization**:
```javascript
// Edit portfolio data
{
  about: {
    intro: "Your professional summary here..."
  }
}

// Customize stats in component
{ number: '3+', label: 'Internships' }
```

**Data Source**: `src/data/portfolioData.js` → `about` object

---

### 4. **Skills.jsx** - Skills Display
**Location**: `src/components/Skills.jsx`

**Features**:
- Category filtering
- Skill cards with progress bars
- Animated icons
- Responsive grid

**Customization**:
```javascript
// Add/edit skill categories in portfolioData.js
skills: {
  "Frontend Technologies": ["HTML5", "Tailwind CSS", ...],
  "Your Category": ["Skill 1", "Skill 2"],
  // Add more categories
}

// Icons are auto-assigned based on skill name
```

**Data Source**: `src/data/portfolioData.js` → `skills` object

---

### 5. **Experience.jsx** - Work Experience
**Location**: `src/components/Experience.jsx`

**Features**:
- Timeline layout
- Company and position info
- Responsibilities list
- Alternating design on desktop

**Customization**:
```javascript
// Edit in portfolioData.js
experience: [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Month Year – Month Year",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // Add more
    ]
  }
]
```

**Data Source**: `src/data/portfolioData.js` → `experience` array

---

### 6. **Projects.jsx** - Projects Showcase
**Location**: `src/components/Projects.jsx`

**Features**:
- Project cards
- Technology tags
- Features list
- GitHub and live demo links
- Hover animations

**Customization**:
```javascript
// Edit in portfolioData.js
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Short description",
    technologies: ["React", "Tailwind"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/...",
    live: "https://deployed-site.com"
  }
]
```

**Data Source**: `src/data/portfolioData.js` → `projects` array

---

### 7. **Education.jsx** - Education Timeline
**Location**: `src/components/Education.jsx`

**Features**:
- Timeline layout
- Degree and institution info
- Duration display
- Icon badges

**Customization**:
```javascript
// Edit in portfolioData.js
education: [
  {
    id: 1,
    level: "B.Tech",
    field: "Computer Science Engineering",
    institution: "University Name",
    duration: "2022 – 2026"
  }
]
```

**Data Source**: `src/data/portfolioData.js` → `education` array

---

### 8. **Certifications.jsx** - Certifications
**Location**: `src/components/Certifications.jsx`

**Features**:
- Certification cards
- Issuing organization
- Certification date
- Animated icons

**Customization**:
```javascript
// Edit in portfolioData.js
certifications: [
  {
    id: 1,
    title: "Certificate Name",
    issuer: "Organization Name",
    date: "2024"
  }
]
```

**Data Source**: `src/data/portfolioData.js` → `certifications` array

---

### 9. **Contact.jsx** - Contact Section
**Location**: `src/components/Contact.jsx`

**Features**:
- Contact form with validation
- Email and phone links
- Social media integration
- Form submission feedback

**Customization**:
```javascript
// Email goes to
contact: {
  email: "your@email.com",
  phone: "+91-XXXXXXXXXX",
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/..."
}

// For EmailJS integration:
// 1. Create account at emailjs.com
// 2. Get Service ID, Template ID, Public Key
// 3. Update Contact.jsx with credentials
```

**Data Source**: `src/data/portfolioData.js` → `contact` object

---

### 10. **Footer.jsx** - Footer
**Location**: `src/components/Footer.jsx`

**Features**:
- About section
- Quick links
- Social media
- Copyright info

**Customization**:
```javascript
// Update text content directly in component
// Uses contact info from portfolioData.js

// Footer links are hardcoded, can customize:
const footerLinks = [
  { label: 'Home', href: '#' },
  // Add more
]
```

**Data Source**: `src/data/portfolioData.js` → `contact` object

---

### 11. **ScrollProgress.jsx** - Scroll Progress Bar
**Location**: `src/components/ScrollProgress.jsx`

**Features**:
- Visual scroll progress indicator
- Gradient colors
- Sticky at top

**Customization**:
```javascript
// Change color in component
className="bg-gradient-to-r from-primary to-secondary"
```

**Data Source**: None (utility component)

---

### 12. **BackToTop.jsx** - Back to Top Button
**Location**: `src/components/BackToTop.jsx`

**Features**:
- Appears after scroll
- Smooth scroll to top
- Animated appearance/disappearance
- Fixed position

**Customization**:
```javascript
// Adjust appear threshold (currently 300px)
if (window.scrollY > 300) { setIsVisible(true); }
```

**Data Source**: None (utility component)

---

## 🎨 Styling Guide

### Global Colors
**File**: `tailwind.config.js`

```javascript
colors: {
  primary: "#6366f1",      // Main color (indigo)
  secondary: "#ec4899",    // Accent color (pink)
}
```

### Dark Mode
- Automatically handled by Tailwind
- Classes use `dark:` prefix
- Toggle in Navbar component

### Global Styles
**File**: `src/index.css`

```css
.gradient-text { /* Gradient text effect */ }
.glass { /* Glass morphism effect */ }
.bounce-slow { /* Slow bounce animation */ }
```

---

## 📝 Data File Structure

**File**: `src/data/portfolioData.js`

```javascript
export const portfolioData = {
  hero: { /* Hero section data */ },
  about: { /* About section data */ },
  skills: { /* Skills organized by category */ },
  experience: [ /* Work experience array */ ],
  projects: [ /* Projects array */ ],
  education: [ /* Education timeline */ ],
  certifications: [ /* Certifications array */ ],
  contact: { /* Contact information */ },
  social: [ /* Social media links */ ],
};
```

---

## 🔄 Data Flow

```
App.jsx (Main Component)
  ├── Navbar (uses darkMode state)
  ├── Hero (uses portfolioData.hero)
  ├── About (uses portfolioData.about)
  ├── Skills (uses portfolioData.skills)
  ├── Experience (uses portfolioData.experience)
  ├── Projects (uses portfolioData.projects)
  ├── Education (uses portfolioData.education)
  ├── Certifications (uses portfolioData.certifications)
  ├── Contact (uses portfolioData.contact)
  ├── Footer (uses portfolioData.contact)
  ├── ScrollProgress (utility)
  └── BackToTop (utility)
```

---

## 🛠️ Common Customizations

### Change Primary Color
1. Edit `tailwind.config.js`
2. Update `primary` value
3. No need to change components (they use CSS classes)

### Add a New Section
1. Create `src/components/NewSection.jsx`
2. Use existing components as template
3. Add data to `portfolioData.js`
4. Import and add to `App.jsx`

### Update Social Links
1. Edit `src/data/portfolioData.js`
2. Update in `contact` and `social` objects
3. Components automatically use these links

### Change Animations
1. Edit component files
2. Modify Framer Motion `variants`
3. Update `transition` properties

---

## 🚀 Performance Tips

1. Images are lazy-loaded
2. Components use React.memo where beneficial
3. Animations use GPU acceleration
4. CSS is optimized with Tailwind purging
5. Build is minified and optimized

---

## 🔗 Component Dependencies

```
React
├── React Elements
├── React Icons (FaXXX icons)
└── Framer Motion (animations)

Tailwind CSS
├── Utility classes
└── Dark mode support

Custom Assets
└── src/data/portfolioData.js
```

---

## 📱 Responsive Breakpoints

Using Tailwind CSS breakpoints:
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px

Components use `md:` breakpoint for major layout changes.

---

## 🎯 Quick Reference

| Component | Purpose | Data Source | Key Files |
|-----------|---------|-------------|-----------|
| Navbar | Navigation | Hardcoded | Navbar.jsx |
| Hero | Introduction | portfolioData.hero | Hero.jsx |
| About | Summary | portfolioData.about | About.jsx |
| Skills | Skills display | portfolioData.skills | Skills.jsx |
| Experience | Work history | portfolioData.experience | Experience.jsx |
| Projects | Portfolio | portfolioData.projects | Projects.jsx |
| Education | Education | portfolioData.education | Education.jsx |
| Certifications | Certs | portfolioData.certifications | Certifications.jsx |
| Contact | Contact info | portfolioData.contact | Contact.jsx |
| Footer | Footer | portfolioData.contact | Footer.jsx |

---

## 🔍 Debugging

### Common issues:
1. **Dark mode not working** - Check `App.jsx` state management
2. **Data not showing** - Verify `portfolioData.js` structure
3. **Styling issues** - Check Tailwind classes in component
4. **Animations not working** - Verify Framer Motion import

---

**This is your complete reference guide! Happy customizing! 🎨**
