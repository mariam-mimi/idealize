import CommentCard, { Comment } from './CommentCard';

interface PropTypes {
  comments: Comment[];
}

export default function CommentList({ comments }: PropTypes) {
  return comments.map((comment)=> <CommentCard comment={comment} key={comment.id} />);
}
