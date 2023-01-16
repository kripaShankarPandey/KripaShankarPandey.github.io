import { Box, Heading, Image, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Temaric from "../Utils/temetric.png";
import Lyst from "../Utils/lyst.png";
const Projects = () => {
  return (
    <Box id="projects">
      <Heading>Projects</Heading>
      <HStack gap={15}>
        <Box boxShadow="dark-lg" padding={10}>
          <Image src={Temaric} alt="Tematrick.com Image" />
          <Text fontWeight={"bold"}>Tematrick.com Clone</Text>
          <Text textAlign={"left"}>
            Lyst.com is an e-commerce web application that allows users to buy
            all luxury products.
          </Text>
          <Text textAlign={"left"}>Tech Stack: HTML | CSS | JAVA SCRIPT</Text>
        </Box>
        <Box boxShadow="dark-lg" padding={10}>
          <Image src={Lyst} alt="Lyst.com Image" />
          <Text fontWeight={"bold"}>Lyst.com Clone</Text>
          <Text textAlign={"left"}>
            Simple time tracking app for Windows, Mac, and Linux which helps you
            to track your time and performance.
          </Text>
          <Text textAlign={"left"}>
            Tech Stack: React.js | HTML | CSS | Java Script | Chankra UI
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Projects;
