"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RadixTooltip = __importStar(require("@radix-ui/react-tooltip"));
const clsx_1 = __importDefault(require("clsx"));
const Tooltip = ({ children, body, open, defaultOpen, onOpenChange, delayDuration, maxWidth = 220, className, side, onClick, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(RadixTooltip.Provider, { delayDuration: 100, children: (0, jsx_runtime_1.jsxs)(RadixTooltip.Root, { open: open, defaultOpen: defaultOpen, onOpenChange: onOpenChange, delayDuration: delayDuration, children: [(0, jsx_runtime_1.jsx)(RadixTooltip.Trigger, { onClick: onClick, asChild: true, children: (0, jsx_runtime_1.jsx)("span", { children: children }) }), (0, jsx_runtime_1.jsx)(RadixTooltip.Content, { side: side !== null && side !== void 0 ? side : "bottom", sideOffset: 8, align: "center", className: (0, clsx_1.default)("inter-small-semibold text-grey-50 z-[999]", "bg-grey-0 shadow-dropdown rounded-rounded py-2 px-3", "border-grey-20 border border-solid", className), ...props, style: { ...props.style, maxWidth }, children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: body }) })] }) }));
};
exports.default = Tooltip;
