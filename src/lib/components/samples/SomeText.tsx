import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
  });

  return (
    <Grid gap={2}>
      <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }}>
        Hello
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box fontSize={textSize}>
          This is a Next.js app with Chakra-UI and TypeScript setup.
        </Box>
      </Box>
    </Grid>
  );
};

export default SomeText;
