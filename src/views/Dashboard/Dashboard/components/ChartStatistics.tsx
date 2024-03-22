import React from "react";
import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { IconBox } from "@components/Icons";

type TChartStatisticsProps = {
  amount: string,
  icon: any,
  percentage: number,
  title: string,
}

export default function ChartStatistics(props: TChartStatisticsProps) {
  const { title, amount, icon, percentage } = props;
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column'>
      <Flex alignItems='center'>
        <IconBox bg={iconTeal} h="30px" me='6px' w="30px">
          {icon}
        </IconBox>
        <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
          {title}
        </Text>
      </Flex>
      <Text color={textColor} fontSize='lg' fontWeight='bold' mb='6px' my='6px'>
        {amount}
      </Text>
      <Progress
        borderRadius='12px'
        colorScheme='teal'
        h='5px'
        value={percentage}
      />
    </Flex>
  );
}
