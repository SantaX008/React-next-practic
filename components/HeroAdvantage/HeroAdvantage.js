import React from 'react';
import Hero from '@/components/Hero/Hero';
import { hero } from '@/data/hero';
import styles from "@/components/HeroAdvantage/HeroAdvantage.module.scss";

const HeroAdvantage = () => {
  return (
    <div className={styles.mainAdvantageForm}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Hero {...hero} />
        </div>
      </div>
    </div>
  );
};

export default HeroAdvantage;
