import { Flex, Box, Image, Heading } from "@chakra-ui/core";

import SomeText from "../components/SomeText";

const Home = () => {
  return (
    <Flex mb={8} w="full">
      <Box>
        <Heading as="h2" fontSize="3xl">
          Hello
        </Heading>
        <SomeText />
        <Image
          src="/undraw_Status_update_re_dm9y.png"
          maxWidth="400px"
          marginY={8}
          width="100%"
        />
      </Box>
    </Flex>
  );
};

export default Home;
