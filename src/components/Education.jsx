import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
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
    <section
      id="education"
      className="py-20 bg-[#f5f5f5]"
    >
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
            Education
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            My academic journey and learning path
          </p>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-[#6F4E37]" />
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-1 lg:grid-cols-1 gap-8"
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Top accent bar */}
                <div className="h-1 bg-[#e88ca6]" />

                <div className="p-8 md:p-10">
                  {/* Header with Icon and Duration */}
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="bg-[#e88ca6] bg-opacity-20 p-4 rounded-xl flex-shrink-0"
                      >
                        <FaGraduationCap className="text-2xl text-[#e88ca6]" />
                      </motion.div>

                      {/* Main Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-[#e88ca6] font-semibold text-lg mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Grade Badge */}
                    {edu.grade && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#e88ca6] bg-opacity-20 px-4 py-2 rounded-lg text-center flex-shrink-0"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <FaStar className="text-[#e88ca6] text-sm" />
                        </div>
                        <p className="text-[#e88ca6] font-bold text-sm">
                          {edu.grade}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-700 mb-6 text-sm md:text-base">
                    <FaCalendarAlt className="text-[#e88ca6]" />
                    <span>{edu.duration}</span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {edu.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                          >
                            <span className="text-[#e88ca6] mt-1.5">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Activities/Skills */}
                  {edu.activities && (
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="font-semibold">Coursework: </span>
                        {edu.activities}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom gradient accent */}
                <div className="h-1 bg-[#e88ca6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
