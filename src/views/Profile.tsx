import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import UserHeader from '../components/Headers/UserHeader';
import { userService } from '../services/user/api';

const Profile: React.FC = () => {
  const [dataUser, setDataUser] = useState({
    role: '',
    username: '',
    avatar: '',
    language: '',
    email: '',
    birthday: '',
  });
  const [buttonEdit, setTrangThai] = useState({
    trangThai: true,
    tenTrangThai: 'Edit Profile',
    color_trangThai: '',
  });
  let dataUpdate = {
    newUsername: dataUser.username,
    newAvatar: dataUser.avatar,
    newLanguage: dataUser.language,
    newBirthday: dataUser.birthday,
  };

  useEffect(() => {
    userService.getUserInfo().then((response) =>
      Promise.resolve({
        data: JSON.parse(JSON.stringify(response.data.data)),
      }).then((post) => {
        setDataUser(post.data);
        // console.log(post.data);
      }),
    );
  }, []);

  const postUpdateDataUser = () => {
    userService
      .updateUser(dataUpdate)
      .then((res) => {
        toast.success(res.data.message);
        setDataUser({
          role: dataUser.role,
          username: dataUpdate.newUsername,
          avatar: dataUpdate.newAvatar,
          language: dataUpdate.newLanguage,
          email: dataUser.email,
          birthday: dataUpdate.newBirthday,
        });
      })
      .catch((error) => toast.error(error.response.data.error));
  };

  const changeButtonEdit = () => {
    if (buttonEdit.tenTrangThai === 'Save') {
      postUpdateDataUser();
      window.location.reload();
    }
    setTrangThai({
      trangThai: !buttonEdit.trangThai,
      tenTrangThai:
        buttonEdit.tenTrangThai === 'Edit Profile' ? 'Save' : 'Edit Profile',
      color_trangThai:
        buttonEdit.tenTrangThai === 'Edit Profile' ? 'btn btn-danger' : '',
    });
  };
  const getFieldUpdate = (event) => {
    if (buttonEdit.tenTrangThai === 'Save') {
      dataUpdate['new' + event.target.name] = event.target.value;
      console.log(dataUpdate);
    }
  };

  return (
    <>
      <UserHeader username={dataUser.username} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={dataUser.avatar}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm">
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm">
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {dataUser.username}
                    <span className="font-weight-light">
                      ,{' '}
                      {new Date().getFullYear() -
                        Number(dataUser.birthday.split('-')[0])}
                    </span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Cầu Giấy, Hà Nội
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    {dataUser.role === 'member' ? 'Student' : 'Teacher'}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Đại học Công Nghệ - Đại học Quốc Gia Hà Nội
                  </div>
                  <hr className="my-4" />
                  <p>
                    Học làm chi, thi làm gì. Tú Xương còn rớt,huống chi là mình
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      className={buttonEdit.color_trangThai}
                      color="primary"
                      onClick={(e) => changeButtonEdit()}
                      size="sm">
                      {buttonEdit.tenTrangThai}
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username">
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={dataUser.username}
                            id="input-username"
                            type="text"
                            disabled={buttonEdit.trangThai}
                            name="Username"
                            onChange={(e) => getFieldUpdate(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email">
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="Email"
                            id="input-email"
                            defaultValue={dataUser.email}
                            type="email"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address">
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="Address"
                            value="144 Xuân Thủy, Cầu Giấy, Hà Nội"
                            id="input-address"
                            type="text"
                            disabled={buttonEdit.trangThai}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Birthday */}
                  <h6 className="heading-small text-muted mb-4">Birthday</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-birthday">
                            Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={dataUser.birthday}
                            id="input-birthday"
                            type="date"
                            disabled={buttonEdit.trangThai}
                            onChange={(e) => getFieldUpdate(e)}
                            name="Birthday"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">Language</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country">
                            Language
                          </label>

                          <select
                            className="browser-default custom-select"
                            name="Language"
                            disabled={buttonEdit.trangThai}
                            onChange={(e) => getFieldUpdate(e)}>
                            {(() => {
                              if (dataUser.language === 'vi') {
                                return (
                                  <>
                                    <option value="vi" selected>
                                      Vietnamese
                                    </option>
                                    <option value="en">English</option>
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <option value="vi">Vietnamese</option>
                                    <option value="en" selected>
                                      English
                                    </option>
                                  </>
                                );
                              }
                            })()}
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        name="About"
                        placeholder="A few words about you ..."
                        rows="4"
                        type="textarea"
                        disabled={buttonEdit.trangThai}
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
