"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Brain,
  Upload,
  Crown,
  User,
  ChevronRight,
  Menu,
  X,
  BarChart2,
  TrendingUp,
  FileText,
  Settings,
  Home,
  Users,
  MessageSquare,
  LucideBubbles
} from 'lucide-react';
import { motion } from 'framer-motion';

// Cutomize this for your apps
const APP_CONFIG = {
  name: "AppDash", // Change this for different applications
  description: "Your all-in-one dashboard",
  logo: <LucideBubbles className="w-7 h-7 text-primary" />, // You can swap this with any icon
  primaryColor: "blue", // Change color theme - options: blue, green, purple, amber, pink
  userInfo: {
    name: "User Name",
    email: "user@example.com"
  }
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    // Set active item based on current path on first load
    const matchingItem = navItems.find(item => pathname.includes(item.path));
    if (matchingItem) {
      setActiveItem(matchingItem.path);
    } else {
      // Default to dashboard if no match
      setActiveItem('/dashboard');
    }
    
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [pathname]);
  
  // Define navigation items with icons - easily customizable for different apps
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Reports', path: '/dashboard/reports', icon: <FileText className="w-5 h-5" /> },
    { name: 'Users', path: '/dashboard/users', icon: <Users className="w-5 h-5" /> },
    { name: 'Assistant', path: '/dashboard/assistant', icon: <MessageSquare className="w-5 h-5" />, special: true }
  ];
  
  // Check if a path is currently active
  const isActive = (path: string) => path === activeItem;
  
  // Handle item click - set active and close mobile
  const handleItemClick = (path: string) => {
    setActiveItem(path);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Generate color classes based on the chosen primary color
  const getColorClasses = (type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        gradient: "from-blue-600 to-blue-400",
        active: "from-blue-100 to-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        solid: "bg-blue-500",
        icon: "text-blue-500"
      },
      green: {
        gradient: "from-green-600 to-green-400",
        active: "from-green-100 to-green-50",
        border: "border-green-200",
        text: "text-green-600",
        solid: "bg-green-500",
        icon: "text-green-500"
      },
      purple: {
        gradient: "from-purple-600 to-purple-400",
        active: "from-purple-100 to-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        solid: "bg-purple-500",
        icon: "text-purple-500"
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        active: "from-amber-100 to-amber-50",
        border: "border-amber-200",
        text: "text-amber-600",
        solid: "bg-amber-500",
        icon: "text-amber-500"
      },
      pink: {
        gradient: "from-pink-600 to-pink-400",
        active: "from-pink-100 to-pink-50",
        border: "border-pink-200",
        text: "text-pink-600",
        solid: "bg-pink-500",
        icon: "text-pink-500"
      }
    };

    return colorMap[APP_CONFIG.primaryColor]?.[type] || colorMap.blue[type];
  };
  
  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <motion.button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed z-30 top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r ${getColorClasses('gradient')} rounded-r-lg p-2 shadow-lg`}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      )}
      
      {/* Mobile Backdrop */}
      {isMobile && isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-gray-800/30 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
      
      {/* Sidebar */}
      <motion.aside 
        className={`${
          isMobile 
            ? isMobileMenuOpen
              ? 'translate-x-0'
              : '-translate-x-full' 
            : 'translate-x-0'
        } fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 text-gray-800 px-3 pt-4 pb-4 min-w-64 border-r border-gray-200`}
        initial={false}
        animate={{ 
          boxShadow: isMobileMenuOpen ? "10px 0 30px rgba(0, 0, 0, 0.1)" : "none" 
        }}
      >
        {/* Mobile close button */}
        {isMobile && (
          <motion.button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close Menu"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-gray-500" />
          </motion.button>
        )}
        
        {/* Top section - Logo */}
        <motion.div 
          className="flex items-center mb-10 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses('gradient')} flex items-center justify-center mr-3 shadow-md ${getColorClasses('border')}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {APP_CONFIG.logo}
          </motion.div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">{APP_CONFIG.name}</span>
        </motion.div>
        
        {/* Main navigation */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.path}>
              <motion.div 
                className={`pl-4 py-3 transition-all rounded-xl ${
                  isActive(item.path)
                    ? `bg-gradient-to-r ${getColorClasses('active')} text-gray-800 ${getColorClasses('border')} shadow-sm`
                    : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                }`}
                onClick={() => handleItemClick(item.path)}
                whileHover={{ scale: isActive(item.path) ? 1.02 : 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center relative z-10">
                  {item.special ? (
                    <>
                      <div className={`w-8 h-8 bg-gradient-to-r ${getColorClasses('gradient')} rounded-lg flex items-center justify-center mr-3 shadow-md`}>
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-lg font-medium">{item.name}</span>
                    </>
                  ) : (
                    <>
                      <div className={`w-8 h-8 ${isActive(item.path) ? 'bg-white' : 'bg-gray-100'} rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
                        <div className={isActive(item.path) ? getColorClasses('icon') : "text-gray-500"}>
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-lg font-medium">{item.name}</span>
                    </>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </nav>
        
        {/* Bottom section */}
        <div className="mt-auto space-y-4">
          {/* Upload Data button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/dashboard/upload">
              <div className={`bg-gradient-to-r ${getColorClasses('gradient')} rounded-xl p-4 text-center transition-all flex items-center justify-center shadow-md ${getColorClasses('border')}`}>
                <Upload className="w-5 h-5 text-white mr-2" />
                <span className="text-lg font-bold text-white">Upload Data</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Upgrade box */}
          <motion.div 
            className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-3">
              <Link href="/pricing">
                <motion.div 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 rounded-xl font-medium shadow-sm flex items-center justify-center space-x-2 mb-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(251,191,36,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Crown className="w-5 h-5 text-amber-200" /> 
                  <span>Upgrade</span>
                </motion.div>
              </Link>
              <p className="text-sm text-gray-500">
                Get unlimited features and access
              </p>
            </div>
            
            <div className="text-sm mb-1 flex justify-between">
              <span>Free Usage</span>
              <span className={getColorClasses('text')}>0/3</span>
            </div>
            
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses('gradient')} w-0`}></div>
            </div>
          </motion.div>
          
          {/* User Profile */}
          <motion.div 
            className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 flex items-center border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getColorClasses('gradient')} flex items-center justify-center mr-3 border border-white/20 shadow-md`}>
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-800">{APP_CONFIG.userInfo.name}</div>
              <div className="text-xs text-gray-500">{APP_CONFIG.userInfo.email}</div>
            </div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
