import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import TimelineRow, { TTimelineRowProps } from "@components/Tables/TimelineRow";

type TOrdersOverviewProps = {
  amount: number,
  data: TTimelineRowProps[],
  title: string,
}

export default function OrdersOverview(props: TOrdersOverviewProps) {
  const { title, amount, data } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card maxH='100%'>
      <CardHeader p='22px 0px 35px 14px'>
        <Flex direction='column'>
          <Text color={textColor} fontSize='lg' fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='normal'>
            <Text as='span' color='teal.300' fontWeight='bold'>
              {`${amount}%`}
            </Text>{" "}
            this month.
          </Text>
        </Flex>
      </CardHeader>
      <CardBody mb='31px' pe='0px' position='relative' ps='20px'>
        <Flex direction='column'>
          {data.map((row, index, arr) => (
            <TimelineRow
              key={row.title}
              arrLength={arr.length}
              color={row.color}
              date={row.date}
              index={index}
              logo={row.logo}
              title={row.title}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}
