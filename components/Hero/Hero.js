import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './Hero.module.scss';

const Hero = props => {
  const { title, description, image } = props;

  return (
    <section className={styles.main}>
      <div className={styles.mainInner}>
        <Image
          className={styles.image}
          src={image.png}
          height={580}
          width={377}
          alt=""
        />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

Hero.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Hero;
