import React, { useEffect, useState } from 'react';
// reactstrap components
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import dataWhatNew from '../../assets/data/dataBlog.json';
import dataTopPick from '../../assets/data/dataTopPicks.json';
import { userService } from '../../services/user/api';

const Header: React.FC = () => {
  const [dataUser, setDataUser] = useState({
    username: '',
    email: '',
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
      <div className="header pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              {/* Left */}
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h3" className="text-uppercase mb-0">
                          {dataUser.username}
                        </CardTitle>
                        <CardTitle
                          tag="h5"
                          className="text-lowercase text-muted mb-0">
                          {dataUser.email}
                        </CardTitle>
                      </div>
                    </Row>
                    <div className="mt-3 mb-0 text-sm">
                      <Row
                        style={{
                          backgroundColor: 'rgb(242,242,242)',
                          borderRadius: '6px',
                        }}>
                        <Col lg="6" xl="6">
                          <p
                            style={{
                              fontSize: '15px',
                              color: 'rgb(147,147,147)',
                              fontWeight: 'bold',
                            }}>
                            My interests
                          </p>
                        </Col>
                        <Col lg="6" xl="6">
                          <a href="/">
                            <p
                              style={{
                                fontSize: '15px',
                                color: 'black',
                                fontWeight: 'bold',
                              }}>
                              <u>Add interests</u>
                            </p>
                          </a>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="mb-0"
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            borderBottom: '1px solid rgb(242,242,242)',
                          }}>
                          Challenges in progress
                        </CardTitle>
                      </div>
                    </Row>
                    <div
                      className="mt-3 mb-0 text-sm"
                      style={{ padding: '0 15px 0 15px' }}>
                      <Row
                        style={{
                          backgroundColor: 'rgb(242,242,242)',
                          borderRadius: '6px',
                          border: '1px dashed rgb(208,208,208)',
                        }}>
                        <p className="text-muted text-center p-3">
                          Find fun learning games to play independently and
                          challenge friends to beat your score.
                        </p>
                        <div
                          className="d-flex justify-content-center mb-2"
                          style={{ width: '100%' }}>
                          <button
                            className="btn-primary"
                            style={{
                              padding: '5px',
                              borderRadius: '5px',
                              backgroundColor: 'rgb(19,104,206)',
                              fontWeight: 'bold',
                            }}>
                            Learn more
                          </button>
                        </div>
                        <br />
                        <br />
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              {/* End Left */}

              {/* Center */}
              <Col lg="6" xl="6">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h2"
                          className="mb-0"
                          style={{
                            color: 'black',
                            borderBottom: '3px solid rgb(200,200,200)',
                          }}>
                          What's new
                        </CardTitle>
                      </div>
                    </Row>
                    <div className="mt-3 mb-0 text-sm">
                      {dataWhatNew.map((value, key) => {
                        return (
                          <>
                            {/* One Temp */}
                            <div
                              className="row mb-2"
                              style={{
                                borderBottom: '1px solid rgb(200,200,200)',
                                paddingBottom: '10px',
                              }}>
                              <div className="col-lg-2">
                                <img
                                  src={value.imgIcon}
                                  alt=""
                                  style={{
                                    borderRadius: '5px',
                                    width: '60px',
                                    height: '60px',
                                  }}
                                />
                              </div>
                              <div className="col-lg-10">
                                <span>
                                  <a
                                    href={
                                      '/admin/blog/' +
                                      value.title +
                                      '/' +
                                      key
                                    }
                                    style={{
                                      fontSize: '14px',
                                      color: 'black',
                                      fontWeight: 'bold',
                                    }}>
                                    {value.title}
                                  </a>
                                </span>
                                <br />
                                <span
                                  style={{
                                    display: 'block',
                                    width: '100%',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                  }}>
                                  {value.describe}
                                </span>
                              </div>
                            </div>
                            {/* End One Temp */}
                          </>
                        );
                      })}
                      <div className="text-center">
                        <a href="/" style={{ fontWeight: 'bold' }}>
                          <u>Show more</u>
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <br />
                {/* Top Picks */}
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h2" className="mb-0">
                          <a
                            href="/"
                            style={{
                              color: 'black',
                              borderBottom: '3px solid rgb(19,104,206)',
                            }}>
                            Top picks
                          </a>
                        </CardTitle>
                      </div>
                    </Row>
                    <div className="mt-3 mb-0 text-sm">
                      {dataTopPick.map((value) => {
                        return (
                          <>
                            {/* One Temp */}
                            <a href="/">
                              <div className="row mb-3">
                                <div className="col-lg-4 col-md-4 col-sm-3">
                                  <img
                                    style={{ borderRadius: '5px' }}
                                    src={value.imgIcon}
                                    width="120px"
                                    height="80px"
                                    alt=""
                                  />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-9">
                                  <Card style={{ height: '80px' }}>
                                    <CardTitle
                                      style={{
                                        paddingLeft: '15px',
                                        fontWeight: 'bold',
                                        color: 'black',
                                      }}>
                                      {value.title}
                                    </CardTitle>
                                    <CardBody
                                      style={{
                                        backgroundColor: 'rgb(242,242,242)',
                                        padding: '0 0 0 15px',
                                        color: 'black',
                                      }}>
                                      <div className="row">
                                        <div className="col-8">
                                          {value.describe}
                                        </div>
                                        <div
                                          className="col-4"
                                          style={{ fontWeight: 'bold' }}>
                                          {value.plays}
                                        </div>
                                      </div>
                                    </CardBody>
                                  </Card>
                                </div>
                              </div>
                            </a>
                            {/* End One Temp */}
                          </>
                        );
                      })}
                      <br />
                      <div className="text-center">
                        <div style={{ fontWeight: 'bold', color: 'black' }}>
                          More awesomeness awaits! Search millions of kahoots on
                          any topic
                        </div>
                        <br />
                        <div
                          className="d-flex justify-content-center mb-2"
                          style={{ width: '100%' }}>
                          <button
                            className="btn-primary"
                            style={{
                              padding: '5px',
                              borderRadius: '5px',
                              backgroundColor: 'rgb(19,104,206)',
                              fontWeight: 'bold',
                            }}>
                            Discover Kahoots
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              {/* End Center */}

              {/* Right */}
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="mb-0"
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            borderBottom: '1px solid rgb(242,242,242)',
                          }}>
                          My Kahoots
                        </CardTitle>
                      </div>
                    </Row>
                    <div
                      className="mt-3 mb-0 text-sm"
                      style={{ padding: '0 15px 0 15px' }}>
                      <Row
                        style={{
                          backgroundColor: 'rgb(242,242,242)',
                          borderRadius: '6px',
                          border: '1px dashed rgb(208,208,208)',
                        }}>
                        <p className="text-muted text-center p-3">
                          Find fun learning games to play independently and
                          challenge friends to beat your score.
                        </p>
                        <div
                          className="d-flex justify-content-center mb-2"
                          style={{ width: '100%' }}>
                          <a href="/admin/create-game">
                            <button
                              className="btn-primary"
                              style={{
                                padding: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'rgb(19,104,206)',
                                fontWeight: 'bold',
                              }}>
                              Create kahoot
                            </button>
                          </a>
                        </div>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="mb-0"
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            borderBottom: '1px solid rgb(242,242,242)',
                          }}>
                          Latest reports
                        </CardTitle>
                      </div>
                    </Row>
                    {[1, 2, 3, 4].map((value) => {
                      return (
                        <>
                          {/* One Temp */}
                          <a href="/">
                            <div className="mt-3 mb-0 text-sm">
                              <Row
                                style={{
                                  backgroundColor: 'rgb(242,242,242)',
                                  borderRadius: '6px',
                                  border: '1px dashed rgb(208,208,208)',
                                }}>
                                <Col lg="2">
                                  <img
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGRlZnM+CiAgICA8cmVjdCBpZD0ibGl2ZS1nYW1lLWEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeD0iMCIgeT0iMCIgcng9IjIiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxtYXNrIGlkPSJsaXZlLWdhbWUtYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2xpdmUtZ2FtZS1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNsaXZlLWdhbWUtYSIvPgogICAgPHBhdGggZmlsbD0iIzI2ODkwQyIgZD0iTTguMjUsOC4yNSBMMTUuNzUsOC4yNSBMMTUuNzUsMTMuNzUgQzE1Ljc1LDE0Ljg1NDU2OTUgMTQuODU0NTY5NSwxNS43NSAxMy43NSwxNS43NSBMOC4yNSwxNS43NSBMOC4yNSw4LjI1IFoiIG1hc2s9InVybCgjbGl2ZS1nYW1lLWIpIi8+CiAgICA8cGF0aCBmaWxsPSIjRkZBNjAyIiBkPSJNMC4yNSw4LjI1IEw3Ljc1LDguMjUgTDcuNzUsMTUuNzUgTDIuMjUsMTUuNzUgQzEuMTQ1NDMwNSwxNS43NSAwLjI1LDE0Ljg1NDU2OTUgMC4yNSwxMy43NSBMMC4yNSw4LjI1IFoiIG1hc2s9InVybCgjbGl2ZS1nYW1lLWIpIi8+CiAgICA8cGF0aCBmaWxsPSIjMTM2OENFIiBkPSJNOC4yNSwwLjI1IEwxMy43NSwwLjI1IEMxNC44NTQ1Njk1LDAuMjUgMTUuNzUsMS4xNDU0MzA1IDE1Ljc1LDIuMjUgTDE1Ljc1LDcuNzUgTDguMjUsNy43NSBMOC4yNSwwLjI1IFoiIG1hc2s9InVybCgjbGl2ZS1nYW1lLWIpIi8+CiAgICA8cGF0aCBmaWxsPSIjRTIxQjNDIiBkPSJNMi4yNSwwLjI1IEw3Ljc1LDAuMjUgTDcuNzUsNy43NSBMMC4yNSw3Ljc1IEwwLjI1LDIuMjUgQzAuMjUsMS4xNDU0MzA1IDEuMTQ1NDMwNSwwLjI1IDIuMjUsMC4yNSBaIiBtYXNrPSJ1cmwoI2xpdmUtZ2FtZS1iKSIvPgogICAgPHBvbHlnb24gZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjEwLjM1IDEwLjM1IDEzLjM2NCAxMC4zNSAxMy4zNjQgMTMuMzY0IDEwLjM1IDEzLjM2NCIgbWFzaz0idXJsKCNsaXZlLWdhbWUtYikiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQuMTQyODU3MTQsMTMuNjk4NjYwNyBDMy4xMjU4MTQ5MSwxMy42OTg2NjA3IDIuMzAxMzM5MjksMTIuODc0MTg1MSAyLjMwMTMzOTI5LDExLjg1NzE0MjkgQzIuMzAxMzM5MjksMTAuODQwMTAwNiAzLjEyNTgxNDkxLDEwLjAxNTYyNSA0LjE0Mjg1NzE0LDEwLjAxNTYyNSBDNS4xNTk4OTkzNywxMC4wMTU2MjUgNS45ODQzNzUsMTAuODQwMTAwNiA1Ljk4NDM3NSwxMS44NTcxNDI5IEM1Ljk4NDM3NSwxMi44NzQxODUxIDUuMTU5ODk5MzcsMTMuNjk4NjYwNyA0LjE0Mjg1NzE0LDEzLjY5ODY2MDcgWiIgbWFzaz0idXJsKCNsaXZlLWdhbWUtYikiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI5Ljg0OCA0LjE0MyAxMS44NTcgMi4xMzQgMTMuODY2IDQuMTQzIDExLjg1NyA2LjE1MiIgbWFzaz0idXJsKCNsaXZlLWdhbWUtYikiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSI1Ljk4NCA1LjU3NiAyLjMwMSA1LjU3NiA0LjE0MyAyLjYzNiIgbWFzaz0idXJsKCNsaXZlLWdhbWUtYikiLz4KICAgIDxyZWN0IHdpZHRoPSIxNS41IiBoZWlnaHQ9IjE1LjUiIHg9Ii4yNSIgeT0iLjI1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iLjUiIG1hc2s9InVybCgjbGl2ZS1nYW1lLWIpIiByeD0iMiIvPgogIDwvZz4KPC9zdmc+Cg=="
                                    alt="Report for a kahoot"
                                    className="report-icons__Icon-sc-17ov49d-0 kjibfA"></img>
                                </Col>
                                <Col lg="10">
                                  <Row>
                                    <Col lg="9">
                                      <span
                                        style={{
                                          color: 'rgb(20,109,13)',
                                          fontWeight: 'bold',
                                        }}>
                                        Done - See results
                                      </span>
                                    </Col>
                                    <Col lg="3">
                                      <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-check-circle-fill"
                                        fill="rgb(20,109,13)"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          fill-rule="evenodd"
                                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                        />
                                      </svg>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="12">
                                      <span
                                        style={{
                                          color: 'black',
                                          fontWeight: 'bold',
                                        }}>
                                        Tên hành động
                                      </span>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </a>
                          {/* End One Temp */}
                        </>
                      );
                    })}
                  </CardBody>
                </Card>
              </Col>
              {/* End Right */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
