import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { TRow } from "../typings";

export default function Domain(row: TRow) {
  const { domain, subdomain } = row;
  const textColor = useColorModeValue("gray.700", "white");
    
  return (
    <Flex direction="column">
      <Text color={textColor} fontSize="md" fontWeight="bold">
        {domain}
      </Text>
      <Text color="gray.400" fontSize="sm" fontWeight="normal">
        {subdomain}
      </Text>
    </Flex>
  );
}
