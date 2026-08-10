import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    // Light Starlight Gradient Background for consistency
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white py-20" id="about">
      
      {/* Animated Background Glows */}
      <motion.div 
        className="absolute top-10 left-[-5%] lg:left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4], x: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-[-5%] lg:right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="px-5 lg:px-28 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        
        {/* --- Left Column: Image in Glass Frame --- */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3 lg:p-4 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(31,38,135,0.08)] relative"
          >
            <div className="w-72 h-[360px] lg:w-[450px] lg:h-[450px] rounded-[2rem] overflow-hidden bg-white/50">
              <img 
                src="/assets/khizar.png" 
                alt="Khizar Anwar - About Me" 
                className="h-full w-full object-cover object-center transform hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Text Content in Glass Card --- */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:bg-white/50 transition-colors duration-500">
            
            <h2 className="text-3xl lg:text-5xl font-light text-gray-800 mb-6 lg:mb-8">
              About <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>

            <div className="space-y-5 text-gray-700 text-sm/7 lg:text-base/7 font-medium">
              <p>
                I am a professional and passionate <span className="font-bold text-blue-600">Software Engineer</span> with a strong foundation in building innovative, scalable, and user-centric web applications. I thrive on blending technical logic with sleek UI/UX design to create high-performing digital experiences.
              </p>

              <p>
                My expertise lies in full-stack development using modern technologies like the <span className="font-bold text-purple-600">MERN stack (MongoDB, Express, React, Node.js), PHP, Tailwind CSS, and Framer Motion</span>. Whether it's architecting complex databases, managing cloud deployments, or crafting pixel-perfect interfaces, I am always focused on delivering top-tier solutions.
              </p>

              <p>
                Beyond standard web development, I have a keen interest in graphic design and hardware prototyping. I am constantly evolving, taking on new challenges, reading daily tech publications, and pushing the boundaries of what I can build. Let's connect and build something amazing together!
              </p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
}