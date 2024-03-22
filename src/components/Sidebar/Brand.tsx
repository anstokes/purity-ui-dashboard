import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

import { CreativeTimLogo } from "../Icons/Icons";
import Separator from "../Separator";

type TBrandProps = {
    logoText: string,
}

export default function Brand(props: TBrandProps) {
  const { logoText } = props;
    
  return (
    <Box mb="8px" pt="35px">
      <Link
        alignItems="center"
        display="flex"
        fontSize="11px"
        fontWeight="bold"
        href={`${process.env.PUBLIC_URL}/#/`}
        justifyContent="center"
        lineHeight="100%"
        mb="30px"
      >
        <CreativeTimLogo h="32px" me="10px" w="32px" />
        <Text fontSize="sm" mt="3px">
          {logoText}
        </Text>
      </Link>
      <Separator />
    </Box>
  );    
}