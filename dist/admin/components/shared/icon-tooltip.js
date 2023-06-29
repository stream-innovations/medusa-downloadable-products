"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tooltip_1 = __importDefault(require("./tooltip"));
const alert_icon_1 = __importDefault(require("./alert-icon"));
const info_icon_1 = __importDefault(require("./info-icon"));
const x_circle_icon_1 = __importDefault(require("./x-circle-icon"));
const IconTooltip = ({ type = "info", size = 16, body, ...props }) => {
    const icon = (type) => {
        switch (type) {
            case "warning":
                return (0, jsx_runtime_1.jsx)(alert_icon_1.default, { size: size, className: "text-orange-40 flex" });
            case "error":
                return (0, jsx_runtime_1.jsx)(x_circle_icon_1.default, { size: size, className: "text-rose-40 flex" });
            default:
                return (0, jsx_runtime_1.jsx)(info_icon_1.default, { size: size, className: "text-grey-40 flex" });
        }
    };
    return ((0, jsx_runtime_1.jsx)(tooltip_1.default, { body: body, ...props, children: icon(type) }));
};
exports.default = IconTooltip;
