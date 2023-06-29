"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(req, res) {
    const productMediaService = req.scope.resolve("productMediaService");
    const { id } = req.params;
    await productMediaService.delete(id);
    res.status(204).send();
}
exports.default = default_1;
