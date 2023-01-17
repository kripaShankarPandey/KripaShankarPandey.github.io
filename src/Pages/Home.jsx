import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import GitHubCalendar from "react-github-calendar";
import { Box, Heading, VStack } from "@chakra-ui/react";
const Home = () => {
  return (
    <div id="Home">
      <Navbar />
      <Banner />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Heading lineHeight={2}>GitHubCalendar</Heading>
      <VStack>
        <GitHubCalendar username="kripashankarpandey" />
      </VStack>

      <VStack>
        <Box>
          https://github-readme-stats.vercel.app/api?username=Omchand27&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=20&locale=en&theme=radical
        </Box>
      </VStack>
      <Contact />
      {/* https://github-readme-stats.vercel.app/api?username=Omchand27&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=20&locale=en&theme=radical */}
      {/* https://github-readme-stats.vercel.app/api/top-langs/?username=Omchand27&layout=compact&hide=Shell&border_radius=20&theme=radical */}
    </div>
  );
};

export default Home;
