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
exports.BlogsController = void 0;
const blogs_service_1 = require("./blogs.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../util/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../util/sendResponse"));
const jwt_utils_1 = require("../../../util/jwt/jwt.utils");
// Upload Blog
const uploadBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = __rest(req.body, []);
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield blogs_service_1.BlogsService.uploadBlog(payload, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog Uploaded Successful",
        data: result,
    });
}));
// Get All Blogs
const getAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_service_1.BlogsService.getAllBlogs();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blogs Retrieved Successfully",
        data: result,
    });
}));
// Get Blog Details
const getBlogDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const result = yield blogs_service_1.BlogsService.getBlogDetails(blogId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog Details Retrieved Successfully",
        data: result,
    });
}));
// Update Blog
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const payload = __rest(req.body, []);
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield blogs_service_1.BlogsService.updateBlog(blogId, payload, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog Updated Successfully",
        data: result,
    });
}));
// Delete Blog
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.id;
    const token = jwt_utils_1.jwtHelpers.verifyAuthToken(req);
    const result = yield blogs_service_1.BlogsService.deleteBlog(blogId, token);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog Updated Successfully",
        data: result,
    });
}));
exports.BlogsController = {
    uploadBlog,
    getAllBlogs,
    getBlogDetails,
    updateBlog,
    deleteBlog,
};
