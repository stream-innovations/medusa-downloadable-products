"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AlertIcon = ({ size = "20", color = "currentColor", ...attributes }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attributes, children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M10 6.66669V10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M10 13.3333H10.0088", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
exports.default = AlertIcon;
