import { GroupBase, MenuListProps, MenuProps, NoticeProps, OptionProps } from "react-select";
declare const Menu: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ className, cx, children, innerProps, innerRef, placement, selectProps: { onMenuClose, menuIsOpen, customStyles, styles }, }: MenuProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export default Menu;
export declare const MenuList: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(props: MenuListProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const LoadingMessage: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ innerProps, cx, className, selectProps: { size }, }: NoticeProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const Option: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(props: OptionProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
