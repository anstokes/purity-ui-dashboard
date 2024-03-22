import React from "react";

// Chakra imports
import { Link, Text } from "@chakra-ui/react";

import { CreativeTimLogo } from "@components/Icons/Icons";

type TBrandProps = {
    logoText: string,
    mainText: string,
}

export default function Brand(props: TBrandProps) {
  const { logoText, mainText } = props;
    
  return (
    <Link
      alignItems="center"
      color={mainText}
      display="flex"
      fontWeight="bold"
      href={`${process.env.PUBLIC_URL}/#/`}
      justifyContent="center"
      lineHeight="100%"
    >
      <CreativeTimLogo h="32px" me="10px" w="32px" />
      <Text fontSize="sm" mt="3px">
        {logoText}
      </Text>
    </Link>
  );
}
