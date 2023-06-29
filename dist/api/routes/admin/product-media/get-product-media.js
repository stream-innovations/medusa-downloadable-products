"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(req, res) {
    const productMediaService = req.scope.resolve("productMediaService");
    const { media_id: id } = req.params;
    const productMedia = await productMediaService.retrieve(id);
    const variants = await productMediaService.listVariants([id]);
    const result = {
        ...productMedia,
        variants,
    };
    res.json({
        product_media: result,
    });
}
exports.default = default_1;
