import '@/styles/globals.scss';
import React from 'react';
import HeroAdvantage from '@/components/HeroAdvantage/HeroAdvantage';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DL Ready for Use WEBSITES</title>
      </Head>
      <HeroAdvantage />
    </>
  );
}
