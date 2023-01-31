import React from 'react';
import PropTypes from 'prop-types';

import styles from './AdvantagesList.module.scss';

const AdvantagesList = props => {
  const { list } = props;

  return (
    <ul className={styles.AdvantagesList}>
      {list.map(item => (
        <li key={item.id} className={styles.Item}>
          <svg width={54} height={50}>
            <use xlinkHref={item.icon}></use>
          </svg>
          <div className={styles.ItemTitle}>{item.title}</div>
          <div className={styles.ItemDescription}>{item.description}</div>
        </li>
      ))}
    </ul>
  );
};

AdvantagesList.propType = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired
};

export default AdvantagesList;
