import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

export type TTransactionRowProps = {
  name: string,
  logo: any,
  date: string,
  price: string,
};

function color(price: string): string {
  if (price[0] === '+') {
    return 'green.400';
  }
  if (price[0] === '-') {
    return 'red.400';
  }
  return 'gray.400';
}

export default function TransactionRow(props: TTransactionRowProps) {
  const { name, date, logo, price } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex justifyContent="space-between" my="1rem">
      <Flex alignItems="center">
        <Box
          alignItems="center"
          border="1px solid"
          borderRadius="50%"
          color={color(price)}
          display="flex"
          h="35px"
          justifyContent="center"
          me="12px"
          w="35px"
        >
          <Icon as={logo} />
        </Box>
        <Flex direction="column">
          <Text
            color={textColor}
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text
            color="gray.400"
            fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
            fontWeight="semibold"
          >
            {date}
          </Text>
        </Flex>
      </Flex>
      <Box color={color(price)}>
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
          {price}
        </Text>
      </Box>
    </Flex>
  );
}