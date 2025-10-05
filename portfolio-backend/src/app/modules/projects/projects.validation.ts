import { z } from "zod";

const projectsZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is Required",
    }),
    stack: z.string({
      required_error: "Stack is Required",
    }),
    liveLink: z.string({
      required_error: "Live Link is Required",
    }),
    repoLink: z.string({
      required_error: "Repository Link is Required",
    }),
    thumbnail: z.string({
      required_error: "Thumbnail is Required",
    }),
  }),
});

export const ProjectsValidation = {
  projectsZodSchema,
};
