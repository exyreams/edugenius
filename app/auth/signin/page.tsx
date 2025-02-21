"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { useEffect } from "react";

import logo from "@/public/logo.png";

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to home if already signed in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  return (
    <div className="dark:bg-midnight flex min-h-screen flex-col items-center justify-center dark:text-white">
      <div className="w-full max-w-md rounded-xl border border-gray-700/30 bg-gradient-to-br from-gray-200 to-indigo-200 p-8 shadow-lg dark:border-white/30 dark:from-gray-950 dark:to-gray-800">
        <div className="mb-6 flex justify-center">
          <Image src={logo} alt="Edugenius Logo" width={60} height={60} />
        </div>
        <h1 className="mb-6 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-gray-200 dark:to-indigo-200">
          Log in to edugenius
        </h1>

        {status === "loading" && (
          <p className="mb-4 text-center">Checking authentication status...</p>
        )}

        {status !== "authenticated" && (
          <>
            <button
              onClick={() => signIn("github")}
              className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-3 text-white transition-colors hover:bg-gray-700"
            >
              <BsGithub size={20} />
              <span>Sign in with GitHub</span>
            </button>

            <button
              onClick={() => signIn("discord")}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#5865F2] to-[#404EED] py-3 text-white transition-colors hover:from-[#4752C4] hover:to-[#3A44B4]"
            >
              <BsDiscord size={20} />
              <span>Sign in with Discord</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
