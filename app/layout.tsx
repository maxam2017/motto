import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ScrollText } from "lucide-react";

import { cn } from "@/utils/cn";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motto",
  description:
    "Be kind and patient. Try to understand those you don't understand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full flex flex-col", inter.className)}>
        <header className="px-6 py-4 text-black">
          <h1 className="flex space-x-2 items-center font-bold text-lg">
            <ScrollText className="w-8 h-8" /> <span>Motto</span>
          </h1>
        </header>
        {children}
        <footer>
          <div className="flex justify-center py-4 text-gray-500 text-xs">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://maxam.dev" className="text-blue-500">
                maxam.dev
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
