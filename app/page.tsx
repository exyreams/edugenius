import Link from "next/link";
import { BookOpen, Brain, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-20 text-center">
        <h1 className="heading mb-6 text-5xl md:text-6xl">
          Master Mathematics & Physics
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-70">
          Interactive learning platform with AI-powered guidance, real-time
          feedback, and engaging challenges to enhance your understanding.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Learn Mathematics Button */}
          <Link
            href="/mathematics"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-600 hover:shadow-lg"
          >
            {/* Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-100 transition-opacity duration-300 hover:opacity-0"></span>
            {/* Hover Effect Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            {/* Button Text */}
            <span className="relative z-10">Learn Mathematics</span>
          </Link>

          {/* Explore Physics Button */}
          <Link
            href="/physics"
            className="rounded-full border border-white/20 px-6 py-3 transition-colors hover:bg-white/10"
          >
            Explore Physics
          </Link>
        </div>
      </section>

      <section className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="glass space-y-4 p-6">
          <BookOpen className="h-10 w-10 text-blue-400" />
          <h3 className="text-xl font-semibold">Interactive Learning</h3>
          <p className="opacity-70">
            Step-by-step guidance through complex problems with real-time
            feedback.
          </p>
        </div>

        <div className="glass space-y-4 p-6">
          <Brain className="h-10 w-10 text-purple-400" />
          <h3 className="text-xl font-semibold">AI-Powered Tutoring</h3>
          <p className="opacity-70">
            Personalized learning experience adapted to your pace and style.
          </p>
        </div>

        <div className="glass space-y-4 p-6">
          <Trophy className="h-10 w-10 text-yellow-400" />
          <h3 className="text-xl font-semibold">Gamified Progress</h3>
          <p className="opacity-70">
            Earn achievements and track your progress through interactive
            challenges.
          </p>
        </div>
      </section>

      <section className="glass mb-20 p-8 text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-4xl font-bold text-blue-400">1000+</h4>
            <p className="opacity-70">Practice Problems</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-purple-400">12</h4>
            <p className="opacity-70">Mathematics Topics</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-yellow-400">24/7</h4>
            <p className="opacity-70">AI Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
