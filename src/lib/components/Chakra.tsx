import { ChakraProvider, localStorageManager } from "@chakra-ui/react";

import customTheme from "lib/styles/customTheme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={customTheme}>
      {children}
    </ChakraProvider>
  );
};
