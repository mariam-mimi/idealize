import Image from 'next/image';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <a className={styles.navLogo} href="index.html">
          Idealize
        </a>
        <ul className={styles.navList}>
          <li>
            <a href="create-post.html">
              <Image
                src="/svg/plus-solid.svg"
                alt="Plus icon"
                className={styles.navSvg}
                title="Create Post"
                height={24}
                width={24}
              />
            </a>
          </li>

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

          <li>
            <a href="notifications.html">
              <Image
                src="/svg/bell-solid.svg"
                alt="Notification bell icon"
                className={styles.navSvg}
                height={24}
                width={24}
              />
            </a>
          </li>

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
                <a href="../html/view-profile.html">View Profile</a>
                <a href="../html/settings.html">Account Settings</a>
                <a href="#">Log-out</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
