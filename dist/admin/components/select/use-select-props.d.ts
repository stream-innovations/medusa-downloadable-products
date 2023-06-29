import { GroupBase, Props } from "react-select";
export declare const useSelectProps: <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ components, isMulti, closeMenuOnScroll, hideSelectedOptions, closeMenuOnSelect, label, size, options, onChange: changeFn, styles, ...props }: Props<Option, IsMulti, Group>) => Props<Option, IsMulti, Group>;
