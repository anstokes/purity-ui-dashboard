import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody } from "@components/Card";
import IconBox from "@components/Icons/IconBox";
import Separator from "@components/Separator";

type TPaymentStatisticsType = {
  icon: any,
  title: string,
  description: string,
  amount: number,
}

export default function PaymentStatistics(props: TPaymentStatisticsType) {
  const { icon, title, description, amount } = props;
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card display='flex' p='16px' /* align='center' justify='center' */>
      <CardBody>
        <Flex align='center' direction='column' py='14px' w='100%'>
          <IconBox bg={iconTeal} h="60px" w="60px">
            {icon}
          </IconBox>
          <Flex
            align='center'
            direction='column'
            justify='center'
            m='14px'
            textAlign='center'
            w='100%'>
            <Text color={textColor} fontSize='md' fontWeight='bold'>
              {title}
            </Text>
            <Text
              color='gray.400'
              fontSize='xs'
              fontWeight='semibold'
              mb='24px'>
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {`%${amount}`}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
