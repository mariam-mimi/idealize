import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <a className="nav-logo" href="index.html">
          Idealize
        </a>
        <ul className="nav-list">
          <li>
            <a href="create-post.html">
              <Image
                src="/svg/plus-solid.svg"
                alt="Plus icon"
                className="nav-svg"
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
                className="nav-svg"
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
                className="nav-svg"
                height={24}
                width={24}
              />
            </a>
          </li>

          <li>
            <div className="dropdown">
              <Image
                src="/svg/circle-user-solid.svg"
                alt="User circle icon"
                className="nav-svg dropbtn"
                height={24}
                width={24}
              />

              <div className="dropdown-content" id="myDropdown">
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
