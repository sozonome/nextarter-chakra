import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Link href="https://github.com/sozonome/nextchakra-starter" isExternal>
        <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
      </Link>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextchakra-starter"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>
        <Link
          aria-label="Deploy to Netlify"
          isExternal
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextchakra-starter"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
