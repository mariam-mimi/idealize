export interface Comment {
  id: number;
  author: {
    username: string;
  }
  text: string;
}

interface PropTypes {
  comment: Comment;
}

export default function CommentCard({ comment }: PropTypes) {
  return (
    <>
      <h2 className="comments" style={{ margin: '70px 10% 0px 10%' }}>
        Comments (1):
      </h2>

      <div className="comments">
        <a href="#">{comment.author.username}</a>
        <p>
          {comment.text}
        </p>
      </div>
    </>
  );
}
