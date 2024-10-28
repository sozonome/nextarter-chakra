import { createSystem, defaultConfig } from '@chakra-ui/react';

import { fonts } from './fonts';

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts,
    },
  },
});

export default customTheme;
