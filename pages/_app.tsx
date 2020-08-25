import "../styles/globals.css";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
