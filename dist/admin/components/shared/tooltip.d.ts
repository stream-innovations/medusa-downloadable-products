import * as RadixTooltip from "@radix-ui/react-tooltip";
import React from "react";
export type TooltipProps = RadixTooltip.TooltipContentProps & Pick<RadixTooltip.TooltipProps, "open" | "defaultOpen" | "onOpenChange" | "delayDuration"> & {
    body: React.ReactNode;
    side?: "bottom" | "left" | "top" | "right";
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    maxWidth?: number;
};
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
