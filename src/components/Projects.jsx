import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "MernStack Export Website",
    description: "Developed a full-stack export business website using the MERN stack with responsive UI, product management, and customer inquiry features.",
    image: "/assets/mern-stack-export.png",
    link: "#"
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

        <div className="lg:mt-16 mt-8 lg:space-y-24 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex justify-between items-center gap-10 flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              
              {/* Image Container with Glassmorphism Border */}
              <div className="lg:w-1/2 w-full p-2 lg:p-3 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(31,38,135,0.08)]">
                <div className="w-full h-[250px] lg:h-[350px] rounded-[1.5rem] overflow-hidden bg-white/50 relative group">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-colors shadow-lg">
                        <TbExternalLink size={24} />
                     </a>
                  </div>
                </div>
              </div>

              {/* Text Content in Glass Card */}
              <div className="lg:w-1/2 w-full bg-white/40 backdrop-blur-xl border border-white/60 p-8 lg:p-10 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:bg-white/60 transition-colors duration-500">
                <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 text-5xl lg:text-7xl opacity-50 mb-2">
                  {String(project.id).padStart(2, "0")}
                </h2>
                
                <p className="font-bold text-gray-900 text-2xl lg:text-4xl mb-4">
                  {project.title}
                </p>

                <p className="font-medium text-sm/7 lg:text-base/7 text-gray-600 mb-6">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project <TbExternalLink size={20} />
                </a>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}