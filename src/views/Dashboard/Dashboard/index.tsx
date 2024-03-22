import React from "react";

// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import peopleImage from "@assets/img/people-image.png";
import logoChakra from "@assets/svg/logo-white.svg";

// Charts
import { BarChart, LineChart } from "@components/Charts";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "@components/Icons/Icons";

import { dashboardTableData, timelineData } from "@variables/general";

import {
  ActiveUsers,
  BuiltByDevelopers,
  MiniStatistics,
  OrdersOverview,
  Projects,
  SalesOverview,
  WorkWithTheRockets,
} from "./components";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          amount="$53,000"
          icon={<WalletIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={55}
          title={"Today's Moneys"}
        />
        <MiniStatistics
          amount="2,300"
          icon={<GlobeIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={5}
          title={"Today's Users"}
        />
        <MiniStatistics
          amount="+3,020"
          icon={<DocumentIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={-14}
          title="New Clients"
        />
        <MiniStatistics
          amount="$173,000"
          icon={<CartIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={8}
          title="Total Sales"
        />
      </SimpleGrid>
      <Grid
        gap='24px'
        my='26px'
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}>
        <BuiltByDevelopers
          description="From colors, cards, typography to complex elements, you will find the full documentation."
          image={
            <Image
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
              src={logoChakra}
            />
          }
          name="Purity UI Dashboard"
          title="Built by Developers"
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          description="Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
          title="Work with the rockets"
        />
      </Grid>
      <Grid
        gap='24px'
        mb={{ lg: "26px" }}
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}>
        <ActiveUsers
          chart={<BarChart />}
          percentage={23}
          title="Active Users"
        />
        <SalesOverview
          chart={<LineChart />}
          percentage={5}
          title="Sales Overview"
        />
      </Grid>
      <Grid
        gap='24px'
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}>
        <Projects
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
          title="Projects"
        />
        <OrdersOverview
          amount={30}
          data={timelineData}
          title="Orders Overview"
        />
      </Grid>
    </Flex>
  );
}
