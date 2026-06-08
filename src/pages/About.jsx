import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaServer, FaKey, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCode, FaCss3Alt, FaJava, FaChartBar, FaCertificate, FaTimes, FaUser } from 'react-icons/fa'
import { SiReact, SiHtml5, SiJavascript, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiCplusplus, SiGit, SiGithub, SiPostman } from 'react-icons/si'
import { aboutDetails, skillSections } from '../data/portfolioData'

const AboutSectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    {subtitle && (
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
    )}
    <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
      {title}
    </h2>
    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#6F4E37] dark:bg-[#a67b5b]"></div>
  </div>
)

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const getSkillIcon = (skillName) => {
  const icons = {
    'React.js': <SiReact className="text-[#61DAFB]" />,
    'HTML5': <SiHtml5 className="text-[#E34F26]" />,
    'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Bootstrap': <SiBootstrap className="text-[#7952B3]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Express.js': <SiExpress className="text-slate-500 dark:text-slate-300" />,
    'REST APIs': <FaServer className="text-emerald-500" />,
    'JWT Authentication': <FaKey className="text-amber-500" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'Python': <SiPython className="text-[#3776AB]" />,
    'Java': <FaJava className="text-[#007396]" />,
    'C++': <SiCplusplus className="text-[#00599C]" />,
    'Git': <SiGit className="text-[#F05032]" />,
    'GitHub': <SiGithub className="text-slate-800 dark:text-white" />,
    'VS Code': <FaCode className="text-[#007ACC]" />,
    'Postman': <SiPostman className="text-[#FF6C37]" />,
    'Power BI': <FaChartBar className="text-[#F2C811]" />
  }
  return icons[skillName] || <FaCode className="text-slate-500" />
}

export default function About() {
  const carouselRef = useRef(null)
  const [selectedCert, setSelectedCert] = useState(null)
  
  const allSkills = Array.from(new Set(skillSections.flatMap(section => section.skills)))

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-[#f0efec] text-slate-950 transition-colors duration-300 dark:bg-[#25150f] dark:text-slate-100 pb-20">
      
      {/* ABOUT ME SECTION */}
      <section className="px-6 pt-16 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <AboutSectionTitle title="About Me" subtitle="Who I Am" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10 px-4"
          >
            <h3 className="mb-8 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Hi, I'm Mrunal Dhongle
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              {aboutDetails.aboutMe.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACADEMIC & PROFESSIONAL JOURNEY SECTION */}
      <section className="relative overflow-hidden px-6 pt-12 pb-16 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(111,78,55,0.2),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(37,19,11,0.12),_transparent_20%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <AboutSectionTitle title="Academic & Professional Journey" subtitle="Education & Experience" />
          
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-16">
            {aboutDetails.summary}
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            
            {/* EDUCATION TIMELINE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6F4E37] text-white text-xl shadow-lg">
                  <FaGraduationCap />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
              
              <div className="ml-6 border-l-2 border-slate-200 dark:border-[#4f3a2b] pl-8 relative space-y-10">
                {aboutDetails.education.map((item, index) => (
                  <div key={index} className="relative group">
                    <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0efec] dark:bg-[#25150f]">
                      <span className="h-3 w-3 rounded-full bg-[#6F4E37] transition-transform duration-300 group-hover:scale-150" />
                    </span>
                    <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-[#3d291e]/60">
                      <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-[#2f1f16] dark:text-[#a67b5b] mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h4>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EXPERIENCE TIMELINE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6F4E37] text-white text-xl shadow-lg">
                  <FaBriefcase />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
              </div>
              
              <div className="ml-6 border-l-2 border-slate-200 dark:border-[#4f3a2b] pl-8 relative space-y-10">
                {aboutDetails.experience.map((item, index) => (
                  <div key={index} className="relative group">
                    <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f0efec] dark:bg-[#25150f]">
                      <span className="h-3 w-3 rounded-full bg-[#6F4E37] transition-transform duration-300 group-hover:scale-150" />
                    </span>
                    <div className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/5 dark:bg-[#3d291e]/60">
                      <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-[#2f1f16] dark:text-[#a67b5b] mb-3">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.role}</h4>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & TOOLS SECTION */}
      <section className="bg-[#e7e4df]/50 px-6 py-10 sm:px-8 lg:px-10 dark:bg-[#2a1a12]">
        <div className="mx-auto max-w-7xl">
          <AboutSectionTitle title="Skills" subtitle="My Technical Skills" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-soft backdrop-blur-md dark:border-white/5 dark:bg-[#3d291e]/40 mt-10"
          >
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
              {allSkills.map((skill) => (
                <div key={skill} className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/60 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lg dark:bg-[#2f1f16]/60 dark:hover:bg-[#3a261b]">
                  <div className="text-4xl opacity-90 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-center text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL CERTIFICATIONS SECTION */}
      <section className="px-6 py-10 sm:px-8 lg:px-10 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-center gap-6 relative">
            <div className="text-center">
              <AboutSectionTitle title="Professional Certifications" subtitle="Certifications" />
            </div>
            <div className="flex gap-3 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
              <button 
                onClick={scrollLeft}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-[#4f3a2b] dark:bg-[#3d291e] dark:text-slate-300 dark:hover:bg-[#4c3022] dark:hover:text-white"
                aria-label="Scroll Left"
              >
                <FaChevronLeft className="text-sm sm:text-base" />
              </button>
              <button 
                onClick={scrollRight}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-[#4f3a2b] dark:bg-[#3d291e] dark:text-slate-300 dark:hover:bg-[#4c3022] dark:hover:text-white"
                aria-label="Scroll Right"
              >
                <FaChevronRight className="text-sm sm:text-base" />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-8 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {aboutDetails.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-[450px] min-w-[450px] h-[520px] snap-center shrink-0 overflow-hidden rounded-[20px] border border-slate-200/60 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:border-white/5 dark:bg-[#1f110c] flex flex-col"
              >
                {/* Image Section: Fixed 260px Height */}
                <div className="relative h-[260px] w-full overflow-hidden bg-slate-100 dark:bg-black/40 border-b border-slate-100 dark:border-white/5">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.title}
                    </h3>
                    <p className="text-base font-medium text-slate-500 dark:text-slate-400 truncate" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.organization}
                    </p>
                  </div>
                  
                  {/* Full Width Button */}
                  <div className="mt-6">
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#25150f] px-4 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#25150f] dark:bg-white dark:text-[#0A192F] dark:hover:bg-slate-200"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl dark:bg-[#25150f]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80"
              >
                <FaTimes />
              </button>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
  )
}
