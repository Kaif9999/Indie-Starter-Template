import { signIn } from "@/lib/actions";
import Image from "next/image"
import {toast} from "sonner";
import { useEffect, useActionState } from "react";
import SignInSocial from "./signin-social";

export default function SignInForm() {
    // Fix: Change initial state to match your actions.ts return type
    const initialState = { error: "" };
    //@ts-ignore
    const [state, formAction, pending] = useActionState(signIn, initialState);
    
    useEffect(() => {
        if(state?.error && state.error.length > 0){
            toast.error(state.error)
        }
    }, [state?.error]);

    return (
        <div 
        className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: "url('/greenbg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-md w-full space-y-2 relative z-10">
          {/* Glass morphism card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6">
            {/* Logo - Fixed size */}
            <div className="flex justify-center mb-6">
              <div className="w-64 h-24 rounded-xl p-2">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
  
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-white/70 text-sm">
                Sign in to your account
              </p>
            </div>
  
            {/* Google Sign In Button */}
            <div className="space-y-4 mb-6">
              <SignInSocial provider="google"
              >
              
                <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
             
              </SignInSocial>
            </div>
  
            {/* OR Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-transparent text-white/60 font-medium">OR</span>
              </div>
            </div>
  
            {/* Email and Password Form - Fixed: Removed controlled inputs */}
            <form action={formAction} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-4 py-3 bg-white/10 border border-white/30 backdrop-blur-md rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
  
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 bg-white/10 border border-white/30 backdrop-blur-md rounded-xl placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 sm:text-sm"
                  placeholder="Password"
                />
              </div>
  
              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-white focus:ring-white/50 border-white/30 rounded bg-white/10"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-white/70">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
  
              {/* Sign In Button */}
              <button
                type="submit"
                disabled={ pending}
                aria-disabled={ pending}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-medium text-white bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 backdrop-blur-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {pending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>
  
            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Don't have an account?{' '}
                <a href="/signup" className="text-white font-semibold hover:text-white/80 transition-colors duration-200">
                  Sign up
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
    )
}