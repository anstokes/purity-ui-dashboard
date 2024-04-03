import React, { ReactNode } from "react";

import { Flex, Table } from "@chakra-ui/react";

import DefaultBody, { TBodyProps } from "./Body";
import DefaultFooter, { TFooterProps } from "./Footer";
import DefaultHeader, { THeaderProps } from "./Header";
import DefaultPagination, { TPaginationProps } from "./Pagination";
import DefaultColumnVisibility, { TColumnVisibilityProps } from "./ColumnVisibility";
import { useTable } from "./Provider";

type TFalsy = null | false;

type TReactTableProps<RowFormat> = {
  Body?: TFalsy | ((props: TBodyProps<RowFormat>) => ReactNode),
  ColumnVisibility?: TFalsy | ((props: TColumnVisibilityProps<RowFormat>) => ReactNode),
  Footer?: TFalsy | ((props: TFooterProps<RowFormat>) => ReactNode),
  Header?: TFalsy | ((props: THeaderProps<RowFormat>) => ReactNode),
  Pagination?: TFalsy | ((props: TPaginationProps<RowFormat>) => ReactNode),
}

export default function ReactTable<RowFormat>(props: TReactTableProps<RowFormat>) {
  // Destructure components for rendering
  const { Body, ColumnVisibility, Footer, Header, Pagination } = props;  

  // Read table from context
  const { table } = useTable();

  if (!table) {
    return null;
  }

  return table
    ? (
      <Flex direction='column' w='100%'>
        {ColumnVisibility && (<ColumnVisibility />)}
        <Table>
          {Header && (<Header />)}
          {Body && (<Body />)}
          {Footer && (<Footer />)}
        </Table>
        {Pagination && (<Pagination />)}
      </Flex>
    )
    : null;
}

ReactTable.defaultProps = {
  Body: DefaultBody,
  ColumnVisibility: DefaultColumnVisibility,
  Footer: DefaultFooter,
  Header: DefaultHeader,
  Pagination: DefaultPagination,
};
