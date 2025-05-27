'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-sky-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute top-1/2 right-0 w-60 h-60 bg-amber-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute top-3/4 left-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex justify-center">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            How simple it can be to get<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">your Projects Done</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Just step away from those traditional old methods of
            hiring plus managing and see for yourself
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Pricing Cards - Left Side */}
          <div className="lg:w-1/2 relative h-[450px]">
            {/* Essential Card */}
            <motion.div 
              className="absolute z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] p-8 w-72 transform -rotate-6 border border-white"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 40px -5px rgba(0,0,0,0.2)",
                rotate: 0
              }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 -left-3 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-medium">
                Basic Plan
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600 mt-4">Essential</h3>
              
              <div className="space-y-4">
                <div className="flex items-center py-3 border-b border-sky-100">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-gray-700">1 Active Request</span>
                </div>
                <div className="flex items-center py-3 border-b border-sky-100">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-gray-700">Unlimited Requests</span>
                </div>
                <div className="flex items-center py-3 border-b border-sky-100">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-gray-700">Branding</span>
                </div>
                <div className="flex items-center py-3 border-b border-sky-100">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-gray-700">Website Design</span>
                </div>
              </div>
              
              <motion.button 
                className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium shadow-md"
                whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Book your Slot
              </motion.button>
            </motion.div>
            
            {/* Deluxe Card */}
            <motion.div 
              className="absolute top-16 left-24 z-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl shadow-[0_20px_40px_-5px_rgba(245,158,11,0.3)] p-8 w-72 transform rotate-6 border border-amber-400/40"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 50px rgba(245,158,11,0.4)",
                rotate: 0
              }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 -right-3 bg-white text-amber-600 px-4 py-1 rounded-full text-xs font-medium shadow-md">
                Most popular
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-4">Deluxe</h3>
              
              <div className="space-y-4">
                <div className="flex items-center py-3 border-b border-amber-400/40">
                  <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">2 Active Request</span>
                </div>
                <div className="flex items-center py-3 border-b border-amber-400/40">
                  <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Unlimited Requests</span>
                </div>
                <div className="flex items-center py-3 border-b border-amber-400/40">
                  <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Branding</span>
                </div>
                <div className="flex items-center py-3 border-b border-amber-400/40">
                  <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Website Design</span>
                </div>
              </div>
              
              <motion.button 
                className="mt-8 w-full bg-white text-amber-600 py-3 px-4 rounded-xl font-medium shadow-md"
                whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Book your Slot
              </motion.button>
            </motion.div>
          </div>
          
          {/* Steps - Right Side */}
          <div className="lg:w-1/2 space-y-8">
            {/* Progress Bar */}
            <div className="hidden lg:flex justify-center mb-8">
              <div className="w-full max-w-sm h-1 bg-gray-200 rounded-full relative">
                <motion.div 
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-blue-500 rounded-full"
                  initial={{ left: "0%" }}
                  whileInView={{ left: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
            
            {/* Step 1 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 pl-8">Choose Your Plan</h3>
              <p className="text-gray-600 pl-8 leading-relaxed">
                Select a subscription plan that fits your needs from our flexible options designed for businesses of all sizes.
              </p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-white border-r border-b border-gray-100"></div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-2 text-amber-600 pl-8">Submit Your Request</h3>
              <p className="text-gray-600 pl-8 leading-relaxed">
                Use our intuitive private design portal to submit your design needs and track progress in real-time.
              </p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-6 h-6 bg-white border-r border-b border-gray-100"></div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.1)" }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 pl-8">We Deliver <span className="text-amber-600">:)</span></h3>
              <div className="flex items-center pl-8 mb-2">
                <p className="text-gray-600 leading-relaxed">
                  Get your design delivered in <span className="line-through text-gray-400">not weeks</span> but 2 days, ready to enhance your brand.
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pl-8 flex items-center space-x-3">
                {[1, 2, 3].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500">Satisfaction guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}