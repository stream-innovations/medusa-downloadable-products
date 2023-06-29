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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const Portal = __importStar(require("@radix-ui/react-portal"));
const MODAL_WIDTH = 560;
/**
 * Side modal displayed as right drawer on open.
 */
function SideModal(props) {
    const { isVisible, children, close } = props;
    return ((0, jsx_runtime_1.jsx)(Portal.Root, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: isVisible && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { onClick: close, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { ease: "easeInOut" }, style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 99,
                            background: "rgba(0,0,0,.3)",
                        } }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { transition: { ease: "easeInOut" }, initial: { right: -MODAL_WIDTH }, style: {
                            position: "fixed",
                            height: "100%",
                            width: MODAL_WIDTH,
                            background: "white",
                            right: 0,
                            top: 0,
                            zIndex: 200,
                        }, className: "overflow-hidden rounded border", animate: { right: 0 }, exit: { right: -MODAL_WIDTH }, children: children })] })) }) }));
}
exports.default = SideModal;
