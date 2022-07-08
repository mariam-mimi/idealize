import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/components/PostCard.module.css';

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
    <div className={styles.postCard}>
      <div className={styles.cardHeader}>
        <div className={styles.postHeading}>
          <h2>{post.title}</h2>

          <a href="#">{post.user.username}</a>
        </div>
        <span className={styles.postRating}>
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
      <p className={styles.postText}>{post.text}</p>
      <div className={styles.cardFooter}>
        <Link href={`/posts/${post.id}`}>
          <a className={styles.detailBtn}>View full post</a>
        </Link>
        <a className={styles.bookmark} id="book-svg">
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
