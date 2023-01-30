/* eslint-disable require-jsdoc */
import React from "react";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default App;
