import Head from '@docusaurus/Head';
import { Redirect } from '@docusaurus/router';
import React from 'react';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="Icmarket Docs" />
        <meta property="og:title" content="Icmarket Docs" />
        <meta
          property="og:description"
          content="NFTs & IC market, ready to launch 🚀"
        />
        <meta
          property="description"
          content="NFTs & IC market, ready to launch 🚀"
        />
        <link rel="canonical" href="https://docs.icmarket.app" />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
