import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IProjects } from "./projects.interface";
import { Projects } from "./projects.schema";
import { jwtHelpers } from "../../../util/jwt/jwt.utils";
import { envConfig } from "../../../config/config";

const uploadProject = async (payload: IProjects, token: string) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);

  await Projects.create(payload);
  return null;
};

const getAllProjects = async () => {
  const result = await Projects.find();
  return result;
};

const updateProject = async (
  projectId: string,
  payload: Partial<IProjects>,
  token: string
) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);

  const isProjectExists = await Projects.findOne({ _id: projectId });
  if (!isProjectExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Project does not exists");
  }

  await Projects.findOneAndUpdate({ _id: projectId }, payload);
  return null;
};

const deleteProject = async (projectId: string, token: string) => {
  jwtHelpers.jwtVerify(token, envConfig.jwt_access_secret);

  const isProjectExists = await Projects.findOne({ _id: projectId });
  if (!isProjectExists) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Project does not exists or already deleted"
    );
  }

  await Projects.findOneAndDelete({ _id: projectId });
  return null;
};

export const ProjectsService = {
  uploadProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
