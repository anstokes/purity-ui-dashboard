import React from "react";
import { Checkbox } from "@chakra-ui/react";
import { HeaderContext } from "@tanstack/react-table";

export default function RowSelectionHeader<T>(props: HeaderContext<T, unknown>) {
  const { table } = props;

  return (
    <Checkbox
      isChecked={table.getIsAllRowsSelected()}
      isIndeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()} // or getToggleAllPageRowsSelectedHandler
    />    
  );
}
