import React, { ReactNode } from "react";

// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

// Custom icons
import {
  CartIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "@components/Icons/Icons";

// Custom components
import { Card, CardBody } from "@components/Card";

import ChartStatistics from "./ChartStatistics";

type TActiveUsersProps = {
  chart: ReactNode,
  percentage: number,
  title: string,
}

export default function ActiveUsers(props: TActiveUsersProps) {
  const { title, percentage, chart } = props;
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px'>
      <CardBody>
        <Flex direction='column' w='100%'>
          {chart}
          <Flex alignSelf='flex-start' direction='column' mb='36px' mt='24px'>
            <Text color={textColor} fontSize='lg' fontWeight='bold' mb='6px'>
              {title}
            </Text>
            <Text color='gray.400' fontSize='md' fontWeight='medium'>
              <Text
                as='span'
                color={percentage > 0 ? "green.400" : "red.400"}
                fontWeight='bold'>
                {percentage > 0 ? `+${percentage}%` : `-${percentage}%`}
              </Text>{" "}
              than last week
            </Text>
          </Flex>
          <SimpleGrid columns={4} gap={{ sm: "12px" }}>
            <ChartStatistics
              amount="32,984"
              icon={<WalletIcon color={iconBoxInside} h="15px" w="15px" />}
              percentage={20}
              title="Users"
            />
            <ChartStatistics
              amount="2.42m"
              icon={<RocketIcon color={iconBoxInside} h="15px" w="15px" />}
              percentage={80}
              title="Clicks"
            />
            <ChartStatistics
              amount="2,400$"
              icon={<CartIcon color={iconBoxInside} h="15px" w="15px" />}
              percentage={30}
              title="Sales"
            />
            <ChartStatistics
              amount="320"
              icon={<StatsIcon color={iconBoxInside} h="15px" w="15px" />}
              percentage={40}
              title="Items"
            />
          </SimpleGrid>
        </Flex>
      </CardBody>
    </Card>
  );
}
