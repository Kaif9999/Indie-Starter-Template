"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function SignIn() {
  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Continue with Google clicked');
  };

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
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Glass morphism card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-lg h-md rounded-2xl p-3 shadow-lg">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-white/80 text-lg">
              Sign in to your account
            </p>
          </div>

          {/* Google Sign In Button */}
          <div className="space-y-6">
            <button
              onClick={handleGoogleSignIn}
              className="group relative w-full flex items-center justify-center py-4 px-6 border border-white/30 text-base font-semibold rounded-2xl text-gray-800 bg-white/95 hover:bg-white hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Signup with Google
            </button>
            </div>
          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Already a Builder{' '}
              <a href="/signin" className="text-white font-semibold hover:text-white/80 transition-colors duration-200">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Security note */}
        <div className="text-center">
          <p className="text-white/60 text-xs flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}