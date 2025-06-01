"use client";

import React from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Clock,
  Users,
  Activity,
  Database,
  ChevronRight,
  Home,
  FileText,
  MessageSquare,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Same configuration as in sidebar.tsx for consistency
const APP_CONFIG = {
  name: "AppDash",
  description: "Your all-in-one dashboard",
  primaryColor: "blue",
  userInfo: {
    name: "User Name",
    email: "user@example.com"
  }
};

const DASHBOARD_DATA = {
  stats: [
    { title: 'Analytics', icon: <BarChart2 />, value: 7, change: '+1 new today', color: 'blue' },
    { title: 'Reports', icon: <Activity />, value: 4, change: 'Last updated 2h ago', color: 'green' },
    { title: 'Documents', icon: <FileText />, value: 10, change: '+2 new today', color: 'purple' },
    { title: 'Users', icon: <Users />, value: 3, change: 'Last updated 5h ago', color: 'amber' }
  ],
  activities: [
    { text: 'Created new document', time: '1 hour ago', icon: <Database />, color: 'blue' },
    { text: 'Ran analysis on data', time: '2 hours ago', icon: <Activity />, color: 'green' },
    { text: 'Generated monthly report', time: '3 hours ago', icon: <TrendingUp />, color: 'purple' },
    { text: 'Added new dataset', time: '4 hours ago', icon: <Database />, color: 'amber' }
  ],
  quickActions: [
    { title: 'Create Document', color: 'blue', icon: <FileText />, path: '/dashboard/documents/new' },
    { title: 'Run Analysis', color: 'green', icon: <Activity />, path: '/dashboard/analysis/new' },
    { title: 'Generate Report', color: 'amber', icon: <TrendingUp />, path: '/dashboard/reports/new' },
  ]
};

export default function Dashboard() {
  // Helper function to get color classes based on color name
  const getColorClasses = (colorName: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-500",
        text: "text-blue-600",
        light: "text-blue-500",
        lightBg: "bg-blue-50",
        border: "border-blue-200",
        softBorder: "border-blue-100"
      },
      green: {
        gradient: "from-green-500 to-green-600",
        bg: "bg-green-500",
        text: "text-green-600",
        light: "text-green-500",
        lightBg: "bg-green-50",
        border: "border-green-200",
        softBorder: "border-green-100"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-500",
        text: "text-purple-600",
        light: "text-purple-500",
        lightBg: "bg-purple-50",
        border: "border-purple-200",
        softBorder: "border-purple-100"
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        bg: "bg-amber-500",
        text: "text-amber-600",
        light: "text-amber-500",
        lightBg: "bg-amber-50",
        border: "border-amber-200",
        softBorder: "border-amber-100"
      },
      pink: {
        gradient: "from-pink-500 to-pink-600",
        bg: "bg-pink-500",
        text: "text-pink-600",
        light: "text-pink-500",
        lightBg: "bg-pink-50",
        border: "border-pink-200",
        softBorder: "border-pink-100"
      }
    };

    return colorMap[colorName]?.[type] || colorMap.blue[type];
  };

  return (
    <div className="rounded-lg space-y-8 p-4 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Welcome to {APP_CONFIG.name}</h1>
        <p className="text-gray-600">{APP_CONFIG.description}</p>
      </motion.div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {DASHBOARD_DATA.stats.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
              borderColor: getColorClasses(item.color, 'softBorder')
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${getColorClasses(item.color, 'gradient')} flex items-center justify-center shadow-md`}>
                <div className="text-white w-5 h-5">
                  {item.icon}
                </div>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-1">{item.value}</p>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">
                {item.change}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Recent activity */}
      <motion.div 
        className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          <Link href="/dashboard/activity">
            <motion.button 
              className={`text-sm ${getColorClasses(APP_CONFIG.primaryColor, 'text')} flex items-center`}
              whileHover={{ x: 3 }}
            >
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </Link>
        </div>
        
        <div className="space-y-4">
          {DASHBOARD_DATA.activities.map((activity, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-4 border-b border-gray-50 pb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              whileHover={{ 
                backgroundColor: getColorClasses(activity.color, 'lightBg'), 
                borderRadius: "0.5rem",
                x: 5
              }}
            >
              <div className={`w-10 h-10 rounded-xl ${getColorClasses(activity.color, 'lightBg')} flex items-center justify-center border ${getColorClasses(activity.color, 'softBorder')} shadow-sm`}>
                <div className={getColorClasses(activity.color, 'light')}>
                  {activity.icon}
                </div>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{activity.text}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Quick Actions */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {DASHBOARD_DATA.quickActions.map((action, index) => (
          <Link href={action.path} key={index}>
            <motion.div 
              className={`bg-gradient-to-r ${getColorClasses(action.color, 'gradient')} rounded-xl p-4 text-white flex items-center justify-between cursor-pointer shadow-md border border-white/20`}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-semibold">{action.title}</span>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                {action.icon}
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
