import { Request, Response } from "express";
import { BlogsService } from "./blogs.service";
import httpStatus from "http-status";
import catchAsync from "../../../util/catchAsync";
import sendResponse from "../../../util/sendResponse";
import { jwtHelpers } from "../../../util/jwt/jwt.utils";

// Upload Blog
const uploadBlog = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await BlogsService.uploadBlog(payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Uploaded Successful",
    data: result,
  });
});

// Get All Blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogsService.getAllBlogs();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs Retrieved Successfully",
    data: result,
  });
});

// Get Blog Details
const getBlogDetails = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const result = await BlogsService.getBlogDetails(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Details Retrieved Successfully",
    data: result,
  });
});

// Update Blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await BlogsService.updateBlog(blogId, payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Updated Successfully",
    data: result,
  });
});

// Delete Blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await BlogsService.deleteBlog(blogId, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Updated Successfully",
    data: result,
  });
});

export const BlogsController = {
  uploadBlog,
  getAllBlogs,
  getBlogDetails,
  updateBlog,
  deleteBlog,
};
