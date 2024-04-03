import React from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";
import { flexRender } from "@tanstack/react-table";

// import { TBodyProps } from "../components/Body";
import { useTable } from "../../../../components/ReactTable/Provider";

export default function CustomBody(/* props: TBodyProps<T> */) {
  const { table } = useTable();

  return table
    ? (
      <Tbody>
        {
          table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {
                row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    Additional contents in cell...
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
