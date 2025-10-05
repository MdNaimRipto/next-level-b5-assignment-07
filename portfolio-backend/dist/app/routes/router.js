"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const admin_router_1 = require("../modules/admin/admin.router");
const blogs_router_1 = require("../modules/blogs/blogs.router");
const projects_router_1 = require("../modules/projects/projects.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/admin",
        route: admin_router_1.AdminRouter,
    },
    {
        path: "/blogs",
        route: blogs_router_1.BlogsRouter,
    },
    {
        path: "/projects",
        route: projects_router_1.ProjectsRouter,
    },
];
routes.map((r) => router.use(r.path, r.route));
exports.Routers = router;
