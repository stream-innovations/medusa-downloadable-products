"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
async function handler(req, res) {
    const { token } = req.params;
    const productMediaService = req.scope.resolve("productMediaService");
    const authorizationService = req.scope.resolve("downloadAuthorizationService");
    let verificationResult;
    try {
        verificationResult = authorizationService.validateToken(token);
    }
    catch (err) {
        res.status(401).json({ message: "Token is invalid" });
        return;
    }
    const productMedia = await productMediaService.retrieve(verificationResult.mediaId);
    res.redirect(productMedia.file);
}
exports.default = [(0, utils_1.wrapHandler)(handler)];
