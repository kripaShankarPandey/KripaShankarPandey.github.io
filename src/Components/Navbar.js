import { Box, Link, Button, useColorMode, HStack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <HStack w="60%" m="auto" justify={"space-around"}>
        <Box>
          <Link>Home</Link>
        </Box>
        <Box>
          <Link>About Me</Link>
        </Box>
        <Box>
          <Link>Skills</Link>
        </Box>
        <Box>
          <Link>Contact Us</Link>
        </Box>
        <Box>
          <Link>Resume</Link>
        </Box>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Box>
  );
}
