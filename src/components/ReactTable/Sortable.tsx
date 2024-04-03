import React, { CSSProperties } from "react";
import { TbChevronDown, TbChevronUp, TbSelector } from 'react-icons/tb';
import { Header, flexRender } from "@tanstack/react-table";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

type TSortableOption = {
  icon?: IconType,
  title?: string,
  type: string,
};

const sortableOptions: TSortableOption[] = [
  {
    icon: TbChevronDown,
    title: 'Sort ascending',
    type: 'asc',
  },
  {
    icon: TbChevronUp,
    title: 'Sort descending',
    type: 'desc',
  },
  {
    icon: TbSelector,
    title: 'Clear sort',
    type: 'clear',
  },
  {
    icon: undefined,
    title: undefined,
    type: 'none',
  },
];

const styles: {[index: string]: CSSProperties} = {
  pointer: {
    cursor: 'pointer',
    userSelect: 'none',
  },
};

function getSortableOption(type: string, fallback?: string): TSortableOption {
  const sortableOption = sortableOptions
    .find(({ type: sortableIconTitleType }) => sortableIconTitleType === type);
  
  if (!sortableOption && fallback) {
    return getSortableOption(fallback);
  }

  return sortableOption || getSortableOption('none');
}

type TSortableProps<T> = {
  header: Header<T, unknown>,
};

export default function Sortable<T>(props: TSortableProps<T>) {
  const { header: { column, getContext } }  = props;
  // console.log(`${column.id}: ${column.getIsSorted() as string}`);

  const canSort = column.getCanSort();

  // Icon represents current sort order
  const { icon } = canSort
    ? getSortableOption(column.getIsSorted() as string, 'clear')
    : getSortableOption('none');
  
  // Title represents next sort order; i.e. if the header is clicked
  const { title } = canSort
    ? getSortableOption(column.getNextSortingOrder() as string, 'clear')
    : getSortableOption('none');

  return (
    <div
      onClick={column.getToggleSortingHandler()}
      style={canSort ? styles.pointer : undefined}
      title={title}
    >
      {flexRender(column.columnDef.header, getContext())}
      {icon && (<Icon as={icon} />)}
    </div>
  );
}
