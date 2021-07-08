import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import HelperImage from "./HelperImage";
import MotionBox from "./motion/Box";

const SomeImage = () => {
  return (
    <>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[280, 400]}
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
        <Link href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Text>

      <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src="/nextjs-black-logo.svg" label="NextJS" />
        <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
        <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      </Flex>
    </>
  );
};

export default SomeImage;
