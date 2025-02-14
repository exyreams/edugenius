import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  BsDiscord,
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-8 rounded-t-2xl border-t border-gray-700/30 bg-gradient-to-br from-gray-200/80 to-indigo-200/80 py-6 text-black shadow-md dark:border-white/30 dark:from-gray-950/80 dark:to-gray-800/80 dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 md:flex-row md:px-6">
        {/* Logo and Description Section */}
        <div className="mb-4 flex items-center justify-between space-x-2 md:mb-0 md:flex-row md:space-x-4 md:space-y-0">
          <Image
            src={logo}
            alt="Edugenius Logo"
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <h3 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-gray-200 dark:to-indigo-200 md:text-xl">
            edugenius
          </h3>
        </div>

        <p className="mb-4 text-center text-sm leading-relaxed opacity-70 md:mb-0 md:text-left">
          Empowering minds through interactive education in Mathematics,
          Physics, and Chemistry.
        </p>

        {/* Connect Section */}
        <div className="flex items-center justify-between space-x-2 md:flex-row md:space-x-4 md:space-y-0">
          <Link
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <BsDiscord className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://github.com/exyreams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <BsGithub className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <BsLinkedin className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <BsTelegram className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link
            href="https://x.com/exyream"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <BsTwitterX className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-gray-600/40 to-transparent dark:via-gray-400/40 md:w-48" />

      {/* Copyright Section */}
      <div className="mt-4 text-center text-xs opacity-70 md:text-sm">
        © {new Date().getFullYear()} Edugenius. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
