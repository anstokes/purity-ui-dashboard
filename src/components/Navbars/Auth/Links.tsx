import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Button, HStack, Text } from "@chakra-ui/react";

import {
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "@components/Icons/Icons";

type TLinksProps = {
    navbarIcon: string,
};

export default function Links(props: TLinksProps) {
  const { navbarIcon } = props;
    
  return (
    <HStack display={{ sm: "none", lg: "flex" }}>
      <NavLink to="/admin/dashboard">
        <Button
          color={navbarIcon}
          fontSize="sm"
          leftIcon={<HomeIcon color={navbarIcon} h="12px" me="0px" w="12px" />}
          me={{ sm: "2px", md: "16px" }}
          ms="0px"
          px="0px"
          variant="transparent-with-icon"
        >
          <Text>Dashboard</Text>
        </Button>
      </NavLink>
      <NavLink to="/admin/profile">
        <Button
          color={navbarIcon}
          fontSize="sm"
          leftIcon={
            <PersonIcon color={navbarIcon} h="12px" me="0px" w="12px" />
          }
          me={{ sm: "2px", md: "16px" }}
          ms="0px"
          px="0px"
          variant="transparent-with-icon"
        >
          <Text>Profile</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signup">
        <Button
          color={navbarIcon}
          fontSize="sm"
          leftIcon={
            <RocketIcon color={navbarIcon} h="12px" me="0px" w="12px" />
          }
          me={{ sm: "2px", md: "16px" }}
          ms="0px"
          px="0px"
          variant="transparent-with-icon"
        >
          <Text>Sign Up</Text>
        </Button>
      </NavLink>
      <NavLink to="/auth/signin">
        <Button
          color={navbarIcon}
          fontSize="sm"
          leftIcon={
            <DocumentIcon color={navbarIcon} h="12px" me="0px" w="12px" />
          }
          me={{ sm: "2px", md: "16px" }}
          ms="0px"
          px="0px"
          variant="transparent-with-icon"
        >
          <Text>Sign In</Text>
        </Button>
      </NavLink>
    </HStack>
  );
}