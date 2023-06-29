"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("../components");
const modal_1 = require("../../modal");
const react_select_1 = __importDefault(require("react-select"));
const use_select_props_1 = require("../use-select-props");
const Select = (0, react_1.forwardRef)((props, ref) => {
    var _a;
    const selectProps = (0, use_select_props_1.useSelectProps)(props);
    const { label, required, helperText, name, errors } = selectProps;
    const containerRef = (0, react_1.useRef)(null);
    const { portalRef } = (0, react_1.useContext)(modal_1.ModalContext);
    return ((0, jsx_runtime_1.jsx)(components_1.AdjacentContainer, { ref: containerRef, label: label, htmlFor: name, helperText: helperText, required: required, name: name, errors: errors, children: (0, jsx_runtime_1.jsx)(react_select_1.default, { "aria-labelledby": `${name}_label`, ref: ref, name: name, ...selectProps, menuPortalTarget: ((_a = portalRef === null || portalRef === void 0 ? void 0 : portalRef.current) === null || _a === void 0 ? void 0 : _a.lastChild) || null, menuShouldBlockScroll: true }) }));
});
exports.default = Select;
