"use client";
import { LogOutIcon } from "lucide-react";
import {signOut} from "@/lib/auth/auth-client"
import { useRouter } from "next/navigation";

export default function SignOutButton( ) {
    const router = useRouter();
  const handleSignOut = async () => {
    await signOut({
        fetchOptions: {
            onSuccess :() => {
                router.push('/signin');
            }
    },
  })
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      <LogOutIcon className="w-5 h-5" />
      Sign Out
    </button>
  );
}