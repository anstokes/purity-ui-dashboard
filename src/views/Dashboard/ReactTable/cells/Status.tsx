import React from "react";
import { Badge, useColorModeValue } from "@chakra-ui/react";

export default function Status(status: string) {
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  
  return (
    <Badge
      bg={status === "Online" ? "green.400" : bgStatus}
      borderRadius="8px"
      color={status === "Online" ? "white" : colorStatus}
      fontSize="16px"
      p="3px 10px"
    >
      {status}
    </Badge>
  );
}
