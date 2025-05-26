import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-transparent backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="font-bold text-2xl">
          <Link href="/">Indie-Starter Kit</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/documents" className="hover:opacity-80 text-white">Documents</Link>
          <Link href="/features" className="hover:opacity-80 text-white">Features</Link>
          <Link href="/pricing" className="hover:opacity-80 text-white">Pricing</Link>
        </div>
        
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
          SIgnin
        </button>
      </nav>

      {/* Hero Section with SVG Placeholder and Gray Mask */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Gray mask over the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-pink-400 opacity-80"></div>
        
        {/* Main SVG Image */}
        <div className="pt-16 relative z-10 min-h-screen min-w-screen flex items-center justify-center">
          <div className="p-4 rounded-lg h-screen w-screen">
            <Image
              width={800}
              height={600}
              src="/land-page.svg" 
              alt="Landing Page Illustration"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Features Bento Grid Section */}
        <div className="relative z-10 py-24 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Design Smarter, Not Harder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock premium components, templates, and resources to elevate your projects effortlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Design Faster Than Ever</h3>
              <p className="text-gray-600 dark:text-gray-300">Streamlined resources for efficient and seamless workflows.</p>
              <div className="mt-4 relative">
                <div className="absolute -right-4 bottom-0 transform translate-y-6">
                  <Image 
                    src="/placeholder-template.png" 
                    width={140} 
                    height={100} 
                    alt="Design templates"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Updates Regularly</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay current with new design tools and resources.</p>
              <div className="mt-6 flex justify-end">
                <div className="bg-green-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm md:col-span-2 lg:col-span-1">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
              <p className="text-gray-600 dark:text-gray-300">Use beautiful website templates made for Figma and Framer.</p>
              <div className="mt-4 flex justify-center">
                <Image 
                  src="/placeholder-website.png" 
                  width={220} 
                  height={140} 
                  alt="Website templates"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable UI Kits</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailored templates to jumpstart any SaaS or business project.</p>
              <div className="mt-4 flex justify-end">
                <Image 
                  src="/placeholder-ui.png" 
                  width={160} 
                  height={120} 
                  alt="UI Kit preview"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Gradient Library</h3>
              <p className="text-gray-600 dark:text-gray-300">Discover unique color gradients for a professional look.</p>
              <div className="mt-4 flex justify-center">
                <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-pink-400 to-purple-600 shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;