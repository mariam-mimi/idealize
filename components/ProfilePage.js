export default function ProfilePage() {
    return(
        <div>
            <div className="tab">
                <button className="tablinks" onclick="clickHandle(event, 'u-p')">Your Posts</button>
                <button className="tablinks" onclick="clickHandle(event, 's-p')">Saved Posts</button>
            </div>
        
            <div id="u-p" className="tabcontent" style="display: block;">
                <div className="vp-post-card">
                    <div className="post-name-and-upvote post-top">
                        <div className="post-title-and-username">
                    
                            <h2>Title of post</h2>
        
                            <a href="#">Username123</a>
                        </div>
                        <span className="vote">
                            
                            <img src="../svg/heart-regular.svg" width="20" height="26" />

                            <h3 style={{marginRight: "5px"}}>5</h3>
                        </span>
                    </div>
                    
                    <p className="post-p">This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.</p>
                    
                    <div className="vfp-bookmark">
                        <a href="#" className="vfp-btn">View full post</a>
                        <a className="bookmark" id="book-svg" onclick="bookmarkBtn()">
                            <img src="../svg/bookmark-regular.svg" />
                        </a>
                    </div>            
                </div>
                <div className="vp-post-card">
                    <div className="post-name-and-upvote post-top">
                        <div className="post-title-and-username">
                            
                            <h2>Title of post</h2>
        
                            
                            <a href="#">Username123</a>
                        </div>
                        <span className="vote">
                            
                            <img src="../svg/heart-regular.svg" width="20" height="26" />

                            <h3 style={{marginRight: "5px"}}>5</h3>
                        </span>
                    </div>
                    
                    <p className="post-p">This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.</p>
                    
                    <div className="vfp-bookmark">
                        <a href="#" className="vfp-btn">View full post</a>
                        <a className="bookmark" id="book-svg" onclick="bookmarkBtn()">
                            <img src="../svg/bookmark-regular.svg" />
                        </a>
                    </div>           
                </div>

                <div className="text-center">
                    <a href="#" className="load-more">Load more</a>
                </div>
            </div>

            <div id="s-p" className="tabcontent">
                <div className="vp-post-card">
                    <div className="post-name-and-upvote post-top">
                        <div className="post-title-and-username">
                            
                            <h2>Title of post</h2>
        
                            <a href="#">Username123</a>
                        </div>
                        <span className="vote">
                        
                            <img src="../svg/heart-regular.svg" width="20" height="26" />

                            <h3 style={{marginRight: "5px"}}>5</h3>
                        </span>
                    </div>
                </div>
                    <p className="post-p">This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.</p>
                    
                    <div className="vfp-bookmark">
                        <a href="#" className="vfp-btn">View full post</a>
                        <a className="bookmark" id="book-svg" onclick="bookmarkBtn()">
                            <img src="../svg/bookmark-solid.svg" />
                        </a>
                    </div>              
                </div>
            </div>
    )
}