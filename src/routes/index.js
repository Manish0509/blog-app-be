import blogRoutes from "./blog.js";
import commentRoutes from "./comment.js";

export default function configRoutes(app) {
  app.use("/blog", blogRoutes);
  app.use("/comment", commentRoutes);

  app.get("/", (req, res) => {
    res.send("API is running");
  });
}
