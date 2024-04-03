import { ReactNode } from "react";
import { Column, FilterFn } from "@tanstack/react-table";

export type TFilterComponentProps<T> = {
  column?: Column<T>,
  onApply: (filter: TApplyFilter<T>) => void,
}

export type TFilterComponent<T> = (props: TFilterComponentProps<T>) => ReactNode

/**
 * Declare the ColumnMeta interface to enable the relevant meta properties
 */
declare module '@tanstack/table-core/build/lib/types' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface ColumnMeta<TData extends RowData, TValue> {
    FilterComponent?: (props: TFilterComponentProps<TData>) => ReactNode,
    visible?: boolean,
  }
}

export type TApplyFilter<T> = {
  close?: boolean
  filterFn?: FilterFn<T>
  value?: any,
};
