import { Box, Button, Heading, Link, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import SomeImage from "../components/SomeImage";

import SomeText from "../components/SomeText";

const Home = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box mb={8} w="full">
      <Box>
        <Heading as="h2" fontSize="3xl">
          Hello
        </Heading>
        <SomeText />
      </Box>

      <SomeImage />

      <Box textAlign="center">
        <Link href="https://github.com/sozonome/next-app-chakra-ts" isExternal>
          <Button isFullWidth={isSmallerThan600} leftIcon={<AiFillGithub />}>
            Open in Github
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
