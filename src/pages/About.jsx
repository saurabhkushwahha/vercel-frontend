import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaAward,
  FaProjectDiagram,
  FaHandshake,
  FaUsers,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Contact from "./Contact";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { icon: <FaAward className="text-2xl text-red-500" />, number: "150+", label: "Projects Completed" },
    { icon: <FaUser className="text-2xl text-orange-400" />, number: "100+", label: "Happy Students" },
    { icon: <FaProjectDiagram className="text-2xl text-blue-500" />, number: "5+", label: "Years Experience" },
    { icon: <FaHeart className="text-2xl text-red-600" />, number: "99%", label: "Students Satisfaction" },
  ];

  const values = [
    {
      icon: <FaHeart className="text-2xl text-green-700" />,
      title: "Passion",
      desc: "We teach with fire, commitment, and love for growth — inspiring every student to find purpose in learning.",
    },
    {
      icon: <FaLightbulb className="text-2xl text-red-600" />,
      title: "Innovation",
      desc: "We challenge old methods and create new ways to learn, lead, and live with clarity and confidence.",
    },
    {
      icon: <FaRocket className="text-2xl text-orange-500" />,
      title: "Excellence",
      desc: "We strive for perfection in every detail — from teaching to testing, and from thoughts to transformation.",
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-500" />,
      title: "Collaboration",
      desc: "We believe success is not individual — it’s collective. Together, we grow stronger, wiser, and unstoppable.",
    },
    {
      icon: <FaUsers className="text-2xl text-purple-500" />,
      title: "Community",
      desc: "Viraam Vaani is a family — a safe space where minds learn, hearts connect, and dreams take shape.",
    },
    {
      icon: <FaBrain className="text-2xl text-teal-500" />,
      title: "Creativity",
      desc: "We encourage imagination — because true intelligence blooms when ideas flow freely and fearlessly.",
    },
  ];

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-100 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-100 rounded-full opacity-50 animate-pulse delay-300"></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 relative z-10">
            About <span className="text-[#043D3B]">Us</span>
          </h1>

          <div className="mt-8 max-w-4xl mx-auto text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-medium tracking-wide">
            <p className="mb-5">
              <span className="font-semibold text-[#043D3B]">Viraam Vaani</span> is not just an educational space — it’s a
              movement of transformation. We believe every individual, no matter
              how lost or limited, carries the spark of greatness within.
            </p>

            <p className="mb-5">
              Our mission is to guide learners toward that inner awakening —
              where <span className="font-semibold">discipline meets confidence</span>, and potential turns into
              performance. Through a unique blend of mentorship, motivation, and
              mindfulness, we help every student rediscover purpose and passion.
            </p>

            <p className="mb-5">
              At <span className="font-semibold text-[#043D3B]">Viraam Vaani</span>, every “Viraam” (pause) becomes a new
              beginning — a moment to reflect, reset, and rise stronger than
              before.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <div className="w-12 h-1 bg-[#043D3B] rounded-full"></div>
            <div className="w-6 h-1 bg-[#043D3B] rounded-full"></div>
            <div className="w-3 h-1 bg-[#043D3B] rounded-full"></div>
          </div>
        </motion.div>

        {/* Mission and Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-10 hover:shadow-2xl border border-gray-100 transition-all relative"
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-50 rounded-full"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-[#043D3B]/10 rounded-full mr-4">
                <FaLightbulb className="text-2xl text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-center leading-relaxed">
              To awaken hidden potential, nurture discipline, and transform
              every learner into a confident, capable, and compassionate achiever.
              We aim to redefine education — not as rote learning, but as a
              journey of self-discovery and purpose.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-10 hover:shadow-2xl border border-gray-100 transition-all relative"
          >
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-50 rounded-full"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-[#043D3B]/10 rounded-full mr-4">
                <FaRocket className="text-2xl text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-center leading-relaxed">
              To build a generation that thinks deeply, acts wisely, and leads
              courageously. We envision a world where every individual becomes
              the best version of themselves — personally, socially, and spiritually.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl border border-gray-100 transition-all group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-100 rounded-full group-hover:bg-[#043D3B]/10 transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#043D3B] to-teal-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

          <h2 className="text-3xl font-bold text-center mb-12 relative z-10">
            Our <span className="text-green-200">Core Values</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 border border-white/10 transition-all duration-300"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Contact />
      </div>
    </div>
  );
};

export default About;
