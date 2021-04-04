/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../assets/scss/component/friend.scss';

const Friend: React.FC = () => {
  return (
    <div className="friend">
      <div className="members">
        <span className="title">Thành viên trong lớp</span>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Tiến Dũng</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Mạnh Hùng</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Văn Đức</span>
          <div className="offline"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Diệu Linh</span>
          <div className="offline"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/women/14.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Thanh Hà</span>
          <div className="offline"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/women/84.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">San San</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/men/14.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Thắng Nguyễn</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/women/4.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Thanh Mai</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src="https://randomuser.me/api/portraits/women/24.jpg"
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Thu Hiền</span>
          <div className="online"></div>
        </div>
        <div className="member">
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU'
            }
            className="avatar-member"
            alt=""
          />
          <span className="name-member">Hải Đăng</span>
          <div className="online"></div>
        </div>
        <div className="more">
          <a href="/">Xem thêm</a>
        </div>
      </div>
    </div>
  );
};
export default Friend;
