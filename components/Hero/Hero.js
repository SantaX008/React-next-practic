import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './Hero.module.scss';

const Hero = props => {
  const { title, description, image } = props;

  return (
    <section className={styles.Hero}>
      <div className={styles.Container}>
        <Image className={styles.Image} src={image} height={377} width={580} alt="" />
        <h1 className={styles.Title}>{title}</h1>
        <p className={styles.Description}>{description}</p>
      </div>
    </section>
  );
};

Hero.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Hero;
