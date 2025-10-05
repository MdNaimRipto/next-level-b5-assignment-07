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
exports.BlogsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const blogs_schema_1 = require("./blogs.schema");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwt_utils_1 = require("../../../util/jwt/jwt.utils");
const config_1 = require("../../../config/config");
const uploadBlog = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    yield blogs_schema_1.Blogs.create(payload);
    return null;
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_schema_1.Blogs.find().sort({ createdAt: -1 });
    return result;
});
const getBlogDetails = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_schema_1.Blogs.findOne({ _id: blogId });
    return result;
});
const updateBlog = (blogId, payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    const isBlogExists = yield blogs_schema_1.Blogs.findOne({ _id: blogId });
    if (!isBlogExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Blog does not exists");
    }
    yield blogs_schema_1.Blogs.findOneAndUpdate({ _id: blogId }, payload);
    return null;
});
const deleteBlog = (blogId, token) => __awaiter(void 0, void 0, void 0, function* () {
    jwt_utils_1.jwtHelpers.jwtVerify(token, config_1.envConfig.jwt_access_secret);
    const isBlogExists = yield blogs_schema_1.Blogs.findOne({ _id: blogId });
    if (!isBlogExists) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Blog does not exists or already deleted");
    }
    yield blogs_schema_1.Blogs.findOneAndDelete({ _id: blogId });
    return null;
});
exports.BlogsService = {
    uploadBlog,
    getAllBlogs,
    getBlogDetails,
    updateBlog,
    deleteBlog,
};
