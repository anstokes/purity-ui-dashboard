import React, { CSSProperties, ChangeEvent, KeyboardEvent, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import ApplyClear from "./ApplyClear";
import { TFilterComponentProps } from "./typings";
import useDebounce from "../utils/debounce";

const styles: {[index: string]: CSSProperties} = {
  menuItem: {
    marginLeft: 8,
    marginRight: 8,
  },
};

export default function FreeText<T>(props: TFilterComponentProps<T>) {
  const { onApply } = props;

  const [input, setInput] = useState('');

  const debouncedOnApply = useDebounce(onApply, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    debouncedOnApply({ value });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onApply({ value: event.currentTarget.value });
    }
  };

  return (
    <div style={styles.menuItem}>
      <InputGroup>
        <Input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <InputRightElement>
          <ApplyClear
            // onApply={() => { onApply({ value: input, close: true }); }}
            onClear={() => {
              onApply({ value: undefined, close: true });
              setInput('');
            }}
            // style={{ marginRight: 32 }}
          />
        </InputRightElement>
      </InputGroup>
    </div>
  );
}