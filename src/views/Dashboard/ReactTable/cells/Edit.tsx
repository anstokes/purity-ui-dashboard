import React from "react";
import { Button, Text } from "@chakra-ui/react";

export default function Edit() {
  return (
    <Button bg="transparent" p="0px" variant="no-hover">
      <Text
        color="gray.400"
        cursor="pointer"
        fontSize="md"
        fontWeight="bold"
      >
        Edit
      </Text>
    </Button>
  );
}
