import type { Post } from "./PostCard";

interface PropTypes {
  post: Post;
}

export default function PostHeader({ post }: PropTypes) {
  return (
    <div className="post-name-and-upvote post-top">
      <div className="post-title-and-username">
        <h1>{post.title}</h1>

        <a href="#">{post.user.username}</a>
      </div>
      <span className="vote">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/heart-regular.svg"
          alt="Heart icon"
          width="22"
          height="26"
        />

        <h3 style={{ marginRight: '5px' }}>{post.heartCount}</h3>
      </span>
    </div>
  );
}
