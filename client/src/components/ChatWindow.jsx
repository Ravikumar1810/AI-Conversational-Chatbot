import React from "react";

const ChatWindow = ({ messages, loading }) => {
  return (
    <div className="flex-1 overflow-y-auto pr-4 mb-2">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
        >
          <div
            className={`inline-block p-2 rounded-md max-w-[70%] whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-700 text-white"
            }`}
          >
            {/* Split assistant response into points if numbered */}
            {msg.role === "assistant" ? (
              msg.content.split(/(?=\d+\.)/).map((line, idx) => (
                <div key={idx} className="mb-1">
                  {line.trim()}
                </div>
              ))
            ) : (
              <div>{msg.content}</div>
            )}
          </div>
        </div>
      ))}

      {loading && (
        <div className="italic text-gray-400 px-2 mt-2">Typing...</div>
      )}
    </div>
  );
};

export default ChatWindow;
