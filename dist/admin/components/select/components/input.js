"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const select_primitives_1 = __importDefault(require("./select-primitives"));
const Input = (props) => {
    const { className, cx, value, inputClassName } = props;
    return ((0, jsx_runtime_1.jsx)("div", { "data-value": value || "", className: cx({ "input-container": true }, className), children: (0, jsx_runtime_1.jsx)(select_primitives_1.default.Input, { ...props, className: cx({
                input: true,
                "input--is-disabled": props.isDisabled ? true : false,
            }, (0, clsx_1.default)("inter-base-regular text-grey-90 caret-violet-60", inputClassName)) }) }));
};
exports.default = Input;
