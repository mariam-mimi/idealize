export default function CreatePostForm() {
    return (
        <div className="create-card">
            <h1>Create Post</h1>
            <div>
                <label>Title:</label>
                <input type="text" />

                <label>Text:</label>
                <textarea></textarea>

                <button className="create-post-btn">Create Post</button>
            </div>
        </div>
    )
}