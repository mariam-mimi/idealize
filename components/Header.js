import Image from 'next/image';

import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.navLogo}>Idealize</a>
        </Link>
        <ul className={styles.navList}>
          <Link href="/posts/new">
            <a>
              <Image
                src="/svg/plus-solid.svg"
                alt="Plus icon"
                className={styles.navSvg}
                title="Create Post"
                height={24}
                width={24}
              />
            </a>
          </Link>

          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Image
                src="/svg/github-brands.svg"
                alt="GitHub icon"
                className={styles.navSvg}
                height={24}
                width={24}
              />
            </a>
          </li>

          <Link href="/notifications">
            <a>
              <Image
                src="/svg/bell-solid.svg"
                alt="Notification bell icon"
                className={styles.navSvg}
                height={24}
                width={24}
              />
            </a>
          </Link>

          <li>
            <div className={styles.dropdown}>
              <Image
                src="/svg/circle-user-solid.svg"
                alt="User circle icon"
                className={`${styles.navSvg} ${styles.dropbtn}`}
                height={24}
                width={24}
              />

              <div className={styles.dropdownContent} id="myDropdown">
                <Link href="/profile">
                  <a>View Profile</a>
                </Link>
                <Link href="/profile/settings">
                  <a>Account Settings</a>
                </Link>
                <a href="#">Log-out</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
