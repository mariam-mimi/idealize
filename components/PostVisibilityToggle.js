export default function PostVisibilityToggle() {
    return (
        <div className="tab">
            <button className="tablinks" onclick="clickHandle(event, 'u-p')">Your Posts</button>
            <button className="tablinks" onclick="clickHandle(event, 's-p')">Saved Posts</button>
        </div>
    )
}