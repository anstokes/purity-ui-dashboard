import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Chakra imports
import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader }  from "@components/Card";

type TProfileInformationProps = {
  title: string,
  description: string,
  name: string,
  mobile: string,
  email: string,
  location: string,
}

export default function ProfileInformation(props: TProfileInformationProps) {
  const {
    title,
    description,
    name,
    mobile,
    email,
    location,
  } = props;

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my={{ sm: "24px", xl: "0px" }} p='16px'>
      <CardHeader mb='12px' p='12px 5px'>
        <Text color={textColor} fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          <Text color='gray.500' fontSize='md' fontWeight='400' mb='30px'>
            {description}
          </Text>
          <Flex align='center' mb='18px'>
            <Text color={textColor} fontSize='md' fontWeight='bold' me='10px'>
              Full Name:{" "}
            </Text>
            <Text color='gray.500' fontSize='md' fontWeight='400'>
              {name}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text color={textColor} fontSize='md' fontWeight='bold' me='10px'>
              Mobile:{" "}
            </Text>
            <Text color='gray.500' fontSize='md' fontWeight='400'>
              {mobile}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text color={textColor} fontSize='md' fontWeight='bold' me='10px'>
              Email:{" "}
            </Text>
            <Text color='gray.500' fontSize='md' fontWeight='400'>
              {email}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text color={textColor} fontSize='md' fontWeight='bold' me='10px'>
              Location:{" "}
            </Text>
            <Text color='gray.500' fontSize='md' fontWeight='400'>
              {location}
            </Text>
          </Flex>
          <Flex align='center' mb='18px'>
            <Text color={textColor} fontSize='md' fontWeight='bold' me='10px'>
              Social Media:{" "}
            </Text>
            <Flex>
              <Link
                _hover={{ color: "teal.300" }}
                color='teal.300'
                fontSize='lg'
                href='#'
                me='10px'>
                <Icon as={FaFacebook} />
              </Link>
              <Link
                _hover={{ color: "teal.300" }}
                color='teal.300'
                fontSize='lg'
                href='#'
                me='10px'>
                <Icon as={FaInstagram} />
              </Link>
              <Link
                _hover={{ color: "teal.300" }}
                color='teal.300'
                fontSize='lg'
                href='#'
                me='10px'>
                <Icon as={FaTwitter} />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
