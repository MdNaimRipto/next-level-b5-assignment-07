import { Request, Response } from "express";
import { ProjectsService } from "./projects.service";
import httpStatus from "http-status";
import catchAsync from "../../../util/catchAsync";
import sendResponse from "../../../util/sendResponse";
import { jwtHelpers } from "../../../util/jwt/jwt.utils";

// Upload Project
const uploadProject = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await ProjectsService.uploadProject(payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Uploaded Successful",
    data: result,
  });
});

// Get All Projects
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsService.getAllProjects();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Projects Retrieved Successfully",
    data: result,
  });
});

// Update Project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const ProjectId = req.params.id;
  const { ...payload } = req.body;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await ProjectsService.updateProject(ProjectId, payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Updated Successfully",
    data: result,
  });
});

// Delete Project
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const ProjectId = req.params.id;
  const token = jwtHelpers.verifyAuthToken(req);

  const result = await ProjectsService.deleteProject(ProjectId, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Updated Successfully",
    data: result,
  });
});

export const ProjectsController = {
  uploadProject,
  getAllProjects,
  updateProject,
  deleteProject,
};
