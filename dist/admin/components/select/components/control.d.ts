import { ClearIndicatorProps, ControlProps, DropdownIndicatorProps, GroupBase, LoadingIndicatorProps } from "react-select";
declare const Control: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ className, cx, children, innerRef, innerProps, isDisabled, isFocused, menuIsOpen, selectProps: { size, customStyles, name }, }: ControlProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default Control;
export declare const DropdownIndicator: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ innerProps, cx, children, className, selectProps: { menuIsOpen }, }: DropdownIndicatorProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const LoadingIndicator: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ innerProps, className, cx, }: LoadingIndicatorProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const ClearIndicator: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ innerProps, className, cx, children, }: ClearIndicatorProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
