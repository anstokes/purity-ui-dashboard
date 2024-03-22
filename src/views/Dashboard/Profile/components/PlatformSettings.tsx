import React from "react";

// Chakra imports
import { Flex, Switch, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";

type TPlatformSettings = {
  title: string,
  subtitle1: string,
  subtitle2: string,
}

export default function PlatformSettings(props: TPlatformSettings) {
  const { title, subtitle1, subtitle2 } = props;
  
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='16px'>
      <CardHeader mb='12px' p='12px 5px'>
        <Text color={textColor} fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column'>
          <Text color='gray.500' fontSize='sm' fontWeight='600' mb='20px'>
            {subtitle1}
          </Text>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              Email me when someone follows me
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              Email me when someone answers on my post
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              Email me when someone mentions me
            </Text>
          </Flex>
          <Text
            color='gray.500'
            fontSize='sm'
            fontWeight='600'
            m='6px 0px 20px 0px'>
            {subtitle2}
          </Text>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              New launches and projects
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              Monthly product changes
            </Text>
          </Flex>
          <Flex align='center' mb='20px'>
            <Switch colorScheme='teal' me='10px' />
            <Text color='gray.500' fontSize='md' fontWeight='400' noOfLines={1}>
              Subscribe to newsletter
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
