import heartIcon from '../Idealize/svg/heart-regular.svg';

export default function PostCard() {
  return (
    <div className="post-card">
      <div className="post-name-and-upvote post-top">
        <div className="post-title-and-username">
          <h2>Title of post</h2>

          <a href="#">Username123</a>
        </div>
        <span className="vote">
          <img src="/svg/heart-regular.svg" width="20" height="26" />

          <h3 style={{ marginRight: '5px' }}>5</h3>
        </span>
      </div>
      <p className="post-p">
        This is the content of the post. Bla bla. Ninja Rockets. Once apon a
        time, a man named Jack ran up a hill. He ran so fast people thought he
        was a goat. Jack would like to play the violin outside while it was
        raining. That is very sacreligous. But what was also lamentable was the
        fact that I can not spell. Yep. So just excuse me pls.
      </p>
      <div className="vfp-bookmark">
        <a href="post.html" className="vfp-btn">
          View full post
        </a>
        <a className="bookmark" id="book-svg">
          <img src="/svg/bookmark-regular.svg" />
        </a>
      </div>
    </div>
  );
}
