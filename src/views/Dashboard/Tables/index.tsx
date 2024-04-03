import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

import { tablesTableData, dashboardTableData } from "@variables/general";

import Authors from "./components/Authors";
import Projects from "./components/Projects";

export default function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
        title="Authors Table"
      />
      <Projects
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
        title="Projects Table"
      />
    </Flex>
  );
}
