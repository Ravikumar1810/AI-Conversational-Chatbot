import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend(text);
      setText("");
    }
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (e) => {
      const voiceText = e.results[0][0].transcript;
      setText(voiceText);
    };
  };

  const handleVoiceOutput = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex gap-2 mt-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-600 text-white"
        rows={1}
        placeholder="Type your message..."
      />
      <button
        onClick={() => {
          if (text.trim() !== "") {
            onSend(text);
            setText("");
          }
        }}
        className="bg-orange-500 px-4 py-2 rounded text-white"
      >
        Send
      </button>
      <button
        onClick={handleVoiceInput}
        className="bg-indigo-500 px-2 py-2 rounded text-white"
        title="Voice Input"
      >
        🎤
      </button>
      <button
        onClick={handleVoiceOutput}
        className="bg-emerald-500 px-2 py-2 rounded text-white"
        title="Voice Output"
      >
        🔊
      </button>
    </div>
  );
};

export default InputBox;
