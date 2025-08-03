import axios from "axios";
import Chat from "../models/chatModel.js";

export const generateResponse = async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    const response = await axios.post(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    model: "mistralai/mistral-7b-instruct",
    messages: [
      { role: "system", content: "You are a helpful AI assistant." },
      { role: "user", content: message },
    ],
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);


    const botMessage = response.data.choices[0].message.content;

    const newChat = new Chat({
      conversationId: conversationId || new Date().getTime().toString(),
      messages: [
        { role: "user", content: message },
        { role: "assistant", content: botMessage },
      ],
    });

    await newChat.save();

    res.json({
      response: botMessage,
      conversationId: newChat.conversationId,
    });
  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate response." });
  }
};
