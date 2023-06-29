"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const validate_body_1 = __importDefault(require("./validate-body"));
const zod_1 = require("zod");
async function handler(req, res) {
    const manager = req.scope.resolve("manager");
    const productMediaService = req.scope.resolve("productMediaService");
    const productMedia = await manager.transaction(async (transactionManager) => {
        const productMedia = await productMediaService.create(req.body, {
            transactionManager,
        });
        if (req.body.product_variant) {
            await productMediaService.attachToVariant(productMedia.id, req.body.product_variant.id, req.body.product_variant.type, {
                transactionManager,
            });
        }
        return productMedia;
    });
    res.json({
        product_media: productMedia,
    });
}
const requestSchema = zod_1.z.object({
    name: zod_1.z.string(),
    file: zod_1.z.string(),
    mime_type: zod_1.z.string(),
    product_variant: zod_1.z
        .object({
        id: zod_1.z.string(),
        type: zod_1.z.enum(["preview", "main"]),
    })
        .optional(),
});
exports.default = [(0, validate_body_1.default)(requestSchema), (0, utils_1.wrapHandler)(handler)];
