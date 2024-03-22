import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import signInImage from "@assets/img/signInImage.png";

export default function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex mb='40px' position='relative'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        justifyContent='space-between'
        maxW='1044px'
        mb='30px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        w='100%'>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            background='transparent'
            direction='column'
            mt={{ md: "150px", lg: "80px" }}
            p='48px'
            w='100%'>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text
              color={textColor}
              fontSize='14px'
              fontWeight='bold'
              mb='36px'
              ms='4px'>
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel fontSize='sm' fontWeight='normal' ms='4px'>
                Email
              </FormLabel>
              <Input
                borderRadius='15px'
                fontSize='sm'
                mb='24px'
                placeholder='Your email adress'
                size='lg'
                type='text'
              />
              <FormLabel fontSize='sm' fontWeight='normal' ms='4px'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                fontSize='sm'
                mb='36px'
                placeholder='Your password'
                size='lg'
                type='password'
              />
              <FormControl alignItems='center' display='flex'>
                <Switch colorScheme='teal' id='remember-login' me='10px' />
                <FormLabel
                  fontWeight='normal'
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'>
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
                h='45'
                mb='20px'
                mt='20px'
                type='submit'
                w='100%'>
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              alignItems='center'
              flexDirection='column'
              justifyContent='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                {'Don\'t have an account?'}
                <Link as='span' color={titleColor} fontWeight='bold' ms='5px'>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          overflowX='hidden'
          position='absolute'
          right='0px'
          w='40vw'>
          <Box
            bgImage={signInImage}
            bgPosition='50%'
            bgSize='cover'
            borderBottomLeftRadius='20px'
            h='100%'
            position='absolute'
            w='100%' />
        </Box>
      </Flex>
    </Flex>
  );
}
