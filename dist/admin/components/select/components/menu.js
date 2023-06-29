"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.LoadingMessage = exports.MenuList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../utils");
const react_1 = require("react");
const button_1 = __importDefault(require("../../shared/button"));
const check_icon_1 = __importDefault(require("../../shared/check-icon"));
const list_arrow_icon_1 = __importDefault(require("../../shared/list-arrow-icon"));
const select_primitives_1 = __importDefault(require("./select-primitives"));
const clsx_1 = __importDefault(require("clsx"));
const Menu = ({ className, cx, children, innerProps, innerRef, placement, selectProps: { onMenuClose, menuIsOpen, customStyles, styles }, }) => {
    (0, react_1.useEffect)(() => {
        const closeOnResize = () => {
            if (menuIsOpen) {
                onMenuClose();
            }
        };
        window.addEventListener("resize", closeOnResize);
        return () => {
            window.removeEventListener("resize", closeOnResize);
        };
    }, [menuIsOpen, onMenuClose]);
    return ((0, jsx_runtime_1.jsx)("div", { ...innerProps, ref: innerRef, style: { ...styles === null || styles === void 0 ? void 0 : styles.menu }, className: cx({ menu: true }, (0, clsx_1.default)("border-border bg-grey-0 rounded-rounded border-grey-20 shadow-dropdown mb-base absolute z-[60] w-full overflow-hidden border", {
            "top-[calc(100%+8px)]": placement === "bottom",
            "bottom-full": placement === "top",
        }, className, customStyles === null || customStyles === void 0 ? void 0 : customStyles.menu)), children: children }));
};
exports.default = Menu;
const SelectAllOption = ({ cx, onChange, options, value, }) => {
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const isAllSelected = (0, react_1.useMemo)(() => {
        if (Array.isArray(value)) {
            const selectableOptions = options.filter((o) => !(0, utils_1.optionIsDisabled)(o));
            return value.length === selectableOptions.length;
        }
        return false;
    }, [options, value]);
    const onClick = (0, react_1.useCallback)(() => {
        if (isAllSelected) {
            onChange([], {
                action: "deselect-option",
                option: [],
            });
        }
        else {
            const selectableOptions = options.filter((o) => !(0, utils_1.optionIsDisabled)(o));
            onChange(selectableOptions, {
                action: "select-option",
                option: selectableOptions,
            });
        }
    }, [isAllSelected, onChange, options]);
    (0, react_1.useEffect)(() => {
        setIsFocused(document.activeElement !== null && document.activeElement === ref.current);
        return () => {
            setIsFocused(false);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)(button_1.default, { ref: ref, variant: "secondary", size: "small", className: cx({
            option: true,
            "option--is-focused": isFocused,
        }, (0, clsx_1.default)("mx-base mb-2xsmall h-xlarge")), type: "button", onClick: onClick, children: [(0, jsx_runtime_1.jsx)(list_arrow_icon_1.default, { size: 16 }), (0, jsx_runtime_1.jsx)("span", { className: "inter-small-semibold", children: !isAllSelected ? "Select All" : "Deselect All" })] }));
};
const MenuList = (props) => {
    const { className, children, cx, isMulti, selectProps: { selectAll, value, onChange }, options, } = props;
    return ((0, jsx_runtime_1.jsxs)(select_primitives_1.default.MenuList, { ...props, className: cx({
            "menu-list": true,
            "menu-list--is-multi": isMulti,
        }, (0, clsx_1.default)("py-xsmall no-scrollbar flex flex-col overflow-y-auto", className)), children: [isMulti && selectAll && ((0, jsx_runtime_1.jsx)(SelectAllOption, { cx: cx, onChange: onChange, options: options, value: value })), children] }));
};
exports.MenuList = MenuList;
const LoadingMessage = ({ innerProps, cx, className, selectProps: { size }, }) => {
    const Skeleton = () => {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)("px-base hover:bg-grey-5 flex w-full items-center transition-colors", {
                "h-xlarge": size === "sm",
                "h-10": size === "md" || !size,
            }), children: (0, jsx_runtime_1.jsx)("div", { className: "bg-grey-10 h-xsmall rounded-rounded w-1/4 animate-pulse" }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ...innerProps, className: cx({
            "menu-notice": true,
            "menu-notice--loading": true,
        }, (0, clsx_1.default)("flex flex-col", className)), children: [(0, jsx_runtime_1.jsx)(Skeleton, {}), (0, jsx_runtime_1.jsx)(Skeleton, {}), (0, jsx_runtime_1.jsx)(Skeleton, {})] }));
};
exports.LoadingMessage = LoadingMessage;
const Option = (props) => {
    const { isSelected, isDisabled, isFocused, children, cx, className, innerProps, innerRef, selectProps: { hideSelectedOptions, isMulti, size, truncateOption }, } = props;
    const prefix = (0, utils_1.hasPrefix)(props.data) ? props.data.prefix : null;
    const suffix = (0, utils_1.hasSuffix)(props.data) ? props.data.suffix : null;
    return ((0, jsx_runtime_1.jsxs)("div", { role: "button", className: cx({
            option: true,
            "option--is-selected": isSelected,
            "option--is-disabled": isDisabled,
            "option--is-focused": isFocused,
        }, (0, clsx_1.default)("py-xsmall px-base hover:bg-grey-5 flex items-center justify-between transition-colors", {
            "text-grey-30 cursor-not-allowed select-none": isDisabled,
            "bg-grey-10": isFocused && !isDisabled,
            hidden: hideSelectedOptions && isSelected,
        }, {
            "h-xlarge": size === "sm",
            "min-h-10": size === "md" || !size,
        }, className)), ref: innerRef, "data-diabled": isDisabled ? true : undefined, "aria-disabled": isDisabled ? true : undefined, tabIndex: isDisabled ? -1 : 0, ...innerProps, children: [(0, jsx_runtime_1.jsxs)("div", { className: "gap-x-small flex flex-1 items-center", children: [isMulti && ((0, jsx_runtime_1.jsx)(CheckboxAdornment, { isSelected: isSelected, isDisabled: isDisabled })), (0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("gap-x-xsmall inter-base-regular flex flex-1 items-center justify-between", {
                            truncate: !!truncateOption,
                        }), children: [prefix && (0, jsx_runtime_1.jsx)("span", { className: "inter-base-semibold", children: prefix }), (0, jsx_runtime_1.jsx)("span", { className: "w-full", children: children }), suffix && ((0, jsx_runtime_1.jsx)("span", { className: "inter-base-regular text-grey-50 justify-self-end", children: suffix }))] })] }), !isMulti && ((0, jsx_runtime_1.jsx)("div", { className: "ml-xsmall w-5", children: isSelected && (0, jsx_runtime_1.jsx)(check_icon_1.default, { size: 16 }) }))] }));
};
exports.Option = Option;
const CheckboxAdornment = ({ isSelected, isDisabled, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(`w-base h-base text-grey-0 border-grey-30 rounded-base flex justify-center border transition-colors`, {
            "bg-violet-60 border-violet-60": isSelected,
            "bg-grey-5": isDisabled,
        }), children: (0, jsx_runtime_1.jsx)("span", { className: "self-center", children: isSelected && (0, jsx_runtime_1.jsx)(check_icon_1.default, { size: 10 }) }) }));
};
