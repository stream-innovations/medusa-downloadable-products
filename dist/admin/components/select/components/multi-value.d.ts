import { GroupBase, MultiValueGenericProps, MultiValueProps, MultiValueRemoveProps } from "react-select";
declare const MultiValue: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ children, className, cx, innerProps, isDisabled, isFocused, removeProps, components, selectProps, data, }: MultiValueProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default MultiValue;
export declare const MultiValueContainer: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ children, innerProps: { className }, }: MultiValueGenericProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const MultiValueRemove: <Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>>(props: MultiValueRemoveProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
