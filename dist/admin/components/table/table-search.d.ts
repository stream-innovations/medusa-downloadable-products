import React from "react";
type TableSearchProps = {
    autoFocus?: boolean;
    onSearch: (term: string) => void;
    placeholder?: string;
    searchValue?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const TableSearch: React.FC<TableSearchProps>;
export default TableSearch;
