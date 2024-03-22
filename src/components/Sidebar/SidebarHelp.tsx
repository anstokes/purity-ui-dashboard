import React from "react";

import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";

import SidebarHelpImage from "@assets/img/SidebarHelpImage.png";

import IconBox from "../Icons/IconBox";

export default function SidebarHelp() {
  return (
    <Flex
      alignItems="start"
      bgImage={SidebarHelpImage}
      borderRadius="15px"
      boxSize="border-box"
      flexDirection="column"
      h="170px"
      justifyContent="flex-start"
      p="16px"
      w="100%"
    >
      <IconBox bg="white" h="35px" mb="auto" width="35px">
        <QuestionIcon color="teal.300" h="18px" w="18px" />
      </IconBox>
      <Text color="white" fontSize="sm" fontWeight="bold">
        Need help?
      </Text>
      <Text color="white" fontSize="xs" mb="10px">
        Please check our docs
      </Text>
      <Link
        href="https://demos.creative-tim.com/docs-purity-ui-dashboard/"
        w="100%"
      >
        <Button
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}          
          _focus={{
            boxShadow: "none",
          }}
          bg="white"
          color="black"
          fontSize="10px"
          fontWeight="bold"
          w="100%"
        >
          DOCUMENTATION
        </Button>
      </Link>
    </Flex>
  );
}
