import React, { memo } from "react";
import { Checkbox } from "@chakra-ui/react";
import { CellContext } from "@tanstack/react-table";

export default function RowSelectionCell<T>(props: CellContext<T, unknown>) {
  const { row } = props;
  // console.log('Rendered selection cell');

  return (
    <Checkbox
      isChecked={row.getIsSelected()}
      isDisabled={!row.getCanSelect()}
      onChange={row.getToggleSelectedHandler()}
    />
  );
}

/**
 * Memoization example, to reduce re-renders if component rendering is 'expensive'
 */
const selectedRows: any = {};

const Memoized = memo((cell) => RowSelectionCell(cell),
  (prevProps, nextProps) => {
    const { row: { id, getIsSelected } } = nextProps;
    const isSelected = getIsSelected();

    // Check if actually updated
    if (selectedRows[id] !== isSelected) {
      selectedRows[id] = isSelected;
      return false;
    }
    return true;
  }) as typeof RowSelectionCell;

export function RowSelectionCellMemoized<T>(memoProps: CellContext<T, unknown>) {
  // Populate internal selectedRows variable
  const { row: { id, getIsSelected } } = memoProps;
  if (typeof selectedRows[id] === undefined) {
    selectedRows[id] = getIsSelected();
  }

  return (<Memoized {...memoProps} />);
}
