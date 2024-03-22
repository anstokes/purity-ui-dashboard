import React, { ReactNode } from "react";

// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type TTab = {
  icon: ReactNode,
  name: string,
}

type THeaderProps = {
  avatarImage: string,
  backgroundHeader: string,
  backgroundProfile: string,
  email: string,
  name: string,
  tabs: TTab[],
}

export default function Header(props: THeaderProps) {
  const {
    avatarImage,
    backgroundHeader,
    backgroundProfile,
    email,
    name,
    tabs,
  } = props;

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)",
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");
  return (
    <Box
      // align='center'
      borderRadius='15px'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      mb={{ sm: "205px", md: "75px", xl: "70px" }}
      px='0px'
    >
      <Box
        bgImage={backgroundHeader}
        bgPosition='50%'
        bgRepeat='no-repeat'
        borderRadius='25px'
        display='flex'
        h='300px'
        justifyContent='center'
        position='relative'
        w='100%'>
        <Flex
          align='center'
          backdropFilter='saturate(200%) blur(50px)'
          bg={backgroundProfile}
          border='2px solid'
          borderColor={borderProfileColor}
          borderRadius='20px'
          boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
          direction={{ sm: "column", md: "row" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          maxH='330px'
          mx='1.5rem'
          p='24px'
          position='absolute'
          transform={{
            sm: "translateY(45%)",
            md: "translateY(110%)",
            lg: "translateY(160%)",
          }}
          w={{ sm: "90%", xl: "95%" }}>
          <Flex
            align='center'
            direction={{ sm: "column", md: "row" }}
            mb={{ sm: "10px", md: "0px" }}
            textAlign={{ sm: "center", md: "start" }}
            w={{ sm: "100%" }}>
            <Avatar
              borderRadius='15px'
              h='80px'
              me={{ md: "22px" }}
              src={avatarImage}
              w='80px'
            />
            <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
              <Text
                color={textColor}
                fontSize={{ sm: "lg", lg: "xl" }}
                fontWeight='bold'
                ms={{ sm: "8px", md: "0px" }}>
                {name}
              </Text>
              <Text
                color={emailColor}
                fontSize={{ sm: "sm", md: "md" }}
                fontWeight='semibold'>
                {email}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            w={{ sm: "100%", md: "50%", lg: "auto" }}>
            <Button _hover={{ bg: "none" }} bg='transparent' p='0px'>
              <Flex
                align='center'
                bg='hsla(0,0%,100%,.3)'
                border='1px solid gray.200'
                borderRadius='15px'
                boxShadow='inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)'
                cursor='pointer'
                justifyContent='center'
                py='10px'
                w={{ sm: "100%", lg: "135px" }}>
                {tabs[0].icon}
                <Text
                  color={textColor}
                  fontSize='xs'
                  fontWeight='bold'
                  ms='6px'>
                  {tabs[0].name}
                </Text>
              </Flex>
            </Button>
            <Button _hover={{ bg: "none" }} bg='transparent' p='0px'>
              <Flex
                align='center'
                borderRadius='15px'
                cursor='pointer'
                justifyContent='center'
                mx={{ lg: "1rem" }}
                py='10px'
                w={{ lg: "135px" }}>
                {tabs[1].icon}
                <Text
                  color={textColor}
                  fontSize='xs'
                  fontWeight='bold'
                  ms='6px'>
                  {tabs[1].name}
                </Text>
              </Flex>
            </Button>
            <Button _hover={{ bg: "none" }} bg='transparent' p='0px'>
              <Flex
                align='center'
                borderRadius='15px'
                cursor='pointer'
                justifyContent='center'
                py='10px'
                w={{ lg: "135px" }}>
                {tabs[2].icon}
                <Text
                  color={textColor}
                  fontSize='xs'
                  fontWeight='bold'
                  ms='6px'>
                  {tabs[2].name}
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
