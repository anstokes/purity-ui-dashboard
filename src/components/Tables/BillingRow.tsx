import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type TBillingRowProps = {
  name: string,
  company: string,
  email: string,
  number: string,
}

export default function BillingRow(props: TBillingRowProps) {
  const { name, company, email, number } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");

  return (
    <Box bg={bgColor} borderRadius="12px" my="22px" p="24px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Company Name:{" "}
            <Text as="span" color="gray.500">
              {company}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Email Address:{" "}
            <Text as="span" color="gray.500">
              {email}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            VAT Number:{" "}
            <Text as="span" color="gray.500">
              {number}
            </Text>
          </Text>
        </Flex>
        <Flex
          align="flex-start"
          direction={{ sm: "column", md: "row" }}
          p={{ md: "24px" }}
        >
          <Button
            bg="transparent"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
            p="0px"
          >
            <Flex align="center" color="red.500" cursor="pointer" p="12px">
              <Icon as={FaTrashAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                DELETE
              </Text>
            </Flex>
          </Button>
          <Button bg="transparent" p="0px">
            <Flex align="center" color={textColor} cursor="pointer" p="12px">
              <Icon as={FaPencilAlt} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                EDIT
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
