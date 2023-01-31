import React from 'react';
import classNames from 'classnames';

import AdvantagesList from '@/components/AdvantagesList/AdvantagesList';

import styles from './Advantages.module.scss';

const Advantages = props => {
  return (
    <section className={classNames(styles.Advantages, styles.Block, styles.NoJs)}>
      <div className={styles.Info}>
        <h2 className={styles.Title}>{props.title}</h2>
        <AdvantagesList list={props.list} />
      </div>
    </section>
  );
};

export default Advantages;
