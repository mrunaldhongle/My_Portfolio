import project1 from '../assets/Projects/career-guidance.jpeg'
import project2 from '../assets/Projects/sri bindu.png'
import project3 from '../assets/Projects/Linkhub.png'
import project4 from '../assets/Projects/kribuddha.png'
import project5 from '../assets/Projects/goat digital.png'
import project6 from '../assets/Projects/job_portal.png'
import certificate1 from '../assets/Iee conference.jpeg'
import certificate2 from '../assets/Data_Analytics_Essential.png'
import certificate3 from '../assets/Programming In Java.png'
import certificate4 from '../assets/Design and Analysis of Algorithms.png'
import certificate5 from '../assets/Machine learning.jpeg'
import resumePdf from '../assets/Mrunal-Dhongle_resume.pdf'

export const heroData = {
  name: 'Mrunal Dhongle',
  role: 'Software Developer | AI Enthusiast',
  summary:
    'I design modern web products with polished interfaces, clean architecture, and intelligent automation. My work blends React, Tailwind CSS, Node.js, and AI tools into fast, responsive digital experiences.',
  ctaPrimary: { label: 'Download Resume', href: resumePdf },
  ctaSecondary: { label: 'Contact Me', href: '/contact' },
}

export const aboutPreview = {
  title: 'Crafting clean digital experiences with modern engineering and AI-driven thinking.',
  description:
    'I build front-end and full-stack products that feel effortless for users and easy to maintain for teams. My approach is rooted in thoughtful UI design, efficient code, and solutions that scale.',
  button: { label: 'Read More', href: '/about' },
}

export const featuredProjects = [
  {
    title: 'AI-Based Carreer Predictor & Resume Builder',
    description: 'An AI-powered tool for predicting career paths and building professional resumes.',
    image: project1,
    tech: ['React', 'Python', 'Flask', 'Machine Learning'],
    github: 'https://github.com/mrunaldhongle/Carrer-Prediction-And-Resume-Builder',
    live: 'https://example.com',
  },
  {
    title: 'Sri Bindu Madhav mandir Website',
    description: 'A modern website for the Sri Bindu Madhav mandir, featuring a clean design.',
    image: project2,
    tech: ['React', 'Node.js', 'Express.js', 'Supabase'],
    github: 'https://github.com/mrunaldhongle/Sri_Bindu_Temple',
    live: 'https://www.sribindumadhav.org/',
  },
  {
    title: 'LinkHub',
    description: 'A sleek link management dashboard for organizing and sharing your online presence with custom URLs and analytics.',
    image: project3,
    tech: ['Ruby on rails', 'PostgreSQL', 'Tailwind css'],
    github: 'https://github.com/mrunaldhongle/LinkHub',
    live: 'https://example.com',
  },
  {
    title: 'Kribuddha Website',
    description: 'A modern website for the Kribuddha organization, featuring a clean design and easy navigation.',
    image: project4,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mrunaldhongle/KriBuddha',
    live: 'https://kribuddha.in/',
  },
  {
    title: 'Goat Digital Website',
    description: 'A modern website for the Goat Digital organization, featuring a clean design and easy navigation.',
    image: project5,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    live: 'https://www.goatdigital.co.in/',
  },
  {
    title: 'Job Portal Website',
    description: 'A minimal agency landing page with smooth animations, custom service cards.',
    image: project6,
    tech: ['React', 'MongoDB', 'Node.js', 'Express.js'],
    github: 'https://github.com/mrunaldhongle/Job_Portel',
    live: 'https://example.com',
  },
]

export const skillSections = [
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Programming',
    skills: ['Python', 'C++'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

export const aboutDetails = {
  aboutMe: {
    title: "Hi, I'm Mrunal Dhongle",
    description: [
      "I am a Software Developer with a strong foundation in Computer Science and a keen interest in Web Technologies. Currently Completed B.Tech in Computer Science & Engineering, with hands-on experience in full-stack development, projects, and internships.",
    ]
  },
  summary:
    'I build responsive web applications and AI-enhanced products. My focus is on thoughtful UI, reliable architecture, and clean engineering that supports real businesses.',
  experience: [
    {
      role: 'Web Developer Intern',
      company: 'ICEICO Technologies Pvt. Ltd.',
      period: 'Dec 2025 - Jun 2026',
    },
    {
      role: 'Python Development Intern',
      company: 'Codemate IT Services Pvt. Ltd.',
      period: 'Jun 2024',
    },
   
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'SB Jain Institute of Technology, Management & Research',
      year: '2022 – 2026',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'St. Ursula Girls Junior College, Nagpur',
      year: '2021 – 2022',
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'St. Ursula Girls High School, Nagpur',
      year: '2020',
    },
  ],
  certifications: [
    {
      title: 'AI- Based Career Predictor & Resume Builder',
      organization: 'IEE Conference',
      image: certificate1,
    },
    {
      title: 'Data Analytics Essentials',
      organization: 'Cisco Networking Academy',
      image: certificate2,
    },
    {
      title: 'Programming in Java',
      organization: ' NPTEL, IIT Kharagpur ',
      image: certificate3,
    },
    {
      title: 'Design and Analysis of Algorithms',
      organization: 'NPTEL, IIT Madras',
      image: certificate4,
    },
    {
      title: 'Machine Learning',
      organization: 'NPTEL, IIT Madras',
      image: certificate5,
    },
  ],
}

export const contactInfo = {
  email: 'dhonglemrunal@gmail.com',
  phone: '+91 9096527817',
  linkedIn: 'https://www.linkedin.com/in/mrunal-dhongle/',
  github: 'https://github.com/mrunaldhongle',
  instagram: 'https://www.instagram.com/mrunal_dhongle/',
  location: 'Nagpur, India',
}
