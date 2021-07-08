import { Box, Heading, useColorMode } from "@chakra-ui/react";

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
          This is a Next.js app with Chakra-UI and TypeScript setup.
        </Box>
      </Box>
    </>
  );
};

export default SomeText;
