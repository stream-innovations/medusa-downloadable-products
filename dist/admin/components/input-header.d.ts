import React from "react";
export type InputHeaderProps = {
    label?: string;
    required?: boolean;
    tooltipContent?: React.ReactNode;
    tooltip?: React.ReactNode;
    className?: string;
};
declare const InputHeader: React.FC<InputHeaderProps>;
export default InputHeader;
