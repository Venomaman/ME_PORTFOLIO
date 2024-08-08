import mongoose from "mongoose";

const messgaeSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [3, "Name must contains at least 3 characters!"],
  },
  subject: {
    type: String,
    minLength: [3, "subject must contains at least 3 characters!"],
  },
  message: {
    type: String,
    minLength: [3, "message must contains at least 3 characters!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Message = mongoose.model("Message", messgaeSchema);
