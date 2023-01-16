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
      <Heading>Skills</Heading>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w="50%">
          <Image
            w="100%"
            src="https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="image"
          />
        </Box>
        <Box w="50%">
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <VStack>
              <SiHtml5 size={80} />
              <Text fontWeight={"bold"}>Html</Text>
            </VStack>
            <VStack>
              <SiCss3 size={80} />
              <Text fontWeight={"bold"}>CSS</Text>
            </VStack>
            <VStack>
              <SiJavascript size={80} />
              <Text fontWeight={"bold"}>Java Script</Text>
            </VStack>
            <VStack>
              <SiReact size={80} />
              <Text fontWeight={"bold"}>React</Text>
            </VStack>
            <VStack>
              <SiRedux size={80} />
              <Text fontWeight={"bold"}>Redux</Text>
            </VStack>
            <VStack>
              <SiExpress size={80} />
              <Text fontWeight={"bold"}>Express</Text>
            </VStack>
            <VStack>
              <SiChakraui size={80} />
              <Text fontWeight={"bold"}>Chakra UI</Text>
            </VStack>
            <VStack>
              <SiFastapi size={80} />
              <Text fontWeight={"bold"}>API</Text>
            </VStack>
            <VStack>
              <SiGithub size={80} />
              <Text fontWeight={"bold"}>github</Text>
            </VStack>
            <VStack>
              <SiCypress size={80} />
              <Text fontWeight={"bold"}>Cypress</Text>
            </VStack>
            <VStack>
              <SiTypescript size={80} />
              <Text fontWeight={"bold"}>Cypress</Text>
            </VStack>
            <VStack>
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
