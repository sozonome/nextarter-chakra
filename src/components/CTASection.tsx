import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box textAlign="center" marginTop={8}>
      <Link href="https://github.com/sozonome/nextchakra-starter" isExternal>
        <Button isFullWidth={isSmallerThan600} leftIcon={<AiFillGithub />}>
          Open in Github
        </Button>
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
