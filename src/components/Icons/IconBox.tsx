import React, { ReactNode } from "react";
import { Flex, StyleProps } from "@chakra-ui/react";

interface TIconBoxProps extends StyleProps {
  children: ReactNode
}

export default function IconBox(props: TIconBoxProps) {
  const { children, ...rest } = props;

  return (
    <Flex
      alignItems="center"
      borderRadius="12px"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Flex>
  );
}
