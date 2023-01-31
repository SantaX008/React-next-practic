import React from 'react';
import Head from 'next/head';

import Header from '@/components/Header/Header';
import HeroAdvantageForm from '@/components/HeroAdvantageForm/HeroAdvantageForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reliable Austin Plumbers at Indigo Home & Facility Services</title>
      </Head>
      <Header />
      <HeroAdvantageForm />
      <Footer />
    </>
  );
}
