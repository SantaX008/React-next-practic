import React from 'react';
import PropTypes from 'prop-types';

import styles from './AdvantagesList.module.scss';

const AdvantagesList = props => {
  return (
    <ul className={styles.AdvantagesList}>
      {props.map(prop => (
        <li key={prop.id} className={styles.Item}>
          <svg width={54} height={50}>
            <use xlinkHref={prop.href}></use>
          </svg>
          <div className={styles.ItemTitle}>{prop.title}</div>
          <div className={styles.ItemDescription}>{prop.description}</div>
        </li>
      ))}
    </ul>
  );
};

AdvantagesList.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string
};

export default AdvantagesList;
