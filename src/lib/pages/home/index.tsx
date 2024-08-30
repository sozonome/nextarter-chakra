import { Flex } from '@chakra-ui/react';

import { CTASection } from './components/cta-section';
import { SomeImage } from './components/some-image';
import { SomeText } from './components/some-text';

export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};
