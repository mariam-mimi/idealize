import btnStyles from '../styles/Buttons.module.css';

import SortedPostCardList from '../components/SortedPostCardList';

export default function Home() {
  return (
    <>
      <SortedPostCardList />

      {/* Load more posts */}
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
