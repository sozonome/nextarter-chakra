import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const Footer = dynamic(() => import("./Footer"));
const Header = dynamic(() => import("./Header"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
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
