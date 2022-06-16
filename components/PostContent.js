import PostFooter from './Footer'
import PostDescription from './PostDescription'
import PostHeading from './Header'

export default function PostContent() {
    return (
        <div>
            <PostHeading />
            <PostDescription />
            <PostFooter />
        </div>
    )
}