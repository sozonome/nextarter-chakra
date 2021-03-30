import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Link href="https://github.com/sozonome/nextchakra-starter" isExternal>
        <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
      </Link>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          isExternal
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextchakra-starter"
        >
          <Image src="https://vercel.com/button" />
        </Link>
        <Link
          isExternal
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextchakra-starter"
        >
          <Image src="https://www.netlify.com/img/deploy/button.svg" />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
