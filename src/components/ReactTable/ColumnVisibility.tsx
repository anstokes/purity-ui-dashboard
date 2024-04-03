import React from "react";
import { TbColumns } from 'react-icons/tb';
import { Box, Checkbox, Flex, Icon, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { Table } from "@tanstack/react-table";

import { getHeaderValue } from "../../views/Dashboard/ReactTable/utils";
import { useTable } from "./Provider";

export type TColumnVisibilityProps<T> = {
  table?: Table<T>,
}

export default function ColumnVisibility(/* props: TColumnVisibilityProps<T> */) {
  const { table } = useTable();

  /*
  const [{ headers: [{ getContext }] }] = table.getHeaderGroups();
  const context = getContext() as HeaderContext<unknown, unknown>;
  */

  return table
    ? (
      <Flex justifyContent='flex-end' marginTop='10px'>
        <Box>
          <Menu>
            <MenuButton as={IconButton}>
              <Icon as={TbColumns} />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Visible Columns">
                {
                  table.getAllColumns().map((column: any) => (
                    <MenuItem
                      key={column.id}
                      closeOnSelect={false}
                    >
                      <Checkbox
                        isChecked={column.getIsVisible()}
                        isDisabled={!column.getCanHide()}
                        mr="10px"
                        onChange={column.getToggleVisibilityHandler()}
                        type="checkbox"
                      />
                      {getHeaderValue(column)}
                    </MenuItem>
                  ))
                }
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    )
    : null;
}
