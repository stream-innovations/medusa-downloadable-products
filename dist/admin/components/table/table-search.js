"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const search_icon_1 = __importDefault(require("../shared/search-icon"));
const TableSearch = ({ autoFocus, onSearch, placeholder = "Search", searchValue, className, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("inter-small-regular transition-color text-grey-50 rounded-rounded border-grey-20 min-w-content focus-within:shadow-input focus-within:border-violet-60 bg-grey-5 mt-1 mb-1 flex w-60 items-center border py-1.5 pl-1", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2.5 py-0.5", children: (0, jsx_runtime_1.jsx)(search_icon_1.default, { size: 16 }) }), (0, jsx_runtime_1.jsx)("input", { autoFocus: autoFocus, type: "text", value: searchValue, className: (0, clsx_1.default)("inter-small-regular focus:text-grey-90 caret-violet-60 placeholder:inter-small-regular placeholder-grey-40 w-full bg-transparent focus:border-none focus:outline-none"), placeholder: placeholder, onChange: (e) => {
                    onSearch(e.target.value);
                } })] }));
};
exports.default = TableSearch;
