import React, { useCallback } from "react";
import { Row } from "@tanstack/react-table";

import { Checkboxes } from "@components/ReactTable/Filterable";
import { TApplyFilter, TFilterComponentProps } from "@components/ReactTable/Filterable/typings";

// Values for checkboxes
const map = new Map([
  ['2020', 1],
  ['2021', 1],
  ['2022', 1],
]);

type TYear = {
  start: Date,
  end: Date,
};

// Date filter function
function filterDates<T>(row: Row<T>, columnId: string, filterValue: any): boolean {
  // Select all
  if (typeof filterValue === 'undefined') {
    return true;
  }
  
  // Select none
  if (filterValue === 'null') {
    return false;
  }

  // Build years for comparison
  const years: TYear[] = filterValue.map((year: string) => ({
    start: new Date(Number(year), 0, 1), // 1st January
    end: new Date(Number(year), 11, 31), // 31st December
  }));

  const dateString: string = row.getValue(columnId);
  if (dateString) {
    const dateParts = dateString.split('/');
    if (dateParts.length === 3) {
      const [day, month, year] = dateParts;
      const rowDate = new Date(Number(year) + 2000, Number(month) - 1, Number(day));
      return years.some(({ start, end }) => ((rowDate >= start) && (rowDate <= end)));
    }
  }

  return false;
}

export default function CustomCheckboxes<T>(props: TFilterComponentProps<T>) {
  const { column, onApply } = props;

  if (column) {
    /**
     * Hijack the function; manually replace the values.
     * NOTE: ensure the values are defined OUTSIDE the component, to prevent re-rendering.
     */
    column.getFacetedUniqueValues = () => map;
  }

  const customApplyFilter = useCallback((filter: TApplyFilter<T>) => {
    const { close, value } = filter;

    let values = value;
    if (value) {
      values = (Array.isArray(value) ? value : [value]);
    }

    onApply({
      close,
      filterFn: filterDates,
      value: values,
    });
  }, [onApply]);

  return (
    <Checkboxes
      column={column}
      onApply={customApplyFilter}
    />
  );
}
