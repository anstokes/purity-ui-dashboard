import React from "react";

// React-table
import {
  ColumnDef,
  // RowData,
  createColumnHelper,
} from "@tanstack/react-table";

// Chakra imports
import {
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";

// ReactTable components
import {
  ColumnVisibility,
  // Header,
  ReactTable,
  ReactTableProvider,
  RowSelectionCellMemoized,
  RowSelectionHeader,
} from "@components/ReactTable";

import { Checkboxes, FreeText } from "@components/ReactTable/Filterable";
// import { THeaderProps } from "@components/ReactTable/Header";

// Table data
import { tablesTableData } from "@variables/general";

// Table cells
import { Author, Date, Domain, Edit, Status } from "./cells";
import CustomCheckboxes from "./customs/CustomCheckboxes";

type TRow = {
  logo: string,
  name: string,
  email: string,
  subdomain: string,
  domain: string,
  status: string,
  date: string,
}

// Set specific row type here, or use RowData (from react-table) for generic
type RowFormat = TRow; // RowData for generic

// Define initial data
const initialData = tablesTableData;

// Define columns
const columnHelper = createColumnHelper<RowFormat>();
const columns: (ColumnDef<RowFormat, string>)[] = [
  /*
  ...['logo', 'name', 'email', 'subdomain', 'domain', 'date']
    .map((columnName: any) => columnHelper.accessor(columnName, {
      cell: info => info.getValue(),
      footer: info => info.column.id,
    })),
  */
  {
    cell: (cell) => RowSelectionCellMemoized(cell), 
    header: (header) => RowSelectionHeader(header),
    id: 'select',
  },
  columnHelper.accessor('name', {
    cell: (cell) => Author(cell.row.original),
    enableHiding: false, // Prevent changing column visibility
    footer: 'author',
    header: 'author',
    meta: {
      FilterComponent: FreeText<RowFormat>,
    },
    sortingFn: 'alphanumeric',
  }),
  columnHelper.accessor('domain', {
    cell: (cell) => Domain(cell.row.original),
    footer: 'function',
    header: 'function',
  }),
  columnHelper.accessor('status', {
    cell: (cell) => Status(cell.getValue()),
    // enableSorting: false,
    // enableColumnFilter: false,
    footer: (footer) => footer.column.id,
    // header: info => info.column.id, // default
    meta: {
      FilterComponent: Checkboxes<RowFormat>,
    },
  }),
  columnHelper.accessor('date', {
    cell: (cell) => Date(cell.getValue()),
    footer: 'employed',
    header: 'employed',
    meta: {
      FilterComponent: CustomCheckboxes<RowFormat>,
      // visible: false,
    },
  }),
  columnHelper.display({
    cell: Edit,
    footer: '',
    header: '',
    id: 'edit',    
  }),
];
/**
 * Casting here to avoid TypeScript error
 * @see https://github.com/TanStack/table/issues/4302
 */

/**
 * Customised header function
 *
function NoSortableHeader<T>(props: THeaderProps<T>) {
  return <Header enableSorting={false} {...props} />;
}
*/

export default function Table() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <ReactTableProvider<RowFormat> columns={columns} initialData={initialData}>
      <Flex
        direction='column'
        minHeight="calc(100vh - 123px)"
        pt={{ base: "120px", md: "75px" }}
      >
        <Card flex={1} overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p='6px 0px 22px 0px'>
            <HStack justifyContent="space-between" w="100%">
              <Text color={textColor} fontSize='xl' fontWeight='bold'>
                Authors Table
              </Text>
              <ColumnVisibility />
            </HStack>
          </CardHeader>
          <CardBody>
            <Flex direction='column' w='100%'>
              <ReactTable<RowFormat>
                ColumnVisibility={false}
                Footer={false}
                // Header={NoSortableHeader}
              />
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </ReactTableProvider>      
  );
}
