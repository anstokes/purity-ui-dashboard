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
import BarChart from "@components/Charts/BarChart";
import LineChart from "@components/Charts/LineChart";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "@components/Icons/Icons";

import { rtlDashboardTableData, rtlTimelineData } from "@variables/general";

import ActiveUsers from "../Dashboard/components/ActiveUsers";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import OrdersOverview from "../Dashboard/components/OrdersOverview";
import Projects from "../Dashboard/components/Projects";
import SalesOverview from "../Dashboard/components/SalesOverview";
import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          amount="$53,000"
          icon={<WalletIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={55}
          title="إجمالي المبيعات"
        />
        <MiniStatistics
          amount="2,300"
          icon={<GlobeIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={5}
          title="عملاء جدد"
        />
        <MiniStatistics
          amount="+3,020"
          icon={<DocumentIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={-14}
          title="مستخدمو اليوم"
        />
        <MiniStatistics
          amount="$173,000"
          icon={<CartIcon color={iconBoxInside} h="24px" w="24px" />}
          percentage={8}
          title="أموال اليوم"
        />
      </SimpleGrid>
      <Grid
        gap='24px'
        my='26px'
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}>
        <BuiltByDevelopers
          description="من الألوان والبطاقات والطباعة إلى العناصر المعقدة ، ستجد الوثائق الكاملة."
          image={
            <Image
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
              src={logoChakra}
            />
          }
          name="لوحة معلومات Purity UI"
          title="بناها المطورون"
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          description="تكوين الثروة هو لعبة ثورية حديثة ذات محصلة إيجابية. الأمر كله يتعلق بمن يغتنم الفرصة أولاً."
          title="العمل مع الصواريخ"
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
          title="المستخدمين النشطين"
        />
        <SalesOverview
          chart={<LineChart />}
          percentage={5}
          title="نظرة عامة على المبيعات"
        />
      </Grid>
      <Grid
        gap='24px'
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}>
        <Projects
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={rtlDashboardTableData}
          title="المشاريع"
        />
        <OrdersOverview
          amount={30}
          data={rtlTimelineData}
          title="نظرة عامة على الطلبات"
        />
      </Grid>
    </Flex>
  );
}
