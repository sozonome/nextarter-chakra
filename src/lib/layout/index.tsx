import { Box, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

import ConfettiBg from "./backgrounds/ConfettiBg";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { CONFETTI_LIGHT, CONFETTI_DARK } = ConfettiBg;

  return (
    <Box
      bg={useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK)}
      margin="0 auto"
      maxWidth={800}
      transition="0.5s ease-out"
    >
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
