import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import avatar1 from "@assets/img/avatars/avatar1.png";
import avatar2 from "@assets/img/avatars/avatar2.png";
import avatar3 from "@assets/img/avatars/avatar3.png";

// Custom Icons
import { ProfileIcon, SettingsIcon } from "@components/Icons/Icons";

// Custom Components
import ItemContent from "@components/Menu";
import SidebarResponsive from "@components/Sidebar/SidebarResponsive";

// Routes
import routes from "@routes";

// Types
import { TOnOpen } from "@typings/purityUi";

type THeaderLinksProps = {
  fixed: boolean,
  logoText: string,
  onOpen: TOnOpen,
  secondary: boolean,
  variant?: string,
};

export default function HeaderLinks(props: THeaderLinksProps) {
  const { logoText, onOpen, secondary, ...rest } = props;

  // Chakra Color Mode
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  const searchIcon = useColorModeValue("gray.700", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }

  const settingsRef = useRef(null);

  return (
    <Flex
      alignItems="center"
      flexDirection="row"
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
    >
      <InputGroup
        _active={{
          borderColor: { mainTeal },
        }}
        _focus={{
          borderColor: { mainTeal },
        }}
        bg={inputBg}
        borderRadius="15px"
        cursor="pointer"
        me={{ sm: "auto", md: "20px" }}
        w={{
          sm: "128px",
          md: "200px",
        }}
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
            icon={<SearchIcon color={searchIcon} h="15px" w="15px" />}
          />
        </InputLeftElement>
        <Input
          borderRadius="inherit"
          color={mainText}
          fontSize="xs"
          placeholder="Type here..."
          py="11px"
        />
      </InputGroup>
      <NavLink to="/auth/signin">
        <Button
          color={navbarIcon}
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} h="22px" me="0px" w="22px" />
            ) : (
              undefined
            )
          }
          me={{ sm: "2px", md: "16px" }}
          ms="0px"
          px="0px"
          rightIcon={
            document.documentElement.dir ? (
              undefined
            ) : (
              <ProfileIcon color={navbarIcon} h="22px" me="0px" w="22px" />
            )
          }
          variant="transparent-with-icon"
        >
          <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        // logo={logo}
        logoText={logoText}
        routes={routes}
        secondary={secondary}
        {...rest}
      />
      <SettingsIcon
        ref={settingsRef}
        color={navbarIcon}
        cursor="pointer"
        h="18px"
        me="16px"
        ms={{ base: "16px", xl: "0px" }}
        onClick={onOpen}
        w="18px"
      />
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} h="18px" w="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                aName="Alicia"
                aSrc={avatar1}
                boldInfo="New Message"
                info="from Alicia"
                time="13 minutes ago"
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                aName="Josh Henry"
                aSrc={avatar2}
                boldInfo="New Album"
                info="by Josh Henry"
                time="2 days ago"
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                aName="Kara"
                aSrc={avatar3}
                boldInfo=""
                info="Payment succesfully completed!"
                time="3 days ago"
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.defaultProps = {
  variant: null,
};
