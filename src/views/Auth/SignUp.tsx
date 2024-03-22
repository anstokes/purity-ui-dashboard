import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import BgSignUp from "@assets/img/BgSignUp.png";

export default function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  return (
    <Flex
      alignSelf='center'
      direction='column'
      justifySelf='center'
      overflow='hidden'>
      <Box
        bgImage={BgSignUp}
        bgRepeat='no-repeat'
        bgSize='cover'
        borderRadius={{ md: "15px" }}
        left='0'
        minH={{ base: "70vh", md: "50vh" }}
        mt={{ md: "14px" }}
        mx={{ md: "auto" }}
        overflow='hidden'
        position='absolute'
        right='0'
        top='0'
        w={{ md: "calc(100vw - 50px)" }}
        zIndex='-1' />
      <Flex
        align='center'
        direction='column'
        justifyContent='center'
        mb='30px'
        mt='6.5rem'
        textAlign='center'>
        <Text color='white' fontSize='4xl' fontWeight='bold'>
          Welcome!
        </Text>
        <Text
          color='white'
          fontSize='md'
          fontWeight='normal'
          mb='26px'
          mt='10px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Use these awesome forms to login or create new account in your project
          for free.
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          background='transparent'
          bg={bgColor}
          borderRadius='15px'
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'
          direction='column'
          mx={{ base: "100px" }}
          p='40px'
          w='445px'>
          <Text
            color={textColor}
            fontSize='xl'
            fontWeight='bold'
            mb='22px'
            textAlign='center'>
            Register With
          </Text>
          <HStack justify='center' mb='22px' spacing='15px'>
            <Flex
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              align='center'
              border='1px solid lightgray'
              borderRadius='15px'
              cursor='pointer'
              h='75px'
              justify='center'
              transition='all .25s ease'
              w='75px'>
              <Link href='#'>
                <Icon
                  _hover={{ filter: "brightness(120%)" }}
                  as={FaFacebook}
                  h='30px'
                  w='30px'
                />
              </Link>
            </Flex>
            <Flex
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              align='center'
              border='1px solid lightgray'
              borderRadius='15px'
              cursor='pointer'
              h='75px'
              justify='center'
              transition='all .25s ease'
              w='75px'>
              <Link href='#'>
                <Icon
                  _hover={{ filter: "brightness(120%)" }}
                  as={FaApple}
                  h='30px'
                  w='30px'
                />
              </Link>
            </Flex>
            <Flex
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              align='center'
              border='1px solid lightgray'
              borderRadius='15px'
              cursor='pointer'
              h='75px'
              justify='center'
              transition='all .25s ease'
              w='75px'>
              <Link href='#'>
                <Icon
                  _hover={{ filter: "brightness(120%)" }}
                  as={FaGoogle}
                  h='30px'
                  w='30px'
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            color='gray.400'
            fontSize='lg'
            fontWeight='bold'
            mb='22px'
            textAlign='center'>
            or
          </Text>
          <FormControl>
            <FormLabel fontSize='sm' fontWeight='normal' ms='4px'>
              Name
            </FormLabel>
            <Input
              borderRadius='15px'
              fontSize='sm'
              mb='24px'
              ms='4px'
              placeholder='Your full name'
              size='lg'
              type='text'
            />
            <FormLabel fontSize='sm' fontWeight='normal' ms='4px'>
              Email
            </FormLabel>
            <Input
              borderRadius='15px'
              fontSize='sm'
              mb='24px'
              ms='4px'
              placeholder='Your email address'
              size='lg'
              type='email'
            />
            <FormLabel fontSize='sm' fontWeight='normal' ms='4px'>
              Password
            </FormLabel>
            <Input
              borderRadius='15px'
              fontSize='sm'
              mb='24px'
              ms='4px'
              placeholder='Your password'
              size='lg'
              type='password'
            />
            <FormControl alignItems='center' display='flex' mb='24px'>
              <Switch colorScheme='teal' id='remember-login' me='10px' />
              <FormLabel fontWeight='normal' htmlFor='remember-login' mb='0'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              _active={{
                bg: "teal.400",
              }}
              _hover={{
                bg: "teal.200",
              }}
              bg='teal.300'
              color='white'
              fontSize='10px'
              fontWeight='bold'
              h='45'
              mb='24px'
              type='submit'
              w='100%'>
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            alignItems='center'
            flexDirection='column'
            justifyContent='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <Link
                as='span'
                color={titleColor}
                fontWeight='bold'
                href='#'
                ms='5px'>
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
