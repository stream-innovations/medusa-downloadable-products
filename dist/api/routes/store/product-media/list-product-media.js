"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const validate_query_1 = __importDefault(require("./validate-query"));
const zod_1 = require("zod");
const product_media_variant_1 = require("../../../../models/product-media-variant");
const requestSchema = zod_1.z.object({
    variant_id: zod_1.z.string().or(zod_1.z.array(zod_1.z.string())).optional(),
    limit: zod_1.z.coerce.number().int().positive().optional().default(10),
    offset: zod_1.z.coerce.number().int().nonnegative().optional().default(0),
    expand: zod_1.z.array(zod_1.z.enum(["variants"])).optional(),
});
async function handler(req, res) {
    const productMediaService = req.scope.resolve("productMediaService");
    const { limit, offset, expand, ...query } = req.query;
    const selector = {
        ...query,
        attachment_type: product_media_variant_1.ProductMediaVariantType.PREVIEW,
    };
    const [productMedia, count] = await productMediaService.listAndCount(selector, {
        take: limit,
        skip: offset,
    });
    const result = productMedia;
    if (expand === null || expand === void 0 ? void 0 : expand.includes("variants")) {
        const mediaIds = productMedia.map((m) => m.id);
        const variants = await productMediaService.listVariants(mediaIds);
        // create variant map for faster lookup Map<mediaId, variants[]>
        const variantMap = new Map();
        variants.forEach((v) => {
            if (!variantMap.has(v.product_media_id)) {
                variantMap.set(v.product_media_id, []);
            }
            variantMap.get(v.product_media_id).push(v);
        });
        result.forEach((m) => {
            m.variants = variantMap.get(m.id) || [];
        });
    }
    res.json({
        product_medias: result,
        count,
        limit,
        offset,
    });
}
exports.default = [(0, validate_query_1.default)(requestSchema), (0, utils_1.wrapHandler)(handler)];
