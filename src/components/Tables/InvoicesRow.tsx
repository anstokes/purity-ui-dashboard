import React from "react";

import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export type TInvoiceRowProps = {
  date: string,
  code: string,
  price: string,
  logo?: any,
  format: string,
}

export default function InvoicesRow(props: TInvoiceRowProps) {
  const { date, code, price, format, logo } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex alignItems="center" my={{ sm: "1rem", xl: "10px" }}>
      <Flex direction="column">
        <Text color={textColor} fontSize="md" fontWeight="bold">
          {date}
        </Text>
        <Text color="gray.400" fontSize="sm" fontWeight="semibold" me="16px">
          {code}
        </Text>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text color="gray.400" fontSize="md" fontWeight="semibold">
          {price}
        </Text>
      </Box>
      <Button bg="transparent" p="0px" variant="no-hover">
        <Flex alignItems="center" p="12px">
          <Icon as={logo} h="auto" me="5px" w="20px" />
          <Text color={textColor} fontSize="md" fontWeight="bold">
            {format}
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}

InvoicesRow.defaultProps = {
  logo: undefined,
};
