"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsValidation = void 0;
const zod_1 = require("zod");
const blogsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is Required",
        }),
        subTitle: zod_1.z.string({
            required_error: "Subtitle is Required",
        }),
        description: zod_1.z.string({
            required_error: "Description is Required",
        }),
        tag: zod_1.z.string({
            required_error: "Tag is Required",
        }),
        thumbnail: zod_1.z.string({
            required_error: "Thumbnail is Required",
        }),
    }),
});
exports.BlogsValidation = {
    blogsZodSchema,
};
