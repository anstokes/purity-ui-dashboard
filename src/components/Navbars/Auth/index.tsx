import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import SidebarResponsive from "@components/Sidebar/SidebarResponsive";

// Routes
import routes from "@routes";

import Brand from "./Brand";
import Links from "./Links";

enum EColor {
  "primary",
  "info",
  "success",
  "warning",
  "danger",
}

type TAuthNavbarProps = {
  color?: EColor,
  // brandText: string,
  logoText: string,
  secondary: boolean,
}

export default function AuthNavbar(props: TAuthNavbarProps) {
  const { logoText, secondary, ...rest } = props;

  // Chakra color mode
  let navbarIcon = useColorModeValue("gray.700", "gray.200");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarBg = useColorModeValue(
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)",
  );
  let navbarBorder = useColorModeValue(
    "1.5px solid #FFFFFF",
    "1.5px solid rgba(255, 255, 255, 0.31)",
  );
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none",
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))",
  );
  let navbarBackdrop = "blur(21px)";
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800",
  );
  let navbarPosition: any = "fixed";
  let colorButton = "white";
  if (secondary === true) {
    navbarIcon = "white";
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "white";
    colorButton = "gray.700";
    mainText = "white";
    navbarPosition = "absolute";
  }

  return (
    <Flex
      alignItems="center"
      backdropFilter={navbarBackdrop}
      background={navbarBg}
      border={navbarBorder}
      borderRadius="15px"
      boxShadow={navbarShadow}
      filter={navbarFilter}
      left="50%"
      maxW="90%"
      mx="auto"
      position={navbarPosition}
      px="16px"
      py="22px"
      top="16px"
      transform="translate(-50%, 0px)"
      width="1044px"
    >
      <Flex justifyContent={{ sm: "start", lg: "space-between" }} w="100%">
        <Brand
          logoText={logoText}
          mainText={mainText}
        />
        <Box
          display={{ base: "flex", lg: "none" }}
          ms={{ base: "auto", lg: "0px" }}
        >
          <SidebarResponsive
            logoText={logoText}
            routes={routes}
            secondary={secondary}
            {...rest}
          />
        </Box>
        <Links navbarIcon={navbarIcon} />
        <Link href="https://creative-tim.com/product/purity-ui-dashboard">
          <Button
            bg={bgButton}
            borderRadius="35px"
            color={colorButton}
            display={{
              sm: "none",
              lg: "flex",
            }}
            fontSize="xs"
            px="30px"
            variant="no-hover"
          >
            Free Download
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

AuthNavbar.defaultProps = {
  color: undefined,
};
