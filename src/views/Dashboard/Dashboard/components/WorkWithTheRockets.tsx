import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody } from "@components/Card";

type TWorkWithTheRocketsProps = {
  backgroundImage: string,
  description: string,
  title: string,
}

export default function WorkWithTheRockets(props: TWorkWithTheRocketsProps) {
  const { backgroundImage, description, title } = props;
  const overlayRef = useRef(null);

  return (
    <Card maxHeight='290.5px' p='1rem'>
      <CardBody
        backgroundImage={backgroundImage}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        borderRadius='15px'
        h={{ sm: "200px", lg: "100%" }}
        p='0px'
        position='relative'
        w='100%'>
        <Box
          ref={overlayRef}
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
          borderRadius='inherit'
          h='inherit'
          position='absolute'
          w='100%'
        />
        <Portal containerRef={overlayRef}>
          <Flex
            color='white'
            flexDirection='column'
            lineHeight='1.6'
            p='1.5rem 1.2rem 0.3rem 1.2rem'>
            <Text fontSize='xl' fontWeight='bold' pb='.3rem'>
              {title}
            </Text>
            <Text fontSize='sm' fontWeight='normal' w={{ lg: "92%" }}>
              {description}
            </Text>
            <Spacer />
            <Flex align='center' mt={{ sm: "20px", lg: "40px", xl: "90px" }}>
              <Button bg='transparent' mt='12px' p='0px' variant='no-hover'>
                <Text
                  _hover={{ me: "4px" }}
                  fontSize='sm'
                  fontWeight='bold'
                  transition='all .5s ease'>
                  Read more
                </Text>
                <Icon
                  _hover={{ transform: "translateX(20%)" }}
                  as={BsArrowRight}
                  cursor='pointer'
                  fontSize='xl'
                  h='20px'
                  mx='.3rem'
                  pt='4px'
                  transition='all .5s ease'
                  w='20px'
                />
              </Button>
            </Flex>
          </Flex>
        </Portal>
      </CardBody>
    </Card>
  );
};
