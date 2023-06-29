import React from "react";
import { ActionType } from "../shared/actionables";
import { FilteringOptionProps } from "./filtering-option";
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
    forceDropdown?: boolean;
    actions?: ActionType[];
    linkTo?: string;
    clickable?: boolean;
};
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
    linkTo?: string;
    name?: string;
};
type SortingHeadCellProps = {
    onSortClicked: () => void;
    sortDirection?: "ASC" | "DESC";
    setSortDirection: (string: any) => void;
} & React.HTMLAttributes<HTMLTableCellElement>;
export type TableProps = {
    filteringOptions?: FilteringOptionProps[] | React.ReactNode;
    tableActions?: React.ReactNode;
    enableSearch?: boolean;
    searchClassName?: string;
    immediateSearchFocus?: boolean;
    searchPlaceholder?: string;
    searchValue?: string;
    containerClassName?: string;
    handleSearch?: (searchTerm: string) => void;
} & React.HTMLAttributes<HTMLTableElement>;
type TableElement<T> = React.ForwardRefExoticComponent<T> & React.RefAttributes<unknown>;
type TableType = {
    Head: TableElement<React.HTMLAttributes<HTMLTableSectionElement>>;
    HeadRow: TableElement<React.HTMLAttributes<HTMLTableRowElement>>;
    HeadCell: TableElement<React.ThHTMLAttributes<HTMLTableCellElement>>;
    SortingHeadCell: TableElement<SortingHeadCellProps>;
    Body: TableElement<React.HTMLAttributes<HTMLTableSectionElement>>;
    Row: TableElement<TableRowProps>;
    Cell: TableElement<TableCellProps>;
} & TableElement<TableProps>;
declare const Table: TableType;
export default Table;
