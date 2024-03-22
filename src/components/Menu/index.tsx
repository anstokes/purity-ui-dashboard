import React from "react";
import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ClockIcon } from "@components/Icons/Icons";

type TItemContentProps = {
  aName: string,
  aSrc: string,
  boldInfo: string,
  info: string,
  time: string,
}

export default function ItemContent(props: TItemContentProps) {
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");
  const spacing = " ";

  const {
    aName, aSrc, boldInfo, info, time,
  } = props;

  return (
    <>
      <Avatar
        borderRadius="12px"
        me="16px"
        name={aName}
        src={aSrc}
      />
      <Flex flexDirection="column">
        <Text color={notificationColor} fontSize="14px" mb="5px">
          <Text as="span" fontSize="14px" fontWeight="bold">
            {boldInfo}
            {spacing}
          </Text>
          {info}
        </Text>
        <Flex alignItems="center">
          <ClockIcon color={navbarIcon} h="13px" me="3px" w="13px" />
          <Text color={navbarIcon} fontSize="xs" lineHeight="100%">
            {time}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
