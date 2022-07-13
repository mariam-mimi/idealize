import Link from 'next/link';
import type { Post } from './PostCard';

interface PropTypes {
  username: string;
  posts: Post[];
}

export default function UserInfo({ username, posts }: PropTypes) {
  return (
    <div>
      <div className="vp-user-box">
        <h1>{username}</h1>

        <div className="vp-post-point-div">
          <div className="vp-post-point">
            <h4>Posts</h4>
            <p>{posts.length}</p>
          </div>
          <div className="vp-post-point">
            <h4>Points</h4>
            <p>
              {posts.reduce((runningTotal, post) => post.heartCount + runningTotal, 0)}
            </p>
          </div>
        </div>
        <Link href="/profile/settings">
          <a className="vp-edit">Edit Account</a>
        </Link>
      </div>
    </div>
  );
}
