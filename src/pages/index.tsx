import { Box } from "@chakra-ui/react";

import SomeText from "../components/SomeText";
import SomeImage from "../components/SomeImage";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SomeText />
      <SomeImage />
      <CTASection />
    </Box>
  );
};

export default Home;
