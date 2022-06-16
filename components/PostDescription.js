import PostFooter from './Footer'

export default function PostDescription() {
    return (
        <><div className="np-card">
            <div className="post-name-and-upvote post-top">
                <div className="post-title-and-username">

                    <h1>Title of post</h1>

                    <a href="#">Username123</a>
                </div>
                <span className="vote">

                    <img src="../svg/heart-regular.svg" width="22" height="26" />

                    <h3 style="margin-right: 5px;">5</h3>
                </span>
            </div>
        </div>
        <p className="post-p">This is the content of the post. Bla bla. Ninja Rockets. Once apon a time, a man named Jack ran up a hill. He ran so fast people thought he was a goat. Jack would like to play the violin outside while it was raining. That is very sacreligous. But what was also lamentable was the fact that I can not spell. Yep. So just excuse me pls.</p></>
    )
}
