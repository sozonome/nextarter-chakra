import { Box, Button, Heading, Link } from "@chakra-ui/core";
import { AiFillGithub } from "react-icons/ai";
import SomeImage from "../components/SomeImage";

import SomeText from "../components/SomeText";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Box>
        <Heading as="h2" fontSize="3xl">
          Hello
        </Heading>
        <SomeText />
      </Box>

      <SomeImage />

      <Link href="https://github.com/sozonome/next-app-chakra-ts" isExternal>
        <Button leftIcon={AiFillGithub}>Open in Github</Button>
      </Link>
    </Box>
  );
};

export default Home;
