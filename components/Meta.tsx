import React from 'react';

import Head from 'next/head';

/**
 * Meta data component, allowing us to customise <head>.
 */
const Meta = () => {
  return (
    <>
      <Head>
        <title>Tibber Test</title>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        ></meta>
        <link href="/favicon.png" rel="icon" type="image/png" />
      </Head>
    </>
  );
};

export default Meta;
