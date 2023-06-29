"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const creatable_1 = __importDefault(require("react-select/creatable"));
const components_1 = require("../components");
const use_select_props_1 = require("../use-select-props");
const CreatableSelect = (0, react_1.forwardRef)((props, ref) => {
    const { label, helperText, required, ...rest } = (0, use_select_props_1.useSelectProps)(props);
    return ((0, jsx_runtime_1.jsx)(components_1.AdjacentContainer, { label: label, helperText: helperText, required: required, children: (0, jsx_runtime_1.jsx)(creatable_1.default, { ref: ref, ...rest }) }));
});
exports.default = CreatableSelect;
