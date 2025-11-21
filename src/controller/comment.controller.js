import {
  createComment,
  getCommentsPaginatedService,
  getCommentByIdService,
  updateCommentByIdService,
  deleteCommentByIdService,
} from "../service/comment.service.js";

export async function postComment(req, res) {
  try {
    const commentData = req.body;
    commentData.username = req.user?.name || commentData.username;
    const comment = await createComment(commentData);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getCommentsPaginated(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const blogId = req.query.blogId;
    const result = await getCommentsPaginatedService(blogId, page, limit);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getCommentById(req, res) {
  try {
    const comment = await getCommentByIdService(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateCommentById(req, res) {
  try {
    const updated = await updateCommentByIdService(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Comment not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteCommentById(req, res) {
  try {
    const deleted = await deleteCommentByIdService(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Comment not found" });
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
