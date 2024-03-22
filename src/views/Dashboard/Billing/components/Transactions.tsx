import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import TransactionRow, { TTransactionRowProps } from "@components/Tables/TransactionRow";

type TTransactionsProps = {
  title: string,
  date: string,
  newestTransactions: TTransactionRowProps[],
  olderTransactions: TTransactionRowProps[],
}

export default function Transactions(props: TTransactionsProps) {
  const {
    title,
    date,
    newestTransactions,
    olderTransactions,
  } = props;
  
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card ms={{ lg: "24px" }} my='24px'>
      <CardHeader mb='12px'>
        <Flex direction='column' w='100%'>
          <Flex
            align={{ sm: "center" }}
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            my={{ md: "12px" }}
            w='100%'>
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight='bold'>
              {title}
            </Text>
            <Flex align='center'>
              <Icon
                as={FaRegCalendarAlt}
                color='gray.400'
                fontSize='md'
                me='6px' />
              <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction='column' w='100%'>
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
            NEWEST
          </Text>
          {newestTransactions.map((row) => (
            <TransactionRow
              key={row.name}
              date={row.date}
              logo={row.logo}
              name={row.name}
              price={row.price}
            />
          ))}
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
            OLDER
          </Text>
          {olderTransactions.map((row) => (
            <TransactionRow
              key={row.name}
              date={row.date}
              logo={row.logo}
              name={row.name}
              price={row.price}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}
