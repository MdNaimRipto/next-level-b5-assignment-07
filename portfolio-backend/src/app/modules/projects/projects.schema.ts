import { model, Schema } from "mongoose";
import { IProjects } from "./projects.interface";

export const projectsSchema = new Schema<IProjects>(
  {
    title: { type: String, required: true },
    stack: { type: String, required: true },
    thumbnail: { type: String, required: true },
    liveLink: { type: String, required: true },
    repoLink: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: false,
    },
  }
);

export const Projects = model<IProjects>("Projects", projectsSchema);
