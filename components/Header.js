import PostFooter from './Footer'
import PostDescription from './PostDescription'

export default function PostHeading() {
    return (
        <header>
            <nav>
                <a className="nav-logo" href="index.html">Idealize</a>
                <ul className="nav-list">

                    <li>
                        <a href="create-post.html"><img src="../svg/plus-solid.svg" className="nav-svg" title="Create Post" /></a>
                    </li>

                    <li>
                        <a href="https://github.com/" target="_blank"><img src="../svg/github-brands.svg" className="nav-svg" /></a>
                    </li> 
                    
                    <li>
                        <a href="notifications.html"><img src="../svg/bell-solid.svg" className="nav-svg" /></a>
                    </li> 
                   
                    <li>
                        <div className="dropdown">
                            <img src="../svg/circle-user-solid.svg" className="nav-svg dropbtn" />
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
    )
}