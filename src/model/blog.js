import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  bannerImageUrl: { type: String },
});

export default mongoose.model("Blog", blogSchema);
