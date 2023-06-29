import React, { ComponentPropsWithRef } from "react";
import { ContainerProps, GroupBase, IndicatorsContainerProps, ValueContainerProps } from "react-select";
type AdjacentContainerProps = {
    label?: string;
    htmlFor?: string;
    helperText?: string;
    required?: boolean;
    name?: string;
    errors?: Record<string, unknown>;
    children?: React.ReactNode;
} & ComponentPropsWithRef<"div">;
export declare const AdjacentContainer: React.ForwardRefExoticComponent<Omit<AdjacentContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const SelectContainer: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ innerProps, selectProps: { isDisabled, isRtl }, hasValue, cx, className, children, }: ContainerProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const ValueContainer: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(props: ValueContainerProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export declare const IndicatorsContainer: <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({ className, cx, innerProps, children, }: IndicatorsContainerProps<Option, IsMulti, Group>) => import("react/jsx-runtime").JSX.Element;
export {};
