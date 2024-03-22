import React from "react";

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader }  from "@components/Card";
import TablesProjectRow, { TTablesProjectRowProps } from "@components/Tables/TablesProjectRow";

type TProjectsProps = {
  title: string,
  captions: string[],
  data: TTablesProjectRowProps[]
}

export default function Projects(props: TProjectsProps) {
  const { title, captions, data } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Flex direction='column'>
          <Text color={textColor} fontSize='lg' fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table color={textColor} variant='simple'>
          <Thead>
            <Tr my='.8rem' pl='0px'>
              {captions.map((caption, idx) => (
                <Th key={caption} color='gray.400' ps={idx === 0 ? "0px" : undefined}>
                  {caption}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <TablesProjectRow
                key={row.name}
                budget={row.budget}
                logo={row.logo}
                name={row.name}
                progression={row.progression}
                status={row.status}
              />
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
