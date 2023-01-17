import {
  Box,
  Heading,
  Image,
  HStack,
  Text,
  Link,
  Spacer,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Temaric from "../Utils/temetric.png";
import Lyst from "../Utils/lyst.png";
import TheHindu from "../Utils/thehindu.png";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
const Projects = () => {
  return (
    <Box id="projects">
      <Heading>Projects</Heading>
      {/* Temtrick .com section */}
      <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={15}>
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
          <Spacer />
          <HStack mt={5} justifyContent={"space-between"}>
            <Box>
              <Link href="https://github.com/kripaShankarPandey/TMetric.com_Clone/tree/main/my_first_react_app">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box>
              <Link href="https://my-first-react-website.vercel.app/">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box>
        {/* Lyst .com section */}
        <Box data-aos="flip-left" boxShadow="dark-lg" padding={8}>
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
              <Link href="https://github.com/priyankfz7/List-Clone">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box>
              <Link href="https://symphonious-nasturtium-e78dd0.netlify.app/">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box>
        {/* the hindu news */}
        <Box boxShadow="dark-lg" padding={10}>
          <Image src={TheHindu} alt="TheHindu.com Image" />
          <Text lineHeight={7} fontWeight={"bold"}>
            TheHindu News Clone
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            A Famous Indian News Company, That Provides Latest News from India
            and World, News from Politics, Sports, Business, Arts and
            Entertainment.
          </Text>
          <Text lineHeight={7} textAlign={"left"}>
            Tech Stack: HTML | CSS | Java Script
          </Text>
          <HStack mt={5} justifyContent={"space-between"}>
            <Box>
              <Link href="https://github.com/kripaShankarPandey/The-Hindu-News-Clone">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box>
              <Link href="https://legendary-treacle-5ec8f4.netlify.app/">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Projects;
