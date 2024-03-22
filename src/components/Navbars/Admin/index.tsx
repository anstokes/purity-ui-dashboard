import React, { useState } from "react";

// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { TOnOpen } from "@typings/purityUi";

import AdminNavbarLinks from "./Links";

type TAdminNavbarProps = {
  brandText: string,
  fixed: boolean,
  logoText: string,
  onOpen: TOnOpen,
  secondary: boolean,
};

export default function AdminNavbar(props: TAdminNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const {
    brandText, fixed, logoText, secondary, onOpen,
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.400", "gray.200");
  let navbarPosition: any = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";

  if (fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none",
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)",
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))",
      );
    }
  
  if (secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  
  return (
    <Flex
      alignItems={{ xl: "center" }}
      backdropFilter={navbarBackdrop}
      bg={navbarBg}
      borderColor={navbarBorder}
      borderRadius="16px"
      borderStyle="solid"
      borderWidth="1.5px"
      boxShadow={navbarShadow}
      display="flex"
      filter={navbarFilter}
      justifyContent={{ xl: "center" }}
      left={document.documentElement.dir === "rtl" ? "30px" : ""}
      lineHeight="25.6px"
      minH="75px"
      mt={secondaryMargin}
      mx="auto"
      pb="8px"
      position={navbarPosition}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      px={{
        sm: paddingX,
        md: "30px",
      }}
      right={document.documentElement.dir === "rtl" ? "" : "30px"}
      top="18px"
      transition-property="box-shadow, background-color, filter, border"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transitionTimingFunction="linear, linear, linear, linear"
      w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
    >
      <Flex
        alignItems={{ xl: "center" }}
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        w="100%"
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink color={secondaryText} href="#">
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink color={mainText} href="#">
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            _hover={{ color: { mainText } }}
            bg="inherit"
            borderRadius="inherit"
            color={mainText}
            fontWeight="bold"
            href="#"
          >
            {brandText}
          </Link>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks
            fixed={fixed}
            logoText={logoText}
            onOpen={onOpen}
            secondary={secondary}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
