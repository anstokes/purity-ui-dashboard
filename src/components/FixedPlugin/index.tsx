import React, { useRef } from "react";

// Chakra Imports
import { Button, useColorModeValue } from "@chakra-ui/react";

import { TOnOpen } from "@typings/purityUi";

// Custom Icons
import { SettingsIcon } from "../Icons/Icons";

type TFixedPluginProps = {
  onOpen: TOnOpen,
  // secondary: boolean,
};

export default function FixedPlugin(props: TFixedPluginProps) {
  const { /* secondary, */ onOpen } = props;

  // Chakra Color Mode
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const bgButton = useColorModeValue("white", "gray.600");

  /*
  let fixedDisplay = "flex";
  if (secondary) {
    fixedDisplay = "none";
  }
  */

  const settingsRef = useRef(null);

  return (
    <Button
      bg={bgButton}
      borderRadius="50px"
      bottom="30px"
      boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
      h="52px"
      left={document.documentElement.dir === "rtl" ? "35px" : ""}
      onClick={onOpen}
      position="fixed"
      right={document.documentElement.dir === "rtl" ? "" : "35px"}
      variant="no-hover"
      w="52px"
    >
      <SettingsIcon
        ref={settingsRef}
        color={navbarIcon}
        cursor="pointer"
        h="20px"
        w="20px"
      />
    </Button>
  );
}
