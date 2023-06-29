"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const file_upload_field_1 = __importDefault(require("../components/file-upload-field"));
const select_1 = require("../components/select");
const container_1 = require("../components/shared/container");
const button_1 = __importDefault(require("../components/shared/button"));
const table_1 = __importDefault(require("../components/table"));
const hooks_1 = require("../components/shared/hooks");
const medusa_react_1 = require("medusa-react");
const supportedProductTypes = ["Media"];
const ProductMediaEditor = (props) => {
    var _a, _b, _c;
    const [fileToUpload, setFileToUpload] = (0, react_1.useState)(null);
    const [addingProduct, setAddingProduct] = (0, react_1.useState)(false);
    const [variantToAttach, setVariantToAttach] = (0, react_1.useState)(null);
    const [attachmentType, setAttachmentType] = (0, react_1.useState)(null);
    const product = props.product;
    const isMediaType = supportedProductTypes.includes((_a = product.type) === null || _a === void 0 ? void 0 : _a.value);
    const { mutateAsync: uploadFile } = (0, medusa_react_1.useAdminUploadFile)();
    const createProductMedia = (0, hooks_1.useAdminCreateProductMediaMutation)();
    const response = (0, hooks_1.useAdminProductMedias)({
        expand: ["variants"],
        variant_id: product.variants.map((v) => v.id),
    });
    const productMediaList = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.product_medias) !== null && _c !== void 0 ? _c : [];
    if (!isMediaType) {
        return null;
    }
    const onCreateProductMedia = async (e) => {
        e.preventDefault();
        const uploadResult = await uploadFile(fileToUpload);
        const uploadedFileUrl = uploadResult.uploads[0].url;
        const res = await createProductMedia.mutateAsync({
            name: fileToUpload.name,
            file: uploadedFileUrl,
            mime_type: fileToUpload.type,
            product_variant: {
                id: variantToAttach,
                type: attachmentType,
            },
        });
        if (res.response) {
            if (res.response.status === 400) {
                props.notify.error("Error", "Product Media was not created");
            }
            else {
                props.notify.success("Product Media Created", "Product Media was created");
                setFileToUpload(null);
            }
        }
    };
    const handleFileChosen = (file) => {
        setFileToUpload(file[0]);
    };
    const humanizeSize = (file) => {
        if (file.size < 1000) {
            return `${file.size} B`;
        }
        else if (file.size < 1000000) {
            return `${Math.round(file.size / 1000)} KB`;
        }
        else {
            return `${Math.round(file.size / 1000000)} MB`;
        }
    };
    const handleVariantSelected = (value) => {
        setVariantToAttach(value.value);
    };
    const handleAttachmentTypeSelected = (value) => {
        setAttachmentType(value.value);
    };
    return ((0, jsx_runtime_1.jsxs)(container_1.Container, { children: [(0, jsx_runtime_1.jsx)("h2", { className: "inter-xlarge-semibold", children: "Product Media" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-base", children: [(0, jsx_runtime_1.jsx)(MediaTable, { children: productMediaList.map((pm) => pm.variants &&
                            pm.variants.map((prodVariant) => {
                                const productVariant = product.variants.find((v) => v.id === prodVariant.variant_id);
                                if (!productVariant) {
                                    return null;
                                }
                                return ((0, jsx_runtime_1.jsxs)(table_1.default.Row, { children: [(0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: (0, jsx_runtime_1.jsx)("img", { className: "w-16 h-16 object-contain", src: pm.file }) }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: pm.name }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: productVariant.title }), (0, jsx_runtime_1.jsx)(table_1.default.Cell, { children: prodVariant.type })] }, pm.id));
                            })) }), addingProduct ? ((0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col my-base min-h-[400px]", onSubmit: onCreateProductMedia, children: [fileToUpload ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-y-6 grow", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4 items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-1/3 aspect-square", children: (0, jsx_runtime_1.jsx)("img", { className: "w-full h-full object-contain", src: URL.createObjectURL(fileToUpload) }) }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: ["File name: ", fileToUpload.name] }), (0, jsx_runtime_1.jsxs)("li", { children: ["File size: ", humanizeSize(fileToUpload)] }), (0, jsx_runtime_1.jsxs)("li", { children: ["File type: ", fileToUpload.type] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4", children: [(0, jsx_runtime_1.jsx)(select_1.NextSelect, { label: "Variant", onChange: handleVariantSelected, options: product.variants.map((v) => ({
                                                    label: v.title,
                                                    value: v.id,
                                                })) }), (0, jsx_runtime_1.jsx)(select_1.NextSelect, { label: "Attachment Type", onChange: handleAttachmentTypeSelected, options: [
                                                    { label: "Main", value: "main" },
                                                    { label: "Preview", value: "preview" },
                                                ] })] })] })) : ((0, jsx_runtime_1.jsx)(file_upload_field_1.default, { className: "grow", onFileChosen: handleFileChosen, filetypes: [] })), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end items-center mt-base gap-x-2", children: [(0, jsx_runtime_1.jsx)(button_1.default, { size: "small", variant: "secondary", onClick: () => {
                                            setAddingProduct(false);
                                            setFileToUpload(null);
                                            setVariantToAttach(null);
                                            setAttachmentType(null);
                                        }, children: "Cancel" }), (0, jsx_runtime_1.jsx)(button_1.default, { disabled: !fileToUpload || !variantToAttach || !attachmentType, size: "small", variant: "primary", type: "submit", children: "Add" })] })] })) : ((0, jsx_runtime_1.jsx)("div", { className: "mt-4 flex justify-end items-center", children: (0, jsx_runtime_1.jsx)(button_1.default, { size: "small", variant: "secondary", onClick: () => setAddingProduct(true), children: "Add Media" }) }))] })] }));
};
const MediaTable = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)(table_1.default, { children: [(0, jsx_runtime_1.jsx)(table_1.default.Head, { children: (0, jsx_runtime_1.jsxs)(table_1.default.HeadRow, { children: [(0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "File" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Name" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Variant" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Type" }), (0, jsx_runtime_1.jsx)(table_1.default.HeadCell, { children: "Actions" })] }) }), (0, jsx_runtime_1.jsx)(table_1.default.Body, { children: children })] }));
};
exports.config = {
    zone: "product.details.after",
};
exports.default = ProductMediaEditor;
