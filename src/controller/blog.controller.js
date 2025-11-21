import {
  createBlogService,
  getBlogByIdService,
  getPaginatedBlogsService,
  deleteBlogByIdService,
  updateBlogByIdService,
} from "../service/blog.service.js";

export async function postBlog(req, res) {
  try {
    const blogData = req.body;
    blogData.authorName = req.user?.name || blogData.authorName;
    const blog = await createBlogService(blogData);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getBlogsPaginated(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = await getPaginatedBlogsService(page, limit);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function getBlogById(req, res) {
  try {
    const blog = await getBlogByIdService(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteBlogById(req, res) {
  try {
    const deleted = await deleteBlogByIdService(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateBlogById(req, res) {
  try {
    const updated = await updateBlogByIdService(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Blog not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
