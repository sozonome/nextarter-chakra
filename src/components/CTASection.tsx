import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/nextarter-chakra";

const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-chakra"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          isExternal
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Code>npx degit sozonome/nextarter-chakra {"<YOUR_APP_NAME>"}</Code>
        <br />

        <Button
          marginTop={2}
          as="a"
          href="https://github.com/sozonome/nextarter-chakra/generate"
          target="_blank"
          size="sm"
        >
          Use This Template
        </Button>
      </Box>

      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
        <Link href={repoLink} isExternal>
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sozonome/nextarter-chakra?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
