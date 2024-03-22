import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { IRouteArray, TRoute } from "@routes";

import Brand from "./Brand";
import SidebarHelp from "./SidebarHelp";

import IconBox from "../Icons/IconBox";

type TSidebarResponsiveProps = {
  logoText: string,
  routes: IRouteArray,
  secondary: boolean,
};

export default function SidebarResponsive(props: TSidebarResponsiveProps) {
  // to check for active links and opened collapses
  const location = useLocation();
  
  // this is for the rest of the collapses
  const [state]:[state: any, Dispatch<SetStateAction<{}>>] = useState({});


  // references
  const btnRef = useRef(null);
  const mainPanel = useRef(null);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => location.pathname === routeName ? "active" : "";

  const createLinks = (routes: IRouteArray | undefined) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    if (routes) {
      return routes.map((route: TRoute) => {
        const {
          icon, layout, name, path, redirect, views,
        } = route;

        if (redirect) {
          return null;
        }

        if (route.category) {
          const st: any = {};
          if (route.state) {
            st[route.state] = !state[route.state];
          }

          return (
            <div key={route.name}>
              <Text
                color={activeColor}
                fontWeight="bold"
                mb={{
                  xl: "12px",
                }}
                mx="auto"
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
              >
                {name}
              </Text>
              {createLinks(views)}
            </div>
          );
        }

        return (
          <NavLink key={name} to={`${layout}${path}`}>
            {activeRoute(`${layout}${path}`) === "active" ? (
              <Button
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                alignItems="center"
                bg={activeBg}
                borderRadius="15px"
                boxSize="initial"
                justifyContent="flex-start"
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
                w="100%"
              >
                <Flex>
                  {typeof icon === "string" ? (
                    <Icon>{icon}</Icon>
                  ) : (
                    <IconBox
                      bg="teal.300"
                      color="white"
                      h="30px"
                      me="12px"
                      w="30px"
                    >
                      {icon}
                    </IconBox>
                  )}
                  <Text color={activeColor} fontSize="sm" my="auto">
                    {name}
                  </Text>
                </Flex>
              </Button>
            ) : (
              <Button
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                alignItems="center"
                bg="transparent"
                borderRadius="15px"
                boxSize="initial"
                justifyContent="flex-start"
                mb={{
                  xl: "12px",
                }}
                mx={{
                  xl: "auto",
                }}
                ps={{
                  sm: "10px",
                  xl: "16px",
                }}
                py="12px"
                w="100%"
              >
                <Flex>
                  {typeof icon === "string" ? (
                    <Icon>{icon}</Icon>
                  ) : (
                    <IconBox
                      bg={inactiveBg}
                      color="teal.300"
                      h="30px"
                      me="12px"
                      w="30px"
                    >
                      {icon}
                    </IconBox>
                  )}
                  <Text color={inactiveColor} fontSize="sm" my="auto">
                    {name}
                  </Text>
                </Flex>
              </Button>
            )}
          </NavLink>
        );
      });
    }

    return routes;
  };
  
  // Destructure props
  const { logoText, routes, secondary } = props;

  // Hamburger menu
  let hamburgerColor = useColorModeValue("gray.500", "gray.200");
  if (secondary === true) {
    hamburgerColor = "white";
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      ref={mainPanel}
      alignItems="center"
      display={{ sm: "flex", xl: "none" }}
    >
      <HamburgerIcon
        // colorScheme="teal"
        ref={btnRef}
        color={hamburgerColor}
        h="18px"
        onClick={onOpen}
        w="18px"
      />
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
      >
        <DrawerOverlay />
        <DrawerContent
          borderRadius="16px"
          maxW="250px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          w="250px"
        >
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="250px" px="1rem">
            <Box h="100vh" maxW="100%">
              <Box>
                <Brand logoText={logoText} />
              </Box>
              <Stack direction="column" mb="40px">
                <Box>{createLinks(routes)}</Box>
              </Stack>
              <SidebarHelp />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
