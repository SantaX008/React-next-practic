import React from 'react';

import { header } from '@/data/header';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.HeaderInner}>
          <svg className={styles.Logo} width={header.width} height={header.height}>
            <use xlinkHref={header.logo}></use>
          </svg>
          {/*<Menu {...headerMenu} />*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
