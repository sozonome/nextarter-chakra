import {
  ChakraProvider as BaseChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme/index';

type ChakraProps = {
  children: React.ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <BaseChakraProvider
        colorModeManager={cookieStorageManager}
        theme={customTheme}
      >
        {children}
      </BaseChakraProvider>
    </>
  );
};
