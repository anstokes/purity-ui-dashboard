import React from "react";

// Chakra imports
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import avatar2 from "@assets/img/avatars/avatar2.png";
import avatar3 from "@assets/img/avatars/avatar3.png";
import avatar4 from "@assets/img/avatars/avatar4.png";
import avatar5 from "@assets/img/avatars/avatar5.png";
import avatar6 from "@assets/img/avatars/avatar6.png";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";

type TConversationsProps = {
  title: string,
};

export default function Conversations(props: TConversationsProps) {
  const { title } = props;

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px'>
      <CardHeader mb='12px' p='12px 5px'>
        <Text color={textColor} fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column' w='100%'>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                borderRadius='15px'
                h='50px'
                me='10px'
                src={avatar2}
                w='50px'
              />
              <Flex direction='column'>
                <Text color={textColor} fontSize='sm' fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text color='gray.500' fontSize='xs' fontWeight='400'>
                  Hi! I need more information...
                </Text>
              </Flex>
            </Flex>
            <Button bg='transparent' p='0px' variant='no-hover'>
              <Text
                alignSelf='center'
                color='teal.300'
                fontSize='sm'
                fontWeight='600'>
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                borderRadius='15px'
                h='50px'
                me='10px'
                src={avatar3}
                w='50px'
              />
              <Flex direction='column'>
                <Text color={textColor} fontSize='sm' fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text color='gray.500' fontSize='xs' fontWeight='400'>
                  Awesome work, can you change...
                </Text>
              </Flex>
            </Flex>
            <Button bg='transparent' p='0px' variant='no-hover'>
              <Text
                alignSelf='center'
                color='teal.300'
                fontSize='sm'
                fontWeight='600'>
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                borderRadius='15px'
                h='50px'
                me='10px'
                src={avatar4}
                w='50px'
              />
              <Flex direction='column'>
                <Text color={textColor} fontSize='sm' fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text color='gray.500' fontSize='xs' fontWeight='400'>
                  Have a great afternoon...
                </Text>
              </Flex>
            </Flex>
            <Button bg='transparent' p='0px' variant='no-hover'>
              <Text
                alignSelf='center'
                color='teal.300'
                fontSize='sm'
                fontWeight='600'>
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                borderRadius='15px'
                h='50px'
                me='10px'
                src={avatar5}
                w='50px'
              />
              <Flex direction='column'>
                <Text color={textColor} fontSize='sm' fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text color='gray.500' fontSize='xs' fontWeight='400'>
                  About files I can...
                </Text>
              </Flex>
            </Flex>
            <Button bg='transparent' p='0px' variant='no-hover'>
              <Text
                alignSelf='center'
                color='teal.300'
                fontSize='sm'
                fontWeight='600'>
                REPLY
              </Text>
            </Button>
          </Flex>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                borderRadius='15px'
                h='50px'
                me='10px'
                src={avatar6}
                w='50px'
              />
              <Flex direction='column'>
                <Text color={textColor} fontSize='sm' fontWeight='bold'>
                  Sophie B.{" "}
                </Text>
                <Text color='gray.500' fontSize='xs' fontWeight='400'>
                  About files I can...
                </Text>
              </Flex>
            </Flex>
            <Button bg='transparent' p='0px' variant='no-hover'>
              <Text
                alignSelf='center'
                color='teal.300'
                fontSize='sm'
                fontWeight='600'>
                REPLY
              </Text>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
