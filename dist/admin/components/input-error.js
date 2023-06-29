"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const error_message_1 = require("@hookform/error-message");
const clsx_1 = __importDefault(require("clsx"));
const tooltip_1 = __importDefault(require("./shared/tooltip"));
const InputError = ({ errors, name, className }) => {
    if (!errors || !name) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(error_message_1.ErrorMessage, { name: name, errors: errors, render: ({ message, messages }) => {
            return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("inter-small-regular mt-2 text-rose-50", className), children: messages ? ((0, jsx_runtime_1.jsx)(MultipleMessages, { messages: messages })) : ((0, jsx_runtime_1.jsx)("p", { children: message })) }));
        } }));
};
const MultipleMessages = ({ messages }) => {
    const errors = Object.entries(messages).map(([_, message]) => message);
    const displayedError = errors[0];
    const remainderErrors = errors.slice(1);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex cursor-default items-center gap-x-1", children: [(0, jsx_runtime_1.jsx)("p", { children: displayedError }), (remainderErrors === null || remainderErrors === void 0 ? void 0 : remainderErrors.length) > 0 && ((0, jsx_runtime_1.jsx)(tooltip_1.default, { body: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "inter-small-regular text-rose-50", children: remainderErrors.map((e, i) => {
                            return ((0, jsx_runtime_1.jsxs)("p", { children: [Array.from(Array(i + 1)).map((_) => "*"), e] }, i));
                        }) }) }), children: (0, jsx_runtime_1.jsxs)("p", { children: ["+", remainderErrors.length, " ", remainderErrors.length > 1 ? "errors" : "error"] }) }))] }));
};
exports.default = InputError;
