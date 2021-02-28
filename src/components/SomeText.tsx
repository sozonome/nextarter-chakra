import { Box, Heading, useColorMode } from "@chakra-ui/react";

import HelperImage from "./HelperImage";

const SomeText = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          This is a
          <HelperImage src="/nextjs-black-logo.svg" label="NextJS" />
          app with
          <HelperImage
            src="/chakra-ui-logomark-colored.svg"
            label="Chakra UI"
          />
          and
          <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
          setup.
        </Box>
      </Box>
    </>
  );
};

export default SomeText;
