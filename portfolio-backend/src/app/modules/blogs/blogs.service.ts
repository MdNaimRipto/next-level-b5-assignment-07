import httpStatus from "http-status";
import { Blogs } from "./blogs.schema";
import { IBlogs } from "./blogs.interface";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../util/jwt/jwt.utils";
import { envConfig } from "../../../config/config";

const uploadBlog = async (payload: IBlogs, token: string) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);
  await Blogs.create(payload);
  return null;
};

const getAllBlogs = async () => {
  const result = await Blogs.find().sort({ createdAt: -1 });
  return result;
};

const getBlogDetails = async (blogId: string) => {
  const result = await Blogs.findOne({ _id: blogId });
  return result;
};

const updateBlog = async (
  blogId: string,
  payload: Partial<IBlogs>,
  token: string
) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);
  const isBlogExists = await Blogs.findOne({ _id: blogId });
  if (!isBlogExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog does not exists");
  }

  await Blogs.findOneAndUpdate({ _id: blogId }, payload);
  return null;
};

const deleteBlog = async (blogId: string, token: string) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);
  const isBlogExists = await Blogs.findOne({ _id: blogId });
  if (!isBlogExists) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Blog does not exists or already deleted"
    );
  }

  await Blogs.findOneAndDelete({ _id: blogId });
  return null;
};

export const BlogsService = {
  uploadBlog,
  getAllBlogs,
  getBlogDetails,
  updateBlog,
  deleteBlog,
};
