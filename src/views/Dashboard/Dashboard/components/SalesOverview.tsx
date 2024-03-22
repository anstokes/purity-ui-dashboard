import React, { ReactNode } from "react";

// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardHeader } from "@components/Card";

type TSalesOverviewProps = {
  chart: ReactNode,
  percentage: number,
  title: string,
}

export default function SalesOverview(props: TSalesOverviewProps) {
  const { title, percentage, chart } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card mb={{ sm: "26px", lg: "0px" }} p='28px 10px 16px 0px'>
      <CardHeader mb='20px' pl='22px'>
        <Flex alignSelf='flex-start' direction='column'>
          <Text color={textColor} fontSize='lg' fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Text color='gray.400' fontSize='md' fontWeight='medium'>
            <Text
              as='span'
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight='bold'>
              {`${percentage}%`} more
            </Text>{" "}
            in {new Date().getFullYear() - 1}
          </Text>
        </Flex>
      </CardHeader>
      <Box h={{ sm: "300px" }} ps='8px' w='100%'>
        {chart}
      </Box>
    </Card>
  );
};
