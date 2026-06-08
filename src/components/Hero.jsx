import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/1200x/9c/bb/45/9cbb450437b864beb3b76c0e365f7e66.jpg")',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Hi there! My name is Mrunal Dhongle<br />
          and I'm a <span className="text-[#e88ca6]">front-end developer</span>
        </h1>

        <button
          onClick={() => window.open('/Mrunal-Dhongle-Resume.pdf', '_blank')}
          className="inline-block px-8 py-4 bg-[#e88ca6] hover:bg-[#d67a94] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}
