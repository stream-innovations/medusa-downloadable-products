import React from "react";
export type FilteringOptionProps = {
    title: string;
    options: {
        title: string;
        count?: number;
        onClick: () => void;
    }[];
} & React.HTMLAttributes<HTMLDivElement>;
declare const FilteringOptions: React.FC<FilteringOptionProps>;
export default FilteringOptions;
