"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const button_1 = __importDefault(require("../shared/button"));
const cross_icon_1 = __importDefault(require("../shared/icons/cross-icon"));
const FocusModal = ({ className, children }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("bg-grey-0 absolute inset-0 z-50 flex flex-col items-center", className), children: children }));
FocusModal.Header = ({ children, className }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("border-b-grey-20 flex w-full justify-center border-b py-4", className), children: children }));
FocusModal.Main = ({ children, className }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("h-full w-full overflow-y-auto px-8", className), children: children }));
FocusModal.BasicFocusModal = ({ handleClose, onSubmit, children, cancelText = "Cancel", submitText = "Save changes", }) => {
    return ((0, jsx_runtime_1.jsxs)(FocusModal, { children: [(0, jsx_runtime_1.jsx)(BasicFocusModalHeader, { handleClose: handleClose, onSubmit: onSubmit, cancelText: cancelText, submitText: submitText }), (0, jsx_runtime_1.jsx)(FocusModal.Main, { children: children })] }));
};
const BasicFocusModalHeader = ({ handleClose, onSubmit, cancelText, submitText, }) => {
    return ((0, jsx_runtime_1.jsx)(FocusModal.Header, { children: (0, jsx_runtime_1.jsxs)("div", { className: "medium:w-8/12 flex w-full justify-between px-8", children: [(0, jsx_runtime_1.jsx)(button_1.default, { size: "small", variant: "ghost", onClick: handleClose, className: "rounded-rounded h-8 w-8 border", children: (0, jsx_runtime_1.jsx)(cross_icon_1.default, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "gap-x-small flex", children: [(0, jsx_runtime_1.jsx)(button_1.default, { onClick: handleClose, size: "small", variant: "ghost", className: "rounded-rounded border", children: cancelText || "Cancel" }), (0, jsx_runtime_1.jsx)(button_1.default, { size: "small", variant: "primary", onClick: onSubmit, className: "rounded-rounded", children: submitText || "Save changes" })] })] }) }));
};
exports.default = FocusModal;
