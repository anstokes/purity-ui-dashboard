import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

export type TTimelineRowProps = {
  arrLength: number,
  color: string,
  date: string,
  index: number,
  logo?: any,
  title: string,
}

export default function TimelineRow(props: TTimelineRowProps) {
  const { logo, title, date, color, index, arrLength } = props;
  const textColor = useColorModeValue("gray.700", "white.300");
  const bgIconColor = useColorModeValue("white.300", "gray.700");

  return (
    <Flex alignItems="center" justifyContent="start" mb="5px" minH="78px">
      <Flex direction="column" h="100%">
        <Icon
          as={logo}
          bg={bgIconColor}
          color={color}
          h="30px"
          left={document.documentElement.dir === "rtl" ? "" : "-8px"}
          pe="6px"
          position="relative"
          right={document.documentElement.dir === "rtl" ? "-8px" : ""}
          w="26px"
          zIndex="1"
        />
        <Box
          bg="gray.200"
          h={index === arrLength - 1 ? "15px" : "100%"}
          w="2px"
        />
      </Flex>
      <Flex direction="column" h="100%" justifyContent="flex-start">
        <Text color={textColor} fontSize="sm" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.400" fontSize="sm" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

TimelineRow.defaultProps = {
  logo: undefined,
};
