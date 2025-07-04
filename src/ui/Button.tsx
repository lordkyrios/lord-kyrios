import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [controls]);

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          🎬 Faith-Based AI Video Studio
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Create stunning Bible-inspired storyboards, motion videos, and AI-powered scenes—all in one platform.
        </p>

        <div className="mt-10">
          <a href="/generate">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition text-lg">
              Start Creating
            </button>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
