"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOptionLabel = exports.isCreateOption = exports.hasSuffix = exports.hasPrefix = exports.hasLabel = exports.optionIsDisabled = exports.optionIsFixed = exports.cleanCommonProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lodash_1 = require("lodash");
const react_highlight_words_1 = __importDefault(require("react-highlight-words"));
const cleanCommonProps = (props) => {
    const innerProps = (0, lodash_1.omit)(props, [
        "className",
        "clearValue",
        "cx",
        "getStyles",
        "getValue",
        "hasValue",
        "isMulti",
        "isRtl",
        "options",
        "selectOption",
        "selectProps",
        "setValue",
        "theme",
    ]);
    return { ...innerProps };
};
exports.cleanCommonProps = cleanCommonProps;
const optionIsFixed = (option) => typeof option === "object" && option !== null && "isFixed" in option;
exports.optionIsFixed = optionIsFixed;
const optionIsDisabled = (option) => typeof option === "object" && option !== null && "isDisabled" in option;
exports.optionIsDisabled = optionIsDisabled;
const hasLabel = (option) => {
    return typeof option === "object" && option !== null && "label" in option;
};
exports.hasLabel = hasLabel;
const hasPrefix = (option) => {
    return typeof option === "object" && option !== null && "prefix" in option;
};
exports.hasPrefix = hasPrefix;
const hasSuffix = (option) => {
    return typeof option === "object" && option !== null && "suffix" in option;
};
exports.hasSuffix = hasSuffix;
const isCreateOption = (option) => {
    return typeof option === "object" && option !== null && "__isNew__" in option;
};
exports.isCreateOption = isCreateOption;
const formatOptionLabel = (option, { inputValue }) => {
    if (!(0, exports.hasLabel)(option)) {
        return;
    }
    if ((0, exports.isCreateOption)(option)) {
        return option.label;
    }
    return ((0, jsx_runtime_1.jsx)(react_highlight_words_1.default, { searchWords: [inputValue], textToHighlight: option.label, highlightClassName: "bg-orange-10" }));
};
exports.formatOptionLabel = formatOptionLabel;
