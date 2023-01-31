import React from 'react';
import classNames from 'classnames';

import SocialMedia from '@/components/SocialMedia/SocialMedia';
import { footer } from '@/data/footer';
import { socialMedia } from '@/data/socialMedia';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.FooterMainInfo}>
          <SocialMedia social={socialMedia}></SocialMedia>
          <div className={styles.Wrapper}>
            <div className={styles.Inner}>
              <div className={styles.Mail}>
                <a className={styles.Link} href={footer.email.mailto}>
                  {footer.email.text}
                </a>
              </div>
              <div className={styles.Phone}>
                <a className={styles.Link} href={footer.phone.tel}>
                  {footer.phone.text}
                </a>
              </div>
            </div>
            <div>{footer.address}</div>
          </div>
        </div>

        <div className={styles.Info}>
          <div className={styles.InfoItem}>
            <span className={classNames(styles.Text, styles.Opacity)}>
              © Copyright Indigo Home & Facility Services 2021
            </span>
          </div>
          <div className={styles.InfoItem}>
            <a className={classNames(styles.Link, styles.Opacity)} href="privacy-policy.html">
              Privacy policy
            </a>
          </div>
          <div className={styles.InfoItem}>
            <a
              className={classNames(styles.Link, styles.Opacity)}
              href="https://directlinedev.com/"
              target="_blank"
              rel="noopener noreferer noreferrer"
            >
              Web Design
            </a>
            <span className={classNames(styles.Text, styles.Opacity)}> — Direct Line Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
