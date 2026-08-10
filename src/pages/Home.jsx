import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socials = [
    { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/khizar-anwar" },
    { Icon: IoLogoInstagram, link: "https://www.instagram.com/khizaranwaar" },
    { Icon: IoLogoWhatsapp, link: "https://wa.me/923157842830" },
    { Icon: BiLogoGmail, link: "mailto:khizaranwaar@gmail.com" }
  ];

  return (
    <div className="mt-20 relative w-full overflow-hidden" id="home">
      
      {/* --- Animated Background Glows --- */}
      <motion.div 
        className="absolute top-0 left-[-10%] w-72 h-72 lg:w-96 lg:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -z-10"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-[-5%] w-72 h-72 lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -z-10"
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse relative z-10">

        {/* --- Left Column: Text & Socials --- */}
        <motion.div
          className="lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-3xl lg:text-5xl flex flex-col mt-10 lg:mt-0 gap-3 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hey!, <TypeAnimation
                sequence={[
                  'I am Khizar Anwar',
                  1000,
                  'I build Web Apps',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 700 }}
                repeat={Infinity}
              />
            </motion.h2>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Fullstack
              </span>{" "}
              <span
                className="text-transparent font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Pakistan.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-gray-600 font-medium text-sm lg:text-base mt-6 leading-relaxed lg:pr-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in Web Development and Web Designing. I’m focused on building innovative solutions and continuously expanding my skills. My goal is to grow as a developer and contribute to impactful projects in the tech industry.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-gray-800"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.8)", 
                  color: "#000" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Right Column: Image with Taller Glass Frame --- */}
        <motion.div
          className="lg:w-[50%] w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-3 lg:p-4 rounded-[2.5rem] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
              
              {/* FIXED: Taller height for the portrait image (h-[360px] on mobile, lg:h-[500px] on desktop) */}
              <div className="w-72 h-[360px] lg:w-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden">
                <img 
                  className="h-full w-full object-cover object-center transform hover:scale-110 transition-transform duration-700 ease-in-out" 
                  src="/assets/KhizarV.png" 
                  alt="Khizar Anwar" 
                />
              </div>
              
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}