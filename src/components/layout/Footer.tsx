import { Flex, Link, Text, Tooltip } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Tooltip
        hasArrow
        aria-label="Footer guide"
        label="edit this Footer in /src/components/layout/Footer.tsx"
      >
        <Text>
          2020 -{" "}
          <Link href="https://sznm.dev" isExternal>
            sznm.dev
          </Link>
        </Text>
      </Tooltip>
    </Flex>
  );
};

export default Footer;
