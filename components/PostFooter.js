export default function PostFooter() {
    return (
        <div className="np-bdiv">
                <button className="bookmark" id="book-svg" style="margin-right: 10px;">
                    <img src="../svg/bookmark-regular.svg" />
                </button>

                <div className="reply-btn">
                    <div id="imgComment" onclick="openForm()">
                        <img src="../svg/reply-solid.svg" className="reply-btn-svg" />
                        <span>Reply</span>
                    </div>
                    <div className="form-popup" id="myForm" style="display: none; justify-content: center;">
                        <form className="form-container">
                      
                          <textarea placeholder="Write a comment" required className="txt-area-comment"></textarea>
                      
                          <div className="close-send-btn">
                            <button type="button" className="btn cancel close-btn" onclick="closeForm()" style={{marginRight: "10px"}}>Close</button>
                            <button type="submit" className="btn send-btn">Send</button>
                          </div>
                        </form>
                      </div>
                </div>
            </div>
    )
}