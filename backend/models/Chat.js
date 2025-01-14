import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  jobId: { 
    type: mongoose.ObjectId, 
    ref: "Job", 
    required: true 
  },
    participants: [{
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    }],
    messages: [{
      content: { type: String, required: true },
      sender: { type: mongoose.ObjectId, ref: "User", required: true },
      createdAt: { type: Date, default: Date.now },
    }],
  }, { timestamps: true });
  
  const Chat = mongoose.model("Chat", chatSchema);
  
  export default Chat;
  