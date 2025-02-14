/* eslint-disable */
"use client";

import Link from "next/link";
import { Computer, LogOut, Moon, Sun, SunMoon, UserCircle } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { signIn, signOut, useSession } from "next-auth/react";
import logo from "@/public/logo.png";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleThemeChange = (theme: SetStateAction<string>) => {
    setTheme(theme);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const titleMap = {
      "/mathematics": "Mathematics | Edugenius",
      "/physics": "Physics | Edugenius",
      "/chemistry": "Chemistry | Edugenius",
    } as const;

    document.title =
      Object.entries(titleMap).find(([key]) => pathname.startsWith(key))?.[1] ||
      "Edugenius";
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 rounded-b-xl border-b border-black/30 bg-gradient-to-br from-gray-200 to-indigo-200 px-6 py-3 dark:border-white/30 dark:from-gray-950 dark:to-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src={logo}
              alt="edugenius-logo"
              className="h-12 w-12 text-blue-400"
            />
            <span className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-2xl font-bold text-transparent dark:bg-gradient-to-r dark:from-gray-200 dark:to-indigo-200">
              edugenius
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-5 md:flex">
            <div className="hidden space-x-5 md:flex">
              <Link
                href="/mathematics"
                className={`flex items-center space-x-2 rounded-lg p-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  pathname.startsWith("/mathematics")
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                <span className="text-md font-semibold text-black dark:text-white">
                  Mathematics
                </span>
              </Link>
              <Link
                href="/physics"
                className={`flex items-center space-x-2 rounded-lg p-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  pathname.startsWith("/physics")
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                <span className="text-md font-semibold text-black dark:text-white">
                  Physics
                </span>
              </Link>
              <Link
                href="/chemistry"
                className={`flex items-center space-x-2 rounded-lg p-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  pathname.startsWith("/chemistry")
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                <span className="text-md font-semibold text-black dark:text-white">
                  Chemistry
                </span>
              </Link>
            </div>

            {/* Desktop Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex rounded-lg border border-black/20 bg-gray-200 px-4 py-2 backdrop-blur-lg transition-all duration-300 hover:bg-gray-100 dark:border-white/20 dark:bg-gray-900 dark:hover:bg-gray-700"
              >
                <SunMoon className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-6 w-40 overflow-hidden rounded-lg border-2 border-black/20 bg-gray-400/80 bg-gradient-to-br from-gray-200 to-indigo-200 p-2 text-black shadow-lg backdrop-blur-lg dark:border-white/20 dark:from-gray-950 dark:to-gray-800 dark:text-white">
                  <button
                    onClick={() => handleThemeChange("light")}
                    className="flex w-full items-center space-x-2 px-4 py-2 hover:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Sun className="h-5 w-5" />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => handleThemeChange("dark")}
                    className="flex w-full items-center space-x-2 px-4 py-2 hover:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Moon className="h-5 w-5" />
                    <span>Dark</span>
                  </button>
                  <button
                    onClick={() => handleThemeChange("system")}
                    className="flex w-full items-center space-x-2 px-4 py-2 hover:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Computer className="h-5 w-5" />
                    <span>System</span>
                  </button>
                </div>
              )}
            </div>

            {/* Desktop User Dropdown */}
            <div className="relative" ref={userDropdownRef}>
              {session ? (
                <>
                  <button
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src={session.user?.image!}
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </button>

                  {isUserDropdownOpen && (
                    <div className="dark:bg-midnight/85 absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-lg border border-white/20 bg-gray-400/80 text-black shadow-lg backdrop-blur-lg dark:text-white">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:rounded-lg hover:bg-gray-300/40 dark:hover:bg-white/20"
                      >
                        <div className="flex items-center space-x-2">
                          <UserCircle className="h-5 w-5" />
                          <span>Dashboard</span>
                        </div>
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="block w-full px-4 py-2 text-left hover:rounded-lg hover:bg-gray-300/40 dark:hover:bg-white/20"
                      >
                        <div className="flex items-center space-x-2">
                          <LogOut className="h-5 w-5" />
                          <span>Sign out</span>
                        </div>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="rounded-lg border border-black/20 bg-gray-200 px-4 py-2 font-semibold backdrop-blur-lg transition-all duration-300 hover:bg-gray-100 dark:border-white/20 dark:bg-gray-900 dark:hover:bg-gray-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="rounded-lg p-2 hover:bg-white/20 md:hidden"
          >
            {!isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
              >
                <svg
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="dark:bg-midnight/85 absolute left-0 right-0 top-full rounded-b-xl bg-gradient-to-br from-gray-200 to-indigo-200 backdrop-blur-sm dark:from-gray-950 dark:to-gray-800 md:hidden"
          >
            <div className="p-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="/mathematics"
                  className={`rounded-lg p-2  ${
                    pathname === "/mathematics"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-md block text-center font-semibold text-black dark:text-white">
                    Mathematics
                  </span>
                </Link>

                <Link
                  href="/physics"
                  className={`rounded-lg p-2  ${
                    pathname === "/physics"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-md block text-center font-semibold text-black dark:text-white">
                    Physics
                  </span>
                </Link>

                <Link
                  href="/chemistry"
                  className={`rounded-lg p-2  ${
                    pathname === "/chemistry"
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-md block text-center font-semibold text-black dark:text-white">
                    Chemistry
                  </span>
                </Link>
              </div>

              {/* Mobile User Section */}
              <div className="mt-4 pt-4">
                {session ? (
                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center justify-center space-x-2 rounded-lg p-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <UserCircle className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="flex w-full items-center justify-center space-x-2 rounded-lg p-2 hover:bg-indigo-100 dark:hover:bg-gray-700"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="w-full rounded-lg border border-black/20 bg-gray-200 px-4 py-2 font-semibold backdrop-blur-lg transition-all duration-300 hover:bg-gray-100 dark:border-white/20 dark:bg-gray-900 dark:hover:bg-gray-700"
                  >
                    Sign In
                  </button>
                )}
              </div>

              {/* Mobile Theme Selector - Below Sign In */}
              <div className="mt-4 flex flex-col items-center justify-around">
                <div className="flex gap-4">
                  <button
                    onClick={() => handleThemeChange("light")}
                    aria-label="Enable light theme"
                    className={`flex items-center justify-center rounded-lg p-2 ${
                      resolvedTheme === "light"
                        ? "bg-gray-100 border border-black/20 dark:border-white/20 text-black dark:bg-gray-700 dark:text-white"
                        : "hover:bg-gray-100 border border-black/20 dark:border-white/20 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Sun className="h-6 w-6" />
                    <span className="ml-2">Light</span>
                  </button>
                  <button
                    onClick={() => handleThemeChange("dark")}
                    aria-label="Enable dark theme"
                    className={`flex items-center justify-center rounded-lg p-2 ${
                      resolvedTheme === "dark"
                        ? "bg-gray-100 border border-black/20 dark:border-white/20 text-black dark:bg-gray-700 dark:text-white"
                        : "hover:bg-gray-100 border border-black/20 dark:border-white/20 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Moon className="h-6 w-6" />
                    <span className="ml-2">Dark</span>
                  </button>
                  <button
                    onClick={() => handleThemeChange("system")}
                    aria-label="Use system theme"
                    className={`flex items-center justify-center rounded-lg p-2 ${
                      resolvedTheme === "system"
                        ? "bg-gray-100 border border-black/20 dark:border-white/20 text-black dark:bg-gray-700 dark:text-white"
                        : "hover:bg-gray-100 border border-black/20 dark:border-white/20 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Computer className="h-6 w-6" />
                    <span className="ml-2">System</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-b-xl border-b border-black/30 bg-gradient-to-br from-gray-200 to-indigo-200 dark:border-white/30 dark:from-gray-950 dark:to-gray-800 md:hidden"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
