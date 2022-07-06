import PostCard, { Post } from './PostCard';

interface PropTypes {
  posts: Post[];
}

export default function PostCardList({ posts }: PropTypes) {
  return posts.map((post) => <PostCard post={post} key={post.id} />);
}
