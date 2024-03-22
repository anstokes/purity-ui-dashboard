import React, { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

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
import { Card, CardBody } from "@components/Card";

type TBuiltByDevelopers = {
  description: string,
  image: ReactNode,
  name: string,
  title: string,
}

export default function BuiltByDevelopers(props: TBuiltByDevelopers) {
  const { title, name, description, image } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "45%" }}>
            <Text color='gray.400' fontSize='sm' fontWeight='bold'>
              {title}
            </Text>
            <Text color={textColor} fontSize='lg' fontWeight='bold' pb='.5rem'>
              {name}
            </Text>
            <Text color='gray.400' fontSize='sm' fontWeight='normal'>
              {description}
            </Text>
            <Spacer />
            <Flex align='center'>
              <Button
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}
                p='0px'
                variant='no-hover'>
                <Text
                  _hover={{ me: "4px" }}
                  color={textColor}
                  cursor='pointer'
                  fontSize='sm'
                  fontWeight='bold'
                  my={{ sm: "1.5rem", lg: "0px" }}
                  transition='all .5s ease'>
                  Read more
                </Text>
                <Icon
                  _hover={{ transform: "translateX(20%)" }}
                  as={BsArrowRight}
                  cursor='pointer'
                  fontSize='2xl'
                  h='20px'
                  mx='.3rem'
                  pt='4px'
                  transition='all .5s ease'
                  w='20px'
                />
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            align='center'
            bg='teal.300'
            borderRadius='15px'
            justify='center'
            minHeight={{ sm: "250px" }}
            width={{ lg: "40%" }}>
            {image}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
