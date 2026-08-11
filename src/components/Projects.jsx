import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "MernStack Export Website",
    description: "Developed a full-stack export business website using the MERN stack with responsive UI, product management, and customer inquiry features.",
    image: "/assets/mern-stack-export.png",
    link: "https://auric-international.vercel.app"
  },
  {
    id: 2,
    title: "SOS SmartAlert Android App",
    description: "Built an Android emergency alert application that sends real-time SOS notifications and live location to emergency contacts during critical situations.",
    image: "/assets/sos-smartalert.png",
    link: "#"
  },
  {
    id: 3,
    title: "Smart Past FYP Management Web",
    description: "Developed a web platform for managing and analyzing Final Year Projects, enabling project search, approval workflows, and duplicate topic detection.",
    image: "/assets/smart-fyp-management.png",
    link: "#"
  },
  {
    id: 4,
    title: "Smart Classroom Web",
    description: "Designed a web-based classroom management system featuring student enrollment, attendance tracking, assignments, and course management.",
    image: "/assets/smart-classroom.png",
    link: "#"
  },
  {
    id: 5,
    title: "E-Commerce Store Web",
    description: "Created a responsive e-commerce platform with product catalog, shopping cart, secure authentication, and order management.",
    image: "/assets/e-commerce-store.png",
    link: "#"
  },
  {
    id: 6,
    title: "GeoHeart SmartGeofencing Mobile App",
    description: "Developed an Android-based employee attendance system using GPS geofencing and Bluetooth-enabled heart rate verification to ensure secure check-in and check-out.",
    image: "/assets/geoheart-smartgeofencing.png",
    link: "#"
  }
];

export default function Projects() {
  return (
    // Light Starlight Gradient Background
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white px-5 lg:px-28 py-16 lg:py-24" id="projects">
      
      {/* Animated Background Glows */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.h2 
          className="text-3xl lg:text-5xl text-center font-light mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
        </motion.h2>

        <div className="lg:mt-16 mt-8 lg:space-y-20 space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // Unified Single Card Container
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12 bg-white/40 backdrop-blur-2xl border border-white/60 p-5 lg:p-8 rounded-[3rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(31,38,135,0.08)] hover:bg-white/50 transition-all duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              
              {/* Image Section (Inside the Card) */}
              <div className="w-full lg:w-1/2 h-[280px] lg:h-[400px] rounded-[2rem] bg-white/60 border border-white/80 relative group flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  src={project.image}
                  alt={project.title}
                />
                
                {/* Overlay on Hover (Only for Project 1) */}
                {project.id === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 pb-8">
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/30 backdrop-blur-md p-4 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all shadow-lg transform hover:scale-110">
                        <TbExternalLink size={26} />
                     </a>
                  </div>
                )}
              </div>

              {/* Text Content Section (Inside the Card) */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 lg:px-6 py-4">
                <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 text-6xl lg:text-8xl opacity-40 mb-[-15px] lg:mb-[-20px] select-none">
                  {String(project.id).padStart(2, "0")}
                </h2>
                
                <h3 className="font-bold text-gray-900 text-3xl lg:text-4xl mb-4 leading-tight relative z-10">
                  {project.title}
                </h3>

                <p className="font-medium text-base/7 lg:text-lg/8 text-gray-600 mb-8 relative z-10">
                  {project.description}
                </p>
                
                {/* View Project Link (Only for Project 1) */}
                {project.id === 1 && (
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300 w-fit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project <TbExternalLink size={22} />
                  </a>
                )}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}