import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import isEqual from "react-fast-compare";

// React-table
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  RowData,
  RowSelectionState,
  // RowData,
  SortingState,
  Table,
  VisibilityState,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TState<T> = {
  data: T[],
  columnFilters: ColumnFiltersState,
  columnVisibility: VisibilityState,
  pagination: PaginationState,
  rowSelection: RowSelectionState,
  sorting: SortingState,
  table?: Table<any>, // Should be Table<T>
}

const initialState: TState<RowData> = {
  data: [],
  columnFilters: [],
  columnVisibility: {},
  pagination: {
    pageIndex: 0,
    pageSize: 3,  
  },
  rowSelection: {},
  sorting: [],
};

const TableContext = createContext(initialState);

// Nodes which may be used with the stateHelper
enum TStateNode {
  columnFilters = "columnFilters",
  columnVisibility = "columnVisibility",
  pagination = "pagination",
  rowSelection = "rowSelection",
  sorting = "sorting",
}

// State helper, ensures state is only changed when there are actually changes to apply
function stateHelper<T>(state: TState<T>, node: TStateNode, payload: any) {
  const value = typeof payload === 'function'
    ? payload(state[node])
    : payload;
  
  if (!isEqual(value, state[node])) {
    return {
      ...state,
      [node]: value,
    };
  }
  
  return state;  
}

type TReducerAction = {
  type: string,
  payload: any,
};

function reducer<T>(state: TState<T>, action: TReducerAction) {
  switch (action.type) {
  case 'SET_DATA':
    return {
      ...state,
      data: action.payload,
    };

  case 'SET_COLUMN_FILTERS': 
    return stateHelper(state, TStateNode.columnFilters, action.payload);
  
  case 'SET_COLUMN_VISIBILITY':
    return stateHelper(state, TStateNode.columnVisibility, action.payload);
      
  case 'SET_PAGINATION':
    return stateHelper(state, TStateNode.pagination, action.payload);

  case 'SET_ROW_SELECTION':
    return stateHelper(state, TStateNode.rowSelection, action.payload);    
      
  case 'SET_SORTING':
    return stateHelper(state, TStateNode.sorting, action.payload);
      
  default:
    return state;
  }
}

type TTableProviderProps<T> = {
  columns: Array<ColumnDef<T, string>>,
  children: ReactNode,
  initialData: RowData[],
}

export default function TableProvider<T>(props: TTableProviderProps<T>) {
  const { columns, children, initialData, ...remaingProps } = props;

  // State
  const [state, dispatch]: [TState<T>, Dispatch<TReducerAction>] = useReducer(reducer<T>, {
    data: initialData,
    columnFilters: [],
    columnVisibility: columns.reduce(((pv: any, cv: any) => {
      const { accessorKey, id, meta } = cv;
      const field = accessorKey || id;
      if (field) {
        // eslint-disable-next-line no-param-reassign
        pv[field] = meta?.visible ?? true; // Default to visible
      }
      return pv;
    }), {}),
    pagination: {
      pageIndex: 0,
      pageSize: 3,
    },
    rowSelection: {},
    sorting: [],
  });

  /*
  function setData(payload: RowFormat[]) {
    dispatch({ type: 'SET_DATA', payload });
  }
  */
  
  function setColumnFilters<ColumnFiltersState>(payload: ColumnFiltersState) {
    dispatch({ type: 'SET_COLUMN_FILTERS', payload });
  }

  function setColumnVisibility<VisibilityState>(payload: VisibilityState) {
    dispatch({ type: 'SET_COLUMN_VISIBILITY', payload });
  }

  function setPagination<PaginationState>(payload: PaginationState) {
    dispatch({ type: 'SET_PAGINATION', payload });
  }

  function setRowSelection<RowSelectionState>(payload: RowSelectionState) {
    dispatch({ type: 'SET_ROW_SELECTION', payload });
  }

  function setSorting<SortingState>(payload: SortingState) {
    dispatch({ type: 'SET_SORTING', payload });
  }

  useEffect(() => {
    const { columnFilters, pagination, sorting } = state;

    const serverSorting = sorting.reduce((pv: any, cv) => {
      // eslint-disable-next-line no-param-reassign
      pv[`sort[${cv.id}]`] = cv.desc ? 'DESC' : 'ASC';
      return pv;
    }, {});

    const urlSearchParams = new URLSearchParams({
      ...pagination,
      ...serverSorting,
    });

    columnFilters.filter(({ value }) => value).forEach(({ id, value }) => {
      if (Array.isArray(value)) {
        value.forEach((entry) => {
          urlSearchParams.append(`filter[${id}][]`, entry as string);
        });
      } else {
        urlSearchParams.append(`filter[${id}]`, value as string);
      }
    });

    console.log(`Server-side query string: ${decodeURI(urlSearchParams.toString())}`);
  }, [state]);

  // Destructure state to build table
  const table = useReactTable<T>({
    columns,
    data: initialData as T[],
    enableRowSelection: true,
    enableMultiRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(), // Client-side filtering
    getPaginationRowModel: getPaginationRowModel(), // Client-side pagnination
    getSortedRowModel: getSortedRowModel(), // Client-side sorting
    // manualPagination: true, // Server-side pagination
    // manualSorting: true, // Server-side sorting
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    // rowCount,
    state,
    ...remaingProps,
  });

  return (
    <TableContext.Provider
      value={useMemo(() => ({ table, ...state }), [state])}
    >
      {children}
    </TableContext.Provider>
  );
}

export function useTable() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTable can only be used within a TableProvider');
  }
  return context;
}
