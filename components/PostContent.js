import PostFooter from './PostFooter'
import PostDescription from './PostDescription'
import PostHeader from './PostHeader'

export default function PostContent() {
    return (
        <div className="np-card">
            <PostHeader />
            <PostDescription />
            <PostFooter />
        </div>
    )
}