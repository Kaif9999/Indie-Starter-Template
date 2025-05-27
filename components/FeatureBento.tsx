
'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureIcon = ({ children, color = "blue" }) => {
  const bgColor = color === "amber" ? "bg-amber-100" : "bg-blue-100";
  const textColor = color === "amber" ? "text-amber-500" : "text-blue-500";
  
  return (
    <motion.div 
      className={`${bgColor} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}
      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${textColor}`}>{children}</div>
    </motion.div>
  );
};

export default function FeatureBento() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-50 py-20 px-4 md:px-8 lg:px-12">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Features that <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">empower</span> you
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to build a successful SaaS product, with elegant UI and powerful features.
          </p>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design Faster Than Ever - Large Card */}
          <motion.div 
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl md:col-span-2 relative overflow-hidden shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-white"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -5px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-between z-10 relative">
              <div>
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </FeatureIcon>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design Faster Than Ever</h3>
                <p className="text-gray-600 max-w-lg text-lg leading-relaxed">
                  Streamlined resources and intuitive interfaces for efficient and seamless workflows. Focus on creating, not configuring.
                </p>
              </div>
            </div>
            
            {/* Enhanced Mockup Images */}
            <div className="mt-8 relative flex justify-end">
              <motion.div 
                className="transform rotate-6 translate-x-20 translate-y-4"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/design-template-1.png" 
                  alt="Design template" 
                  width={260} 
                  height={140} 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 right-12 transform -rotate-3"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/design-template-2.png" 
                  alt="Design template" 
                  width={200} 
                  height={120} 
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 right-10 w-20 h-20 bg-amber-100/50 rounded-full blur-2xl"></div>
          </motion.div>
          
          {/* Fresh Updates */}
          <motion.div 
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-white"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -5px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <FeatureIcon color="amber">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </FeatureIcon>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Updates Regularly</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay current with new design tools, features, and resources. Regular improvements based on community feedback.
              </p>
              
              <div className="mt-6 flex items-center">
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Recently updated
                </span>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl"></div>
          </motion.div>
          
          {/* Professional Templates */}
          <motion.div 
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-white"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -5px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </FeatureIcon>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Templates</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Beautiful website templates crafted for Figma and Framer. Pixel-perfect designs ready for customization.
            </p>
            
            <div className="relative">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/website-templates.png" 
                  alt="Website templates" 
                  width={280} 
                  height={180} 
                  className="rounded-lg shadow-lg object-cover"
                />
                
                <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  30+ templates
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
          </motion.div>
          
          {/* Customizable UI Kits */}
          <motion.div 
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl md:col-span-2 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] border border-white"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -5px rgba(0,0,0,0.15)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div>
                <FeatureIcon color="amber">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </FeatureIcon>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Customizable UI Kits</h3>
                <p className="text-gray-600 max-w-xl leading-relaxed">
                  Tailored templates to jumpstart any SaaS or business project. Customize colors, components, and layouts to match your brand.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Components</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Layouts</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Theme Builder</span>
                </div>
              </div>
              
              <div className="md:ml-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/ui-kit-preview.png" 
                    alt="UI Kit preview" 
                    width={320} 
                    height={180} 
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-15 -right-15 w-40 h-40 bg-amber-100/50 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
          </motion.div>
  
        </div>
      </motion.div>
    </div>
  );
}