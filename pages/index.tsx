import Layout from "../components/Layout";
import { Flex, Text, Box } from "@chakra-ui/core";

const Home = () => {
  return (
    <Layout>
      <Flex mb={8} width="full" justifyContent="center">
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            Hello
          </Text>
          <Text fontSize="sm">
            This is nextjs app with chakra-ui and typescript setup
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
