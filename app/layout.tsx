import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Figtree } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import SessionProvider from "@/components/SessionProvider";
import { Toaster } from "sonner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edugenius",
  description: "Interactive learning platform for mathematics and physics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SessionProvider>
            <Toaster position="top-center" />
            <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-300 to-indigo-300 font-figtree dark:from-gray-950 dark:to-gray-800">
              <Navbar />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
