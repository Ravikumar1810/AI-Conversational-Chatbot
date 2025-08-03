import React from "react"
import { BotIcon } from "lucide-react"

const MessageBubble = ({ sender, message }) => {
  const isBot = sender === "bot"

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xl px-4 py-3 rounded-lg text-sm ${
          isBot
            ? "bg-[#1c1c1c] text-white"
            : "bg-orange-500 text-white"
        } shadow-md`}
      >
        <div className="flex items-center gap-2 mb-1">
          {isBot && <BotIcon size={16} className="text-orange-500" />}
          <span className="text-xs font-medium">{isBot ? "AI Companion" : "You"}</span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MessageBubble
