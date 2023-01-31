import React from 'react';
import PropTypes from 'prop-types';

import styles from './FooterMenu.module.scss';

const FooterMenu = props => {
  const { list } = props;

  return (
    <section className={styles.FooterMenu}>
      <ul className={styles.MenuList}>
        {list.map(item => (
          <li key={item.id} className={styles.MenuItem}>
            <a className={styles.Link} href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

FooterMenu.propType = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FooterMenu;
