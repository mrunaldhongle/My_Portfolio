import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaFigma,
    FaGitAlt,
    FaDatabase,
    FaChartBar,
    FaChartLine,
    FaCloud,
    FaBolt,
    FaPaintBrush,
    FaServer,
    FaBriefcase,
    FaCheckCircle,
    FaChevronRight,
    FaPaperPlane,
    FaGlobe,
} from 'react-icons/fa'
import { SiNumpy, SiPandas, SiCanva, SiJavascript } from 'react-icons/si'
import SectionTitle from '../components/SectionTitle'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import ExtraCurricular from '../components/ExtraCurricular'
import heroImage from '../assets/harshphoto.jpeg'
import collegeLogo from '../assets/new-logo-1-copy.png'
import juniorcollegeLogo from '../assets/juniorcoll.png'
import highschoolLogo from '../assets/vinayalaya.png'
const skillGroups = [
    {
        title: 'Web Development',
        description: 'Modern production-ready web applications, APIs, and UI systems.',
        skills: [
            { name: 'React', icon: <FaReact className="text-5xl" />, color: 'from-cyan-500 to-blue-500' },
            { name: 'Node.js', icon: <FaNodeJs className="text-5xl" />, color: 'from-emerald-500 to-lime-400' },
            { name: 'Express', icon: <FaServer className="text-5xl" />, color: 'from-slate-500 to-slate-700' },
            { name: 'MongoDB', icon: <FaDatabase className="text-5xl" />, color: 'from-emerald-400 to-cyan-400' },
            { name: 'Tailwind CSS', icon: <FaBolt className="text-5xl" />, color: 'from-cyan-500 to-violet-500' },
            { name: 'Firebase', icon: <FaCloud className="text-5xl" />, color: 'from-orange-400 to-yellow-300' },
            { name: 'JavaScript', icon: <SiJavascript className="text-5xl" />, color: 'from-yellow-400 to-amber-400' },
            { name: 'GitHub', icon: <FaGitAlt className="text-5xl" />, color: 'from-slate-600 to-slate-800' },
            { name: 'REST APIs', icon: <FaPaperPlane className="text-5xl" />, color: 'from-cyan-500 to-blue-500' },
            { name: 'JWT Auth', icon: <FaCheckCircle className="text-5xl" />, color: 'from-emerald-400 to-teal-400' },
        ],
    },
    {
        title: 'Data Analytics & AI',
        description: 'Insightful analytics, machine learning pipelines, and intelligent systems.',
        skills: [
            { name: 'Python', icon: <FaPython className="text-5xl" />, color: 'from-sky-500 to-blue-500' },
            { name: 'Pandas', icon: <SiPandas className="text-5xl" />, color: 'from-slate-400 to-slate-600' },
            { name: 'NumPy', icon: <SiNumpy className="text-5xl" />, color: 'from-cyan-400 to-slate-400' },
            { name: 'Power BI', icon: <FaChartBar className="text-5xl" />, color: 'from-yellow-400 to-orange-400' },
            { name: 'Tableau', icon: <FaChartLine className="text-5xl" />, color: 'from-blue-500 to-indigo-500' },
            { name: 'SQL', icon: <FaDatabase className="text-5xl" />, color: 'from-indigo-500 to-slate-500' },
        ],
    },
    {
        title: 'Design & Digital Marketing',
        description: 'Brand storytelling, polished interfaces, and growth-focused campaigns.',
        skills: [
            { name: 'Figma', icon: <FaFigma className="text-5xl" />, color: 'from-fuchsia-500 to-pink-500' },
            { name: 'Canva', icon: <SiCanva className="text-5xl" />, color: 'from-cyan-400 to-violet-500' },
            { name: 'Photoshop', icon: <FaPaintBrush className="text-5xl" />, color: 'from-blue-500 to-slate-500' },
            { name: 'UI/UX', icon: <FaGlobe className="text-5xl" />, color: 'from-cyan-500 to-slate-500' },
            { name: 'SEO', icon: <FaBolt className="text-5xl" />, color: 'from-emerald-400 to-cyan-400' },
        ],
    },
]

const educationTimeline = [
    {
        title: 'B.Tech in Artificial Intelligence & Data Science',
        institution: 'SB Jain Institute of Technology, Nagpur',
        duration: '2022 - 2026',
        location: 'Nagpur, India',
        direction: 'left',
        logo: collegeLogo,
        logoAlt: 'University logo',
    },
    {
        title: 'Higher Secondary Education',
        institution: 'Dada Ramchand Bakhru Sindhu Mahavidyalaya',
        duration: '2021 - 2022',
        location: 'Nagpur, India',
        direction: 'right',
        logo: juniorcollegeLogo,
        logoAlt: 'Board logo',
    },
    {
        title: 'Secondary School Certificate',
        institution: 'Vinayalaya High School',
        duration: '2020',
        location: 'Nagpur, India',
        direction: 'left',
        logo: highschoolLogo,
        logoAlt: 'School logo',
    },
]

const experienceList = [
    {
        company: 'Aurora Labs',
        role: 'Full Stack Developer Intern',
        duration: 'Jan 2025 - Present',
        description:
            'Building responsive SaaS dashboards, automation pipelines, and data-driven web experiences using React, Node.js, and cloud APIs.',
    },
    {
        company: 'Nexa Analytics',
        role: 'AI Research Intern',
        duration: 'Aug 2024 - Dec 2024',
        description:
            'Delivered predictive analytics models and visualization solutions for performance monitoring, business intelligence, and operational insights.',
    },
]

