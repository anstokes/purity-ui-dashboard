import React from "react";

import { SearchIcon } from "@chakra-ui/icons";

import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SearchBar() {
  // Chakra Color Mode
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");

  return (
    <InputGroup
      _active={{
        borderColor: { mainTeal },
      }}
      _focus={{
        borderColor: { mainTeal },
      }}
      bg={inputBg}
      borderRadius="15px"
      w="200px"
    >
      <InputLeftElement>
        <IconButton
          _active={{
            bg: "inherit",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          _hover={{ parts: 'none' }}
          aria-label=""
          bg="inherit"
          borderRadius="inherit"
          icon={<SearchIcon color={searchIconColor} h="15px" w="15px" />}
        />
      </InputLeftElement>
      <Input
        borderRadius="inherit"
        fontSize="xs"
        placeholder="Type here..."
        py="11px"
      />
    </InputGroup>
  );
}
