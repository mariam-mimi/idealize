import btnStyles from '../../styles/Buttons.module.css';

import PostContent from '../../components/PostContent';
import CommentList from '../../components/CommentList';

export default function PostDetailPage() {
  return (
    <>
      <PostContent />
      <CommentList />

      {/* Load more comments */}
      <div className="text-center">
        <a href="#" className={btnStyles.loadMoreBtn}>
          Load more
        </a>
      </div>

      {/* Back to top */}
      <button className={btnStyles.backToTop}>Back to top</button>
    </>
  );
}
