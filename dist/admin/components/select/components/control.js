"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearIndicator = exports.LoadingIndicator = exports.DropdownIndicator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const spinner_1 = __importDefault(require("../../shared/spinner"));
const chevron_down_1 = __importDefault(require("../../shared/chevron-down"));
const x_circle_icon_1 = __importDefault(require("../../shared/x-circle-icon"));
const Control = ({ className, cx, children, innerRef, innerProps, isDisabled, isFocused, menuIsOpen, selectProps: { size, customStyles, name }, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: innerRef, ...innerProps, id: name, className: cx({
            control: true,
            "control--is-disabled": isDisabled,
            "control--is-focused": isFocused,
            "control--menu-is-open": menuIsOpen,
        }, (0, clsx_1.default)("rounded-rounded border-gray-20 bg-grey-5 focus-within:shadow-cta focus-within:border-violet-60 pl-small box-border flex overflow-hidden border p-0 transition-colors", {
            "h-xlarge": size === "sm",
            "h-10": size === "md" || !size,
        }, className, customStyles === null || customStyles === void 0 ? void 0 : customStyles.control)), children: (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("flex flex-1 items-center", customStyles === null || customStyles === void 0 ? void 0 : customStyles.inner_control), children: children }) }));
};
exports.default = Control;
const DropdownIndicator = ({ innerProps, cx, children, className, selectProps: { menuIsOpen }, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            indicator: true,
            "dropdown-indicator": true,
        }, (0, clsx_1.default)("transition-all", {
            "rotate-180": menuIsOpen,
        }, className)), children: children || (0, jsx_runtime_1.jsx)(chevron_down_1.default, { size: 16 }) }));
};
exports.DropdownIndicator = DropdownIndicator;
const LoadingIndicator = ({ innerProps, className, cx, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            indicator: true,
            "loading-indicator": true,
        }, className), children: (0, jsx_runtime_1.jsx)(spinner_1.default, { size: "small", variant: "secondary" }) }));
};
exports.LoadingIndicator = LoadingIndicator;
const ClearIndicator = ({ innerProps, className, cx, children, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, role: "button", "aria-label": "Clear selected options", className: cx({
            indicator: true,
            "clear-indicator": true,
        }, className), children: children || (0, jsx_runtime_1.jsx)(x_circle_icon_1.default, { size: 16 }) }));
};
exports.ClearIndicator = ClearIndicator;
