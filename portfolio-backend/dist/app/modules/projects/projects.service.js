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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const projects_schema_1 = require("./projects.schema");
const jwt_utils_1 = require("../../../util/jwt/jwt.utils");
const config_1 = require("../../../config/config");
const uploadProject = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    yield projects_schema_1.Projects.create(payload);
    return null;
});
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_schema_1.Projects.find().sort({ createdAt: -1 });
    return result;
});
const updateProject = (projectId, payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    const isProjectExists = yield projects_schema_1.Projects.findOne({ _id: projectId });
    if (!isProjectExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Project does not exists");
    }
    yield projects_schema_1.Projects.findOneAndUpdate({ _id: projectId }, payload);
    return null;
});
const deleteProject = (projectId, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    const isProjectExists = yield projects_schema_1.Projects.findOne({ _id: projectId });
    if (!isProjectExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Project does not exists or already deleted");
    }
    yield projects_schema_1.Projects.findOneAndDelete({ _id: projectId });
    return null;
});
exports.ProjectsService = {
    uploadProject,
    getAllProjects,
    updateProject,
    deleteProject,
};
