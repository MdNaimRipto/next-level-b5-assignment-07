"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const admin_validation_1 = require("./admin.validation");
const router = express_1.default.Router();
router.post("/register", (0, zodValidationRequest_1.default)(admin_validation_1.UserValidation.usersZodSchema), admin_controller_1.AdminController.userRegister);
router.post("/login", (0, zodValidationRequest_1.default)(admin_validation_1.UserValidation.loginUserZodSchema), admin_controller_1.AdminController.userLogin);
router.get("/me", admin_controller_1.AdminController.getAuthenticatedUserDetails);
router.post("/logout", admin_controller_1.AdminController.logout);
exports.AdminRouter = router;
