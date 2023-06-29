"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const express_1 = require("express");
const get_product_media_1 = __importDefault(require("./get-product-media"));
const list_product_media_1 = __importDefault(require("./list-product-media"));
const create_product_media_1 = __importDefault(require("./create-product-media"));
const update_product_media_1 = __importDefault(require("./update-product-media"));
const delete_product_media_1 = __importDefault(require("./delete-product-media"));
const attach_product_media_to_variant_1 = __importDefault(require("./attach-product-media-to-variant"));
const detach_product_media_from_variant_1 = __importDefault(require("./detach-product-media-from-variant"));
const router = (0, express_1.Router)();
exports.default = (adminRouter) => {
    adminRouter.use("/product-media", router);
    router.get("/", list_product_media_1.default);
    router.get("/:media_id", (0, utils_1.wrapHandler)(get_product_media_1.default));
    router.post("/", create_product_media_1.default);
    router.post("/:media_id", update_product_media_1.default);
    router.delete("/:media_id", (0, utils_1.wrapHandler)(delete_product_media_1.default));
    router.post("/:media_id/variant", attach_product_media_to_variant_1.default);
    router.delete("/:media_id/variant/:variant_id", detach_product_media_from_variant_1.default);
};
