import React from "react";
import { FaEllipsisV } from "react-icons/fa";

import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export type TTablesProjectRowProps = {
  budget: string,
  logo: any,
  name: string,
  progression: number,
  status?: string,
}

export default function TablesProjectRow(props: TTablesProjectRowProps) {
  const { logo, name, status, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex alignItems="center" flexWrap="nowrap" minWidth="100%" py=".8rem">
          <Icon as={logo} h="24px" me="18px" w="24px" />
          <Text
            color={textColor}
            fontSize="md"
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text color={textColor} fontSize="md" fontWeight="bold" pb=".5rem">
          {budget}
        </Text>
      </Td>
      <Td>
        <Text color={textColor} fontSize="md" fontWeight="bold" pb=".5rem">
          {status}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            color="teal.300"
            fontSize="md"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            borderRadius="15px"
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
          />
        </Flex>
      </Td>
      <Td>
        <Button bg="transparent" p="0px">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

TablesProjectRow.defaultProps = {
  status: undefined,
};
