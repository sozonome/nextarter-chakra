import { Box, Spacer, Flex, HStack, Link } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const NavBarLinks = [
  { name: "Work", link: "work" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

const Header = () => {
  return (
    <Flex width="full" align="center">
      <HStack spacing="2em">
        {NavBarLinks.map((linkItem) => (
          <Link key={linkItem.name} href={linkItem.link}>
            {linkItem.name}
          </Link>
        ))}
      </HStack>
      <Spacer />
      <Box>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
