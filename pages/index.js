import React from 'react';
import Head from 'next/head';

import HeroAdvantage from '@/components/HeroAdvantage/HeroAdvantage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reliable Austin Plumbers at Indigo Home & Facility Services</title>
      </Head>
      <HeroAdvantage />
    </>
  );
}
