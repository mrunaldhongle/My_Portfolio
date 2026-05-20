import blogImg from '../assets/blogcover.jpg';
import memoryImg from '../assets/Memoriescover.jpg';
import achievementImg from '../assets/archivementcover.jpeg';

export const navLinks = [
  { label: 'Harsh', target: 'home' },
  { label: 'Services', target: 'services' },
  { label: 'About Me', target: 'about' },
  { label: 'My Gallery', target: 'my-gallery' },
  { label: 'Contact', target: 'contact' },
]

export const heroData = {
  title: 'Harsh Rahul Meshram',
  description:
    'B.Tech student in Artificial Intelligence and Data Science with strong expertise in Python, data analytics, and full-stack development, along with experience in digital marketing and design. I have contributed to multiple industry-level projects and earned certifications across these domains.',
  roles: [
    'B.Tech Student in Artificial Intelligence and Data Science',
    'Full Stack Developer',
    'AI Enthusiast',
    'Data Analytics Learner',
  ],
  primaryAction: { label: 'Download Resume', href: '#contact' },
  secondaryAction: { label: 'Contact Me', href: '#contact' },
}

export const services = [
  {
    title: 'Web Development',
    description:
      'Professional development services for responsive websites and modern web applications using full-stack tools and industry best practices.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI & Data Analytics',
    description:
      'AI-driven analytics, predictive insights, and automation solutions built with Python, data science libraries, and visualization tools.',
    tech: ['Python', 'Pandas', 'NumPy', 'Tableau', 'Power BI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Design & Digital Marketing',
    description:
      'Creative digital marketing and design services for brands, combining SEO, UX/UI, and visual storytelling across modern platforms.',
    tech: ['SEO', 'Figma', 'Canva', 'Adobe Photoshop', 'Advanced Excel'],
    github: '#',
    live: '#',
  },
]

export const education = [
  {
    title: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Current Degree Program',
    period: '2023 - Present',
  },
  {
    title: 'High School Completed',
    institution: 'Senior Secondary School',
    period: '2021 - 2023',
  },
]

export const skills = [
  'C',
  'Python',
  'JavaScript',
  'SQL',
  'R',
  'HTML5',
  'CSS3',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MERN Stack',
  'Pandas',
  'NumPy',
  'Tableau',
  'Power BI',
  'Advanced Excel',
  'Docker',
  'Firebase',
  'Git',
  'GitHub',
  'Postman',
  'SEO',
  'Figma',
  'Canva',
  'Adobe Photoshop',
]

export const galleryCards = [
  {
    id: 'blogs',
    title: 'Blogs',
    image: blogImg,
    subtitle: 'Stories & insights on AI, development and analytics.',
    feature: 'Industry articles and technical perspectives crafted for professionals.',
    details: [
      { id: 1, title: 'AI Trends', description: 'Exploring the latest advancements in artificial intelligence and machine learning applications.', expandedContent: 'In this detailed discussion, we cover the rapid evolution of large language models, their implications for modern businesses, and the ethical considerations surrounding artificial general intelligence. The future points towards seamless integration of AI into everyday workflows.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
      { id: 2, title: 'Web Dev Best Practices', description: 'Building scalable, accessible, and responsive modern web applications.', expandedContent: 'Focusing on clean architecture, performance optimization, and accessibility, this article highlights the key practices required to build web apps that not only look great but function flawlessly across all devices and network conditions.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
      { id: 3, title: 'Data Analytics', description: 'Extracting meaningful insights and visualizing complex datasets effectively.', expandedContent: 'Learn how to transform raw data into actionable intelligence. We explore data cleaning techniques, statistical analysis, and interactive dashboard creation using tools like Tableau and Power BI to drive data-informed decision making.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
      { id: 4, title: 'Digital Marketing', description: 'Strategies for growing online presence, engagement, and building brand identity.', expandedContent: 'Discover the core pillars of digital marketing, from SEO optimization and content strategy to social media campaigns and conversion rate optimization. Building a memorable brand in the digital age requires both creativity and analytical precision.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'memories',
    title: 'Memories',
    image: memoryImg,
    subtitle: 'Key milestones and career moments from academic and project life.',
    feature: 'Visual highlights from workshops, competitions, and hands-on teamwork.',
    details: [
      { id: 1, title: 'Hackathon 2023', description: 'Winning the first prize in a national level coding competition.', expandedContent: 'Competing against hundreds of teams, we developed a real-time smart city management prototype. This experience taught me the value of rapid prototyping, teamwork under pressure, and effective project pitching.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
      { id: 2, title: 'Tech Conference', description: 'Presenting my research paper on AI ethics and future impacts.', expandedContent: 'Speaking in front of industry experts was an incredible opportunity. I shared insights on how we can build AI systems that are transparent, fair, and aligned with human values, sparking valuable discussions.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
      { id: 3, title: 'Workshop Seminar', description: 'Conducting a comprehensive workshop on modern web technologies.', expandedContent: 'I had the privilege of teaching over 50 students the fundamentals of React and modern JavaScript. Breaking down complex concepts into digestible pieces was both challenging and incredibly rewarding.', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800' },
      { id: 4, title: 'Team Outing', description: 'Celebrating project success and milestones with the development team.', expandedContent: 'After months of intense development on our flagship product, we took time to celebrate our success. These moments outside of work are what build strong, lasting bonds among team members.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'achievements',
    title: 'Achievements',
    image: achievementImg,
    subtitle: 'Recognitions, certifications, and successful project outcomes.',
    feature: 'A showcase of growth across technology, data, and digital marketing.',
    details: [
      { id: 1, title: 'AWS Certified', description: 'Achieved AWS Solutions Architect certification, demonstrating cloud expertise.', expandedContent: 'This certification validates my ability to design distributed systems on AWS, ensuring high availability, cost-efficiency, and robust security for enterprise-level applications.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
      { id: 2, title: 'Best Project Award', description: 'Recognized for building an innovative and impactful healthcare solution.', expandedContent: 'Our team developed an AI-powered symptom analysis tool that assists rural health workers. The project was praised for its user-centric design and potential to improve healthcare access in underserved areas.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800' },
      { id: 3, title: 'Open Source Contributor', description: 'Merged significant pull requests to popular React and Node libraries.', expandedContent: 'Giving back to the community is important to me. I have contributed bug fixes and feature enhancements to several popular open-source projects, improving performance for thousands of developers worldwide.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
      { id: 4, title: 'Top Performer', description: 'Awarded top performer in a comprehensive data science bootcamp.', expandedContent: 'Throughout the 12-week intensive program, I consistently scored the highest in predictive modeling assessments and won the final capstone project competition among a cohort of 50 students.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
    ]
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'Email', href: '#', icon: 'mail' },
]
