import { Flex, Text, Tooltip } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Tooltip
        hasArrow
        aria-label="Footer guide"
        label="you can edit this Footer in /src/components/layout/Footer.tsx"
      >
        <Text>2020 - Footer Text Here</Text>
      </Tooltip>
    </Flex>
  );
};

export default Footer;
