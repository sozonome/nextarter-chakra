import { Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SomeImage = () => {
  return (
    <>
      <Box marginY={8} maxWidth={400} marginLeft="auto" marginRight="auto">
        <Image src="/Launching-amico.svg" unsized />
      </Box>
      <Text textAlign="center" fontSize="xs">
        <Link href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Text>
    </>
  );
};

export default SomeImage;
