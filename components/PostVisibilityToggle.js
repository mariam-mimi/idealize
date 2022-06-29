export default function PostVisibilityToggle() {
  return (
    <div className="tab">
      <button className="tablinks" onClick="clickHandle(event, 'u-p')">
        Your Posts
      </button>
      <button className="tablinks" onClick="clickHandle(event, 's-p')">
        Saved Posts
      </button>
    </div>
  );
}
