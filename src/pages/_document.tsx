/* eslint-disable require-jsdoc */
import React from "react";
import type { ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = (): ReactElement => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
