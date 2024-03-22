import React from "react";

// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import TablesTableRow, {TTablesTableRowProps} from "@components/Tables/TablesTableRow";

type TAuthorsProps = {
  title: string,
  captions: string[],
  data: TTablesTableRowProps[]
}

export default function Authors(props: TAuthorsProps) {
  const { title, captions, data } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text color={textColor} fontSize='xl' fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table color={textColor} variant='simple'>
          <Thead>
            <Tr color='gray.400' my='.8rem' pl='0px'>
              {captions.map((caption, idx) => (
                <Th key={caption} color='gray.400' ps={idx === 0 ? "0px" : undefined}>
                  {caption}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <TablesTableRow
                key={`${row.email}-${row.name}`}
                date={row.date}
                domain={row.domain}
                email={row.email}
                logo={row.logo}
                name={row.name}
                status={row.status}
                subdomain={row.subdomain}
              />
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
