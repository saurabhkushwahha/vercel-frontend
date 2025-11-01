// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Amjad from "/assets/amja.jpg";
import found from "/assets/ceo.jpg";
import Spons from "/assets/mam.jpeg";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaBell,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaUsers,
  FaBrain,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "MD Adil",
    role: "Founder & CEO |Viraam Vaani|",
    image: found,
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Jaismin Ara",
    role: "Sponsor Team",
    image: Spons,
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Amjad Ansari",
    role: "Developer",
    image: Amjad,
    social: {
      linkedin: "https://www.linkedin.com/in/amjad-ansari31",
      twitter: "#",
      github: "https://github.com/amjadkhan11",
    },
  },
];

// Core Values data
const coreValues = [
  {
    icon: <FaHeart className="text-3xl text-green-700" />,
    title: "Passion",
    desc: "We teach with fire, commitment, and love for growth — inspiring every student to find purpose in learning.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-red-600" />,
    title: "Innovation",
    desc: "We challenge old methods and create new ways to learn, lead, and live with clarity and confidence.",
  },
  {
    icon: <FaRocket className="text-3xl text-orange-500" />,
    title: "Excellence",
    desc: "We strive for perfection in every detail — from teaching to testing, and from thoughts to transformation.",
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-500" />,
    title: "Collaboration",
    desc: "We believe success is not individual — it’s collective. Together, we grow stronger, wiser, and unstoppable.",
  },
  {
    icon: <FaUsers className="text-3xl text-purple-500" />,
    title: "Community",
    desc: "Viraam Vaani is a family — a safe space where minds learn, hearts connect, and dreams take shape.",
  },
  {
    icon: <FaBrain className="text-3xl text-teal-500" />,
    title: "Creativity",
    desc: "We encourage imagination — because true intelligence blooms when ideas flow freely and fearlessly.",
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden bg-white border-none shadow-xl">
      <Hero />

      {/* Notification Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex flex-col justify-center items-center text-center max-w-md w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            📅 Get Your Test Schedule Update
          </h1>

          <Link
            to="/show-schedule"
            className="relative flex items-center gap-2 sm:gap-3 px-5 py-2 sm:px-6 sm:py-3 
              bg-gradient-to-r from-green-500 via-green-600 to-green-700 
              text-white font-medium rounded-full shadow-md 
              hover:shadow-xl hover:scale-105 active:scale-95 
              transition-transform duration-300 ease-in-out"
          >
            <FaBell className="text-lg sm:text-xl animate-bounce" />
            <span className="text-sm sm:text-base">View Notifications</span>

            <span
              className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 
                  bg-red-500 border-2 border-white rounded-full animate-pulse shadow-md"
            ></span>
          </Link>
        </div>
      </section>

      {/* Features / Core Values Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-14">
          <span className="text-[#043D3B] font-semibold text-base sm:text-lg mb-1 block">
            Our Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-[#043D3B] mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            We provide the perfect environment for academic excellence with our
            proven teaching methodology.
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-5 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-100">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#043D3B] mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Hours of Learning
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#043D3B] mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Success Rate
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#043D3B] mb-1 sm:mb-2">
                5+
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Expert Faculty
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#043D3B] mb-1 sm:mb-2">
                5+
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-[#043D3B]">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center p-6"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#043D3B] mb-3 font-bold text-sm sm:text-base">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin !== "#" && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#043D3B] transition-colors duration-300"
                    >
                      <FaLinkedin className="text-lg sm:text-xl" />
                    </a>
                  )}
                  {member.social.twitter !== "#" && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#043D3B] transition-colors duration-300"
                    >
                      <FaTwitter className="text-lg sm:text-xl" />
                    </a>
                  )}
                  {member.social.github !== "#" && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#043D3B] transition-colors duration-300"
                    >
                      <FaGithub className="text-lg sm:text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
