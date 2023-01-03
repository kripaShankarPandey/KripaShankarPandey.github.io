import {
  Box,
  Image,
  Heading,
  HStack,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import Profile from "../Utils/profilePic.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
const Banner = () => {
  return (
    <Flex w="70%" m="auto" mt="100px" gap="50px">
      <Box>
        <Image
          borderRadius="full"
          boxSize="350px"
          src={Profile}
          alt="Profile Image"
        />
      </Box>
      <Box alignItems="flex-start">
        <Heading textAlign="left">Hello!</Heading>
        <Text
          fontWeight={"bold"}
          fontSize="xl"
          textAlign="left"
          lineHeight={"10"}
        >
          I'm Kripa Shankar Pandey
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize="xl"
          textAlign="left"
          lineHeight={"10"}
        >
          Full Stack Web Developer, Enthusiast to Learn New Technology
        </Text>
        <HStack>
          <Box>
            <BsGithub width="20px" />
            <BsLinkedin w="20px" />
            <FaTwitterSquare w="20px" />
          </Box>
        </HStack>
        <HStack mt={8}>
          <Button colorScheme="teal" size="lg">
            DownLoad CV
          </Button>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Banner;
