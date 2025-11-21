import express from "express";
import {
  postBlog,
  getBlogById,
  getBlogsPaginated,
  deleteBlogById,
  updateBlogById,
  getBlogBySlug,
  updateBlogBySlug, // import the new controller
} from "../controller/blog.controller.js";

const router = express.Router();

// GET paginated blogs
router.get("/", getBlogsPaginated);

// GET blog by ID
router.get("/:id", getBlogById);

// GET blog by slug
router.get("/slug/:slug", getBlogBySlug);

// DELETE blog by ID
router.delete("/:id", deleteBlogById);

// PUT update blog by ID
router.put("/:id", updateBlogById);

// PUT update blog by slug
router.put("/slug/:slug", updateBlogBySlug);

router.post("/", postBlog);

export default router;
