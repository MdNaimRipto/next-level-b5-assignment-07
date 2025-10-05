import { z } from "zod";
import { IBlogs } from "./blogs.interface";

const blogsZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is Required",
    }),
    subTitle: z.string({
      required_error: "Subtitle is Required",
    }),
    description: z.string({
      required_error: "Description is Required",
    }),
    tag: z.string({
      required_error: "Tag is Required",
    }),
    thumbnail: z.string({
      required_error: "Thumbnail is Required",
    }),
  }),
});

export const BlogsValidation = {
  blogsZodSchema,
};
