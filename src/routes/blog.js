import express from "express";
import {
  postBlog,
  getBlogById,
  getBlogsPaginated,
  deleteBlogById,
  updateBlogById, // import the new controller
} from "../controller/blog.controller.js";

const router = express.Router();

// GET paginated blogs
router.get("/", getBlogsPaginated);

// GET blog by ID
router.get("/:id", getBlogById);

// DELETE blog by ID
router.delete("/:id", deleteBlogById);

// PUT update blog by ID
router.put("/:id", updateBlogById);

router.post("/", postBlog);

export default router;
