"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InfoIcon = ({ size = "16", color = "currentColor", ...attributes }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: [(0, jsx_runtime_1.jsx)("path", { d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 10.6667V8", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 5.33331H8.0075", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
exports.default = InfoIcon;
