import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import Layout from "../components/layout";

import customTheme from "../styles/customTheme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
