import React from "react";
import { HStack, Th, Thead, Tr } from "@chakra-ui/react";
import { Table, flexRender } from "@tanstack/react-table";

import { Filterable } from "./Filterable";
import { useTable } from "./Provider";
import Sortable from "./Sortable";

export type THeaderProps<T> = {
  enableSorting?: boolean,
  table?: Table<T>,
}

export default function Header<T>(props: THeaderProps<T>) {
  const { enableSorting } = props;
  const table = props?.table || useTable()?.table;

  return table
    ? (
      <Thead>
        {
          table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {
                headerGroup.headers.map((header) => {
                  const { column, getContext, id, isPlaceholder } = header;

                  let render;
                  if (isPlaceholder) {
                    render = null;
                  } else if (enableSorting) {
                    render = (<Sortable<T> header={header} />);
                  } else {
                    render = flexRender(column.columnDef.header, getContext());
                  }

                  return (
                    <Th key={id}>
                      <HStack>
                        {render}
                        <Filterable<T> header={header} />
                      </HStack>
                    </Th>
                  );
                })
              }
            </Tr>
          ))
        }
      </Thead>
    )
    : null;
}

Header.defaultProps = {
  enableSorting: true,
  table: null,
};
