import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import { heroData, featuredProjects, contactInfo, aboutPreview } from '../data/portfolioData'
import profileImage from '../assets/Mrunal_pic.jpg'

export default function Home() {
    return (
        <main className="bg-[#f0efec] text-slate-950 transition-colors duration-300 dark:bg-[#26160f] dark:text-slate-100">
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f7f5f1] px-6 pt-10 pb-20 sm:px-8 lg:px-10 dark:bg-[#2f1f16]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(111,78,55,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(24,23,21,0.08),_transparent_20%)] pointer-events-none" />
                
                <div className="relative mx-auto w-full max-w-7xl">
                    <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT SIDE: Introduction */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8 w-full"
                        >
                            <div className="space-y-4">
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-sm font-medium uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400"
                                >
                                    HELLO, I AM
                                </motion.p>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-white"
                                >
                                    Mrunal Dhongle
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-xl font-medium text-slate-700 dark:text-[#a67b5b]"
                                >
                                    Software Developer <span className="text-slate-400 dark:text-slate-600">|</span> Full Stack Developer
                                </motion.p>
                            </div>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify"
                            >
                            Computer Science undergraduate skilled in full-stack web development, software engineering, and problem-solving. Experienced 
in building responsive web applications using React.js, Node.js, Express.js, and MongoDB. Familiar with REST APIs, 
authentication systems, debugging, testing, and deployment workflows. Seeking opportunities as a Software Engineer or Full
Stack Developer. 
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-col gap-4 sm:flex-row pt-4"
                            >
                                <Link
                                    to="/about"
                                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] dark:bg-[#6F4E37] dark:hover:bg-[#7f5b45] dark:hover:shadow-[0_0_20px_rgba(111,78,55,0.4)]"
                                >
                                    <span className="relative z-10">Who I Am</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:shadow-md dark:border-[#5d4334] dark:bg-[#3b261b] dark:text-slate-100 dark:hover:border-[#6F4E37] dark:hover:bg-[#4c3022]"
                                >
                                    <span className="relative z-10">Contact Me</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT SIDE: Profile Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="w-full max-w-md mx-auto lg:ml-auto mt-8 lg:mt-0"
                        >
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-[#3c291f]/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/5 dark:to-transparent pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Profile Image with Glow */}
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-2 rounded-full bg-slate-300/50 blur-lg dark:bg-[#6F4E37]/60 opacity-80 z-0"></div>
                                        <div className="relative z-10 h-[220px] w-[220px] overflow-hidden rounded-full border-[3px] border-white/90 dark:border-white/10 shadow-lg bg-slate-100 dark:bg-[#2f1f16] backdrop-blur-sm flex items-center justify-center">
                                            <img 
                                                src={profileImage} 
                                                alt="Mrunal Dhongle" 
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <h2 className="relative z-20 text-2xl font-bold text-slate-900 dark:text-white mb-1 no-underline">Mrunal Dhongle</h2>
                                    <p className="text-sm font-semibold text-slate-600 dark:text-[#a67b5b] mb-4 uppercase tracking-wider">
                                        Software Developer & Web Designer
                                    </p>
                                    
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 max-w-[280px] leading-relaxed text-center">
                                        Passionate about crafting elegant web solutions. Always eager to learn in the world of technology.
                                    </p>

                                    {/* Social Icons */}
                                    <div className="flex gap-4">
                                        <a href={contactInfo.github} target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md dark:bg-[#2f1f16]/70 dark:hover:bg-[#4c3022]">
                                            <FaGithub className="text-lg text-slate-700 transition-colors group-hover:text-slate-950 dark:text-slate-300 dark:group-hover:text-white" />
                                        </a>
                                        <a href={contactInfo.linkedIn} target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0077b5] hover:shadow-md dark:bg-[#2f1f16]/70 dark:hover:bg-[#0077b5]">
                                            <FaLinkedin className="text-lg text-slate-700 transition-colors group-hover:text-white dark:text-slate-300 dark:group-hover:text-white" />
                                        </a>
                                        <a href={`mailto:${contactInfo.email}`} className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#ea4335] hover:shadow-md dark:bg-[#2f1f16]/70 dark:hover:bg-[#ea4335]">
                                            <FaEnvelope className="text-lg text-slate-700 transition-colors group-hover:text-white dark:text-slate-300 dark:group-hover:text-white" />
                                        </a>
                                        <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1306C] hover:shadow-md dark:bg-[#2f1f16]/70 dark:hover:bg-[#E1306C]">
                                            <FaInstagram className="text-lg text-slate-700 transition-colors group-hover:text-white dark:text-slate-300 dark:group-hover:text-white" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Removed About Section as requested */}

            <section className="bg-[#e7e4df] px-6 py-10 sm:px-8 lg:px-10 dark:bg-[#26160f]">
                <div className="mx-auto max-w-7xl">
                    <SectionTitle title="Featured Projects" subtitle="Selected work" />
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-2 hover:shadow-xl dark:border-[#5d4334] dark:bg-[#3b271d]"
                            >
                                <div className="h-56 overflow-hidden bg-slate-100">
                                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="space-y-4 p-6">
                                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{project.tech.join(' • ')}</p>
                                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tag) => (
                                            <span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-[#4e3d31] dark:text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 dark:border-[#4e3d31] dark:bg-[#2f1f16]">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-[#4e3d31] dark:text-slate-100 dark:hover:bg-[#3d2a22]">
                                        GitHub
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#6F4E37] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7f5b45]">
                                        Live Demo
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
