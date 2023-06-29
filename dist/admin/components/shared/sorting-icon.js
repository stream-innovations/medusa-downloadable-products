"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const SortingIcon = ({ size = "24", color = "currentColor", ascendingColor, descendingColor, isSorted = false, ...attributes }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.66602 10L7.99935 13.3333L11.3327 10", className: (0, clsx_1.default)({
                    "stroke-grey-40": isSorted !== "desc",
                    "stroke-current": isSorted === "desc",
                }), stroke: descendingColor || color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.66602 6.00008L7.99935 2.66675L11.3327 6.00008", stroke: ascendingColor || color, className: (0, clsx_1.default)({
                    "stroke-grey-40": isSorted !== "asc",
                    "stroke-current": isSorted === "asc",
                }), strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
exports.default = SortingIcon;
