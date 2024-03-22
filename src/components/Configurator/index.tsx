import React, { MouseEventHandler, useRef, useState } from "react";

// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Separator from "../Separator";

type TCloseFunction = () => void;

type TConfiguratorProps = {
  isChecked: boolean,
  isOpen: boolean,
  onClose: TCloseFunction,
  onOpaque: MouseEventHandler<HTMLButtonElement>,
  onSwitch: Function,
  onTransparent: MouseEventHandler<HTMLButtonElement>,
  secondary: boolean,
};

export default function Configurator(props: TConfiguratorProps) {
  const {
    isChecked, isOpen, onClose, onOpaque, onSwitch, onTransparent, secondary,
  } = props;

  const { colorMode, toggleColorMode } = useColorMode();

  const [switched, setSwitched] = useState(isChecked);

  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (secondary) {
    fixedDisplay = "none";
  }

  // Button colours
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white",
  );
  const colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");

  const settingsRef = useRef(null);
  
  return (
    <Drawer
      blockScrollOnMount={false}
      finalFocusRef={settingsRef}
      isOpen={isOpen}
      onClose={onClose}
      placement={document.documentElement.dir === "rtl" ? "left" : "right"}
    >
      <DrawerContent>
        <DrawerHeader pt="24px" px="24px">
          <DrawerCloseButton />
          <Text fontSize="xl" fontWeight="bold" mt="16px">
            Purity UI Configurator
          </Text>
          <Text fontSize="md" mb="16px">
            See your dashboard options.
          </Text>
          <Separator />
        </DrawerHeader>
        <DrawerBody pe="40px" ps="24px" w="340px">
          <Flex flexDirection="column">
            <Box>
              <Text fontSize="md" fontWeight="600">
                Sidenav Type
              </Text>
              <Text fontSize="sm" mb="16px">
                Choose between 2 different sidenav types.
              </Text>
              <Flex>
                <Button
                  borderColor="teal.300"
                  color="teal.300"
                  colorScheme="teal"
                  fontSize="xs"
                  me="8px"
                  onClick={onTransparent}
                  p="8px 32px"
                  variant="outline"
                  w="50%"
                >
                  Transparent
                </Button>
                <Button
                  _hover={{ parts: 'teal.300' }}
                  bg="teal.300"
                  color="white"
                  fontSize="xs"
                  mb={5}
                  onClick={onOpaque}
                  p="8px 32px"
                  type="submit"
                  w="50%"
                >
                  Opaque
                </Button>
              </Flex>
            </Box>
            <Box
              display={fixedDisplay}
              justifyContent="space-between "
              mb="16px"
            >
              <Text fontSize="md" fontWeight="600" mb="4px">
                Navbar Fixed
              </Text>
              <Switch
                colorScheme="teal"
                isChecked={switched}
                onChange={() => {
                  if (switched === true) {
                    onSwitch(false);
                    setSwitched(false);
                  } else {
                    onSwitch(true);
                    setSwitched(true);
                  }
                }}
              />
            </Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              mb="24px"
            >
              <Text fontSize="md" fontWeight="600" mb="4px">
                Dark/Light
              </Text>
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </Flex>
            <Separator />
            <Box mt="24px">
              <Text fontSize="md" fontWeight="600">
                Sidenav Type
              </Text>
              <Text fontSize="sm" mb="16px">
                Choose between 2 different sidenav types.
              </Text>
              <Box>
                <Link
                  href="https://www.creative-tim.com/product/purity-ui-dashboard"
                  mb="16px"
                  w="100%"
                >
                  <Button
                    bg={bgButton}
                    color={colorButton}
                    fontSize="xs"
                    mb="16px"
                    px="30px"
                    variant="no-hover"
                    w="100%"
                  >
                    Free Download
                  </Button>
                </Link>
                <Link
                  href="https://demos.creative-tim.com/docs-purity-ui-dashboard/"
                  w="100%"
                >
                  <Button
                    bg={secondaryButtonBg}
                    border="1px solid"
                    borderColor={secondaryButtonBorder}
                    color={secondaryButtonColor}
                    fontSize="xs"
                    mb="16px"
                    px="20px"
                    variant="no-hover"
                    w="100%"
                  >
                    <Text textDecorationColor="none">Documentation</Text>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
