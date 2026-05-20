import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/harshrmeshram', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/harshrmeshram/', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/harshr.meshram', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> 
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@harshr.meshram', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> 
  },
  { 
    name: 'Twitter', 
    url: 'https://x.com/harshr_meshram', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> 
  },
  { 
    name: 'Pinterest', 
    url: 'https://www.pinterest.com/harshrmeshram/', 
    className: 'text-slate-900 dark:text-slate-100 hover:opacity-80',
    icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="none" fill="currentColor" className="w-6 h-6"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.592.002 12.017.002z" /></svg> 
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const currentErrors = {}
    if (!formData.name.trim()) currentErrors.name = 'Name is required'
    if (!formData.email.trim()) currentErrors.email = 'Email is required'
    if (!formData.subject.trim()) currentErrors.subject = 'Subject is required'
    if (!formData.message.trim()) currentErrors.message = 'Message is required'
    return currentErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length) {
      setErrors(validation)
      setSuccess(false)
      return
    }

    // Construct email content
    const subjectLine = formData.subject === 'Others' ? 'General Inquiry' : `${formData.subject} Inquiry`
    const serviceText = formData.subject === 'Others' ? 'services' : `${formData.subject} service`
    
    const bodyText = `Hello Harsh,

I am interested in your ${serviceText}.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Looking forward to your response.`

    const mailtoUrl = `mailto:harshr.meshram@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`
    
    // Open in default mail client
    window.location.href = mailtoUrl

    setErrors({})
    setSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section className="bg-slate-50 px-6 py-0 dark:bg-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Contact" subtitle="Start a conversation" />
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col h-full"
          >
            <Card className="flex-grow bg-white dark:bg-slate-900 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Contact</p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Let’s Build Something Great Together.</h3>
                <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300 text-justify">
                  Feel free to reach out for job opportunities, collaborations, or tech discussions.
                  I look forward to connecting with professionals, recruiters, and teams who value creativity, innovation, and growth.
                  My goal is to grow as a developer while contributing positively to dynamic organizations and forward-thinking projects.
                  Connect with me on my social media platforms. 
                </p>
              </div>
              
              <div className="mt-12">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">Follow me on</p>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 transform hover:scale-110 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 ${social.className}`}
                        aria-label={social.name}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-[36px] border border-slate-200 bg-white p-8 shadow-soft transition dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-700 dark:text-slate-300">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-700"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 text-xs text-rose-500">{errors.name}</p>}
              </label>
              <label className="block text-sm text-slate-700 dark:text-slate-300">
                Email
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-700"
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-2 text-xs text-rose-500">{errors.email}</p>}
              </label>
            </div>

            <label className="block text-sm text-slate-700 dark:text-slate-300">
              Subject
              <div className="relative mt-3">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full appearance-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-slate-500 dark:focus:ring-slate-700 ${!formData.subject ? 'text-slate-700 dark:text-slate-300' : 'text-slate-950 dark:text-slate-100'}`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Others">Others</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500 dark:text-slate-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.subject && <p className="mt-2 text-xs text-rose-500">{errors.subject}</p>}
            </label>

            <label className="block text-sm text-slate-700 dark:text-slate-300">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-700"
                placeholder="Your message"
              />
              {errors.message && <p className="mt-2 text-xs text-rose-500">{errors.message}</p>}
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button as="button" type="submit" variant="primary">
                Send Message
              </Button>
              {success && <p className="text-sm text-emerald-600 dark:text-emerald-300">Message sent successfully. I will reach out soon.</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
