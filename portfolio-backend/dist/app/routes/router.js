"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = __importDefault(require("express"));
const users_router_1 = require("../modules/users/users.router");
const rides_router_1 = require("../modules/rides/rides.router");
const admin_router_1 = require("../modules/admin/admin.router");
const sos_router_1 = require("../modules/sos/sos.router");
const router = express_1.default.Router();
const routes = [
    {
        path: "/users",
        route: users_router_1.UserRouter,
    },
    {
        path: "/rides",
        route: rides_router_1.RidesRouter,
    },
    {
        path: "/admin",
        route: admin_router_1.AdminRouter,
    },
    {
        path: "/sos",
        route: sos_router_1.SosRouter,
    },
];
routes.map((r) => router.use(r.path, r.route));
exports.Routers = router;
