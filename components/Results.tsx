"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  Clock,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";

interface ResultsProps {
  score: number;
  totalQuestions: number;
  timeTaken: number;
  quizDuration: number;
  topic: string;
  difficulty: string;
  onStartAgain: () => void;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  timeTaken,
  quizDuration,
  topic,
  difficulty,
  onStartAgain,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [showGrade, setShowGrade] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay showing the grade for dramatic effect
    const timer = setTimeout(() => setShowGrade(true), 1200);

    // Confetti effect for passing grades
    if (percentage >= 60) {
      const duration = 4 * 1000;
      // eslint-disable-next-line no-unused-expressions
      Date.now() + duration;

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;
      const makeConfetti = () => {
        const confettiSettings = {
          particleCount: 3,
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          origin: { y: 0.6 },
          colors: ["#FFD700", "#FFC0CB", "#00FFFF", "#FF4500", "#7FFFD4"],
        };
        confetti(confettiSettings);
      };

      // Initial burst
      if (percentage >= 80) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }

      // Continuous gentle confetti for high scores
      const interval = setInterval(makeConfetti, 200);

      setTimeout(() => clearInterval(interval), duration);

      return () => clearInterval(interval);
    }

    return () => clearTimeout(timer);
  }, [percentage]);

  const getGradeLabel = () => {
    if (percentage >= 90)
      return { label: "A+", color: "from-emerald-400 to-green-500" };
    if (percentage >= 80)
      return { label: "A", color: "from-green-400 to-teal-500" };
    if (percentage >= 70)
      return { label: "B", color: "from-blue-400 to-blue-500" };
    if (percentage >= 60)
      return { label: "C", color: "from-yellow-400 to-amber-500" };
    if (percentage >= 50)
      return { label: "D", color: "from-orange-400 to-orange-500" };
    return { label: "F", color: "from-red-400 to-red-500" };
  };

  const { label: gradeLabel, color: gradeColor } = getGradeLabel();

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You've mastered this topic! 🌟";
    if (percentage >= 80)
      return "Excellent work! You're showing great understanding! 🎉";
    if (percentage >= 70) return "Good job! You're on the right track! 👏";
    if (percentage >= 60) return "Not bad! Keep practicing to improve! 💪";
    if (percentage >= 50)
      return "You passed! But there's room for improvement. 📚";
    return "Keep studying and try again. You can do it! 💡";
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      ref={containerRef}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800">
            {/* Hero Section with Gradient */}
            <div
              className={`relative bg-gradient-to-br ${gradeColor} px-8 pb-10 pt-12 text-white`}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 text-center"
              >
                <h2 className="text-4xl font-bold tracking-tight">
                  Quiz Complete!
                </h2>
                <p className="mt-2 opacity-90">Let&#39;s see how you did</p>
              </motion.div>

              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 80,
                  }}
                  className="relative"
                >
                  {/* Circular Score Display */}
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-center"
                    >
                      <div className="text-5xl font-bold">{percentage}%</div>
                      <div className="mt-1 text-sm opacity-80">
                        {score} of {totalQuestions}
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated Grade Badge */}
                  {showGrade && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg"
                    >
                      <span
                        className={`bg-gradient-to-br bg-clip-text text-xl font-bold text-transparent ${gradeColor}`}
                      >
                        {gradeLabel}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Sparkles for high scores */}
              {percentage >= 80 && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-12 top-12 opacity-20"
                  >
                    <Sparkles size={40} />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-12 right-12 opacity-20"
                  >
                    <Sparkles size={40} />
                  </motion.div>
                </>
              )}
            </div>

            {/* Results Content */}
            <div className="px-6 py-8 sm:px-10">
              {/* Performance Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mb-10 text-center"
              >
                <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  {getPerformanceMessage()}
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                {[
                  {
                    label: "Time Taken",
                    value: formatTime(timeTaken),
                    icon: Clock,
                    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
                  },
                  {
                    label: "Topic",
                    value: topic.charAt(0).toUpperCase() + topic.slice(1),
                    icon: Target,
                    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
                  },
                  {
                    label: "Difficulty",
                    value:
                      difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
                    icon: Award,
                    color:
                      "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
                  },
                  {
                    label: "Time Efficiency",
                    value:
                      Math.round(
                        ((quizDuration - timeTaken) / quizDuration) * 100,
                      ) + "% Faster",
                    icon: Clock,
                    color: "text-amber-500 bg-amber-50 dark:bg-amber-900/20",
                    condition: timeTaken < quizDuration,
                  },
                ]
                  .filter((item) => item.condition !== false)
                  .map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="flex items-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className={`rounded-lg p-3 ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="mb-8 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <button
                  onClick={onStartAgain}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg sm:w-auto"
                >
                  Try Another Quiz
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    const text = `I scored ${percentage}% (${gradeLabel}) on the ${topic} quiz at ${difficulty} difficulty! 🎓 #MathQuiz`;
                    if (navigator.share) {
                      navigator.share({
                        title: "My Math Quiz Results",
                        text,
                      });
                    } else {
                      navigator.clipboard.writeText(text);
                      alert("Results copied to clipboard!");
                    }
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:w-auto"
                >
                  <Share2 className="h-4 w-4" />
                  Share Results
                </button>
              </motion.div>

              {/* Performance Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="rounded-xl bg-gray-50 p-6 dark:bg-gray-700/30"
              >
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Performance Analysis
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  {percentage >= 80 ? (
                    <p>
                      🌟{" "}
                      <span className="font-medium">
                        Excellent performance!
                      </span>{" "}
                      Consider trying a higher difficulty level or exploring
                      more advanced topics.
                    </p>
                  ) : percentage >= 60 ? (
                    <p>
                      📚 <span className="font-medium">Good effort!</span> Focus
                      on the questions you missed and review those concepts for
                      better understanding.
                    </p>
                  ) : (
                    <p>
                      💡 <span className="font-medium">Keep practicing!</span>{" "}
                      Consider reviewing the fundamentals and trying the quiz
                      again at a more comfortable difficulty level.
                    </p>
                  )}

                  {timeTaken > quizDuration * 0.8 && (
                    <p>
                      ⏱️ <span className="font-medium">Time management:</span>{" "}
                      You might want to work on your speed. Practice similar
                      problems to improve your timing.
                    </p>
                  )}

                  <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">
                    Remember: Consistent practice is key to mastering
                    mathematics!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Results;
