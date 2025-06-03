"use client"
import { signIn } from "@/lib/auth/auth-client"
export default function SignInSocial({
    provider,
    children,
}: {
    provider:
    | "google" | "github" | "apple" | "facebook" | "twitter" | "discord" | "linkedin";
    children: React.ReactNode;
}){
        return (
        <button onClick={async () => {
            await signIn.social({
            provider,
            callbackURL: "/dashboard",
    
        });
        }
        }
        type = "button"
        className="group relative w-full flex items-center justify-center py-3 px-6 border border-white/30 text-sm font-medium rounded-xl text-gray-800 bg-white/95 hover:bg-white hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            
        >
        {children}
    
        </button>
    );
}