import { Box, Flex, Text } from "@chakra-ui/core";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <Box m={8}>
      <Head>
        <title>Project Name</title>
      </Head>
      <Box as="header">
        <Flex width="full" align="center" justifyContent="center">
          <Text fontSize="lg">Head Title</Text>
        </Flex>
      </Box>
      <Box as="main">{children}</Box>
      <Box as="footer">
        <Flex width="full" align="center" justifyContent="center">
          <Text>Footer Text Here</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
