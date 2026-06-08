import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">About me</h2>
        <div className="mx-auto mb-12 h-1.5 w-24 rounded-full bg-[#6F4E37]" />

        {/* About Content */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {portfolioData.about.intro}
          </p>
        </div>
      </div>
    </section>
  );
}
