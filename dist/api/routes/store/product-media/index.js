"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_product_media_1 = __importDefault(require("./list-product-media"));
const download_file_1 = __importDefault(require("./download-file"));
const router = (0, express_1.Router)();
exports.default = (adminRouter) => {
    adminRouter.use("/product-media", router);
    router.get("/", list_product_media_1.default);
    router.get("/:token", download_file_1.default);
};
