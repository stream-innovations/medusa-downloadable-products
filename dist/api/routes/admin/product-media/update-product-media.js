"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const validate_body_1 = __importDefault(require("./validate-body"));
const zod_1 = require("zod");
async function handler(req, res) {
    const productMediaService = req.scope.resolve("productMediaService");
    const { id } = req.params;
    const productMedia = await productMediaService.update(id, req.body);
    res.json({
        product_media: productMedia,
    });
}
const requestSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    file: zod_1.z.string().optional(),
    mime_type: zod_1.z.string().optional(),
});
exports.default = [(0, validate_body_1.default)(requestSchema), (0, utils_1.wrapHandler)(handler)];
