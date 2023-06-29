/// <reference types="lodash" />
import type { CommonPropsAndClassName, FormatOptionLabelMeta, GroupBase } from "react-select";
export declare const cleanCommonProps: <Option, IsMulti extends boolean, Group extends GroupBase<Option>, AdditionalProps>(props: Partial<CommonPropsAndClassName<Option, IsMulti, Group>> & AdditionalProps) => import("lodash").Omit<Partial<CommonPropsAndClassName<Option, IsMulti, Group>> & AdditionalProps, "className" | "cx" | "selectProps" | "isRtl" | "hasValue" | "isMulti" | "theme" | "getStyles" | "clearValue" | "getValue" | "options" | "selectOption" | "setValue">;
export declare const optionIsFixed: (option: unknown) => option is {
    isFixed: unknown;
};
export declare const optionIsDisabled: (option: unknown) => option is {
    isDisabled: boolean;
};
export declare const hasLabel: (option: unknown) => option is {
    label: string;
};
export declare const hasPrefix: (option: unknown) => option is {
    prefix: string;
};
export declare const hasSuffix: (option: unknown) => option is {
    suffix: string;
};
export declare const isCreateOption: (option: unknown) => option is {
    __isNew__: true;
};
export declare const formatOptionLabel: <Option>(option: Option, { inputValue }: FormatOptionLabelMeta<Option>) => string | import("react/jsx-runtime").JSX.Element;
