import React, { useEffect, useState } from "react";
import { MenuItem, Checkbox, MenuDivider } from "@chakra-ui/react";

import ApplyClear from "./ApplyClear";
import { TFilterComponentProps } from "./typings";

type TOption = {
  id: string,
  count?: number,
  checked?: boolean,
};
  
export default function Checkboxes<T>(props: TFilterComponentProps<T>) {
  const { column, onApply } = props;
  const columnUniqueValues = column?.getFacetedUniqueValues();

  function getOptions(existingOptions?: TOption[]) {
    const options: TOption[] = [];
    if (columnUniqueValues) {
      Array.from(columnUniqueValues.keys()).forEach((id, index) => {
        options[index] = {
          id,
          count: columnUniqueValues.get(id),
          checked: existingOptions?.find(({ id: existingId }) => id === existingId)?.checked ?? true,
        };
      });
    }
    return options;
  }

  const [options, setOptions] = useState(getOptions());

  const selectedCount = options.filter(({ checked }) => checked).length;
  const allChecked = selectedCount === options.length;
  const noneChecked = selectedCount === 0;
  const someChecked = !noneChecked && !allChecked;

  useEffect(() => {
    // console.log(columnUniqueValues);
    setOptions(getOptions(options));
  }, [columnUniqueValues]);

  useEffect(() => {
    if (allChecked) {
      onApply({ value: undefined });
    } else if (noneChecked) {
      onApply({ value: null });
    } else {
      const selectedOptions = options.filter(({ checked }) => checked)
        .map(({ id }) => id);
      // console.log(`Selected options: ${selectedOptions.join(',')}`);
      onApply({ value: selectedOptions });
    }
  }, options);

  function toggleOption(id: string, checked: boolean) {
    setOptions(options.map((option) => ({
      ...option,
      checked: (option.id === id)
        ? checked
        : option.checked,
    })));
  }

  function toggleAll(checked: boolean) {
    setOptions(options.map((option) => ({
      ...option,
      checked,
    })));
  }
    
  return (
    <>
      <MenuItem as="div"
        onClick={() => toggleAll(!allChecked)}
      >
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={someChecked}
          mr="10px"
          onChange={(e) => { e.stopPropagation(); toggleAll(!!allChecked); }}
          type="checkbox"
        />
        Select all
        <ApplyClear
          // onApply={(e) => { e?.stopPropagation(); }}
          onClear={(e) => {
            e?.stopPropagation();
            toggleAll(true);
            onApply({ value: undefined, close: true });
          }}
          style={{ marginLeft: 'auto' }}
        />
      </MenuItem>
      <MenuDivider />
      {
        options.map(({ id, checked }) => (
          <MenuItem
            key={id}
            closeOnSelect={false}
            onClick={() => toggleOption(id, !checked)}
          >
            <Checkbox
              isChecked={checked}
              mr="10px"
              onChange={(e) => { e.stopPropagation(); toggleOption(id, !!checked); }}
              type="checkbox"
            />
            {id}
          </MenuItem>
        ))
      }
    </>
  );
}
