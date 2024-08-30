'use client';

import { Flex, useColorMode } from '@chakra-ui/react';

import { HelperImage } from './helper-image';

export const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
      <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
    </Flex>
  );
};
