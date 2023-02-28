import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "../particlesConfig";

const Banner = () => {
  const particlesInit = (engine) => {
    loadFull(engine);
  };
  return (
    <Box position="relative" width="100%" height="100vh">
      <Particles
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-10",
        }}
      />
      <VStack color="white" pt="40">
        <Heading as="h1">Hi👋, I'm</Heading>
        <Heading as="h1" className="name" id="user-detail-name">
          Kripa <span style={{ color: "teal" }}>Shankar</span> Pandey
        </Heading>
        <Heading as="h2" color="yellow">
          <span>
            <Typewriter
              id="user-detail-intro"
              words={[
                "Full Stack Web Developer",
                "Always ready to learn New Technology",
                // "New Technology",
                // "Competitive programmer",
                // "BackEnd",
              ]}
              loop={500}
              cursor
              cursorStyle={"|"}
              typeSpeed={100}
              deleteSpeed={100}
            />
          </span>
        </Heading>
        <Text fontWeight="semibold" fontSize="xl">
          A Full Stack Web Developer, Enthusiast to Learn New Technology.
        </Text>
      </VStack>
    </Box>
  );
};

export default Banner;
