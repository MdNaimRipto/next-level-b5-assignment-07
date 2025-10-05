import express from "express";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { ProjectsValidation } from "./projects.validation";
import { ProjectsController } from "./projects.controller";

const router = express.Router();

router.post(
  "/upload",
  zodValidationRequest(ProjectsValidation.projectsZodSchema),
  ProjectsController.uploadProject
);

router.get("/getAll", ProjectsController.getAllProjects);

router.patch("/update/:id", ProjectsController.updateProject);

router.delete("/delete/:id", ProjectsController.deleteProject);

export const ProjectsRouter = router;
