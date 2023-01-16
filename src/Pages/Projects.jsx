import { Box, Heading, Image, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Temaric from "../Utils/temetric.png";
import Lyst from "../Utils/lyst.png";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
const Projects = () => {
  return (
    <Box id="projects">
      <Heading>Projects</Heading>
      <HStack gap={15}>
        <Box boxShadow="dark-lg" padding={10}>
          <Image src={Temaric} alt="Tematrick.com Image" />
          <Text lineHeight={7} fontWeight={"bold"}>
            Tematrick.com Clone
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            Lyst.com is an e-commerce web application that allows users to buy
            all luxury products.
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            Tech Stack: HTML | CSS | JAVA SCRIPT
          </Text>
          <HStack mt={5} justifyContent={"space-between"}>
            <Box>
              <SiGithub size={35} />
            </Box>
            <Box>
              <BsGlobe size={35} />
            </Box>
          </HStack>
        </Box>
        <Box data-aos="flip-left" boxShadow="dark-lg" padding={10}>
          <Image src={Lyst} alt="Lyst.com Image" />
          <Text lineHeight={7} fontWeight={"bold"}>
            Lyst.com Clone
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            Simple time tracking app for Windows, Mac, and Linux which helps you
            to track your time and performance.
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            Tech Stack: React.js | HTML | CSS | Java Script | Chankra UI
          </Text>
          <HStack mt={5} justifyContent={"space-between"}>
            <Box>
              <SiGithub size={35} />
            </Box>
            <Box>
              <BsGlobe size={35} />
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Projects;
