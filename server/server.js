import dotenv from "dotenv";
dotenv.config(); 

console.log("💡 Using API Key:", process.env.OPENROUTER_API_KEY); 

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";

connectDB();

const app = express();
app.use(cors(
  {
    origin: "http://localhost:5173", 
    credentials: true,
  }
));
app.use(express.json());

app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
