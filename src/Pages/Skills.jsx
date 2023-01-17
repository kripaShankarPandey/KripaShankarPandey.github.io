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
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}>
          <Image
            w="100%"
            src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="image"
          />
        </Box>
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}>
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <VStack _hover={{ color: "teal.400" }}>
              <SiHtml5 size={80} />
              <Text fontWeight={"bold"}>Html</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiCss3 size={80} />
              <Text fontWeight={"bold"}>CSS</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiJavascript size={80} />
              <Text fontWeight={"bold"}>Java Script</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiReact size={80} />
              <Text fontWeight={"bold"}>React</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiRedux size={80} />
              <Text fontWeight={"bold"}>Redux</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiExpress size={80} />
              <Text fontWeight={"bold"}>Express</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiChakraui size={80} />
              <Text fontWeight={"bold"}>Chakra UI</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiFastapi size={80} />
              <Text fontWeight={"bold"}>API</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiGithub size={80} />
              <Text fontWeight={"bold"}>github</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiCypress size={80} />
              <Text fontWeight={"bold"}>Cypress</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiTypescript size={80} />
              <Text fontWeight={"bold"}>Cypress</Text>
            </VStack>
            <VStack _hover={{ color: "teal.400" }}>
              <SiMongodb size={80} />
              <Text fontWeight={"bold"}>Mongo Db</Text>
            </VStack>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Skills;
