"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blogs = exports.blogsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.blogsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    thumbnail: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: false,
    },
});
exports.Blogs = (0, mongoose_1.model)("Blogs", exports.blogsSchema);
