import React, { ComponentType, useEffect, useState } from 'react';
import {userService} from '../../services/user/api';

// reactstrap components
import { Button, Col, Container, Row } from 'reactstrap';

const UserHeader: React.FC = () => {
  const [dataUser, setDataUser] = useState({
    username: "",
});
useEffect(() => {
  userService
    .getUserInfo()
    .then(response =>
      Promise.resolve({
        data: JSON.stringify(response.data.data),
      })
    .then(post => {
      setDataUser(JSON.parse(post.data));
    })
  );
},[]);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '600px',
          backgroundImage:
            'url(' + require('../../assets/img/theme/profile-cover.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}>
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {dataUser.username}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              {/* <Button
                color="info"
                href="/admin/editProfile"
                >
                Edit profile
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
