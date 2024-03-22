import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import BillingRow from "@components/Tables/BillingRow";

type TBillingRow = {
  name: string,
  company: string,
  email: string,
  number: string,
}

type TBillingInformationProps = {
  title: string,
  data: TBillingRow[]
}

export default function BillingInformation(props: TBillingInformationProps) {
  const { title, data } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card me={{ lg: "24px" }} my={{ lg: "24px" }}>
      <Flex direction='column'>
        <CardHeader py='12px'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Flex direction='column' w='100%'>
            {data.map((row) => (
              <BillingRow
                key={row.name}
                company={row.company}
                email={row.email}
                name={row.name}
                number={row.number}
              />
            ))}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
}
