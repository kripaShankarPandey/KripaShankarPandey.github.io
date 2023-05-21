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
import indiaMart from "../Utils/indiaMart.png";
import fashion from "../Utils/fashion.png";
import TheHindu from "../Utils/thehindu.png";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
const Projects = () => {
  return (
    <Box id="projects" mr={["3", "5"]} ml={["3", "5"]}>
      <Heading mt={10} mb={10}>
        Projects
      </Heading>
      {/* India.com section */}
      <Grid
        w={["95%", "95%", "94%"]}
        m="auto"
        templateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={"35px"}>
        <Box
          _hover={{
            bg: "#008080",
            transition: "0.5s ease-out",
            color: "white",
          }}
          borderRadius={"20"}
          boxShadow="dark-lg"
          padding={10}>
          <img src={indiaMart} alt="indiaMart.com Image" />
          <Heading size={"md"} m="2" lineHeight={7} fontWeight={"bold"}>
            IndiaMart.com Clone
          </Heading>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-description">
            IndiaMart.com is an e-commerce web application that allows users to
            buy/shell products.
          </Text>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-tech-stack">
            Tech Stack: HTML | CSS | React | Redux | Chakra UI
          </Text>

          <HStack mt={10} justifyContent={"space-between"}>
            <Box>
              <Link href="https://github.com/kripaShankarPandey/TMetric.com_Clone/tree/main/my_first_react_app">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box>
              <Link href="https://india-mart-3knhm4vnh-kripashankarpandey.vercel.app/">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box>
        {/* the Fashion store news */}
        <Box
          _hover={{
            bg: "#008080",
            transition: "0.5s ease-out",
            color: "white",
          }}
          borderRadius={"20"}
          boxShadow="dark-lg"
          padding={10}>
          <img src={fashion} alt="Anthropology.com Image" />
          <Heading size={"md"} m="2" lineHeight={7} fontWeight={"bold"}>
            Anthropology.com Clone
          </Heading>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-description">
            Anthropology.com is an e-commerce websites that allows users to buy
            luxury womens products.
          </Text>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-tech-stack">
            Tech Stack: React| Redux| ChakraUI| MongoDB| Express
          </Text>
          <HStack mt={5} justifyContent={"space-between"}>
            <Box>
              <Link href="https://github.com/devn5900/fallacious-company-8720">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box>
              <Link href="https://fallacious-company-8720-six.vercel.app">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box>
        {/* the Hindu */}
        {/* <Box
          data-aos="flip-left"
          boxShadow="dark-lg"
          padding={10}
          >
          <img src={TheHindu} alt="TheHindu.com Image" />
          <Text lineHeight={7} fontWeight={"bold"} >
            TheHindu News Clone
          </Text>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-description">
            A Famous Indian News Company, That Provides Latest News from India
            and World, News from Politics, Sports, Business, Arts and
            Entertainment.
          </Text>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-tech-stack">
            Tech Stack: HTML | CSS | Java Script
          </Text>
          <HStack mt={5} justifyContent={"space-between"}>
            <Box >
              <Link href="https://github.com/kripaShankarPandey/The-Hindu-News-Clone">
                <SiGithub size={35} />
              </Link>
            </Box>
            <Box >
              <Link href="https://legendary-treacle-5ec8f4.netlify.app/">
                <BsGlobe size={35} />
              </Link>
            </Box>
          </HStack>
        </Box> */}
        {/* Lyst .com section */}
        <Box
          _hover={{
            bg: "#008080",
            transition: "0.5s ease-out",
            color: "white",
          }}
          borderRadius={"20"}
          boxShadow="dark-lg"
          padding={10}>
          <img src={Temaric} alt="Tematrick.com Image" />
          <Heading size={"md"} m="2" lineHeight={7} fontWeight={"bold"}>
            Tematrick.com Clone
          </Heading>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-description">
            Simple time tracking app for Windows, Mac, and Linux which helps you
            to track your time and performance
          </Text>
          <Text
            lineHeight={7}
            textAlign={"left"}
            className="project-tech-stack">
            Tech Stack: HTML | CSS | React | Redux | Chakra UI
          </Text>

          <HStack mt={10} justifyContent={"space-between"}>
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
      </Grid>
    </Box>
  );
};

export default Projects;
