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
const DropdownMenu = __importStar(require("@radix-ui/react-dropdown-menu"));
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const check_icon_1 = __importDefault(require("../shared/check-icon"));
const chevron_down_1 = __importDefault(require("../shared/chevron-down"));
const FilteringOptions = ({ title, options, className, ...props }) => {
    var _a;
    const [selected, setSelected] = (0, react_1.useState)(((_a = options === null || options === void 0 ? void 0 : options[0]) === null || _a === void 0 ? void 0 : _a.title) || "All");
    const [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("inter-small-regular text-grey-50 mr-6 flex last:mr-0", className), ...props, children: [(0, jsx_runtime_1.jsxs)("span", { className: "", children: [title, ":"] }), (0, jsx_runtime_1.jsxs)(DropdownMenu.Root, { onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(DropdownMenu.Trigger, { asChild: true, className: (0, clsx_1.default)("inter-small-regular text-grey-50 active:bg-grey-5 hover:bg-grey-5 flex items-center rounded pl-1.5 pr-0.5", { "bg-grey-5": open }), children: (0, jsx_runtime_1.jsxs)("div", { className: "align-center flex", children: [selected, (0, jsx_runtime_1.jsx)("div", { className: "text-grey-40 h-min", children: (0, jsx_runtime_1.jsx)(chevron_down_1.default, { size: 16 }) })] }) }), (0, jsx_runtime_1.jsx)(DropdownMenu.Content, { sideOffset: 8, className: "bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown z-40 border p-2", children: options.map((opt, idx) => ((0, jsx_runtime_1.jsxs)(DropdownMenu.DropdownMenuItem, { onSelect: () => {
                                opt.onClick();
                                setSelected(opt.title);
                            }, disabled: typeof opt.count !== "undefined" && opt.count < 1, className: (0, clsx_1.default)("text-grey-90 inter-small-semibold my-1 flex w-48 items-center rounded py-1.5  px-3 hover:border-0 hover:outline-none", {
                                "hover:bg-grey-10 cursor-pointer": typeof opt.count === "undefined" || opt.count > 0,
                            }), children: [selected === opt.title && ((0, jsx_runtime_1.jsx)("span", { className: "w-4", children: (0, jsx_runtime_1.jsx)(check_icon_1.default, { size: 16 }) })), (0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("ml-3 flex w-full justify-between", {
                                        "ml-7": selected !== opt.title,
                                        "text-grey-30": (opt.count || 0) < 1,
                                    }), children: [opt.title, (0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)("inter-small-regular text-grey-40 ml-3", {
                                                "text-grey-30": (opt.count || 0) < 1,
                                            }), children: opt.count })] })] }, `${idx}-${opt.title}`))) })] })] }));
};
exports.default = FilteringOptions;
