import React, { useEffect, useState } from 'react';
// reactstrap components
import { Col, Container, Row } from 'reactstrap';
import { userService } from '../../services/user/api';

const ChangePasswordHeader: React.FC = () => {
  const [dataUser, setDataUser] = useState({
    username: '',
  });
  useEffect(() => {
    userService.getUserInfo().then((response) =>
      Promise.resolve({
        data: JSON.stringify(response.data.data),
      }).then((post) => {
        setDataUser(JSON.parse(post.data));
      }),
    );
  }, []);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '200px',
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
            <Col lg="7" md="10"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ChangePasswordHeader;
