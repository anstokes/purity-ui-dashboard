import React, { CSSProperties } from "react";
import { TbFilterCheck, TbFilterOff } from "react-icons/tb";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

type TApplyClearProps = {
  onApply?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onClear?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  style?: CSSProperties,
};

export default function ApplyClear(props: TApplyClearProps) {
  const { onApply, onClear, style } = props;

  return (
    <ButtonGroup
      isAttached
      size="sm"
      style={style}
    >
      {onApply && (
        <IconButton
          aria-label="Apply"
          icon={<TbFilterCheck />}
          onClick={(e) => onApply(e)}
          title="Apply filter"
        />
      )}
      {onClear && (
        <IconButton
          aria-label="Clear"
          icon={<TbFilterOff />}
          onClick={(e) => onClear(e)}
          title="Clear filter"
        />
      )}
    </ButtonGroup>
  );
}

ApplyClear.defaultProps = {
  onApply: undefined,
  onClear: undefined,
  style: undefined,
};
