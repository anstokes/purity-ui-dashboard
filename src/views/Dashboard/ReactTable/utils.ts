import { Column, HeaderContext } from "@tanstack/react-table";

export function getHeaderValue(column: Column<unknown>, context?: HeaderContext<unknown, unknown>) {
  const { header } = column.columnDef;

  switch (typeof header) {
  case 'string':
    return header;
      
  case 'function':
    /**
     * Ideally we should somehow implement execution of header() function but we need to get the
     * "header context" which is not available in "column context"
     */
    if (context) {
      // console.log(`Resolved via context: ${header(context)}`);
      return header(context);
    }
    break;
    
  default:
    break;
  }

  return column.id;
};

export default getHeaderValue;
