import { Text } from "@chakra-ui/core";

import HelperImage from "./HelperImage";

const SomeText = () => {
  return (
    <Text d="flex" alignItems="center" fontSize="sm">
      This is a
      <HelperImage src="/nextjs-black-logo.svg" label="NextJS" />
      app with
      <HelperImage src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      and
      <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
      setup.
    </Text>
  );
};

export default SomeText;
