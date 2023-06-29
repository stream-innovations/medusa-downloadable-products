"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.PRODUCT_MEDIA_JWT_SECRET || "secret";
class DownloadAuthorizationService {
    validateToken(token) {
        return jsonwebtoken_1.default.verify(token, JWT_SECRET);
    }
    createToken(orderId, lineItemId, mediaId) {
        return jsonwebtoken_1.default.sign({
            orderId: orderId,
            lineItemId: lineItemId,
            mediaId: mediaId,
        }, JWT_SECRET);
    }
}
exports.default = DownloadAuthorizationService;
