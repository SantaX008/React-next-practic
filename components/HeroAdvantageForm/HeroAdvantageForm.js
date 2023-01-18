import React from 'react';

import Advantages from '@/components/Advantages/Advantages';
import Hero from '@/components/Hero/Hero';
import { advantages } from '@/data/advantages';
import { hero } from '@/data/hero';

import styles from './HeroAdvantageForm.module.scss';

const HeroAdvantageForm = () => {
  return (
    <div className={styles.HeroAdvantageForm}>
      <div className={styles.Container}>
        <Hero {...hero} />
        <Advantages title={advantages.title} list={advantages.list} />
      </div>
    </div>
  );
};

export default HeroAdvantageForm;
