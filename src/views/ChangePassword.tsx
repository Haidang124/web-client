import { render } from '@testing-library/react';
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
import ChangePasswordHeader from '../components/Headers/ChangePasswordHeader';
import {userService} from '../services/user/api';

const ChangePassword: React.FC = () => {
  const [btn_show_hidden, setBtn_show_hidden] = useState({
    trangThai: [true,true,true],
    tenTrangThai: ["Show Password","Show Password","Show Password"],
  });
  const [trangThaiSave, setTrangThaiSave] = useState(true);
  const [kiemtra, setKiemtra] = useState({
    trangthai: "",
    message: ""
  });
  const [dataUpdate, setDataUpdate] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword_again: ""
  });

  const postUpdateDataUser = () => {
    if(trangThaiSave == false)  {
      userService
      .changePassword(dataUpdate)
      .then((res) => {
        toast.success(res.data.message);
        setBtn_show_hidden({
          trangThai: [true,true,true],
          tenTrangThai: ["Show Password","Show Password","Show Password"],
        });
        setKiemtra({
          trangthai: "",
          message: ""
        })
        setTrangThaiSave(true);

      })
      .catch((error) => toast.error(error.response.data.error));
    }
  };

  const changeButton_ShowHidden = (index) => {
    let newTrangThai = btn_show_hidden.trangThai;
    newTrangThai[index] = btn_show_hidden.trangThai[index] === true? false: true;
    let newTenTrangThai = btn_show_hidden.tenTrangThai;
    newTenTrangThai[index] = btn_show_hidden.tenTrangThai[index] === "Show Password"? "Hidden Password": "Show Password";
    setBtn_show_hidden({
      trangThai: newTrangThai,
      tenTrangThai: newTenTrangThai
    });
  }
  const getFieldUpdate = (event) => {
    dataUpdate[event.target.name] = event.target.value;
    console.log(dataUpdate);
    
  }

  const checkPass_Again = ()=> {
         
    if(dataUpdate.oldPassword.length < 6 || dataUpdate.newPassword.length < 6 )  {
      setKiemtra({
        trangthai: "danger",
        message: "Mật khẩu không được ít hơn 6 ký tự!"
      });
      setTrangThaiSave(true);
    }
    else if(dataUpdate.newPassword != dataUpdate.newPassword_again) {
      setKiemtra({
        trangthai: "danger",
        message: "New Password và Re-type New Password không giống nhau!"
      });
      setTrangThaiSave(true);
    } 
    if((dataUpdate.oldPassword.length < 6 || dataUpdate.newPassword.length < 6 ) && (dataUpdate.newPassword != dataUpdate.newPassword_again)) {
      setKiemtra({
        trangthai: "danger",
        message: "Mật khẩu không được ít hơn 6 ký tự! New Password và Re-type New Password không giống nhau!"
      });
      setTrangThaiSave(true);
    }
    if(!(dataUpdate.oldPassword.length < 6 || dataUpdate.newPassword.length < 6 || dataUpdate.newPassword_again.length < 6) && (dataUpdate.newPassword == dataUpdate.newPassword_again)) {
        setKiemtra({
          trangthai: "success",
          message: "Click Save to update your password!"
        });
        setTrangThaiSave(false);
    }
    
  }

  return (
    <>
      <ChangePasswordHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Password</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      disabled = {trangThaiSave}
                      className="btn btn-danger"
                      color="primary"
                      onClick={(e) => postUpdateDataUser()}
                      size="lg">
                      Save
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                            <Row>
                                <Col lg="9">
                                <label
                                    className="form-control-label"
                                    htmlFor="input-current-pass"
                                    >
                                    Current Password (*)
                                </label>
                                </Col>
                                <Col lg="3">
                                    <button type="button" 
                                            className="btn btn-outline-secondary btn-sm"
                                            name="show_hidden_button"
                                            onClick={()=>changeButton_ShowHidden(0)}
                                            >
                                        {btn_show_hidden.tenTrangThai[0]}
                                    </button>
                                </Col>
                            </Row>
                          
                          <Input
                            className="form-control-alternative"
                            ////id="input-current-pass"
                            type={btn_show_hidden.trangThai[0]? "password":"text"}
                            name="oldPassword"
                            onChange={(e) => {getFieldUpdate(e); checkPass_Again()}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                            <Row>
                                <Col lg="9">
                                <label
                                    className="form-control-label"
                                    htmlFor="input-current-pass"
                                    >
                                    New Password (*)
                                </label>
                                </Col>
                                <Col lg="3">
                                    <button type="button" 
                                            className="btn btn-outline-secondary btn-sm"
                                            name="show_hidden_button"
                                            onClick={()=>changeButton_ShowHidden(1)}
                                            >
                                        {btn_show_hidden.tenTrangThai[1]}
                                    </button>
                                </Col>
                            </Row>
                          
                          <Input
                            className="form-control-alternative"
                            //id="input-current-pass"
                            type={btn_show_hidden.trangThai[1]? "password":"text"}
                            name="newPassword"
                            onChange={(e) => {getFieldUpdate(e); checkPass_Again()}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                            <Row>
                                <Col lg="9">
                                <label
                                    className="form-control-label"
                                    htmlFor="input-current-pass"
                                    >
                                    Re-type New Password (*)
                                </label>
                                </Col>
                                <Col lg="3">
                                    <button type="button" 
                                            className="btn btn-outline-secondary btn-sm"
                                            name="show_hidden_button"
                                            onClick={()=>changeButton_ShowHidden(2)}
                                            >
                                        {btn_show_hidden.tenTrangThai[2]}
                                    </button>
                                </Col>
                            </Row>
                          
                          <Input
                            className="form-control-alternative"
                            //id="input-current-pass"
                            type={btn_show_hidden.trangThai[2]? "password":"text"}
                            name="newPassword_again"
                            onChange={(e) => {getFieldUpdate(e); checkPass_Again()}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        {(()=> {
                          return (
                            <div className={"alert alert-"+kiemtra.trangthai} role="alert">
                              {kiemtra.message}
                            </div>
                          )
                        })()}
                      </Col>
                    </Row>
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

export default ChangePassword;
