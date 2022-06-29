import Image from 'next/image';

export default function PostFooter() {
  return (
    <div className="np-bdiv">
      <button
        className="bookmark"
        id="book-svg"
        style={{ marginRight: '10px' }}
      >
        <Image
          src="/svg/bookmark-regular.svg"
          alt="Bookmark icon"
          height={24}
          width={18}
        />
      </button>

      <div className="reply-btn">
        <div id="imgComment" onClick="openForm()">
          <Image
            src="/svg/reply-solid.svg"
            alt="Reply arrow icon"
            height={18}
            width={18}
            className="reply-btn-svg"
          />
          <span style={{ marginLeft: '6px' }}>Reply</span>
        </div>
        <div
          className="form-popup"
          id="myForm"
          style={{ display: 'none', justifyContent: 'center' }}
        >
          <form className="form-container">
            <textarea
              placeholder="Write a comment"
              required
              className="txt-area-comment"
            ></textarea>

            <div className="close-send-btn">
              <button
                type="button"
                className="btn cancel close-btn"
                onClick="closeForm()"
                style={{ marginRight: '10px' }}
              >
                Close
              </button>
              <button type="submit" className="btn send-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
