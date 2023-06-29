"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronDownIcon = ({ size = "24px", color = "currentColor", ...attributes }) => {
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: (0, jsx_runtime_1.jsx)("path", { d: "M4 6L8 10L12 6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
exports.default = ChevronDownIcon;
