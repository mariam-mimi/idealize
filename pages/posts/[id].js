import PostContent from '../../components/PostContent';
import CommentList from '../../components/CommentList';

export default function PostDetailPage() {
  return (
    <>
      <PostContent />
      <CommentList />

      {/* Load more comments */}
      <div className="text-center">
        <a href="#" className="load-more">
          Load more
        </a>
      </div>

      {/* Back to top */}
      <button className="back-to-top">Back to top</button>
    </>
  );
}