const certifications = [
    {
        title: 'AI & Machine Learning Professional',
        organization: 'Coursera',
        summary: 'Completed advanced machine learning and data science specialization.',
        badge: 'AI/ML',
    },
    {
        title: 'Full Stack Web Developer',
        organization: 'Udemy',
        summary: 'Built production-ready web apps using React, Node, and MongoDB.',
        badge: 'MERN',
    },
    {
        title: 'Power BI Data Analyst',
        organization: 'Microsoft',
        summary: 'Designed analytics dashboards and dashboards for business intelligence.',
        badge: 'BI',
    },
    {
        title: 'React Specialist',
        organization: 'Frontend Masters',
        summary: 'Mastered advanced React patterns, hooks, and state management techniques.',
        badge: 'REACT',
    },
    {
        title: 'Database Design Expert',
        organization: 'LinkedIn Learning',
        summary: 'Proficient in relational and non-relational database design and optimization.',
        badge: 'DB',
    },
]

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function About() {
    const [activeCert, setActiveCert] = useState(null)

    return (
        <div className="bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-slate-100 via-white to-violet-100 opacity-80 blur-3xl dark:from-slate-800 dark:via-slate-950 dark:to-violet-900 dark:opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6 py-0 sm:px-8 lg:px-10">
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sectionVariants}
                        transition={{ duration: 0.8 }}
                        className="w-full rounded-[40px] bg-[#f5f5f7] dark:bg-slate-900/40 p-2 shadow-sm border border-slate-100 dark:border-slate-800/60 relative overflow-hidden"
                    >
                        {/* Light purple accent glow for parent */}
                        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl dark:bg-white/10 pointer-events-none" />
                        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl dark:bg-white/10 pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-2 sm:gap-2 relative z-10">
                            {/* Left Card */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex h-full flex-col justify-start rounded-[36px] border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/90 sm:p-12 lg:p-16 transition-all"
                            >
                                <div className="mb-8 flex">
                                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                                        ABOUT ME
                                    </span>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-4xl font-heading font-bold tracking-tight text-slate-950 dark:text-slate-100 sm:text-5xl leading-[1.1]">
                                        Harsh Rahul Meshram
                                    </h3>
                                    <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl pt-2 text-justify">
                                        B.Tech student specializing in AI & Data Science with skills in Python, full-stack development, and data analytics. Passionate about building innovative tech solutions, solving real-world problems, and creating impactful projects through creativity, technology, and continuous learning. Skilled in developing user-focused applications, collaborating with teams, and adapting quickly to new technologies. Enthusiastic about AI-driven innovation, digital experiences, and building solutions that make a meaningful real-world impact.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                whileHover={{ scale: 1.01 }}
                                className="group relative flex h-full items-center justify-center overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/90 transition-all min-h-[400px] lg:min-h-full"
                            >
                                {/* Subtle purple gradient glow inside right card */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white-900/20" />
                                <div className="absolute bottom-1/4 h-32 w-32 rounded-full bg-white-400/20 blur-2xl transition-all duration-500 group-hover:bg-white-400/30 group-hover:scale-150 dark:bg-white-600/20" />

                                <motion.img
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    src={heroImage}
    alt="Visual representation"
    className="relative z-10 w-full max-w-[85%] rounded-3xl object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05] drop-shadow-xl"
/>
                            </motion.div>
                        </div>
                    </motion.section>

                    <section className="mt-24">
                        <SectionTitle title="Skills" subtitle="What I specialize in" />
                        <div className="space-y-10">
                            {skillGroups.map((group, index) => (
                                <motion.div
                                    key={group.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900"
                                >
                                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{group.title}</p>
                                            <h3 className="mt-4 text-3xl font-heading font-semibold text-slate-950 dark:text-slate-100">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{group.description}</p>
                                    </div>
                                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
                                        {group.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ y: -8, scale: 1.01 }}
                                                transition={{ duration: 0.35 }}
                                                className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-500 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:border-slate-500"
                                            >
                                                <div className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${skill.color} text-white shadow-lg text-5xl`}>
                                                    {skill.icon}
                                                </div>
                                                <p className="text-base font-semibold text-slate-950 dark:text-slate-100">{skill.name}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-24">
                        <SectionTitle
                            title="Education"
                            subtitle="Learning path & achievements"
                        />

                        <div className="space-y-8">
                            {educationTimeline.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: item.direction === "left" ? -40 : 40,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                                    className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 lg:flex-row flex flex-col gap-6 lg:items-center lg:justify-between"
                                >
                                    {/* Left Side */}
                                    <div className="flex items-center gap-5">
                                        <div className="flex h-30 w-30 items-center justify-center rounded-3xl bg-slate-100 shadow-sm dark:bg-slate-800">
                                            <img
                                                src={item.logo}
                                                alt={item.logoAlt}
                                                className="h-14 w-14 object-contain"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                                                {item.duration}
                                            </p>

                                            <h4 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-100">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                {item.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                        <p className="font-medium text-slate-950 dark:text-slate-100">
                                            {item.location}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <Experience />

                    {/* Certifications Section */}
                    <Certifications />

                    {/* Extra Curricular Section */}
                    <ExtraCurricular />
                </div>
            </div>
        </div>
    )
}

