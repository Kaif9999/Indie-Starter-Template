"use client";

import Sidebar from "@/components/sidebar";
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 md:ml-64 min-h-screen bg-white">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
