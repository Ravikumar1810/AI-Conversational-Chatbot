
import axios from "axios";

export const sendMessageToBot = async (message) => {
  try {
    const res = await axios.post("http://localhost:5000/api/chat", { message });
    return res.data.response;
  } catch (error) {
    console.error("API Error:", error);
    return "⚠️ Failed to get response.";
  }
};
