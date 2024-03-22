import React from "react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";

// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";

// Assets
import BackgroundCard1 from "@assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "@components/Icons/Icons";

import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "@variables/general";

// Components
import BillingInformation from "./components/BillingInformation";
import CreditCard, { TCvv, TValidity } from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";

function Billing() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>
          <Grid
            gap='26px'
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}>
            <CreditCard
              backgroundImage={BackgroundCard1}
              cvv={{
                name: "CVV",
                code: "09x",
              } as TCvv}
              icon={
                <Icon
                  as={RiMastercardFill}
                  color='gray.400'
                  h='auto'
                  w='48px'
                />
              }
              number="7812 2139 0823 XXXX"
              title="Purity UI"
              validity={{
                name: "VALID THRU",
                date: "05/24",
              } as TValidity}
            />
            <PaymentStatistics
              amount={2000}
              description="Belong interactive"
              icon={<Icon as={FaWallet} color='white' h="24px" w="24px" />}
              title="Salary"
            />
            <PaymentStatistics
              amount={4550}
              description="Freelance Payment"
              icon={<Icon as={FaPaypal} color='white' h="24px" w="24px" />}
              title="Paypal"
            />
          </Grid>
          <PaymentMethod
            mastercard={{
              icon: <MastercardIcon h='100%' w='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
            title="Payment Method"
            visa={{
              icon: <VisaIcon h='100%' w='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
          />
        </Box>
        <Invoices data={invoicesData} title="Invoices" />
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <BillingInformation data={billingData} title="Billing Information" />
        <Transactions
          date="23 - 30 March"
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
          title="Your Transactions"
        />
      </Grid>
    </Flex>
  );
}

export default Billing;
