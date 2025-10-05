"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = exports.projectsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.projectsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    stack: { type: String, required: true },
    thumbnail: { type: String, required: true },
    liveLink: { type: String, required: true },
    repoLink: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: false,
    },
});
exports.Projects = (0, mongoose_1.model)("Projects", exports.projectsSchema);
