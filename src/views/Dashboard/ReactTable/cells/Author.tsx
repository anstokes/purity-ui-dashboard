import React from "react";
import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { TRow } from "../typings";

export default function Author(row: TRow) {
  const { logo, name, email } = row;
  const textColor = useColorModeValue("gray.700", "white");
    
  return (
    <Flex align="center" flexWrap="nowrap" minWidth="100%" py=".8rem">
      <Avatar borderRadius="12px" me="18px" src={logo} w="50px" />
      <Flex direction="column">
        <Text
          color={textColor}
          fontSize="md"
          fontWeight="bold"
          minWidth="100%"
        >
          {name}
        </Text>
        <Text color="gray.400" fontSize="sm" fontWeight="normal">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
}
