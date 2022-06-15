import PostFooter from '../Idealize/components/PostFooter'
import PostDescription from '../Idealize/components/PostDescription'

export default function PostHeading() {
    return (
        <header>
            <nav>
                <a class="nav-logo" href="index.html">Idealize</a>
                <ul class="nav-list">

                    <li>
                        <a href="create-post.html"><img src="../svg/plus-solid.svg" class="nav-svg" title="Create Post" /></a>
                    </li>

                    <li>
                        <a href="https://github.com/" target="_blank"><img src="../svg/github-brands.svg" class="nav-svg" /></a>
                    </li> 
                    
                    <li>
                        <a href="notifications.html"><img src="../svg/bell-solid.svg" class="nav-svg" /></a>
                    </li> 
                   
                    <li>
                        <div class="dropdown">
                            <img src="../svg/circle-user-solid.svg" class="nav-svg dropbtn" onclick="myFunction()" />
                            <div class="dropdown-content" id="myDropdown">
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