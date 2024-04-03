import React from "react";
import { Button, ButtonGroup, Flex, HStack, Select } from "@chakra-ui/react";
import { Table } from "@tanstack/react-table";

import { useTable } from "./Provider";

export type TPaginationProps<T> = {
  table?: Table<T>,
}

export default function Pagnination(/* props: TPaginationProps<T> */) {
  const { table } = useTable();

  return table
    ? (
      <Flex justifyContent='flex-end' marginTop='10px'>
        <HStack>
          <ButtonGroup isAttached>
            <Button
              isDisabled={!table.getCanPreviousPage()}
              onClick={() => table.firstPage()}
            >
              {'<<'}
            </Button>
            <Button
              isDisabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              {'<'}
            </Button>
          </ButtonGroup>            
          <Select
            display='inline-block'
            onChange={e => { table.setPageSize(Number(e.target.value)); }}
            value={table.getState().pagination.pageSize}
            w='80px'
          >
            {[3, 6, 9].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>
          <ButtonGroup isAttached>
            <Button
              isDisabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              {'>'}
            </Button>
            <Button
              isDisabled={!table.getCanNextPage()}
              onClick={() => table.lastPage()}
            >
              {'>>'}
            </Button>
          </ButtonGroup>            
        </HStack>
      </Flex>
    )
    : null;
}
