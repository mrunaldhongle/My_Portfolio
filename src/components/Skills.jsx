import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const allSkills = portfolioData.skills;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">My skills</h2>
        <div className="mx-auto mb-16 h-1.5 w-24 rounded-full bg-[#6F4E37]" />

        {/* Skills Grid - Circular Badges */}
        <div className="flex flex-wrap justify-center gap-8">
          {allSkills.map((skill) => (
            <div
              key={skill}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e88ca6] to-[#d67a94] flex items-center justify-center text-white font-semibold text-center text-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
