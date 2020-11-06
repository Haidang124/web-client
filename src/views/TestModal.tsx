import React, { createRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from 'reactstrap';
import QuestionBank from '../components/QuestionBank.js';
import Answer from '../components/TempAnswer/Answer.js';
import { ListQuestion } from '../components/CreateGame/ListQuestion';
const TestModal: React.FC = () => {
  const [data, setData] = useState([0, 1, 2, 3]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              {/* Header  */}
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="11">
                    <h3 className="mb-0">Create Game</h3>
                  </Col>
                  <Col xs="1">
                    <Link to="/admin/game">Back</Link>
                  </Col>
                </Row>
              </CardHeader>
              {/*  */}
              <CardBody style={{ backgroundColor: 'white' }}>
                <div className="container mt--4">
                  <Row className="justify-content-md-center">
                    {/* Navbar */}
                    <Col
                      lg="2"
                      style={{
                        borderRight: '2px solid rgb(200,200,200)',
                      }}>
                      <div>
                        {/* List Question */}
                        <ListQuestion data={data}></ListQuestion>
                        {/* End list question */}
                        <div className="mt-2">
                          <Button
                            style={{
                              width: '100%',
                              color: 'white',
                              backgroundColor: 'rgb(55,155,255)',
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              // console.log(getCurrentQ());
                            }}>
                            Add Question
                          </Button>
                          <div className="mt-2">
                            <QuestionBank
                              widthButton="100%"
                              nameButton="Question Bank"
                              colorButton="rgb(120,77,251)"></QuestionBank>
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* End Navbar */}

                    {/* Body Create game */}
                    <Col
                      lg="10"
                      style={{ background: 'white' }}
                      className="mb-4">
                      {/* input question */}
                      <Row className="justify-content-md-center mt-4">
                        <Col lg="10">
                          <div
                            style={{
                              border: '2px solid rgb(172,172,172)',
                              backgroundColor: 'white',
                            }}>
                            <div
                              id="inputQuestion"
                              style={{
                                float: 'right',
                                marginRight: '30px',
                              }}>
                              120
                            </div>
                            <textarea
                              id=""
                              onChange={(e) => {
                                e.preventDefault();
                              }}
                              placeholder="Click to start typing your question"
                              maxLength={120}
                              style={{
                                border: 'none',
                                padding: '5px 30px 5px 30px',
                                width: '100%',
                                height: '120px',
                                resize: 'none',
                                fontSize: '28px',
                                textAlign: 'center',
                              }}></textarea>
                          </div>
                        </Col>
                      </Row>
                      {/* Image question */}
                      <div style={{ height: '200px' }} className="mt-2 mb-3">
                        <div className="row">
                          <div className="col align-self-start"></div>
                          <div className="col align-self-center">
                            <img src="http://placehold.it/300x200" />
                          </div>
                          <div className="col align-self-end"></div>
                        </div>
                      </div>
                      {/* Answers */}
                      <Answer numberAnswer="0"></Answer>
                      <Answer numberAnswer="1"></Answer>
                      <Answer numberAnswer="2"></Answer>
                      <Answer numberAnswer="3"></Answer>
                      <br />
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TestModal;
