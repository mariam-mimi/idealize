export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <h1 className="footer-text nav-logo">Idealize</h1>
                    <p className="footer-text">Some text about the app and stuff.</p>
                </div>
                <div className="middle-footer">
                    <a href="#" className="footer-text">Terms and Conditions</a>
                    <a href="#" className="footer-text">Privacy Policy</a>
                    <a href="#" className="footer-text">About</a>
                </div>
                <div className="footer-svg">
                    <a href="https://github.com/" target="_blank"><img src="../svg/github-brands.svg" height="30px" width="30px" /></a>
                    <a href="https://wvcoding.org/" target="_blank"><img src="../svg/wvcc-logo.svg" height="30px" width="30px" title="West Virginia Coding Club" /></a>
                </div>
            </div>
        </footer>
    )
}