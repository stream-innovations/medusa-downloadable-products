import React from "react";
import IconProps from "../../types/icon-type";
type SortingIconProps = {
    ascendingColor?: string;
    descendingColor?: string;
    isSorted?: "asc" | "desc" | false;
} & IconProps;
declare const SortingIcon: React.FC<SortingIconProps>;
export default SortingIcon;
