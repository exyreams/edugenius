"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsDiscord, BsGithub } from "react-icons/bs";
import Image from "next/image";
import logo from "@/public/logo.png";

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to home if already signed in
  if (status === "authenticated") {
    router.replace("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400/80 font-figtree dark:bg-midnight text-black dark:text-white">
      <div className="glass p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Edugenius Logo" width={60} height={60} />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
          Sign In to Edugenius
        </h1>

        {status === "loading" && (
          <p className="text-center">Checking authentication status...</p>
        )}

        {status !== "authenticated" && (
          <>
            <button
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center gap-2 py-3 mb-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              <BsGithub size={20} />
              <span>Sign in with GitHub</span>
            </button>

            <button
              onClick={() => signIn("discord")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
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
