# mrunaldhongle — Personal Portfolio

A personal portfolio website built with React and Vite, deployed on Vercel. The site showcases projects, technical skills, certifications, education, and contact information with a fully responsive design and dark mode support.

Live: [mrunaldhongle.vercel.app](https://mrunaldhongle.vercel.app)

---

## Overview

This portfolio presents Mrunal Dhongle as a Software Developer and Full Stack Developer. It is designed with a warm, minimal aesthetic, smooth animations, and a consistent dark/light theme. The site is a single-page application with client-side routing, meaning all navigation happens without a full page reload.

---

## Pages

| Route        | Description                                                   |
|--------------|---------------------------------------------------------------|
| `/`          | Home page with hero section, profile card, and featured projects |
| `/about`     | About page with bio, education timeline, experience timeline, skills, and certifications |
| `/projects`  | Full projects listing                                         |
| `/contact`   | Contact form and direct contact details                       |

---

## Tech Stack

**Frontend**
- React 19
- React Router DOM 7
- Framer Motion (animations)
- Tailwind CSS 3
- React Icons

**Build Tool**
- Vite 8

**Deployment**
- Vercel

---

## Project Structure

```
Portfolio/
├── public/
│   └── fav.jpg               # Custom favicon (served as static asset)
├── src/
│   ├── assets/               # Images, PDFs, and static files
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ...
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark/light mode state
│   ├── data/
│   │   └── portfolioData.js   # All content data (projects, skills, education, etc.)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # Route definitions
│   └── main.jsx              # React entry point
├── index.html                # HTML shell with title and favicon
├── vercel.json               # Vercel deployment config with SPA rewrite rule
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mrunaldhongle/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The development server starts at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

The production build is output to the `dist/` folder.

### Previewing the Production Build

```bash
npm run preview
```

---

## Deployment

This project is deployed on Vercel. The `vercel.json` file includes a SPA rewrite rule that redirects all routes to `index.html`, which allows React Router to handle client-side navigation correctly on direct URL access and page refresh.

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy, push changes to the connected GitHub repository. Vercel will automatically trigger a new build.

---

## Features

- Responsive layout that adapts to all screen sizes
- Dark mode and light mode with persistent theme toggle
- Smooth page transitions and scroll animations using Framer Motion
- Client-side routing with React Router — no full page reloads
- Certification image viewer with a modal overlay
- Horizontal scrolling certifications carousel
- Resume download button in the navigation bar
- SEO meta tags and Open Graph tags in `index.html`
- Custom favicon and browser tab title

---

## Environment Variables

If you are running the contact form or any API integrations, create a `.env` file at the project root based on `.env.example`.

```bash
cp .env.example .env
```

Fill in the required values before running locally.

---

## Author

**Mrunal Dhongle**
Software Developer based in Nagpur, India.

- GitHub: [github.com/mrunaldhongle](https://github.com/mrunaldhongle)
- LinkedIn: [linkedin.com/in/mrunal-dhongle](https://www.linkedin.com/in/mrunal-dhongle/)
- Email: dhonglemrunal@gmail.com

---

## License

This project is for personal and portfolio use. All rights reserved.
