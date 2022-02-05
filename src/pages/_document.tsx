/* eslint-disable react/jsx-props-no-spreading */
import { ColorModeScript } from "@chakra-ui/react";
import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

import customTheme from "lib/styles/customTheme";

const APP_NAME = "nextarter-chakra";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
            rel="stylesheet"
          />

          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config?.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
