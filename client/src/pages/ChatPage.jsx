import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import InputBox from "../components/InputBox";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: text,
        conversationId,
      });

      const botMsg = { role: "assistant", content: res.data.response };
      setMessages((prev) => [...prev, botMsg]);

      if (!conversationId) setConversationId(res.data.conversationId);
    } catch (err) {
      console.error("API Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setConversationId(null);
  };

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      <Sidebar onNewChat={handleNewChat} />
      <div className="flex-1 flex flex-col p-4 overflow-y-hidden">
        <ChatWindow messages={messages} loading={loading} />
        <InputBox onSend={handleSend} />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;
