import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from 'reactstrap';
const ListGame: React.FC = () => {
  const [imageGame, setImageGame] = useState([
    'game.jpg',
    'game.jpg',
    'game.jpg',
  ]);
  return (
    <>
      {/* Page content */}
      <Container fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="11">
                    <h3 className="mb-0">List Game</h3>
                  </Col>
                  <Col xs="1">
                    <Link to="/admin/game">Back</Link>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="lg-col-6 xs-col-8">
                    <video
                      src={require('./../assets/video/VideoGameHeader.mp4')}
                      width="500px"
                      autoPlay
                      loop></video>
                  </Col>
                  <Col lg="6">
                    <Row>
                      <Col lg="12">
                        <Row>
                          <Link to="/admin/play-game">
                            <Col className="lg-col-5 xs-col-8 card-img">
                              <Button
                                style={{
                                  width: '15em',
                                  height: '12em',
                                  backgroundSize: '100% 100%',
                                  backgroundImage:
                                    'url(' +
                                    require('./../assets/img/game/' +
                                      imageGame[0]) +
                                    ')',
                                }}></Button>
                            </Col>
                          </Link>
                          <Col className="lg-col-7 xs-col-6">
                            <h2 className="card-title">Tên Game 1</h2>
                            <p className="card-text">
                              Mô tả game 1: Lorem ipsum dolor sit amet
                              consectetur adipisicing elit.
                            </p>
                            <Link
                              to="/admin/play-game"
                              className="btn btn-primary">
                              Play Game
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col lg="12">
                        <Row>
                          <Link to="/admin/play-game">
                            <Col className="lg-col-5 xs-col-8 card-img">
                              <Button
                                style={{
                                  width: '15em',
                                  height: '12em',
                                  backgroundSize: '100% 100%',
                                  backgroundImage:
                                    'url(' +
                                    require('./../assets/img/game/' +
                                      imageGame[0]) +
                                    ')',
                                }}></Button>
                            </Col>
                          </Link>
                          <Col className="lg-col-7 xs-col-6">
                            <h2 className="card-title">Tên Game 2</h2>
                            <p className="card-text">
                              Mô tả game 1: Lorem ipsum dolor sit amet
                              consectetur adipisicing elit.
                            </p>
                            <Link
                              to="/admin/play-game"
                              className="btn btn-primary">
                              Play Game
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col lg="12">
                        <Row>
                          <Link to="/admin/play-game">
                            <Col className="lg-col-5 xs-col-8 card-img">
                              <Button
                                style={{
                                  width: '15em',
                                  height: '12em',
                                  backgroundSize: '100% 100%',
                                  backgroundImage:
                                    'url(' +
                                    require('./../assets/img/game/' +
                                      imageGame[0]) +
                                    ')',
                                }}></Button>
                            </Col>
                          </Link>
                          <Col className="lg-col-7 xs-col-6">
                            <h2 className="card-title">Tên Game 3</h2>
                            <p className="card-text">
                              Mô tả game 1: Lorem ipsum dolor sit amet
                              consectetur adipisicing elit.
                            </p>
                            <Link
                              to="/admin/play-game"
                              className="btn btn-primary">
                              Play Game
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <hr />
                  </Col>
                </Row>
                <Row className="mt-6">
                  <Col lg="2"></Col>
                  <Col lg="8"></Col>
                  <Col lg="2"></Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListGame;
