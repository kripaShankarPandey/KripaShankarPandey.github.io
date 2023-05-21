import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsTwitter, BsLinkedin, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Box bg="#141321" color="white">
      <Box p={4}>
        <Box>
          <Heading> Keep in touch</Heading>
          <Box>
            <Box>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                m="3"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdPhone color="#ffffff" size="20px" />}
                id="contact-phone">
                +91-9450341634
              </Button>
              <Button
                size="md"
                height="48px"
                width="230px"
                variant="ghost"
                m="3"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdEmail color="#ffffff" size="20px" />}
                id="contact-email">
                kripapandey302@gmail.com
              </Button>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                m="3"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#ffffff" size="20px" />}>
                Basti, U.P India
              </Button>
            </Box>
          </Box>
          <Box>
            <Link href="https://twitter.com/kirpa_pandey">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                m="3"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsTwitter size="28px" />}
              />
            </Link>
            <Link
              href="https://github.com/kripaShankarPandey"
              id="contact-github">
              <IconButton
                aria-label="github"
                variant="ghost"
                m="3"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsGithub size="28px" />}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kripa-pandey-9465b215a"
              id="contact-linkedin">
              <IconButton
                aria-label="github"
                variant="ghost"
                m="3"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsLinkedin size="28px" />}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
