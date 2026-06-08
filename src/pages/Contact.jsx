import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const contactCards = [
    {
      platform: 'LinkedIn',
      linkText: 'linkedin.com/in/mrunal-dhongle',
      url: 'https://www.linkedin.com/in/mrunal-dhongle/',
      description: 'Professional networking and career updates',
      icon: <FaLinkedin className="w-8 h-8 text-slate-800 dark:text-white" />,
    },
    {
      platform: 'Email',
      linkText: 'dhonglemrunal@gmail.com',
      url: 'mailto:dhonglemrunal@gmail.com',
      description: 'For professional inquiries and opportunities',
      icon: <FaEnvelope className="w-8 h-8 text-slate-800 dark:text-white" />,
    },
    {
      platform: 'GitHub',
      linkText: 'github.com/mrunaldhongle',
      url: 'https://github.com/mrunaldhongle',
      description: 'Explore my projects and open-source contributions',
      icon: <FaGithub className="w-8 h-8 text-slate-800 dark:text-white" />,
    },
    {
      platform: 'Phone',
      linkText: '+91 9096527817',
      url: 'tel:+919096527817',
      description: 'Available for discussions and opportunities',
      icon: <FaPhone className="w-7 h-7 text-slate-800 dark:text-white" />,
    }
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Build email content
    const emailSubject = `New Inquiry - ${formData.subject}`
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nSubject:\n${formData.subject}\n\nMessage:\n${formData.message}`

    // Create mailto link
    const mailtoLink = `mailto:dhonglemrunal@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Open default mail app
    window.location.href = mailtoLink

    // Clear form after opening mail
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="bg-[#f7f5f1] px-6 py-10 dark:bg-[#26160f] sm:px-8 lg:px-10 min-h-[90vh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle title="Contact" subtitle="Get in touch" />
        
        <div className="mt-12 grid gap-12 lg:grid-cols-2 items-start">
          
          {/* LEFT SIDE: Social Contact Cards */}
          <div className="flex flex-col gap-6">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.platform}
                href={card.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-[2rem] border border-white/60 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#5d4334] dark:bg-[#3b261b] dark:hover:border-[#a67b5b] dark:hover:shadow-[0_8px_30px_rgba(111,78,55,0.15)]"
              >
                {/* Icon Box */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm transition-colors group-hover:bg-white dark:bg-[#4c3022] dark:group-hover:bg-[#5d4334]">
                  {card.icon}
                </div>
                
                {/* Card Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-[#6F4E37] dark:group-hover:text-[#a67b5b]">{card.platform}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#6F4E37] dark:text-[#a67b5b]">{card.linkText}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full rounded-[2.5rem] border border-white/60 bg-white/60 p-8 sm:p-10 shadow-sm backdrop-blur-md dark:border-[#5d4334] dark:bg-[#3b261b]"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white bg-white/50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 dark:border-[#4c3022] dark:bg-[#2f1f16] dark:text-slate-100 dark:focus:border-[#a67b5b] dark:focus:bg-[#3b261b] dark:focus:ring-[#a67b5b]/20"
                    placeholder="Your Name"
                  />
                </label>
                
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white bg-white/50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 dark:border-[#4c3022] dark:bg-[#2f1f16] dark:text-slate-100 dark:focus:border-[#a67b5b] dark:focus:bg-[#3b261b] dark:focus:ring-[#a67b5b]/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Subject
                <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-white bg-white/50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 dark:border-[#4c3022] dark:bg-[#2f1f16] dark:text-slate-100 dark:focus:border-[#a67b5b] dark:focus:bg-[#3b261b] dark:focus:ring-[#a67b5b]/20"
                    placeholder="Project Inquiry"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 w-full resize-none rounded-2xl border border-white bg-white/50 px-5 py-4 text-sm text-slate-900 outline-none transition-all focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100 dark:border-[#4c3022] dark:bg-[#2f1f16] dark:text-slate-100 dark:focus:border-[#a67b5b] dark:focus:bg-[#3b261b] dark:focus:ring-[#a67b5b]/20"
                  placeholder="How can I help you?"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-[#6F4E37] dark:hover:bg-[#7f5b45] dark:hover:shadow-[0_8px_20px_rgba(111,78,55,0.3)]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
