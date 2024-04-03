import React from "react";
import { Tfoot, Th, Tr } from "@chakra-ui/react";
import { Table, flexRender } from "@tanstack/react-table";

import { useTable } from "./Provider";

export type TFooterProps<T> = {
  table?: Table<T>,
}

export default function Footer(/* props: TFooterProps<T> */) {
  const { table } = useTable();

  return table
    ? (
      <Tfoot>
        {
          table.getFooterGroups().map((footerGroup) => (
            <Tr key={footerGroup.id}>
              {
                footerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {
                      header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </Th>
                ))
              }
            </Tr>
          ))
        }
      </Tfoot>
    )
    : null;
}
