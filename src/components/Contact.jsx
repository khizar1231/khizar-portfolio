import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { IoLogoLinkedin, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';
import { BiLogoGmail } from 'react-icons/bi';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const socials = [
    { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/khizar-anwar" },
    { Icon: IoLogoInstagram, link: "https://www.instagram.com/khizaranwaar" },
    { Icon: IoLogoWhatsapp, link: "https://wa.me/923157842830" },
    { Icon: BiLogoGmail, link: "mailto:khizaranwaar@gmail.com" }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Using the provided actual EmailJS credentials
    emailjs.sendForm('service_t4x16jg', 'template_4883nsr', formRef.current, 'MjQ4IRR0-KmvJhJ8I')
      .then((result) => {
          console.log(result.text);
          setIsSent(true);
          setIsLoading(false);
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
          alert("Something went wrong. Please try again.");
      });
  };

  return (
    // Light Starlight Gradient Background
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='relative w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white py-16 lg:py-24'
      id='contact'
    >
      {/* Animated Background Glows */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className='px-5 lg:px-28 relative z-10'>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl lg:text-5xl text-center font-light mb-12 text-gray-800'
        >
          Contact <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Me</span>
        </motion.h2>

        <div className='flex justify-between items-start mt-8 lg:mt-16 flex-col-reverse lg:flex-row gap-12 lg:gap-20'>
          
          {/* --- Left Column: Contact Form --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:w-1/2 w-full'
          >
            <div className='bg-white/40 backdrop-blur-xl border border-white/60 p-8 lg:p-10 rounded-[2rem] shadow-[0_4px_25px_rgba(0,0,0,0.04)]'>
              <form ref={formRef} onSubmit={sendEmail} className='w-full space-y-4 lg:space-y-6'>
                <input 
                  name="user_name"
                  className='bg-white/50 border border-white/80 px-5 py-4 rounded-xl placeholder:text-gray-500 text-gray-800 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 transition-all shadow-sm' 
                  type="text" 
                  placeholder='Your Name' 
                  required 
                />
                <input 
                  name="user_email"
                  className='bg-white/50 border border-white/80 px-5 py-4 rounded-xl placeholder:text-gray-500 text-gray-800 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 transition-all shadow-sm' 
                  type="email" 
                  placeholder='Email Address' 
                  required 
                />
                <textarea 
                  name="message"
                  className='resize-none bg-white/50 border border-white/80 px-5 py-4 h-36 rounded-xl placeholder:text-gray-500 text-gray-800 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/80 transition-all shadow-sm' 
                  placeholder='How can I help you? *'
                  required
                ></textarea>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className='flex justify-between gap-5 flex-col xl:flex-row items-center pt-2'
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type='submit'
                    disabled={isLoading}
                    className='w-full xl:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl flex items-center justify-center gap-x-3 font-semibold shadow-md hover:shadow-[0_8px_20px_rgba(79,70,229,0.4)] transition-all duration-300 disabled:opacity-70'
                  >
                    {isLoading ? "Sending..." : "Get In Touch"}
                  </motion.button>

                  <div className='flex items-center gap-x-3'>
                    {socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/60 p-3 rounded-xl border border-white/80 text-gray-700 shadow-sm"
                        whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#6366f1", borderColor: "#6366f1" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
                
                {isSent && (
                  <p className="text-green-600 font-medium text-sm text-center mt-4">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* --- Right Column: Text Information --- */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='lg:w-1/2 flex flex-col justify-center'
          >
            <div className='font-extrabold text-4xl lg:text-6xl mt-5 lg:mt-0 space-y-2 lg:space-y-4'>
              <h2 className="text-gray-800">Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500'>talk</span> for</h2>
              <h2 className="text-gray-800">Something special</h2>
            </div>

            <p className='text-gray-600 font-medium text-base lg:text-lg mt-6 lg:mt-8 leading-relaxed max-w-md'>
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences. Let's build something amazing together.
            </p>

            <div className='font-bold text-gray-800 text-base lg:text-xl flex flex-col mt-10 gap-4 lg:gap-6'>
              <motion.a
                whileHover={{ x: 8 }}
                className='flex items-center gap-4 group w-fit'
                href="mailto:khizaranwaar@gmail.com"
              >
                <span className='bg-white/60 border border-white/80 shadow-sm transition-all group-hover:bg-purple-100 group-hover:text-purple-600 rounded-xl p-3'>
                  <IoMdMail className="w-5 h-5 lg:w-6 lg:h-6" />
                </span>
                khizaranwaar@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 8 }}
                className='flex items-center gap-4 group w-fit'
                href="https://wa.me/923157842830"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className='bg-white/60 border border-white/80 shadow-sm transition-all group-hover:bg-blue-100 group-hover:text-blue-600 rounded-xl p-3'>
                  <FaPhone className="w-5 h-5 lg:w-6 lg:h-6" />
                </span>
                +92 315 7842830
              </motion.a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
}