"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const projects_validation_1 = require("./projects.validation");
const projects_controller_1 = require("./projects.controller");
const router = express_1.default.Router();
router.post("/upload", (0, zodValidationRequest_1.default)(projects_validation_1.ProjectsValidation.projectsZodSchema), projects_controller_1.ProjectsController.uploadProject);
router.get("/getAll", projects_controller_1.ProjectsController.getAllProjects);
router.patch("/update/:id", projects_controller_1.ProjectsController.updateProject);
router.delete("/delete/:id", projects_controller_1.ProjectsController.deleteProject);
exports.ProjectsRouter = router;
