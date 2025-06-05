"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Image
          src="/land-page.svg" 
          alt="Landing Page Background"
          fill
          priority
          className="object-contain md:object-cover w-full"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center top'
          }}
        />
        
        {/* Animated Blob Shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/60 via-blue-300/30 to-blue-400/40 z-10"></div>

      {/* Non-Sticky Navbar */}
      <motion.nav 
        className={`flex justify-between items-center py-4 px-6 md:px-12 relative z-50 transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-600">
            <Image src="/logo.svg" alt="Logo" width={250} height={100} className="inline-block mr-2" />
          </Link>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Documents', 'Features', 'Pricing', 'Waitlist'].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.05 }}>
              <Link 
                href={`/${item.toLowerCase()}`} 
                className="relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Button */}
        <motion.button 
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-xl shadow-[0_4px_12px_rgba(251,191,36,0.3)] border border-amber-200 backdrop-blur-sm"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(251,191,36,0.5)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center">
            <Link href="/signin">Sign In</Link>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.button>
      </motion.nav>

      {/* Spacer + Scroll Indicator */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          style={{ opacity, scale }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
      
      {/* Hero Content - Enhanced */}
      <motion.div 
        className="relative z-20 w-full px-4 py-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-1 rounded-full text-xs text-white font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            LAUNCH FASTER
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Launch Your SaaS in Days, 
            <span className="text-white">Not Months</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A modern, TypeScript-first starter kit with Auth.js, Resend for emails, 
            DodoPayments, and PostgreSQL with Prisma ORM — deploy in minutes. 
            Focus on building your app, not the boilerplate.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-amber-700 border border-amber-200 shadow-[0_8px_30px_rgba(251,191,36,0.4)] backdrop-blur-sm w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px rgba(251,191,36,0.6)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center">
                <span className="font-bold">Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
            
            <motion.a
              href="https://github.com"
              className="flex items-center justify-center px-8 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;