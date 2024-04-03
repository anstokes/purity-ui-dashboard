import React from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";
import { Table, flexRender } from "@tanstack/react-table";

import { useTable } from "./Provider";

export type TBodyProps<T> = {
  table?: Table<T>,
}

export default function Body(/* props: TBodyProps<T> */) {
  const { table } = useTable();

  return table
    ? (
      <Tbody>
        {
          table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {
                // Takes column visibility into account
                row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))
              }
            </Tr>
          ))
        }
      </Tbody>
    )
    : null;
}
