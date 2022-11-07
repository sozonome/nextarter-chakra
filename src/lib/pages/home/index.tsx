import { Flex, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

// import CTASection from "lib/components/samples/CTASection";
// import SomeImage from "lib/components/samples/SomeImage";
// import SomeText from "lib/components/samples/SomeText";

const Home = () => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing={["2em", "3em"]}
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap="1em"
      py="2em"
      w="full"
    >
      <NextSeo title="Home" />
    </Stack>
  );
};

export default Home;
