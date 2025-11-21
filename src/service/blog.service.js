import Blog from "../model/blog.js";

export async function createBlogService(data) {
  const blog = new Blog(data);
  return await blog.save();
}

export async function getPaginatedBlogsService(page, limit) {
  const skip = (page - 1) * limit;
  const blogs = await Blog.find().skip(skip).limit(limit);
  const total = await Blog.countDocuments();
  return {
    blogs,
    total,
    page,
    pages: Math.ceil(total / limit),
  };
}

export async function getBlogByIdService(id) {
  return await Blog.findById(id);
}

export async function deleteBlogByIdService(id) {
  return await Blog.findByIdAndDelete(id);
}

export async function updateBlogByIdService(id, data) {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
}

export async function getBlogBySlugService(slug) {
  return await Blog.findOne({ slug });
}

export async function updateBlogBySlugService(slug, data) {
  return await Blog.findOneAndUpdate({ slug }, data, {
    new: true,
    runValidators: true,
  });
}
