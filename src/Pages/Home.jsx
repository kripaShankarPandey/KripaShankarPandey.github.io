import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import GitHubCalendar from "react-github-calendar";
import {
  Box,
  Heading,
  Image,
  Button,
  Text,
  VStack,
  HStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "../Components/Banner";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box id="home">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Heading mt={10} mb={10} lineHeight={2}>
        GitHubCalendar
      </Heading>
      <VStack mb={10} ml={["5"]} mr={["5"]}>
        <GitHubCalendar username="kripaShankarPandey" />
      </VStack>

      <Flex
        gap={["10", "20"]}
        direction={["column", "row"]}
        w={["95%", "95%", "80%"]}
        m="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Image
            id="github-stats-card"
            src="
          https://github-readme-stats.vercel.app/api?username=kripaShankarPandey&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=20&locale=en&theme=radical"
            alt="github status"
          />
        </Box>
        <Box>
          <Image
            id="github-top-langs"
            src="
          https://github-readme-stats.vercel.app/api/top-langs/?username=kripaShankarPandey&layout=compact&hide=Shell&border_radius=20&theme=radical"
            alt="github status"
          />
        </Box>
      </Flex>

      <VStack mt={10} mb="10" ml="3" mr="3">
        <Image
          id="github-streak-stats"
          src="
          https://github-readme-streak-stats.herokuapp.com?user=kripaShankarPandey&theme=radical&border_radius=20"
          alt="github status"
        />
      </VStack>
      <Contact />

      <Box>
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="60px"
          border="1px solid #2e3192"
          bg="#008080"
          right="15px"
          zIndex="100"
          display={isVisible ? "flex" : "none"}
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          boxShadow="xl"
          _hover={{ bg: "#008080" }}
          w="50px"
          h="50px"
        >
          <FaArrowUp color="#ffff" size="lg" />
        </Button>
      </Box>
      <Box textAlign="center" bg="#141321" color="white">
        <Text fontSize="lg" p="15px">
          Created By <span style={{ color: "teal" }}>Kripa Shankar Pandey</span>{" "}
          | © 2023 All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
