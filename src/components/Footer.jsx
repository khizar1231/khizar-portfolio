import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className='w-full bg-white/40 backdrop-blur-xl border-t border-white/60 px-5 lg:px-28 py-5 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 relative z-10'>
      
      {/* Logo Section */}
      <motion.img 
        whileHover={{ scale: 1.05 }}
        className='h-8 lg:h-12 object-contain drop-shadow-sm cursor-pointer' 
        src="/assets/KhizarLogo.png" 
        alt="Khizar Anwar Logo" 
      />

      {/* Copyright & Credit Section */}
      <div className='text-gray-600 font-medium text-xs lg:text-sm text-center md:text-right space-y-1 lg:space-y-2'>
        <p>&copy; {new Date().getFullYear()} Personal Portfolio</p>
        <p>
          Designed & Developed by{" "}
          <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
            Khizar Anwar
          </span>
        </p>
      </div>
      
    </footer>
  );
}