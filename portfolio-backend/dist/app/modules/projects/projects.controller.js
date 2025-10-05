"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const projects_service_1 = require("./projects.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../util/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../util/sendResponse"));
const jwt_utils_1 = require("../../../util/jwt/jwt.utils");
// Upload Project
const uploadProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield projects_service_1.ProjectsService.uploadProject(payload, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Project Uploaded Successful",
        data: result,
    });
}));
// Get All Projects
const getAllProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectsService.getAllProjects();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Projects Retrieved Successfully",
        data: result,
    });
}));
// Update Project
const updateProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ProjectId = req.params.id;
    const payload = __rest(req.body, []);
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield projects_service_1.ProjectsService.updateProject(ProjectId, payload, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Project Updated Successfully",
        data: result,
    });
}));
// Delete Project
const deleteProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ProjectId = req.params.id;
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield projects_service_1.ProjectsService.deleteProject(ProjectId, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Project Updated Successfully",
        data: result,
    });
}));
exports.ProjectsController = {
    uploadProject,
    getAllProjects,
    updateProject,
    deleteProject,
};
