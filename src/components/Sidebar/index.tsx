import React, { useRef } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

type TSidebarProps = {
  display: string,
  logoText: string,
  routes: any,
  sidebarVariant: string,
}

function Sidebar(props: TSidebarProps) {
  const { display, logoText, routes, sidebarVariant } = props;
  
  // to check for active links and opened collapses
  const mainPanel = useRef(null);
  const opaqueSidebarBg = useColorModeValue("white", "gray.700");
  const variantChange = "0.2s linear";

  //  Chakra Color Mode
  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";
  if (sidebarVariant === "opaque") {
    sidebarBg = opaqueSidebarBg;
    sidebarRadius = "16px";
    sidebarMargins = "16px 0px 16px 16px";
  }

  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          borderRadius={sidebarRadius}
          h="calc(100vh - 32px)"
          m={sidebarMargins}
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          pe="20px"
          ps="20px"
          transition={variantChange}
          w="260px"
        >
          <SidebarContent
            display={display}
            logoText={logoText}
            routes={routes}
            // sidebarVariant={sidebarVariant}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
