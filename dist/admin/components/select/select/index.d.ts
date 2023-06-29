import type { GroupBase, Props, SelectInstance } from "react-select";
import { ReactElement, RefAttributes } from "react";
export type SelectComponent = <Option = unknown, IsMulti extends boolean = true, Group extends GroupBase<Option> = GroupBase<Option>>(props: Props<Option, IsMulti, Group> & RefAttributes<SelectInstance<Option, IsMulti, Group>>) => ReactElement;
declare const Select: SelectComponent;
export default Select;
