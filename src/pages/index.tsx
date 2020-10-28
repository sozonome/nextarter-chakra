import { Flex, Box, Heading } from "@chakra-ui/core";
import Image from "next/image";

import SomeText from "../components/SomeText";

const Home = () => {
  return (
    <Flex mb={8} w="full">
      <Box>
        <Heading as="h2" fontSize="3xl">
          Hello
        </Heading>
        <SomeText />
        <Box marginY={8} maxWidth={400}>
          <Image src="/undraw_Status_update_re_dm9y.png" unsized />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
