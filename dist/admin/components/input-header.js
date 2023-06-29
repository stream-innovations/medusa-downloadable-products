"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const icon_tooltip_1 = __importDefault(require("./shared/icon-tooltip"));
const InputHeader = ({ label, required = false, tooltipContent, tooltip, className, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("inter-small-semibold text-grey-50 flex w-full items-center", className), children: [(0, jsx_runtime_1.jsx)("label", { children: label }), required && (0, jsx_runtime_1.jsx)("div", { className: "text-rose-50 ", children: " *" }), tooltip || tooltipContent ? ((0, jsx_runtime_1.jsx)("div", { className: "ml-1.5 flex", children: tooltip || (0, jsx_runtime_1.jsx)(icon_tooltip_1.default, { body: tooltipContent }) })) : null] }));
};
exports.default = InputHeader;
