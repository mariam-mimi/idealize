import Image from 'next/image';
import Link from 'next/link';

export interface Post {
  id: number;
  title: string;
  user: {
    username: string;
  };
  text: string;
  heartCount: number;
  isBookmarked: boolean;
  isHearted: boolean;
}

interface PropTypes {
  post: Post;
}

export default function PostCard({ post }: PropTypes) {
  return (
    <div className="post-card">
      <div className="post-name-and-upvote post-top">
        <div className="post-title-and-username">
          <h2>{post.title}</h2>

          <a href="#">{post.user.username}</a>
        </div>
        <span className="vote">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/svg/heart-${post.isHearted ? 'solid' : 'regular'}.svg`}
            alt="Heart icon"
            width="20"
            height="26"
          />

          <h3 style={{ marginRight: '5px' }}>{post.heartCount}</h3>
        </span>
      </div>
      <p className="post-p">{post.text}</p>
      <div className="vfp-bookmark">
        <Link href={`/posts/${post.id}`}>
          <a className="vfp-btn">View full post</a>
        </Link>
        <a className="bookmark" id="book-svg">
          <Image
            src={`/svg/bookmark-${post.isBookmarked ? 'solid' : 'regular'}.svg`}
            alt="Bookmark icon"
            height={24}
            width={18}
          />
        </a>
      </div>
    </div>
  );
}
