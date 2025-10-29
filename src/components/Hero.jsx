// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import vid from "/assets/backvi.mp4";

const Hero = () => {
  return (
    <section className="relative bg-slate-50 text-gray-900 overflow-hidden min-h-[85vh] flex items-center justify-center py-24">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/gif,AAAA"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 text-center max-w-5xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-snug">
          Master Your Future with{" "}
          <span className="text-[#00FFCC] relative inline-block">
            Expert Guidance
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[3px] bg-[#00FFCC]"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Viraam Vaani is a trusted platform where learning goes beyond
          textbooks. With expert teachers, personal care, and innovative
          methods, we nurture young minds — helping students excel in studies
          and grow with confidence for life.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            to="/services"
            className="px-8 py-3 bg-[#043D3B] text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#043D3B] transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Explore Courses
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 hover:bg-[#043D3B] hover:text-white font-semibold rounded-lg shadow-md bg-white text-[#043D3B] transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"

          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-2 sm:px-0">
          {[
            { title: "95%", subtitle: "Success Rate", desc: "of our students achieve their goals" },
            { title: "500+", subtitle: "Students", desc: "trust us for their learning journey" },
            { title: "5+", subtitle: "Years Experience", desc: "in nurturing young minds" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#043D3B] mb-2">{stat.title}</div>
              <div className="text-lg font-medium text-gray-700">{stat.subtitle}</div>
              <p className="text-sm text-gray-500 mt-2">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
