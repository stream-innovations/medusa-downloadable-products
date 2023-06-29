import React from "react";
import { TooltipProps } from "./tooltip";
import IconProps from "../../types/icon-type";
type IconTooltipProps = TooltipProps & {
    type?: "info" | "warning" | "error";
} & Pick<IconProps, "size">;
declare const IconTooltip: React.FC<IconTooltipProps>;
export default IconTooltip;
