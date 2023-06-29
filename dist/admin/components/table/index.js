"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const react_router_dom_1 = require("react-router-dom");
const actionables_1 = __importDefault(require("../shared/actionables"));
const filtering_option_1 = __importDefault(require("./filtering-option"));
const sorting_icon_1 = __importDefault(require("../shared/sorting-icon"));
const table_search_1 = __importDefault(require("./table-search"));
const Table = react_1.default.forwardRef(({ className, children, tableActions, enableSearch, searchClassName, immediateSearchFocus, searchPlaceholder, searchValue, handleSearch, filteringOptions, containerClassName, ...props }, ref) => {
    if (enableSearch && !handleSearch) {
        throw new Error("Table cannot enable search without a search handler");
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col ${containerClassName}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-2 flex w-full justify-between", children: [filteringOptions ? ((0, jsx_runtime_1.jsx)("div", { className: "mb-2 flex self-end", children: Array.isArray(filteringOptions)
                            ? filteringOptions.map((fo) => (0, jsx_runtime_1.jsx)(filtering_option_1.default, { ...fo }))
                            : filteringOptions })) : ((0, jsx_runtime_1.jsx)("span", { "aria-hidden": true })), (0, jsx_runtime_1.jsxs)("div", { className: "gap-x-xsmall flex items-center", children: [tableActions && (0, jsx_runtime_1.jsx)("div", { children: tableActions }), enableSearch && ((0, jsx_runtime_1.jsx)(table_search_1.default, { autoFocus: immediateSearchFocus, placeholder: searchPlaceholder, searchValue: searchValue, onSearch: handleSearch, className: searchClassName }))] })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsx)("table", { ref: ref, className: (0, clsx_1.default)("w-full table-auto", className), ...props, children: children }) })] }));
});
Table.Head = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)("thead", { ref: ref, className: (0, clsx_1.default)("inter-small-semibold text-grey-50 border-grey-20 whitespace-nowrap border-t border-b", className), ...props, children: children })));
Table.HeadRow = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tr", { ref: ref, className: (0, clsx_1.default)(className), ...props, children: children })));
Table.HeadCell = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)("th", { ref: ref, className: (0, clsx_1.default)("h-[40px] text-left", className), ...props, children: children })));
Table.SortingHeadCell = react_1.default.forwardRef(({ onSortClicked, sortDirection, setSortDirection, className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("th", { ref: ref, className: (0, clsx_1.default)("py-2.5 text-left", className), ...props, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex cursor-pointer select-none items-center", onClick: (e) => {
                e.preventDefault();
                if (!sortDirection) {
                    setSortDirection("ASC");
                }
                else {
                    if (sortDirection === "ASC") {
                        setSortDirection("DESC");
                    }
                    else {
                        setSortDirection(undefined);
                    }
                }
                onSortClicked();
            }, children: [children, (0, jsx_runtime_1.jsx)(sorting_icon_1.default, { size: 16, ascendingColor: sortDirection === "ASC" ? "#111827" : undefined, descendingColor: sortDirection === "DESC" ? "#111827" : undefined })] }) }));
});
Table.Body = react_1.default.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsx)("tbody", { ref: ref, className: (0, clsx_1.default)(className), ...props, children: children })));
Table.Cell = react_1.default.forwardRef(({ className, linkTo, children, ...props }, ref) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("td", { ref: ref, className: (0, clsx_1.default)("inter-small-regular h-[40px]", className), ...props, ...(linkTo && {
            onClick: (e) => {
                navigate(linkTo);
                e.stopPropagation();
            },
        }), children: children }));
});
Table.Row = react_1.default.forwardRef(({ className, actions, children, linkTo, forceDropdown, clickable, ...props }, ref) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("tr", { ref: ref, className: (0, clsx_1.default)("inter-small-regular border-grey-20 text-grey-90 border-t border-b", className, {
            "hover:bg-grey-5 cursor-pointer": linkTo !== undefined || clickable,
        }), ...props, ...(linkTo && {
            onClick: () => {
                navigate(linkTo);
            },
        }), children: [children, actions && ((0, jsx_runtime_1.jsx)(Table.Cell, { onClick: (e) => e.stopPropagation(), className: "w-[32px]", children: (0, jsx_runtime_1.jsx)(actionables_1.default, { forceDropdown: forceDropdown, actions: actions }) }))] }));
});
exports.default = Table;
