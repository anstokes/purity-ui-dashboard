import React, { ReactNode } from "react";

// Chakra imports
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

// Custom components
import { Card, CardBody } from "@components/Card";

export type TValidity = {
  name: string,
  date: string,
}

export type TCvv = {
  name: string,
  code: string,
}

type TCreditCardProps = {
  backgroundImage: string,
  title: string,
  icon: ReactNode,
  number: string,
  validity: TValidity,
  cvv: TCvv,
}

export default function CreditCard(props: TCreditCardProps) {
  const {
    backgroundImage,
    title,
    icon,
    number,
    validity,
    cvv,
  } = props;

  return (
    <Card
      background='cover'
      backgroundImage={backgroundImage}
      backgroundRepeat='no-repeat'
      bgPosition='10%'
      gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}
      h={{ sm: "220px", xl: "100%" }}
      p='16px'>
      <CardBody h='100%' w='100%'>
        <Flex
          color='white'
          direction='column'
          h='100%'
          p='0px 10px 20px 10px'
          w='100%'>
          <Flex align='center' justify='space-between'>
            <Text fontSize='md' fontWeight='bold'>
              {title}
            </Text>
            {icon}
          </Flex>
          <Spacer />
          <Flex direction='column'>
            <Box>
              <Text fontSize='xl' fontWeight='bold' letterSpacing='2px'>
                {number}
              </Text>
            </Box>
            <Flex mt='14px'>
              <Flex direction='column' me='34px'>
                <Text fontSize='xs'>{validity.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {validity.date}
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text fontSize='xs'>{cvv.name}</Text>
                <Text fontSize='xs' fontWeight='bold'>
                  {cvv.code}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
