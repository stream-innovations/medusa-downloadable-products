"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Placeholder = ({ innerProps, children, className, cx, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            placeholder: true,
        }, (0, clsx_1.default)("inter-base-regular text-grey-50 absolute top-1/2 -translate-y-1/2 select-none", className)), children: children }));
};
exports.default = Placeholder;
