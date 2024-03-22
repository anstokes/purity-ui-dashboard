import React from "react";

import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

export type TProjectData = {
  name: string,
  logo?: any,
  members: string[],
  budget: string,
  progression: number,
}

export default function DashboardTableRow(props: TProjectData) {
  const { logo, name, members, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" flexWrap="nowrap" minWidth="100%" py=".8rem">
          <Icon as={logo} h="24px" pe="5px" w="24px" />
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
        <AvatarGroup size="sm">
          {members.map((member) => (
            <Avatar
              key={member}
              _hover={{ zIndex: "3", cursor: "pointer" }}
              name="Ryan Florence"
              src={member}
            />
          ))}
        </AvatarGroup>
      </Td>
      <Td>
        <Text color={textColor} fontSize="md" fontWeight="bold" pb=".5rem">
          {budget}
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
    </Tr>
  );
}

DashboardTableRow.defaultProps = {
  logo: undefined,
};
