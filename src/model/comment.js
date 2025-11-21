import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
  content: { type: String, required: true },
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
  rating: { type: Number, min: 0, max: 5 },
});

export default mongoose.model("Comment", commentSchema);
