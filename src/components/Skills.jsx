import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaWordpress, FaMobileAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";

export default function SkillsAndEducation() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={45} className="text-yellow-500" /> },
    { id: 2, name: "React", icon: <FaReact size={45} className="text-blue-500" /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={45} className="text-green-600" /> },
    { id: 4, name: "Express", icon: <SiExpress size={45} className="text-gray-700" /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" /> },
    { id: 6, name: "WordPress", icon: <FaWordpress size={45} className="text-blue-600" /> },
    { id: 7, name: "PostgreSQL", icon: <BiLogoPostgresql size={45} className="text-blue-500" /> },
    // Next.js icon color changed to black for visibility on light background
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={45} className="text-black" /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={45} className="text-cyan-500" /> },
    { id: 10, name: "Mobile Apps", icon: <FaMobileAlt size={45} className="text-purple-500" /> },
  ]);

  const [education] = useState([
    {
      id: 1,
      degree: "Bachelors in Software Engineering",
      institution: "University of Sialkot",
      period: "2025",
      details: "",
    },
    {
      id: 2,
      degree: "Navtcc Certification in Full Stack Development",
      institution: "Govt. of Pakistan",
      period: "2025",
      details: "",
    },
    {
      id: 3,
      degree: "Intermediate",
      institution: "Board of Gujranwala, Sialkot",
      period: "2019",
      details: "Division : 1st",
    },
    {
      id: 4,
      degree: "Matric",
      institution: "Board of Gujranwala, Sialkot",
      period: "2017",
      details: "Division : 1st",
    },
  ]);

  return (
    // Light Starlight Gradient Background blending from White -> Soft Indigo/Purple -> White
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white py-20" id="skills">
      
      {/* Animated Background Glows (Starlight Effect) */}
      <motion.div 
        className="absolute top-32 left-0 lg:left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-0 lg:right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="px-5 lg:px-28 relative z-10">

        {/* --- SKILLS SECTION --- */}
        <motion.h2
          className="text-3xl lg:text-5xl text-center font-light mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
        </motion.h2>

        {/* Skill Cards (Light Glassmorphism) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-lg font-semibold mt-8 w-full place-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 h-36 w-full max-w-[170px] lg:h-44 flex flex-col items-center justify-center gap-4 hover:bg-white/70 hover:shadow-[0_8px_30px_rgba(31,38,135,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: skill.id * 0.05 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-gray-800 text-sm lg:text-base tracking-wide">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* --- EDUCATION SECTION --- */}
        <div className="mt-28">
          <motion.h2
            className="text-3xl lg:text-5xl text-center font-light mb-16 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Education</span>
          </motion.h2>

          {/* Education Cards (Light Glassmorphism) */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-6 lg:p-8 hover:bg-white/80 hover:shadow-[0_10px_40px_rgba(31,38,135,0.08)] hover:border-purple-200 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] group relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div className="p-3 bg-white/60 rounded-xl border border-white/80 text-purple-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <IoSchoolOutline size={28} />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-xl lg:text-2xl mb-1">
                        {edu.degree}
                      </h2>
                      <p className="text-gray-600 font-medium text-sm lg:text-base">
                        {edu.institution}
                      </p>
                      {edu.details && (
                        <p className="text-blue-600 mt-2 text-sm font-semibold">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2 lg:mt-0 lg:ml-auto whitespace-nowrap">
                    <span className="inline-block px-4 py-1.5 bg-white/70 border border-white/80 rounded-full text-gray-800 font-semibold text-sm shadow-sm group-hover:bg-purple-50 transition-colors">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}