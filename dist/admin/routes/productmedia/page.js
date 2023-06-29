"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const table_1 = __importDefault(require("../../components/table"));
const container_1 = require("../../components/shared/container");
const hooks_1 = require("../../components/shared/hooks");
const ProductMediaList = () => {
    const { data } = (0, hooks_1.useAdminProductMedias)();
    const productMedia = (data === null || data === void 0 ? void 0 : data.product_medias) || [];
    return ((0, jsx_runtime_1.jsx)(container_1.Container, { children: (0, jsx_runtime_1.jsxs)(table_1.default, { children: [(0, jsx_runtime_1.jsx)(table_1.default.Head, { children: (0, jsx_runtime_1.jsxs)(table_1.default.HeadRow, { children: [(0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Media" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Type" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Name" })] }) }), (0, jsx_runtime_1.jsx)(table_1.default.Body, { children: productMedia.map((media) => ((0, jsx_runtime_1.jsxs)(table_1.default.Row, { clickable: true, linkTo: `${media.id}`, children: [(0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: (0, jsx_runtime_1.jsx)("div", { className: "w-[100px] h-[100px] overflow-hidden p-3", children: (0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-contain", src: media.file, alt: media.name }) }) }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: media.mime_type }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: media.name })] }, media.id))) })] }) }));
};
exports.default = ProductMediaList;
exports.config = {
    link: {
        label: "Product Media",
    },
};
