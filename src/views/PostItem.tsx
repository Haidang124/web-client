import React from 'react';
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} alt="" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <img className="avatar" src={comment.author.avatar} alt="" />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <div className="post-content-action">
        <div
          className="list-btn-action"
          style={{
            top: '0px',
            left: '0px',
            opacity: 0,
            backgroundColor: '#f0f2f5',
            borderRadius: '10px',
          }}>
          <span data-name="Thích" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254615/react%20fb%20icon/like_yak6sm.png"
              alt="like"
            />
          </span>
          <span data-name="Yêu thích" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254614/react%20fb%20icon/love_f7xt7j.png"
              alt="heart"
            />
          </span>
          <span data-name="Thương Thương" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254609/react%20fb%20icon/care_1_y1dxgw.png"
              alt="love"
            />
          </span>
          <span data-name="Haha" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254650/react%20fb%20icon/haha_zjqk0h.png"
              alt="haha"
            />
          </span>
          <span data-name="Wow" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254611/react%20fb%20icon/wow_socetu.png"
              alt="wow"
            />
          </span>
          <span data-name="Buồn" className="mr-2">
            <img
              src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254614/react%20fb%20icon/sad_qvnhgr.png"
              alt="cry"
            />
          </span>
          {/* <span data-name="Phẩn nộ" className="mr-2">
            <img src="../images/icon/angry.png" alt="angry" />
          </span>
          <span data-name="Mãi yêu" className="mr-2">
            <img src="../images/icon/flower.png" alt="flower" />
          </span> */}
        </div>

        <div className="action">
          <div className="action-detail-action">
            <div className="action-detail-action-like">
              <img
                className="mr-1"
                src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254611/react%20fb%20icon/wow_socetu.png"
                alt="action"
              />
              <img
                className="mr-3"
                src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254609/react%20fb%20icon/care_1_y1dxgw.png"
                alt="action"
              />
              <span>Bạn và 3 người khác</span>
            </div>
            <div className="action-detail-action-comment">
              <span>1 bình luận </span>
            </div>
          </div>
          <div className="action-btn">
            <div className="action-btn-like">
              <img
                src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254611/react%20fb%20icon/wow_socetu.png"
                alt="action like"
              />
              <span className="color-gr-yellow ml-3">Haha</span>
            </div>
            <div className="action-btn-comment">
              <img
                src="https://res.cloudinary.com/vnu-uet/image/upload/v1606254779/react%20fb%20icon/btn-comment_kc8zvu.png"
                alt="action comment "
              />
              <span className="ml-3">Bình luận</span>
            </div>
          </div>
        </div>
      </div>

      <PostComments comments={comments} />
      <FormGroup className="mb-3 ">
        <InputGroup className="input-group-alternative ">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-edit"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input
            style={{ backgroundColor: '#f0f2f5' }}
            placeholder="Viết bình luận"
            type="email"
            autoComplete="new-email"
            className="pl-3"
          />
        </InputGroup>
      </FormGroup>
    </div>
  );
}

export default PostItem;
