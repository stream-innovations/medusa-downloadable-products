"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiValueRemove = exports.MultiValueContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const cross_icon_1 = __importDefault(require("../../shared/icons/cross-icon"));
const utils_1 = require("../utils");
const MultiValue = ({ children, className, cx, innerProps, isDisabled, isFocused, removeProps, components, selectProps, data, }) => {
    const { Container, Label, Remove } = components;
    return ((0, jsx_runtime_1.jsxs)(Container, { data: data, innerProps: {
            className: cx({
                "multi-value": true,
                "multi-value--is-disabled": isDisabled,
            }, (0, clsx_1.default)({
                "bg-grey-70 text-grey-0": isFocused,
            })),
            ...innerProps,
        }, selectProps: selectProps, children: [(0, jsx_runtime_1.jsx)(Label, { data: data, innerProps: {
                    className: cx({
                        "multi-value__label": true,
                    }, className),
                }, selectProps: selectProps, children: children }), (0, jsx_runtime_1.jsx)(Remove, { data: data, selectProps: selectProps, innerProps: {
                    className: cx({
                        "multi-value__remove": true,
                    }, className),
                    "aria-label": `Remove ${children || "option"}`,
                    ...removeProps,
                } })] }));
};
exports.default = MultiValue;
const MultiValueContainer = ({ children, innerProps: { className }, }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)("gap-x-2xsmall py-2xsmall pl-small rounded-rounded bg-grey-20 text-grey-50 inter-small-semibold flex items-center pr-2.5 transition-colors", className), children: children }));
};
exports.MultiValueContainer = MultiValueContainer;
const MultiValueRemove = (props) => {
    const { children, innerProps, data } = props;
    if ((0, utils_1.optionIsFixed)(data) && data.isFixed) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, role: "button", className: "text-grey-40", children: children || (0, jsx_runtime_1.jsx)(cross_icon_1.default, { size: 16 }) }));
};
exports.MultiValueRemove = MultiValueRemove;
