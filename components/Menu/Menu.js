import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import burger from './Burger.module.scss';
import styles from './Menu.module.scss';

const Menu = props => {
  const { list } = props;

  return (
    <section className={styles.MenuBox}>
      <nav className={classNames(styles.Menu, styles.MainMenu)}>
        <ul className={styles.MenuList}>
          {list.map(item => (
            <li key={item.id} className={styles.MenuItem}>
              <a className={styles.Link} href={item.url}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={burger.Burger} id={burger.Burger}></button>
    </section>
  );
};

Menu.propType = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Menu;
