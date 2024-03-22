import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

// Chakra imports
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardHeader } from "@components/Card";
import DashboardTableRow, { TProjectData } from "@components/Tables/DashboardTableRow";

type TProjectsProps = {
  amount: number,
  captions: string[],
  data: TProjectData[],
  title: string,
}

export default function Projects (props: TProjectsProps) {
  const { amount, captions, data, title } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }} p='16px'>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Text color={textColor} fontSize='lg' fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
          <Flex align='center'>
            <Icon
              as={IoCheckmarkDoneCircleSharp}
              color='teal.300'
              h={4}
              pe='3px'
              w={4}
            />
            <Text color='gray.400' fontSize='sm' fontWeight='normal'>
              <Text as='span' fontWeight='bold'>
                {amount} done
              </Text>{" "}
              this month.
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <Table color={textColor} variant='simple'>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            {captions.map((caption, idx) => (
              <Th key={caption} color='gray.400' ps={idx === 0 ? "0px" : undefined}>
                {caption}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <DashboardTableRow
              key={row.name}
              budget={row.budget}
              logo={row.logo}
              members={row.members}
              name={row.name}
              progression={row.progression}
            />
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};
