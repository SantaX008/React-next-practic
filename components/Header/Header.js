import React from 'react';

import Menu from '@/components/Menu/Menu';
import { header } from '@/data/header';
import { headerMenu } from '@/data/menu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.HeaderInner}>
          <svg className={styles.Logo} width={header.width} height={header.height}>
            <use xlinkHref={header.logo}></use>
          </svg>
          <Menu list={headerMenu.menuList} />
        </div>
      </div>
    </header>
  );
};

export default Header;
