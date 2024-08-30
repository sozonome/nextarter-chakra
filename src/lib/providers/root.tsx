'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { ChakraProvider } from '~/lib/components/chakra-provider';

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};
