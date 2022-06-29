import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div>
        <h1 className="footer-text nav-logo">Idealize</h1>
        <p className="footer-text">Some text about the app and stuff.</p>
      </div>
      <div className="middle-footer">
        <a href="#" className="footer-text">
          Terms and Conditions
        </a>
        <a href="#" className="footer-text">
          Privacy Policy
        </a>
        <a href="#" className="footer-text">
          About
        </a>
      </div>
      <div className="footer-svg">
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
