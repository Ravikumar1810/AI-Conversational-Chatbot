import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  messages: [
    {
      role: { type: String, enum: ["user", "assistant"], required: true },
      content: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
