import Comment from "../model/comment.js";

export async function createComment(data) {
  const comment = new Comment(data);
  return await comment.save();
}

export async function getCommentsPaginatedService(blogId, page, limit) {
  const skip = (page - 1) * limit;
  const query = blogId ? { blogId } : {};
  const comments = await Comment.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ date: -1 });
  const total = await Comment.countDocuments(query);
  return {
    comments,
    total,
    page,
    pages: Math.ceil(total / limit),
  };
}

export async function getCommentByIdService(id) {
  return await Comment.findById(id);
}

export async function updateCommentByIdService(id, data) {
  return await Comment.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteCommentByIdService(id) {
  return await Comment.findByIdAndDelete(id);
}
