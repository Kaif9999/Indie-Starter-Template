"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [error, setError] = useState('');

  // Fetch total waitlisted users on component mount
  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const fetchWaitlistCount = async () => {
    try {
      const response = await fetch('/api/waitlist/count');
      if (response.ok) {
        const data = await response.json();
        setTotalUsers(data.count);
      }
    } catch (error) {
      console.error('Error fetching waitlist count:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTotalUsers(data.totalCount);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: "url('/blue.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <motion.div 
          className="max-w-md w-full space-y-2 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>

            <h1 className="text-3xl font-bold text-white mb-4">
              You're on the list!
            </h1>
            <p className="text-white/80 mb-6">
              Thanks for joining our waitlist. We'll notify you when we launch!
            </p>

            <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
              <div className="flex items-center justify-center text-white">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">{totalUsers.toLocaleString()}</span>
                <span className="text-white/70 ml-1">people waiting</span>
              </div>
            </div>

            <motion.a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url('/blue.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <motion.div 
        className="max-w-md w-full space-y-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
              Join the Waitlist
            </h1>
            <p className="text-white/70 text-lg">
              Be the first to know when we launch
            </p>
          </motion.div>

          {/* Current waitlist count */}
          <motion.div 
            className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center text-white">
              <Users className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-2xl font-bold">{totalUsers.toLocaleString()}</span>
              <span className="text-white/70 ml-2">people waiting</span>
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-4 py-4 bg-white/10 border border-white/30 backdrop-blur-md rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-lg"
                placeholder="Enter your email address"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                className="text-red-300 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || !email}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining waitlist...
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Features/Benefits */}
          <motion.div 
            className="mt-8 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
              <span>Early access to new features</span>
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
              <span>Exclusive beta testing opportunities</span>
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
              <span>Special launch day discounts</span>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-white/60 text-sm">
              Already have an account?{' '}
              <a href="/signin" className="text-white font-semibold hover:text-white/80 transition-colors duration-200">
                Sign in
              </a>
            </p>
          </motion.div>
        </div>

        {/* Security note */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/60 text-xs flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            We respect your privacy and won't spam you
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}