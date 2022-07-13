import PostFooter from './PostFooter';
import PostDescription from './PostDescription';
import PostHeader from './PostHeader';
import type { Post } from "./PostCard";

interface PropTypes {
  post: Post;
}

export default function PostContent({ post }: PropTypes) {
  return (
    <div className="np-card">
      <PostHeader post={post} />
      <PostDescription text={post.text} />
      <PostFooter />
    </div>
  );
}
