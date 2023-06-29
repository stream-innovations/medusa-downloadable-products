"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tooltip_1 = __importDefault(require("../../shared/tooltip"));
const clsx_1 = __importDefault(require("clsx"));
const utils_1 = require("../utils");
const react_1 = require("react");
const SingleValue = ({ innerProps, children, cx, className, isDisabled, data, getValue, }) => {
    const prefix = (0, utils_1.hasPrefix)(data) ? data.prefix : null;
    const isEllipsisActive = (e) => {
        var _a;
        if (!e || !((_a = e.offsetParent) === null || _a === void 0 ? void 0 : _a.offsetWidth)) {
            return false;
        }
        return e.offsetParent.offsetWidth < e.scrollWidth;
    };
    const getToolTipValue = () => {
        var _a;
        const values = getValue();
        if (!values.length) {
            return null;
        }
        const value = values[0]; // option with label
        return (_a = value.label) !== null && _a !== void 0 ? _a : null;
    };
    const toolTip = getToolTipValue();
    const ref = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(tooltip_1.default, { className: (0, clsx_1.default)({ hidden: !isEllipsisActive(ref.current) || !toolTip }), delayDuration: 1000, body: (0, jsx_runtime_1.jsx)("div", { children: toolTip }), children: (0, jsx_runtime_1.jsx)("div", { ...innerProps, ref: ref, className: cx({
                "single-value": true,
                "single-value--is-disabled": isDisabled,
            }, (0, clsx_1.default)("absolute top-1/2 -translate-y-1/2 overflow-hidden overflow-ellipsis whitespace-nowrap", className)), children: (0, jsx_runtime_1.jsxs)("div", { className: "gap-x-xsmall inter-base-regular flex items-center", children: [prefix && (0, jsx_runtime_1.jsx)("span", { className: "inter-base-semibold", children: prefix }), children] }) }) }));
};
exports.default = SingleValue;
