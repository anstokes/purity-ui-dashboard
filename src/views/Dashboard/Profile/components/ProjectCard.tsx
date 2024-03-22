import React from "react";

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type TProjectCard = {
  image: string,
  name: string,
  category: string,
  avatars: string[],
  description: string,
}

export default function ProjectCard(props: TProjectCard) {
  const { image, name, category, avatars, description } = props;

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column'>
      <Box borderRadius='15px' mb='20px' position='relative'>
        <Image borderRadius='15px' src={image} />
        <Box
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
          borderRadius='15px'
          h='100%'
          position='absolute'
          top='0'
          w='100%' />
      </Box>
      <Flex direction='column'>
        <Text color='gray.500' fontSize='md' fontWeight='600' mb='10px'>
          {name}
        </Text>
        <Text color={textColor} fontSize='xl' fontWeight='bold' mb='10px'>
          {category}
        </Text>
        <Text color='gray.500' fontSize='md' fontWeight='400' mb='20px'>
          {description}
        </Text>
        <Flex justifyContent='space-between'>
          <Button
            colorScheme='teal'
            fontSize='xs'
            h='36px'
            minW='110px'
            px='1.5rem'
            variant='outline'>
            VIEW PROJECT
          </Button>
          <AvatarGroup size='xs'>
            {
              // eslint-disable-next-line react/no-array-index-key
              avatars.map((el, i) => <Avatar key={i} src={el} />)
            }
          </AvatarGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
