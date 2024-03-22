import React from "react";

// Chakra imports
import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody } from "@components/Card";
import { IconBox } from "@components/Icons";

type TMiniStatisticsProps = {
  amount: string,
  icon: any,
  percentage: number,
  title: string,
}

export default function MiniStatistics(props: TMiniStatisticsProps) {
  const { title, amount, percentage, icon } = props;
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minH='83px'>
      <CardBody>
        <Flex align='center' flexDirection='row' justify='center' w='100%'>
          <Stat me='auto'>
            <StatLabel
              color='gray.400'
              fontSize='sm'
              fontWeight='bold'
              pb='.1rem'>
              {title}
            </StatLabel>
            <Flex>
              <StatNumber color={textColor} fontSize='lg'>
                {amount}
              </StatNumber>
              <StatHelpText
                alignSelf='flex-end'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontSize='md'
                fontWeight='bold'
                justifySelf='flex-end'
                m='0px'
                ps='3px'>
                {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
              </StatHelpText>
            </Flex>
          </Stat>
          <IconBox bg={iconTeal} h="45px" w="45px">
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
}
