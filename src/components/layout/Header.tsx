import { Flex, Tooltip, Heading, Box } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Tooltip
        hasArrow
        aria-label="Header guide"
        label="edit this Header in /src/components/layout/Header.tsx"
      >
        <Heading as="h1">nextchakra-starter</Heading>
      </Tooltip>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
