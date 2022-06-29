export default function UserInfo() {
  return (
    <div>
      <div className="vp-user-box">
        <h1>Username123</h1>

        <div className="vp-post-point-div">
          <div className="vp-post-point">
            <h4>Posts</h4>
            <p>12</p>
          </div>
          <div className="vp-post-point">
            <h4>Points</h4>
            <p>1,223</p>
          </div>
        </div>
        <a href="../html/settings.html" className="vp-edit">
          Edit Account
        </a>
      </div>
    </div>
  );
}
