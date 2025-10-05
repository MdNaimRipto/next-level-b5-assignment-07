import express from "express";
import { AdminRouter } from "../modules/admin/admin.router";
import { BlogsRouter } from "../modules/blogs/blogs.router";
import { ProjectsRouter } from "../modules/projects/projects.router";

const router = express.Router();

const routes = [
  {
    path: "/admin",
    route: AdminRouter,
  },
  {
    path: "/blogs",
    route: BlogsRouter,
  },
  {
    path: "/projects",
    route: ProjectsRouter,
  },
];

routes.map((r) => router.use(r.path, r.route));

export const Routers = router;
