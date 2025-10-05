import express from "express";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { BlogsValidation } from "./blogs.validation";
import { BlogsController } from "./blogs.controller";

const router = express.Router();

router.post(
  "/upload",
  zodValidationRequest(BlogsValidation.blogsZodSchema),
  BlogsController.uploadBlog
);

router.get("/getAll", BlogsController.getAllBlogs);

router.get("/getDetails/:id", BlogsController.getBlogDetails);

router.get("/update/:id", BlogsController.updateBlog);
router.get("/delete/:id", BlogsController.deleteBlog);

export const BlogsRouter = router;
