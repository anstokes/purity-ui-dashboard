import React from 'react';
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function Date(date: string) {
  const textColor = useColorModeValue("gray.700", "white");
  
  return (
    <Text color={textColor} fontSize="md" fontWeight="bold" pb=".5rem">
      {date}
    </Text>
  );
}
