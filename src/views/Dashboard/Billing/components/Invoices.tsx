import React from "react";

// Chakra imports
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import InvoicesRow, { TInvoiceRowProps } from "@components/Tables/InvoicesRow";

type TInvoicesProps = {
  title: string,
  data: TInvoiceRowProps[],
}

function Invoices(props: TInvoicesProps) {
  const { title, data } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      ms={{ sm: "0px", lg: "24px" }}
      my={{ sm: "24px", lg: "0px" }}
      p='22px'>
      <CardHeader>
        <Flex align='center' justify='space-between' mb='1rem' w='100%'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
          <Button
            borderColor='teal.300'
            color='teal.300'
            colorScheme='teal'
            fontSize='xs'
            p='8px 32px'
            variant='outline'>
            VIEW ALL
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction='column' w='100%'>
          {data.map((row) => (
            <InvoicesRow
              key={row.code}
              code={row.code}
              date={row.date}
              format={row.format}
              logo={row.logo}
              price={row.price}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Invoices;
