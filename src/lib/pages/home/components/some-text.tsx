import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="2xl" fontWeight="bold">
        nextarter-chakra
      </Heading>

      <Text fontSize="xs">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};
