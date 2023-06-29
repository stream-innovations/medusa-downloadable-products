"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const medusa_react_1 = require("medusa-react");
const react_router_dom_1 = require("react-router-dom");
const table_1 = __importDefault(require("../../../components/table"));
const container_1 = require("../../../components/shared/container");
const hooks_1 = require("../../../components/shared/hooks");
const ProductMediaList = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const { data, isLoading } = (0, hooks_1.useAdminProductMedia)(id);
    const productMedia = data === null || data === void 0 ? void 0 : data.product_media;
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(container_1.Container, { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center space-x-6", children: (0, jsx_runtime_1.jsx)("div", { className: "w-[100px] h-[100px] overflow-hidden p-3", children: (0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-contain", src: productMedia.file, alt: productMedia.name }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 flex space-x-6 divide-x", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("div", { className: "inter-smaller-regular text-grey-50 mb-1", children: "Name" }), (0, jsx_runtime_1.jsx)("div", { children: productMedia.name })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col pl-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "inter-smaller-regular text-grey-50 mb-1", children: "Mime Type" }), (0, jsx_runtime_1.jsx)("div", { className: "max-w-[200px] truncate", children: productMedia.mime_type })] })] })] }), (0, jsx_runtime_1.jsx)(container_1.Container, { children: (0, jsx_runtime_1.jsxs)(table_1.default, { children: [(0, jsx_runtime_1.jsx)(table_1.default.Head, { children: (0, jsx_runtime_1.jsxs)(table_1.default.HeadRow, { children: [(0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Variant" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "SKU" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Attachment Type" })] }) }), (0, jsx_runtime_1.jsx)(table_1.default.Body, { children: productMedia.variants.map((variant) => ((0, jsx_runtime_1.jsx)(VariantRow, { attachment: variant }, variant.id))) })] }) })] }));
};
const VariantRow = ({ attachment }) => {
    const { variants, isLoading } = (0, medusa_react_1.useAdminVariants)({
        id: attachment.variant_id,
    });
    const variant = variants === null || variants === void 0 ? void 0 : variants[0];
    return ((0, jsx_runtime_1.jsxs)(table_1.default.Row, { children: [(0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: isLoading ? ((0, jsx_runtime_1.jsx)("div", { children: "Loading..." })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-2 items-center", children: [(0, jsx_runtime_1.jsx)("div", { children: variant.product.thumbnail && ((0, jsx_runtime_1.jsx)("img", { className: "w-8 h-8 object-contain", src: variant.product.thumbnail, alt: variant.product.title })) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("strong", { children: variant.product.title }), (0, jsx_runtime_1.jsx)("div", { className: "text-grey-50", children: variant.title })] })] })) }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: isLoading ? (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }) : (0, jsx_runtime_1.jsx)("div", { children: variants[0].sku }) }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: (0, jsx_runtime_1.jsx)("div", { children: attachment.type }) })] }));
};
exports.default = ProductMediaList;
