import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SocialMedia.module.scss';

const SocialMedia = props => {
  const { social } = props;

  return (
    <ul className={styles.socialMediaList}>
      {social.map(item => (
        <li key={item.id} className={classNames(styles.Item)}>
          <a
            href={item.link}
            title="Follow us on { item.title }"
            aria-label="Follow us on { item.title }"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={styles.ItemLink}
          >
            <svg width="30" height="30">
              <use xlinkHref={item.icon}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

SocialMedia.propType = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SocialMedia;
