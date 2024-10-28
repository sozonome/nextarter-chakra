'use client';

import { Flex } from '@chakra-ui/react';

import { HelperImage } from './helper-image';

export const SomeImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
    </Flex>
  );
};
