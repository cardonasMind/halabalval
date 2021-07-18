import React, { Fragment } from "react";

import App from "next/app";
import Head from "next/head";

// Global styles
import "../src/styles/index.scss";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <title>HALABALVAL is The Countries Quiz Game</title>
        </Head>

        <Component {...pageProps} />
      </Fragment>
    );
  }
}