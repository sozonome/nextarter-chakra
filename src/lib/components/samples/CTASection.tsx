import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/sozonome/nextarter-chakra';

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Box transform="scale(0.85)">
        <Flex marginY={4} justifyContent="center" gap={2}>
          <Link
            aria-label="Deploy to Vercel"
            isExternal
            rel="noopener noreferrer"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsozonome%2Fnextarter-chakra"
          >
            <Image
              src="https://vercel.com/button"
              alt="Vercel deploy button"
              height={10}
            />
          </Link>

          <Link
            aria-label="Deploy to Netlify"
            isExternal
            rel="noopener noreferrer"
            href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
          >
            <Image
              src="https://www.netlify.com/img/deploy/button.svg"
              alt="Netlify deploy button"
              height={10}
            />
          </Link>
        </Flex>
      </Box>

      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button
          as="a"
          href="https://github.com/sozonome/nextarter-chakra/generate"
          target="_blank"
          size="sm"
        >
          Use This Template
        </Button>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
