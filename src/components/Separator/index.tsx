import React from "react";
import { Flex } from "@chakra-ui/react";

import { TLayoutProps } from "@typings/purityUi";

export default function Separator(props: TLayoutProps) {
  const { children, ...rest } = props;
  
  return (
    <Flex
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      h="1px"
      w="100%"
      {...rest}
    >
      {children}
    </Flex>
  );
}
