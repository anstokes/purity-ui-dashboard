import React, { Dispatch, SetStateAction, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// chakra imports
import {
  Box,
  Button, Flex,
  Icon,
  Link,
  Stack,
  StyleProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { IRouteArray } from "@routes";

import SidebarHelp from "./SidebarHelp";

import IconBox from "../Icons/IconBox";
import { CreativeTimLogo } from "../Icons/Icons";
import Separator from "../Separator";

interface TSidebarContentProps extends StyleProps {
  logoText: string,
  routes: IRouteArray,
}

// this function creates the links and collapses that appear in the sidebar (left menu)
export default function SidebarContent(props: TSidebarContentProps) {
  // to check for active links and opened collapses
  const location = useLocation();
  // this is for the rest of the collapses
  const [state]:[state: any, Dispatch<SetStateAction<{}>>] = useState({});

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => location.pathname === routeName ? "active" : "";
  const createLinks = (routes: IRouteArray) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return routes.map((route) => {
      const { category, icon, layout, name, path, redirect, rtlName, views } = route;
      if (redirect) {
        return null;
      }

      if (category) {
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
              {document.documentElement.dir === "rtl"
                ? rtlName
                : name}
            </Text>
            {views && createLinks(views)}
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
                  {document.documentElement.dir === "rtl"
                    ? rtlName
                    : name}
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
                  {document.documentElement.dir === "rtl"
                    ? rtlName
                    : name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  // Destructure props
  const { logoText, routes } = props;

  return (
    <>
      <Box mb="12px" pt="25px">
        <Link
          alignItems="center"
          display="flex"
          fontSize="11px"
          fontWeight="bold"
          href={`${process.env.PUBLIC_URL}/#/`}
          justifyContent="center"
          lineHeight="100%"
          mb="30px"
        >
          <CreativeTimLogo h="32px" me="10px" w="32px" />
          <Text fontSize="sm" mt="3px">
            {logoText}
          </Text>
        </Link>
        <Separator />
      </Box>
      <Stack direction="column" mb="40px">
        <Box>
          {createLinks(routes)}
        </Box>
      </Stack>
      <SidebarHelp />
    </>
  );
}
