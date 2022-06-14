import PostCard from '../Idealize/components/PostCard'
import PostCardList from '../Idealize/components/PostCardList'

export default function SortBy() {
    return (
        <div className="sort-by">
            <h2>Sort by</h2>
            <div className="sb-new-top">
                <a href="#" className="ntc-a"><img src="../svg/star-solid.svg" className="sb-svg" /><span style="margin-left: 5px;"></span>New</a>
                <a href="#" className="ntc-a"><img src="../svg/chart-line-solid.svg" className="sb-svg" /><span style="margin-left: 5px;"></span>Top</a>
                <a href="#" className="ntc-a"><img src="../svg/border-all-solid.svg" className="sb-svg" /><span style="margin-left: 5px;"></span>Categories</a>
            </div>
        </div>
    )
}