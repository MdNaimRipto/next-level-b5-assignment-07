"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../middlewares/zodValidationRequest"));
const blogs_validation_1 = require("./blogs.validation");
const blogs_controller_1 = require("./blogs.controller");
const router = express_1.default.Router();
router.post("/upload", (0, zodValidationRequest_1.default)(blogs_validation_1.BlogsValidation.blogsZodSchema), blogs_controller_1.BlogsController.uploadBlog);
router.get("/getAll", blogs_controller_1.BlogsController.getAllBlogs);
router.get("/getDetails/:id", blogs_controller_1.BlogsController.getBlogDetails);
router.patch("/update/:id", blogs_controller_1.BlogsController.updateBlog);
router.delete("/delete/:id", blogs_controller_1.BlogsController.deleteBlog);
exports.BlogsRouter = router;
