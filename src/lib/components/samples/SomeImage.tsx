import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "lib/components/motion/Box";

import HelperImage from "./HelperImage";

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/Launching-amico.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      <Text textAlign="center" fontSize="xs">
        <Link
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </Link>
      </Text>

      <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src={`/nextjs-icon-${colorMode}.svg`} label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      </Flex>
    </Box>
  );
};

export default SomeImage;
