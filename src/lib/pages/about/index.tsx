import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type AboutProps = {
  AboutInfo: string;
};

const About = (props: AboutProps) => {
  const { AboutInfo } = props;
  return (
    <Flex>
      <Box>
        <Heading>About Page</Heading>
      </Box>
    </Flex>
  );
};

export default About;
