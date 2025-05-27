"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <footer className="relative bg-gradient-to-b from-sky-50 to-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-white/80 to-sky-50/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-12 text-center mb-24 w-full border border-white/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm [mask-image:radial-gradient(black,transparent_70%)]"></div>
          
          <Link href="/signup" className="block w-full">
            <motion.div 
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white text-4xl md:text-5xl lg:text-6xl font-bold p-6 md:py-16 px-8 md:px-12 rounded-full border border-amber-400/50 flex items-center justify-center w-full shadow-lg overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              {/* Subtle Background Animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-amber-600/20 to-amber-400/20 bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: hovered ? ['0% 0%', '100% 0%'] : '0% 0%',
                }}
                transition={{ duration: 3, repeat: hovered ? Infinity : 0, ease: "linear" }}
              />
              
              <div className="relative z-10 flex items-center">
                Get started
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ml-4 md:ml-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: hovered ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </div>
            </motion.div>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mt-10">
              The web builder for stunning sites.
            </p>
          </motion.div>
        </motion.div>

        {/* Modern Footer Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-16 border-b border-gray-200/50">
          {/* Logo and Social Links Column */}
          <div className="col-span-2">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </motion.div>
            
            <p className="text-gray-600 mb-6 max-w-xs">
              Making web development simpler, faster, and more enjoyable with our innovative starter templates.
            </p>
            
            <div className="flex space-x-3">
              {['instagram', 'twitter', 'facebook', 'github'].map((platform, index) => (
                <motion.a 
                  key={platform}
                  href="#" 
                  className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-2.5 rounded-full shadow-md flex items-center justify-center hover:from-amber-500 hover:to-amber-600"
                  whileHover={{ y: -3, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    )}
                    {platform === 'twitter' && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    )}
                    {platform === 'facebook' && (
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    )}
                    {platform === 'github' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer Links - 4 Columns */}
          {[
            { title: "PRODUCTS", links: ["Products", "Pricing", "Log In", "Partnerships"] },
            { title: "COMPANY", links: ["Careers", "Events", "Brand", "Security"] },
            { title: "COMPARE", links: ["Webflow", "Wordpress", "Figma", "Unbounce"] },
            { title: "LEGAL", links: ["Abuse", "Charges", "Cookies", "Terms"] },
          ].map((column, columnIndex) => (
            <div key={column.title} className="col-span-1">
              <motion.h3 
                className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent uppercase mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
                viewport={{ once: true }}
              >
                {column.title}
              </motion.h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * linkIndex + 0.2 * columnIndex }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="#" 
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-200 flex items-center group"
                    >
                      <span className="block w-0 group-hover:w-2 h-px bg-amber-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Line */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between pt-8 pb-4">
          <motion.p 
            className="text-gray-600 text-sm mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © 2024 <span className="font-medium">IndieStack</span>. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Made with 
            <motion.span 
              className="inline-block mx-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full p-1 shadow-sm"
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.span>
            in San Francisco
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;