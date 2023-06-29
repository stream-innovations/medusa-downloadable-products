"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CheckIcon = ({ size = "24px", color = "currentColor", ...attributes }) => {
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: (0, jsx_runtime_1.jsx)("path", { d: "M13.3334 4L6.00008 11.3333L2.66675 8", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
exports.default = CheckIcon;
