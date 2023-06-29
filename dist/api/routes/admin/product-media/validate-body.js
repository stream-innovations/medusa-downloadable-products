"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateBody(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (result.success === false) {
            res.status(400).json({
                error: {
                    code: "invalid_request",
                    message: "Invalid request",
                    details: result.error,
                },
            });
            return;
        }
        req.body = result.data;
        next();
    };
}
exports.default = validateBody;
