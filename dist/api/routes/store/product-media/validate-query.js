"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateQuery(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.query);
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
        req.query = result.data;
        next();
    };
}
exports.default = validateQuery;
