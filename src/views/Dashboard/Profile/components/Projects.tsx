import React from "react";
import { FaPlus } from "react-icons/fa";

// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { Card, CardBody, CardHeader } from "@components/Card";

// Assets
import avatar2 from "@assets/img/avatars/avatar2.png";
import avatar4 from "@assets/img/avatars/avatar4.png";
import avatar6 from "@assets/img/avatars/avatar6.png";
import imageArchitect1 from "@assets/img/ImageArchitect1.png";
import imageArchitect2 from "@assets/img/ImageArchitect2.png";
import imageArchitect3 from "@assets/img/ImageArchitect3.png";

import ProjectCard from "./ProjectCard";

type TProjectsProps = {
  title: string,
  description: string,
}

function Projects(props: TProjectsProps) {
  const { title, description } = props;
  
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my='24px' p='16px'>
      <CardHeader mb='12px' p='12px 5px'>
        <Flex direction='column'>
          <Text color={textColor} fontSize='lg' fontWeight='bold'>
            {title}
          </Text>
          <Text color='gray.500' fontSize='sm' fontWeight='400'>
            {description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          gap='24px'
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}>
          <ProjectCard
            avatars={[avatar2, avatar4, avatar6]}
            category="Modern"
            description="As Uber works through a huge amount of internal management turmoil."
            image={imageArchitect1}
            name="Project #1"
          />
          <ProjectCard
            avatars={[avatar4, avatar2, avatar6, avatar4]}
            category="Scandinavian"
            description="Music is something that every person has his or her own specific opinion about."
            image={imageArchitect2}
            name="Project #2"
          />
          <ProjectCard
            avatars={[avatar2, avatar4, avatar6]}
            category="Minimalist"
            description="Different people have different taste, especially various types of music."
            image={imageArchitect3}
            name="Project #3"
          />
          <Button
            bg='transparent'
            border='1px solid lightgray'
            borderRadius='15px'
            color='gray.500'
            minHeight={{ sm: "200px", md: "100%" }}
            p='0px'>
            <Flex align='center' direction='column' justifyContent='center'>
              <Icon as={FaPlus} fontSize='lg' mb='12px' />
              <Text fontSize='lg' fontWeight='bold'>
                Create a New Project
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
  );
}

export default Projects;
