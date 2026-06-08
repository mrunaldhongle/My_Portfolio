import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Import project images
import portfolioImg from '../assets/Projects/portfolio.png';
import jobportalImg from '../assets/Projects/job_portal.png';
import careerGuidanceImg from '../assets/Projects/career-guidance.jpeg';

// Map image imports
const imageMap = {
  portfolio: portfolioImg,
  jobportal: jobportalImg,
  careerGuidance: careerGuidanceImg,
};

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Explore my recent projects and creations
          </p>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-[#6F4E37]" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image || imageMap[project.imageKey]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8">
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-[#e88ca6] bg-opacity-20 text-[#e88ca6] dark:text-[#e88ca6] rounded-full text-xs md:text-sm font-semibold border border-[#e88ca6] border-opacity-40"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#e88ca6] text-white rounded-lg font-semibold hover:bg-[#d67a94] transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="hidden sm:inline">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/mrunaldhongle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#e88ca6] hover:bg-[#d67a94] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGithub size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
