import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  Text,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "About Me", "Skills", "Projects", "Contact", "Resume"];

const id = ["#Home", "#about", "#skills", "#projects", "#contact", "_blank"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        px={4}
        position="sticky"
        top="0px"
        zIndex="20"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <Spacer />
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} justifyContent="center">
            {/* <Box>Logo</Box> */}
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              fontWeight="600"
            >
              <a href="#Home">
                <Text fontSize="2xl">Home</Text>
              </a>
              <a href="#about">
                <Text fontSize="2xl">About Me</Text>
              </a>
              <a href="#skills">
                <Text fontSize="2xl">Skills</Text>
              </a>
              <a href="#projects">
                <Text fontSize="2xl">Projects</Text>
              </a>
              <a href="#contact">
                <Text fontSize="2xl">Contact</Text>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/u/2/my-drive"
              >
                <Text fontSize="2xl">Resume</Text>
              </a>
            </HStack>
          </HStack>
          <Spacer />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <a href="#Home">
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  Home
                </Button>
              </a>
              <a href="#about">
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  About Me
                </Button>
              </a>
              <a href="#skills">
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  Skills
                </Button>
              </a>
              <a href="#projects">
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  Projects
                </Button>
              </a>
              <a href="#contact">
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  Contact
                </Button>
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/drive/u/2/my-drive"
              >
                <Button onClick={isOpen ? onClose : onOpen} fontSize="2xl">
                  Resume
                </Button>
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
