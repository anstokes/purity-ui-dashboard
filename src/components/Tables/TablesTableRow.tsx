import React from "react";

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

export type TTablesTableRowProps = {
  logo: any,
  name: string,
  email: string,
  subdomain: string,
  domain: string,
  status: string,
  date: string,
}

export default function TablesTableRow(props: TTablesTableRowProps) {
  const { logo, name, email, subdomain, domain, status, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" flexWrap="nowrap" minWidth="100%" py=".8rem">
          <Avatar borderRadius="12px" me="18px" src={logo} w="50px" />
          <Flex direction="column">
            <Text
              color={textColor}
              fontSize="md"
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text color={textColor} fontSize="md" fontWeight="bold">
            {domain}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          borderRadius="8px"
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text color={textColor} fontSize="md" fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
      <Td>
        <Button bg="transparent" p="0px" variant="no-hover">
          <Text
            color="gray.400"
            cursor="pointer"
            fontSize="md"
            fontWeight="bold"
          >
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}
