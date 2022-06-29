import Image from 'next/image';

import headerStyles from '../styles/Header.module.css';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h1 className={`${styles.footerText} ${headerStyles.navLogo}`}>
          Idealize
        </h1>
        <p className={styles.footerText}>Some text about the app and stuff.</p>
      </div>
      <div className={styles.middleFooter}>
        <a href="#" className={styles.footerText}>
          Terms and Conditions
        </a>
        <a href="#" className={styles.footerText}>
          Privacy Policy
        </a>
        <a href="#" className={styles.footerText}>
          About
        </a>
      </div>
      <div className={styles.footerSvg}>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Image
            src="/svg/github-brands.svg"
            alt="GitHub icon"
            height={30}
            width={30}
          />
        </a>
        <a href="https://wvcoding.org/" target="_blank" rel="noreferrer">
          <Image
            src="/svg/wvcc-logo.svg"
            alt="West Virginia Coding Club icon"
            title="West Virginia Coding Club"
            height={30}
            width={30}
          />
        </a>
      </div>
    </footer>
  );
}
