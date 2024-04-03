import React, { CSSProperties, useCallback, useState } from "react";
import { FilterFnOption, Header } from "@tanstack/react-table";
import { IconType } from "react-icons";
import { TbFilter, TbFilterEdit } from "react-icons/tb";
import { Badge, ButtonGroup, Icon, IconButton, Menu, MenuButton, MenuGroup, MenuList } from "@chakra-ui/react";

import { TApplyFilter, TFilterComponent } from "./typings";
import Checkboxes from "./Checkboxes";

type TFilterableOption = {
  icon?: IconType,
  title?: string,
  filtered: boolean,
};

const filterableOptions: TFilterableOption[] = [
  {
    icon: TbFilter,
    title: 'Enable filter',
    filtered: true,
  },
  {
    icon: TbFilterEdit,
    title: 'Edit filter',
    filtered: false,
  },
];

const styles: { [index: string]: CSSProperties } = {
  badge: {
    borderRadius: 8,
    lineHeight: '1rem',
    position: 'absolute',
    right: -8,
    top: 0,
    /*
    height: 16,
    width: 16,
    */
  },
  pointer: {
    cursor: 'pointer',
    userSelect: 'none',
  },
};

type TFilterableProps<T> = {
  header: Header<T, unknown>,
  DefaultComponent?: TFilterComponent<T>,
};

/**
 * A filter that always returns false
 * @returns false
 */
const noResultsFilter = () => false;

export default function Filterable<T>(props: TFilterableProps<T>) {
  const { header: { column }, DefaultComponent } = props;
  const [isOpen, setIsOpen] = useState(false);
  
  const canFilter = column.getCanFilter();
  const isFiltered = column.getIsFiltered();

  function closeMenu() { setIsOpen(false); };

  const applyFilter = useCallback((filter: TApplyFilter<T>) => {
    const { close, filterFn: applyFilterFn, value } = filter;
    // console.log(`Setting filter: ${column.id}`, value);

    /**
     * Decide filter function and/or value
     */
    let filterFn: FilterFnOption<T> | undefined = applyFilterFn;
    let filterValue;
    if (value === null) {
      // Apply a filter that always returns false
      filterFn = applyFilterFn || noResultsFilter;
      filterValue = 'null';
    } else if ((typeof value === 'string')) {
      // console.log('String filtering: includesString');
      filterFn = applyFilterFn || 'includesString';
      filterValue = value;
    } else if (Array.isArray(value)) {
      // console.log('Array filtering: arrIncludesSome');
      filterFn = applyFilterFn || 'arrIncludesSome';
      filterValue = value;
    }

    /**
     * Apply changes, where relevant
     */
    if (filterFn && (column.getFilterFn() !== filterFn)) {
      column.columnDef.filterFn = filterFn;
    }
    if (column.getFilterValue() !== filterValue) {
      column.setFilterValue(filterValue);
    }
    
    if (close) {
      closeMenu();
    }
  }, [column]);

  let icon;
  let title;
  const filterableOption = filterableOptions.find(({ filtered }) => filtered !== isFiltered);
  if (filterableOption) {
    ({ icon, title } = filterableOption);
  }

  let filterCount;
  const filterValue = column.getFilterValue();
  if (filterValue) {
    if (Array.isArray(filterValue)) {
      filterCount = filterValue.length;
    } else if (filterValue === 'null') {
      filterCount = 0;
    } else {
      filterCount = 1;
    }
  }

  // Component to use for filter manipulation
  const FilterComponent = column.columnDef?.meta?.FilterComponent || DefaultComponent;

  return (canFilter && FilterComponent)
    ? (
      <Menu isOpen={isOpen}>
        <ButtonGroup isAttached>
          <MenuButton as={IconButton} onClick={() => { setIsOpen(!isOpen);  }} size="sm">
            <Icon as={icon} title={title} />
            {(typeof filterCount !== 'undefined') && (
              <Badge colorScheme="red" style={styles.badge}>
                {filterCount}
              </Badge>
            )}
          </MenuButton>
          {
            /*
            isFiltered && (
              <MenuButton
                as={IconButton}
                onClick={() => { applyFilter(''); setIsOpen(false); }}
                size="sm"
              >
                <Icon as={TbFilterOff} title="Clear filter" />
              </MenuButton>
            )
            */
          }
        </ButtonGroup>          
        <MenuList>
          <MenuGroup title="Filter options">
            <FilterComponent
              column={column}
              onApply={applyFilter}
            />
          </MenuGroup>
        </MenuList>
      </Menu>
    )
    : null;
}

Filterable.defaultProps = {
  DefaultComponent: Checkboxes,
};
