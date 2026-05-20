import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPandas, SiNumpy, SiJupyter, SiFigma, SiCanva, SiGoogleanalytics, SiMeta } from 'react-icons/si'
import { FaServer, FaChartLine, FaDatabase, FaChartBar, FaChartPie, FaPalette, FaSearch } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import project1 from '../assets/Project 1.png'
import project2 from '../assets/Project 2.png'
import project3 from '../assets/Project 3.png'
import project4 from '../assets/Project 4.png'
import project5 from '../assets/Project 5.png'
import project6 from '../assets/Project 6.png'
import project7 from '../assets/Project 7.png'
import project8 from '../assets/Project 8.png'
import project9 from '../assets/Project 9.png'

const projectsData = [
  {
    title: 'Planitt Signals Website',
    category: 'web-development',
    description: 'A Stock Market Trading Website Build for our In house Product.',
    tags: ['In house ', 'Fintech', 'Trading Platform'],
    image: project1,
    link: 'https://app.planitt.in/',
  },
  {
    title: 'Planitt CRM Website',
    category: 'web-development',
    description: 'A Customer Relationship Management website to Streamline Sales Processes.',
    tags: ['CRM', 'Sales Automation', 'SaaS'],
    image: project2,
    link: 'https://crm.planitt.in/',
  },
  {
    title: 'Coffee Culture',
    category: 'web-development',
    description: 'Restaurant and cafe branding website with smooth UI and animations.',
    tags: ['Food & Beverage', 'Cafe', 'Branding'],
    image: project3,
    link: 'https://www.coffeeculturenagpur.com/',
  },
  {
    title: 'Capita Prime LLC Website',
    category: 'web-development',
    description: 'A real estate company website built for Dubai customers, focused on presenting land-selling opportunities in Dubai.',
    tags: ['Real Estate', 'Dubai Market', 'Lead Generation'],
    image: project4,
    link: 'https://capitaprimellc.netlify.app/',
  },
  {
    title: 'Sawarnaratna Website',
    category: 'web-development',
    description: 'A dry fruit gifting website where customers can build their own gift boxes and send them to their loved ones.',
    tags: ['E-Commerce', 'Gift Hamper', 'Custom Orders'],
    image: project5,
    link: 'https://sawarnaratna.netlify.app/',
  },
  {
    title: 'Krypsm Website',
    category: 'web-development',
    description: 'A secure and intuitive cryptocurrency platform for buying and selling digital assets.',
    tags: ['Web App', 'Fintech', 'Dashboard'],
    image: project6,
    link: 'https://www.krypsm.com/',
  },
  {
    title: 'Zeynix Website',
    category: 'web-development',
    description: 'A Premium e-commerce website for selling high-end electronics with a focus on user experience and performance.',
    tags: ['E-Commerce', 'React', 'Next.js'],
    image: project7,
    link: 'https://www.zeynix.in/',
  },
  {
    title: 'Kubde Hospital Website',
    category: 'web-development',
    description: 'A healthcare website for a hospital, providing information about services, doctors, and online appointment booking.',
    tags: ['Healthcare', 'Hospital', 'Booking'],
    image: project8,
    link: 'https://www.kubdehospital.com/',
  },
  {
    title: 'GO For PG Website',
    category: 'web-development',
    description: 'A student-focused website for finding and applying to postgraduate programs worldwide, with personalized recommendations and application tracking.',
    tags: ['Rent', 'Booking', 'Education'],
    image: project9,
    link: 'https://goforpg.com/',
  },
]

const WebDevLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-16 mt-4">
      {/* 1. Main Heading */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">Website Development</h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          We build modern, fast, and scalable websites that combine stunning design with powerful technology to help your business grow online.
        </p>
      </div>

      {/* 2. Key Features */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-8 md:p-12 mb-20 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-12">
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Modern frameworks (Next.js & React)</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Secure & reliable architecture</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Clean, maintainable codebase</li>
          </ul>
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> High performance & fast load times</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Fully responsive across all devices</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Scalable, future-ready structure</li>
          </ul>
        </div>
      </div>

      {/* 3. Technologies We Use */}
      <div className="w-full max-w-5xl mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiNextdotjs className="text-4xl text-black dark:text-white mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiReact className="text-4xl text-[#61DAFB] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">React</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiTypescript className="text-4xl text-[#3178C6] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">TypeScript</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiTailwindcss className="text-4xl text-[#06B6D4] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiNodedotjs className="text-4xl text-[#339933] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaServer className="text-4xl text-[#F26522] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">REST APIs</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaChartLine className="text-4xl text-[#FBBF24] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">SEO Optimization</span>
          </div>
        </div>
      </div>

      {/* 4. Our Web Development Approach */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-6">Our Web Development Approach</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          We follow a structured and transparent development process that ensures quality, scalability, and timely delivery of your web projects.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Discovery & Planning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Understanding your business goals, target audience, and functional requirements.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">UI/UX Design & Prototyping</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Creating intuitive designs and interactive prototypes to visualize the end product.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Development & Deployment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Building with modern technologies followed by rigorous testing and successful launch.
            </p>
          </div>
        </div>
      </div>
      
      {/* 5. Web Development Projects Header */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">Web Development Projects</h2>
        <p className="text-slate-600 dark:text-slate-300">A showcase of our high-performance websites and web applications.</p>
        <p className="text-slate-600 dark:text-slate-300"> I contributed to the development and content writing of projects under organization and my personal projects.<br /> All official rights and ownership belong to the respective companies.</p>
      </div>
    </div>
  )
}

const AIDataLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-16 mt-4">
      {/* 1. Main Heading */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">AI & Data Analytics</h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Dive into data-driven insights and intelligent systems. I help businesses uncover hidden patterns, optimize operations, and make informed decisions by turning raw data into actionable intelligence.
        </p>
      </div>

      {/* 2. Key Features */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-8 md:p-12 mb-20 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-12">
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Machine Learning Models</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Predictive Analytics</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Insightful Visualizations</li>
          </ul>
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Big Data Processing</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Actionable Intelligence</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Automated Reporting</li>
          </ul>
        </div>
      </div>

      {/* 3. Technologies We Use */}
      <div className="w-full max-w-5xl mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiPython className="text-4xl text-[#3776AB] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Python</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiPandas className="text-4xl text-[#150458] dark:text-white mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pandas</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiNumpy className="text-4xl text-[#013243] dark:text-[#4d77cf] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">NumPy</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaChartBar className="text-4xl text-[#E97627] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tableau</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaChartPie className="text-4xl text-[#F2C811] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Power BI</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaDatabase className="text-4xl text-[#336791] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">SQL</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiJupyter className="text-4xl text-[#F37626] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Jupyter</span>
          </div>
        </div>
      </div>

      {/* 4. Our Approach */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-6">Our Data Approach</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          A structured analytical process from raw data collection to actionable business insights.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Data Collection & Cleaning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Gathering and preprocessing raw data to ensure accuracy and readiness for analysis.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Modeling & Analysis</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Building robust ML models and statistical analyses to extract meaningful insights.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Visualization & Deployment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Creating intuitive dashboards and deploying models for real-world impact.
            </p>
          </div>
        </div>
      </div>
      
      {/* 5. Projects Header */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">AI & Data Analytics Projects</h2>
        <p className="text-slate-600 dark:text-slate-300">A showcase of my data science and analytics work.</p>
      </div>
    </div>
  )
}

const DesignMarketingLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-16 mt-4">
      {/* 1. Main Heading */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">Design & Digital Marketing</h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Discover creative strategies and visual storytelling. From brand identities and UI/UX designs to targeted digital marketing campaigns designed to engage users and drive growth.
        </p>
      </div>

      {/* 2. Key Features */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[28px] p-8 md:p-12 mb-20 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-12">
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Brand Identity & Strategy</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> UI/UX Prototyping</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Targeted SEO Campaigns</li>
          </ul>
          <ul className="space-y-5 text-sm md:text-base text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Social Media Management</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Conversion Rate Optimization</li>
            <li className="flex items-center gap-3"><span className="text-blue-600 dark:text-blue-400 text-lg">•</span> Creative Visual Storytelling</li>
          </ul>
        </div>
      </div>

      {/* 3. Technologies We Use */}
      <div className="w-full max-w-5xl mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-10">Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiFigma className="text-4xl text-[#F24E1E] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Figma</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiCanva className="text-4xl text-[#00C4CC] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Canva</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaPalette className="text-4xl text-[#31A8FF] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Photoshop</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiGoogleanalytics className="text-4xl text-[#E37400] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google Analytics</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <FaSearch className="text-4xl text-[#4285F4] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">SEO Tools</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <SiMeta className="text-4xl text-[#0668E1] mb-4" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Meta Ads</span>
          </div>
        </div>
      </div>

      {/* 4. Our Approach */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-slate-950 dark:text-white mb-6">Our Creative Approach</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          Combining visual design with data-driven marketing strategies to achieve business success.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Research & Strategy</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Understanding the market, audience, and defining clear brand and campaign goals.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Design & Prototyping</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Crafting intuitive UI/UX and engaging visual assets that resonate with your audience.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] p-8 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-base font-bold text-slate-950 dark:text-white mb-4">Execution & Optimization</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Launching marketing campaigns and continuously analyzing performance for growth.
            </p>
          </div>
        </div>
      </div>
      
      {/* 5. Projects Header */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">Design & Marketing Projects</h2>
        <p className="text-slate-600 dark:text-slate-300">A showcase of successful campaigns and designs.</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const { categorySlug } = useParams()

  const filteredProjects = projectsData.filter(
    (project) => project.category === categorySlug
  )

  const formatCategoryTitle = (slug) => {
    if (!slug) return 'Projects'
    return slug
      .split('-')
      .map((word) => {
        if (word.toLowerCase() === 'ai') return 'AI'
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

  const categoryTitle = formatCategoryTitle(categorySlug)

  const categoryDescriptions = {
    'web-development': (
      <p className="max-w-full text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        I deliver high-performance, scalable web applications tailored to business needs. My focus is on creating seamless user experiences, robust backends, and responsive interfaces that perform perfectly across all devices.
      </p>
    ),
    'ai-data-analytics': (
      <div className="max-w-4xl space-y-4">
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Dive into data-driven insights and intelligent systems. This section features projects focused on machine learning models, predictive analytics, and insightful visualizations using Python, Pandas, and Tableau.
        </p>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          I help businesses uncover hidden patterns, optimize operations, and make informed decisions by turning raw data into actionable intelligence.
        </p>
      </div>
    ),
    'design-digital-marketing': (
      <div className="max-w-4xl space-y-4">
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Discover creative strategies and visual storytelling. Here you will find examples of brand identities, UI/UX designs, and targeted digital marketing campaigns designed to engage users and drive growth.
        </p>
      </div>
    ),
    'design-marketing': (
      <div className="max-w-4xl space-y-4">
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Discover creative strategies and visual storytelling. Here you will find examples of brand identities, UI/UX designs, and targeted digital marketing campaigns designed to engage users and drive growth.
        </p>
      </div>
    )
  }
  
  const description = categoryDescriptions[categorySlug] || (
    <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
      Here are some of my recent projects demonstrating my skills and experience in this domain.
    </p>
  )

  return (
    <main className="bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 min-h-screen pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <FiArrowLeft /> Back to Services
        </Link>

        {(!['web-development', 'ai-data-analytics', 'design-digital-marketing'].includes(categorySlug)) && (
          <>
            <SectionTitle title={`${categoryTitle} Projects`} subtitle="My Portfolio" />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 mb-4 w-full"
            >
              {description}
            </motion.div>
          </>
        )}

        {categorySlug === 'web-development' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <WebDevLayout />
          </motion.div>
        )}

        {categorySlug === 'ai-data-analytics' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <AIDataLayout />
          </motion.div>
        )}

        {categorySlug === 'design-digital-marketing' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <DesignMarketingLayout />
          </motion.div>
        )}

        <div className={['web-development', 'ai-data-analytics', 'design-digital-marketing'].includes(categorySlug) ? "mt-12" : "mt-16"}>
          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                      <FiArrowUpRight className="text-xl text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p className="mt-4 leading-relaxed text-sm text-slate-600 dark:text-slate-300 flex-grow">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center rounded-[30px] border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">No projects yet!</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                I'm uploading new {categoryTitle} projects very soon. Check back later!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  )
}
