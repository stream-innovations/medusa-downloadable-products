"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectProps = void 0;
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const react_1 = require("react");
const components_1 = __importDefault(require("./components"));
const utils_1 = require("./utils");
const useSelectProps = ({ components = {}, isMulti, closeMenuOnScroll = true, hideSelectedOptions = false, closeMenuOnSelect, label, size, options, onChange: changeFn, styles, ...props }) => {
    const [stateOptions, setStateOptions] = (0, react_1.useState)(options || []);
    const sortOptions = (values) => {
        const tmp = values || [];
        const unselectedOptions = stateOptions.filter((option) => !tmp.find((op) => (0, isEqual_1.default)(op, option)));
        const orderedNewOptions = tmp.sort((a, b) => {
            if ((0, utils_1.hasLabel)(a) && (0, utils_1.hasLabel)(b)) {
                return a.label > b.label ? 1 : b.label > a.label ? -1 : 0;
            }
            return 0;
        });
        setStateOptions(orderedNewOptions.concat(unselectedOptions));
    };
    (0, react_1.useEffect)(() => {
        if (isMulti && options) {
            sortOptions(props.value);
        }
        else {
            setStateOptions(options || []);
        }
    }, [options, props.value, isMulti]);
    const onChange = (newValue, actionMeta) => {
        if (isMulti) {
            sortOptions(newValue);
        }
        if (changeFn) {
            changeFn(newValue, actionMeta);
        }
    };
    return {
        label,
        components: { ...components_1.default, ...components },
        styles: {
            menuPortal: (base) => ({ ...base, zIndex: 60 }),
            ...styles,
        },
        isMulti,
        closeMenuOnScroll: true,
        closeMenuOnSelect: closeMenuOnSelect !== undefined ? closeMenuOnSelect : isMulti !== true,
        hideSelectedOptions,
        menuPosition: "fixed",
        maxMenuHeight: size === "sm" ? 154 : 188,
        formatOptionLabel: utils_1.formatOptionLabel,
        size,
        options: stateOptions,
        onChange,
        ...props,
    };
};
exports.useSelectProps = useSelectProps;
