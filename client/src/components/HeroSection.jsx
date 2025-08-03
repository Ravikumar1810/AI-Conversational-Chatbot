import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import FeatureCard from "./FeatureCard"
import { BotIcon, Heart, Brain, Sparkles, Zap } from "lucide-react"

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center"
    >
      <BotIcon size={56} className="text-orange-500 mb-6 drop-shadow-md" />

      <h1 className="text-5xl font-bold text-white mb-4">AI Companion</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Your next-generation AI companion built for{" "}
        <span className="text-orange-500 font-semibold">
          meaningful, emotionally-aware conversations.
        </span>
      </p>

      <button
        onClick={() => navigate("/chat")}
        className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-md"
      >
        Start Conversation →
      </button>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <FeatureCard
          title="Emotionally Aware"
          description="Understands your feelings and responds accordingly."
          icon={<Heart className="text-red-500" />}
        />
        <FeatureCard
          title="Long-term Memory"
          description="Remembers your name, preferences, and mood."
          icon={<Brain className="text-blue-400" />}
        />
        <FeatureCard
          title="Human-like Responses"
          description="Natural conversations that feel real and personalized."
          icon={<Sparkles className="text-orange-400" />}
        />
        <FeatureCard
          title="Instant Reactions"
          description="Responds in real-time with expressive animations."
          icon={<Zap className="text-yellow-400" />}
        />
      </div>
    </motion.div>
  )
}

export default HeroSection
