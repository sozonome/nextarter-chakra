import { Flex, Tooltip, Heading } from "@chakra-ui/core";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Tooltip
        hasArrow
        aria-label="Header guide"
        label="you can edit this Header in /src/components/layout/Header.tsx"
      >
        <Heading as="h1">Site / App Title</Heading>
      </Tooltip>
    </Flex>
  );
};

export default Header;
