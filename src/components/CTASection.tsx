import { Box, Button, Link, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box textAlign="center" marginTop={8}>
      <Link href="https://github.com/sozonome/next-app-chakra-ts" isExternal>
        <Button isFullWidth={isSmallerThan600} leftIcon={<AiFillGithub />}>
          Open in Github
        </Button>
      </Link>
    </Box>
  );
};

export default CTASection;
