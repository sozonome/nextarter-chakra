import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const SomeImage = () => {
  return (
    <Box marginY={8} maxWidth={400} marginLeft="auto" marginRight="auto">
      <Image src="/Launching-amico.svg" unsized />
    </Box>
  );
};

export default SomeImage;
