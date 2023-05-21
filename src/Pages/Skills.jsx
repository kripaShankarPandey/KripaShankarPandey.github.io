import {
  Box,
  Heading,
  Stack,
  Image,
  Grid,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiExpress,
  SiChakraui,
  SiGithub,
  SiFastapi,
  SiCypress,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
const Skills = () => {
  return (
    <Box id="skills">
      <Heading mt={10} mb={10}>
        Skills
      </Heading>
      <Stack direction={["column", "column", "row"]} spacing="24px">
        <Box
          data-aos="flip-left"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}>
          <Image
            w="100%"
            src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="image"
          />
        </Box>
        <Box
          data-aos="flip-right"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={3}
            className="skills-card">
            <VStack _hover={{ color: "#008080" }}>
              <SiHtml5 size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Html
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiCss3 size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                CSS
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiJavascript size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Java Script
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiReact size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                React
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiRedux size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Redux
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiExpress size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Express
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiChakraui size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Chakra UI
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiFastapi size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                API
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiGithub size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                github
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiCypress size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Cypress
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiTypescript size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                TypeScript
              </Text>
            </VStack>
            <VStack _hover={{ color: "#008080" }}>
              <SiMongodb size={80} className="skills-card-img" />
              <Text fontWeight={"bold"} className="skills-card-name">
                Mongo Db
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Skills;
