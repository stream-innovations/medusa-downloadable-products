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
exports.ModalContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Dialog = __importStar(require("@radix-ui/react-dialog"));
const Portal = __importStar(require("@radix-ui/react-portal"));
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const hooks_1 = require("../shared/hooks");
const button_1 = __importDefault(require("../shared/button"));
const cross_icon_1 = __importDefault(require("../shared/icons/cross-icon"));
exports.ModalContext = react_1.default.createContext({
    portalRef: undefined,
    isLargeModal: true,
});
const Overlay = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(Dialog.Overlay, { className: "bg-grey-90/40 fixed top-0 bottom-0 left-0 right-0 z-50 grid place-items-center overflow-y-auto", children: children }));
};
const Content = ({ children }) => {
    const { height } = (0, hooks_1.useWindowDimensions)();
    const style = {
        maxHeight: height - 64,
    };
    return ((0, jsx_runtime_1.jsx)(Dialog.Content, { style: style, className: "min-w-modal rounded-rounded bg-grey-0 overflow-x-hidden", children: children }));
};
const Modal = ({ open = true, handleClose, isLargeModal = true, children, }) => {
    const portalRef = react_1.default.useRef(null);
    return ((0, jsx_runtime_1.jsx)(Dialog.Root, { open: open, onOpenChange: handleClose, children: (0, jsx_runtime_1.jsx)(Portal.Portal, { ref: portalRef, children: (0, jsx_runtime_1.jsx)(exports.ModalContext.Provider, { value: { portalRef, isLargeModal }, children: (0, jsx_runtime_1.jsx)(Overlay, { children: (0, jsx_runtime_1.jsx)(Content, { children: children }) }) }) }) }));
};
Modal.Body = ({ children, className, style }) => {
    const { isLargeModal } = react_1.default.useContext(exports.ModalContext);
    return ((0, jsx_runtime_1.jsx)("div", { style: style, className: (0, clsx_1.default)("inter-base-regular h-full", className), onClick: (e) => e.stopPropagation(), children: children }));
};
Modal.Content = ({ children, className }) => {
    const { isLargeModal } = react_1.default.useContext(exports.ModalContext);
    const { height } = (0, hooks_1.useWindowDimensions)();
    const style = {
        maxHeight: height - 90 - 141,
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: style, className: (0, clsx_1.default)("overflow-y-auto px-8 pt-6", {
            ["w-largeModal pb-7"]: isLargeModal,
            ["pb-5"]: !isLargeModal,
        }, className), children: children }));
};
Modal.Header = ({ handleClose = undefined, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex w-full items-center border-b px-8 py-6", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-grow", children: children }), (0, jsx_runtime_1.jsx)("div", { className: "self-end", children: handleClose && ((0, jsx_runtime_1.jsx)(button_1.default, { variant: "ghost", size: "small", onClick: handleClose, className: "text-grey-50 cursor-pointer border p-1.5", children: (0, jsx_runtime_1.jsx)(cross_icon_1.default, { size: 20 }) })) })] }));
};
Modal.Footer = ({ children, className }) => {
    const { isLargeModal } = react_1.default.useContext(exports.ModalContext);
    return ((0, jsx_runtime_1.jsx)("div", { onClick: (e) => e.stopPropagation(), className: (0, clsx_1.default)("bottom-0 flex w-full px-7 pb-5", {
            "border-grey-20 border-t pt-4": isLargeModal,
        }, className), children: children }));
};
exports.default = Modal;
