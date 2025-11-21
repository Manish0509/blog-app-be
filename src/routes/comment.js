import express from "express";
import {
  postComment,
  getCommentsPaginated,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} from "../controller/comment.controller.js";

const router = express.Router();

// GET paginated comments (optionally by blogId)
router.get("/", getCommentsPaginated);

// GET comment by ID
router.get("/:id", getCommentById);

// POST new comment
router.post("/", postComment);

// PUT update comment by ID
router.put("/:id", updateCommentById);

// DELETE comment by ID
router.delete("/:id", deleteCommentById);

export default router;
