import mongoose from "mongoose";



const MessageSchema = new mongoose.Schema({

  sender: { type: String, ref: "User" },
  recipient: { type: String, ref: "User" },

  content: { type: String, required: true },

  timestamp: { type: Date, default: Date.now }

});



module.exports = mongoose.model("Message", MessageSchema);