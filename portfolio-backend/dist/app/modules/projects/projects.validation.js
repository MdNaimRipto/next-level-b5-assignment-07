"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsValidation = void 0;
const zod_1 = require("zod");
const projectsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is Required",
        }),
        stack: zod_1.z.string({
            required_error: "Stack is Required",
        }),
        liveLink: zod_1.z.string({
            required_error: "Live Link is Required",
        }),
        repoLink: zod_1.z.string({
            required_error: "Repository Link is Required",
        }),
        thumbnail: zod_1.z.string({
            required_error: "Thumbnail is Required",
        }),
    }),
});
exports.ProjectsValidation = {
    projectsZodSchema,
};
