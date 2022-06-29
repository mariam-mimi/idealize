export default function PostHeader() {
  return (
    <div className="post-name-and-upvote post-top">
      <div className="post-title-and-username">
        <h1>Title of post</h1>

        <a href="#">Username123</a>
      </div>
      <span className="vote">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/heart-regular.svg"
          alt="Heart icon"
          width="22"
          height="26"
        />

        <h3 style={{ marginRight: '5px' }}>5</h3>
      </span>
    </div>
  );
}
