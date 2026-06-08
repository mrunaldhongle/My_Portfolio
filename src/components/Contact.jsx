import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Contacts</h2>
        <div className="mx-auto mb-16 h-1.5 w-24 rounded-full bg-[#6F4E37]" />

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-5xl text-gray-400 group-hover:text-[#e88ca6] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">E-mail</h3>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-gray-600 hover:text-[#e88ca6] transition-colors text-sm"
            >
              {portfolioData.contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-5xl text-gray-400 group-hover:text-[#e88ca6] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Telephone number</h3>
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="text-gray-600 hover:text-[#e88ca6] transition-colors text-sm"
            >
              {portfolioData.contact.phone}
            </a>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FaLinkedin className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Social media</h3>
            <div className="flex justify-center gap-4">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-[#e88ca6] hover:text-white transition-all"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-[#e88ca6] hover:text-white transition-all"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
