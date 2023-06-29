"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorsContainer = exports.ValueContainer = exports.SelectContainer = exports.AdjacentContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const input_error_1 = __importDefault(require("../../input-error"));
exports.AdjacentContainer = (0, react_1.forwardRef)(({ label, helperText, required, errors, name, children, }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "gap-y-xsmall flex w-full flex-col", ref: ref, children: [label && ((0, jsx_runtime_1.jsxs)("label", { className: "inter-small-semibold text-grey-50", id: `${name}_label`, children: [label, required && (0, jsx_runtime_1.jsx)("span", { className: "text-rose-50", children: "*" })] })), children, name && errors ? ((0, jsx_runtime_1.jsx)(input_error_1.default, { errors: errors, name: name, className: "-mt-0.5" })) : helperText ? ((0, jsx_runtime_1.jsx)("p", { className: "inter-small-regular text-grey-50", children: helperText })) : null] }));
});
const SelectContainer = ({ innerProps, selectProps: { isDisabled, isRtl }, hasValue, cx, className, children, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            "--is-disabled": isDisabled,
            "--is-rtl": isRtl,
            "--has-value": hasValue,
        }, (0, clsx_1.default)("pointer-events-auto relative", { "text-grey-40": isDisabled }, className)), children: children }));
};
exports.SelectContainer = SelectContainer;
const ValueContainer = (props) => {
    const { className, children, cx, innerProps, isMulti, hasValue, selectProps: { value, inputValue, label, selectedPlaceholder }, } = props;
    if (isMulti && Array.isArray(value)) {
        return ((0, jsx_runtime_1.jsxs)("div", { ...innerProps, className: cx({
                "value-container": true,
                "value-container--is-multi": isMulti,
                "value-container--has-value": hasValue,
            }, (0, clsx_1.default)("scrolling-touch group relative flex flex-1 flex-wrap items-center overflow-hidden", {
                "gap-2xsmall": isMulti,
            }, className)), children: [(value === null || value === void 0 ? void 0 : value.length) > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "bg-grey-20 text-grey-50 px-small inter-small-semibold rounded-rounded gap-x-2xsmall flex h-7 cursor-default items-center", children: (0, jsx_runtime_1.jsx)("span", { children: value.length }) })), (0, jsx_runtime_1.jsxs)("div", { className: "relative grow", children: [children, (value === null || value === void 0 ? void 0 : value.length) > 0 && inputValue === "" && ((0, jsx_runtime_1.jsx)("span", { className: "inter-base-regular text-grey-50 absolute top-1/2 -translate-y-1/2", children: selectedPlaceholder || label || "Selected" }))] })] }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            "value-container": true,
            "value-container--is-multi": isMulti,
            "value-container--has-value": hasValue,
        }, (0, clsx_1.default)("scrolling-touch relative flex flex-1 flex-wrap items-center overflow-hidden", {
            "gap-2xsmall": isMulti,
        }, className)), children: children }));
};
exports.ValueContainer = ValueContainer;
const IndicatorsContainer = ({ className, cx, innerProps, children, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, className: cx({
            "indicators-container": true,
        }, (0, clsx_1.default)("text-grey-50 gap-x-small px-small flex items-center", className)), children: children }));
};
exports.IndicatorsContainer = IndicatorsContainer;
