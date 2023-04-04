import {
  Box,
  Image,
  Heading,
  HStack,
  Flex,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import Resume from "../Utils/resume.pdf";
import Profile from "../Utils/profilePic.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

function About() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1niTBKlvqoFtdvpheVtpNkj6W48qBYOzB/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <Box id="about" className="about section">
      <Heading mt={10} mb={10}>
        About
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        w="70%"
        m="auto"
        mt="100px"
        gap="50px"
      >
        <Box data-aos="flip-left">
          <Image
            className="home-img"
            borderRadius="5%"
            h="80%"
            maxH="100%"
            maxW="100%"
            src={Profile}
            alt="Profile Image"
          />
        </Box>
        <Box alignItems="flex-start" w={["100%", "100%", "55%"]}>
          <Heading textAlign="left">Hello!</Heading>
          <Text
            fontWeight={"bold"}
            fontSize="xl"
            textAlign="left"
            lineHeight={"10"}
            id="user-detail-name"
          >
            I'm Kripa Shankar Pandey
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize="xl"
            textAlign="left"
            lineHeight={"10"}
            id="user-detail-intro"
          >
            enthusiastic and innovative aspiring full-stack web developer with
            hands-on experience in building websites with MERN stack. A Computer
            Science graduate passionate about solving real-life problems and
            learning new technology
          </Text>
          <HStack mt={5} spacing={5}>
            <Link href="https://github.com/kripaShankarPandey">
              <BsGithub size={50} />
            </Link>
            <Link href="https://www.linkedin.com/in/kripa-pandey-9465b215a/">
              <BsLinkedin size={42} />
            </Link>
            <Link href="https://twitter.com/kirpa_pandey">
              <FaTwitterSquare size={50} />
            </Link>
          </HStack>
          <HStack mt={8}>
            <a
              href={Resume}
              download="Kripa_Shankar_Pandey"
              id="resume-button-2"
              onClick={handleClick}
            >
              <Button colorScheme="teal" size={{ base: "md", md: "lg" }}>
                DownLoad CV
              </Button>
            </a>

            <a href="#contact">
              <Button colorScheme="teal" size={{ base: "md", md: "lg" }}>
                Contact Us
              </Button>
            </a>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
