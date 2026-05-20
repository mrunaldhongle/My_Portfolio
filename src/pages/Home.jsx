import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import ReviewSection from '../components/ReviewSection'
import logoImage from "../assets/harshlogo.png";

export default function Home() {
    const navigate = useNavigate()

    const handleDomainClick = (targetId) => {
        navigate(`/services#${targetId}`)
    }
    return (
        <main className="bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-10 grid-pattern dark:bg-slate-950">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(8,145,178,0.12),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_28%)]" />

                <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr]">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <span className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-700 shadow-soft dark:bg-slate-900 dark:text-slate-200">
                            <span className="h-2 w-2 rounded-full bg-slate-950 dark:bg-cyan-400" />
                            AI & Data Science Portfolio
                        </span>

                        <div className="space-y-6">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                                Hello, I am
                            </p>

                            <h2 className="text-5xl font-semibold leading-tight sm:text-6xl">
                                Harsh Rahul Meshram
                            </h2>

                            <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg text-justify">
                                B.Tech student in Artificial Intelligence and Data Science with
                                strong expertise in Python, data analytics, and full-stack
                                development, along with experience in digital marketing and
                                design. I have contributed to multiple industry-level projects
                                and earned certifications across these domains.
                            </p>
                        </div>


                        {/* Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-slate-100 px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 transition hover:bg-slate-700 dark:hover:bg-slate-200 shadow-lg"
                            >
                                <FiMail className="w-4 h-4" />
                                Contact Info
                            </Link>

                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="h-full w-full rounded-[42px] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900">
                            <div className="h-full rounded-[28px] bg-slate-100 p-8 dark:bg-slate-950">
                                <div className="flex h-full flex-col items-center justify-center gap-6 text-center">

                                    <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-soft">
                                        <img
                                            src={logoImage}
                                            alt="Logo"
                                            className="h-full w-full object-cover "
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                                            Harshwardhana
                                        </p>

                                        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                                            DATA SCIENTIST | WEB DEV | DIGITAL MARKETER | DESIGNER
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills / Domains Section */}
            <section className="bg-slate-100 px-6 py-20 dark:bg-slate-900 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                            Expertise
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">
                            My Domains
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {[
                            {
                                title: 'Digital Marketing',
                                desc: 'Brand growth, SEO, and audience engagement strategies execution with proven track records.',
                                tag: 'Marketing',
                                targetId: 'design-digital-marketing'
                            },
                            {
                                title: 'Content & Script Writing',
                                desc: 'Creative technical writing and engaging scripts with business growth with proven track records.',
                                tag: 'Content',
                                targetId: 'design-digital-marketing'
                            },
                            {
                                title: 'Social Media Management',
                                desc: 'Managing content, engagement, and online presence with proven track records.',
                                tag: 'Social Media',
                                targetId: 'design-digital-marketing'
                            },
                            {
                                title: 'Full Stack Development',
                                desc: 'Responsive frontend and scalable backend applications .',
                                tag: 'Development',
                                targetId: 'web-development'
                            },
                            {
                                title: 'Data Analytics',
                                desc: 'Data visualization, dashboards, and business insights.',
                                tag: 'Analytics',
                                targetId: 'ai-data-analytics'
                            },
                            {
                                title: 'UI/UX',
                                desc: 'Clean modern interfaces with smooth user experience.',
                                tag: 'Design',
                                targetId: 'web-development'
                            },
                        ].map((item, index) => (
                            <Link to={`/services#${item.targetId}`} key={index} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="cursor-pointer rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950 h-full"
                                >
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-2xl font-semibold text-slate-950 transition-colors group-hover:text-yellow-500 dark:text-white">
                                            {item.title}
                                        </h3>

                                        <motion.div
                                            className="rounded-full border border-slate-300 p-2 text-slate-500 transition-all group-hover:border-yellow-400 group-hover:text-yellow-500 dark:border-slate-700 dark:text-slate-400 cursor-pointer"
                                            whileHover={{ scale: 1.2, rotate: 45 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            ↗
                                        </motion.div>
                                    </div>

                                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                                        {item.desc}
                                    </p>

                                    <div className="mt-8 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                        {item.tag}
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewSection />

        </main>
    )
}
