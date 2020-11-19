import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Row,
} from 'reactstrap';
import '../assets/css/createGame.css';
import { ListQuestion } from '../components/CreateGame/ListQuestion';
import QuestionBank from '../components/QuestionBank.js';
import { gameService } from '../services/game/api';
const WatchGame: React.FC = () => {
  const { params } = useRouteMatch();
  // tslint:disable-next-line: no-string-literal
  const gameId = params['id'];
  const [dataGame, setDataGame] = useState({
    title: '',
    username: '',
    resources: {
      image: {
        image: '',
      },
    },
    data: {
      array: [
        // [{question; image, listAnswer['A','B','C','D'], time, key}]
        {
          question: '',
          image:
            'https://res.cloudinary.com/vnu-uet/image/upload/v1604428182/111_vx6tvo.jpg',
          listAnswer: ['', '', '', ''],
          key: -1,
          time: 0,
        },
      ],
    },
  });
  const [data, setData] = useState([
    {
      question: '',
      image:
        'https://res.cloudinary.com/vnu-uet/image/upload/v1604428182/111_vx6tvo.jpg',
      listAnswer: ['', '', '', ''],
      key: -1,
      time: 0,
    },
  ]);
  const [selected, setSelected] = useState(0);
  const [lengthData, setLengthData] = useState(data.length);
  const [colorAnswer] = useState({
    answer_0: 'rgb(226,27,60)',
    answer_1: 'rgb(19,104,206)',
    answer_2: 'rgb(216,158,0)',
    answer_3: 'rgb(38,137,12)',
  });
  useEffect(() => {
    getDataGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getDataGame = () => {
    gameService
      .getGameId(gameId)
      .then((res) => {
        setDataGame(res.data.data);
        setData(res.data.data.data.array);
        setValueElement(res.data.data.data.array);
        setLengthData(res.data.data.data.array.length);
      })
      .catch((error) => {
        toast.error(error.message);
        window.location.href = '/admin/index';
      });
  };
  const setValueElement = (data) => {
    (document.getElementById('question') as HTMLInputElement).value =
      data[selected].question;
    for (let i = 0; i < 4; i++) {
      (document.getElementById('answer_' + i) as HTMLInputElement).value =
        data[selected].listAnswer[i];
      if (data[selected].listAnswer[i] !== '') {
        (document.getElementById(
          'answer_' + i,
        ) as HTMLInputElement).style.backgroundColor = String(
          colorAnswer['answer_' + i],
        );
      } else {
        (document.getElementById(
          'answer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'white';
      }
      if (i === data[selected].key) {
        (document.getElementById(
          'resultanswer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'rgb(102,191,57)';
      } else {
        (document.getElementById(
          'resultanswer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'white';
      }
    }
    (document.getElementById('time') as HTMLInputElement).value = String(
      data[selected].time,
    );
  };
  const changeBackGround = (e) => {
    let id = e.target.id;
    let idNum = Number(id.substring(7, 8));
    data[selected].listAnswer[idNum] = e.target.value;
    if (e.target.value !== '') {
      (document.getElementById(id) as HTMLInputElement).style.backgroundColor =
        colorAnswer[id];
    } else {
      (document.getElementById(id) as HTMLInputElement).style.backgroundColor =
        'white';
    }
  };
  const changeSelected = (value) => {
    setSelected(value);
    (document.getElementById('question') as HTMLInputElement).value =
      data[value].question;
    for (let i = 0; i < 4; i++) {
      (document.getElementById('answer_' + i) as HTMLInputElement).value =
        data[value].listAnswer[i];
      if (data[value].listAnswer[i] !== '') {
        (document.getElementById(
          'answer_' + i,
        ) as HTMLInputElement).style.backgroundColor =
          colorAnswer['answer_' + i];
      } else {
        (document.getElementById(
          'answer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'white';
      }
      if (i === data[value].key) {
        (document.getElementById(
          'resultanswer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'rgb(102,191,57)';
      } else {
        (document.getElementById(
          'resultanswer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'white';
      }
    }
    (document.getElementById('time') as HTMLInputElement).value = String(
      data[value].time,
    );
  };
  return (
    <>
      {/* <Container fluid> */}
      <Row>
        <Col className="order-xl-1" xl="12">
          <Card className="bg-secondary shadow">
            {/* Header  */}
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <div className="col-6">
                  <h3 className="mb-0">{dataGame.title}</h3>
                  <span style={{ fontSize: '14px' }}>
                    <i>Create by: </i>
                    <b>{dataGame.username}</b>
                  </span>
                </div>
                <div className="col-6 w-100">
                  <Link
                    to={{
                      pathname: '/admin/discover',
                    }}>
                    <button
                      style={{ float: 'right' }}
                      type="button"
                      className="btn btn btn-outline-dark"
                      id="quit_button">
                      Back
                    </button>
                  </Link>
                </div>
              </Row>
            </CardHeader>
            {/*  */}
            <CardBody style={{ backgroundColor: 'white' }}>
              <div className="mt--4">
                <Row className="justify-content-md-center">
                  {/* Navbar */}
                  <Col
                    lg="3"
                    style={{
                      borderRight: '2px solid rgb(200,200,200)',
                    }}>
                    {/* List Question */}
                    <div className="container" id="listGame">
                      <ListQuestion
                        data={data}
                        lengthData={lengthData}
                        selected={selected}
                        funSetSelected={(value) => {
                          changeSelected(value);
                        }}
                        funRemoveQuestion={(index) => {}}
                        funDuplicate={(
                          index,
                          dataQuestion,
                        ) => {}}></ListQuestion>
                      {/* End list question */}
                      <div className="mt-2">
                        <div>
                          <QuestionBank
                            data={data}
                            refreshData={(qb) => {
                              qb.setState({ data: data });
                            }}
                            widthButton="100%"
                            nameButton="Question Bank"
                            colorButton="rgb(120,77,251)"></QuestionBank>
                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* End Navbar */}

                  {/* Body Create game */}
                  <Col lg="9" style={{ background: 'white' }} className="mb-4">
                    <div className="row d-flex justify-content-center">
                      <div className="col-11">
                        <Input
                          disabled
                          autoComplete="off"
                          id="question"
                          className="question"
                          onChange={(e) => {
                            data[selected].question = e.target.value;
                          }}></Input>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-3 text-center" id="div_time">
                        Time: <br />
                        <select
                          disabled
                          id="time"
                          onChange={(e) => e.preventDefault()}>
                          <option value="5">5 sec</option>
                          <option value="10">10 sec</option>
                          <option value="20">20 sec</option>
                          <option value="30">30 sec</option>
                          <option value="60">60 sec</option>
                          <option value="90">90 sec</option>
                          <option value="120">120 sec</option>
                          <option value="240">240 sec</option>
                        </select>
                      </div>

                      <div className="col-6 mt-3">
                        <Image
                          src="http://placehold.it/450x250"
                          id="image"
                          className="image"
                        />
                      </div>
                      <div className="col-3"></div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 mt-4">
                        <div className="row d-flex justify-content-between">
                          <div className="col-6">
                            <div className="input-group mb-3 ">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="iconAnswer1">
                                  A.
                                </span>
                              </div>
                              <input
                                disabled
                                autoComplete="off"
                                onChange={(e) => changeBackGround(e)}
                                id="answer_0"
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer1"
                              />
                              <div className="input-group-prepend">
                                <button
                                  disabled
                                  className="input-group-text"
                                  id="resultanswer_0"
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}></button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group mb-3 ">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="iconAnswer2">
                                  B.
                                </span>
                              </div>
                              <input
                                disabled
                                autoComplete="off"
                                id="answer_1"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer2"
                              />
                              <div className="input-group-prepend">
                                <button
                                  disabled
                                  className="input-group-text"
                                  id="resultanswer_1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                          <div className="col-6">
                            <div className="input-group mb-3 ">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="iconAnswer3">
                                  C.
                                </span>
                              </div>
                              <input
                                disabled
                                autoComplete="off"
                                id="answer_2"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer3"
                              />
                              <div className="input-group-prepend">
                                <button
                                  disabled
                                  className="input-group-text"
                                  id="resultanswer_2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}></button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group mb-3 ">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="iconAnswer4">
                                  D.
                                </span>
                              </div>
                              <input
                                disabled
                                autoComplete="off"
                                id="answer_3"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer4"
                              />
                              <div className="input-group-prepend">
                                <button
                                  disabled
                                  className="input-group-text"
                                  id="resultanswer_3"
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <CardFooter>
              <div className="row d-flex justify-content-between"></div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default WatchGame;
