import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};
