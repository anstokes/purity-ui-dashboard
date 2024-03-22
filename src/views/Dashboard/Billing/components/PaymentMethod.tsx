import React, { ReactNode } from "react";
import { FaPencilAlt } from "react-icons/fa";

// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";
import IconBox from "@components/Icons/IconBox";

type TCard = {
  icon: ReactNode,
  number: string,
}

type TPaymentMethodProps = {
  title: string,
  mastercard: TCard,
  visa: TCard,
}

export default function PaymentMethod(props: TPaymentMethodProps) {
  const { title, mastercard, visa } = props;
  // const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800",
  );

  return (
    <Card mt='24px' p='16px'>
      <CardHeader>
        <Flex align='center' justify='space-between' minHeight='60px' w='100%'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
          <Button bg={bgButton} color='white' fontSize='xs' variant='no-hover'>
            ADD NEW CARD
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex
          align='center'
          direction={{ sm: "column", md: "row" }}
          justify='center'
          py='1rem'
          w='100%'>
          <Flex
            align='center'
            bg='transparent'
            border='1px solid'
            borderColor={borderColor}
            borderRadius='15px'
            mb={{ sm: "24px", md: "0px" }}
            me={{ sm: "0px", md: "24px" }}
            p='1rem'
            width='100%'>
            <IconBox h='22px' me='10px' w='25px'>
              {mastercard.icon}
            </IconBox>
            <Text color='gray.400' fontSize='md' fontWeight='semibold'>
              {mastercard.number}
            </Text>
            <Spacer />
            <Button
              bg='transparent'
              h='16px'
              p='0px'
              variant='no-hover'
              w='16px'>
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
          <Flex
            align='center'
            bg='transparent'
            border='1px solid'
            borderColor={borderColor}
            borderRadius='15px'
            p='16px'
            width='100%'>
            <IconBox h='25px' me='10px' w='25px'>
              {visa.icon}
            </IconBox>
            <Text color='gray.400' fontSize='md' fontWeight='semibold'>
              {visa.number}
            </Text>
            <Spacer />
            <Button
              bg='transparent'
              h='16px'
              p='0px'
              variant='no-hover'
              w='16px'>
              <Icon as={FaPencilAlt} />
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
