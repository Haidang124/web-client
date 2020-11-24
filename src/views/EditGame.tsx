import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
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
import ModalSave from './ModalSave';
import ModalTrueFalse from './ModalTrueFalse';
// fix lai cai lôi do toi xoa nham truong di . Hom sau dat ten cho chuan , Họac sang sua ben serve ây
const EditGame: React.FC = () => {
  const { params } = useRouteMatch();
  // tslint:disable-next-line: no-string-literal
  const gameId = params['id'];
  const [dataGame, setDataGame] = useState({
    title: '',
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
          image: '',
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
      image: '',
      listAnswer: ['', '', '', ''],
      key: -1,
      time: 0,
    },
  ]);
  const [selected, setSelected] = useState(0);
  const [lengthData, setLengthData] = useState(data.length);
  const [showDelete, setShowDelete] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [indexDeleteDuplicate, setIndexDelDup] = useState(-1);
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
  const removeQuestion = (index) => {
    try {
      if (lengthData > 1 && index !== -1) {
        data.splice(index, 1);
        setLengthData(data.length);
        toast.success('Delete câu hỏi thành công!');
      } else {
        toast.error('Không thể xóa câu hỏi này!');
      }
    } catch (error) {
      toast.error('Delete ERROR!');
    }
  };
  const updateDataGame = (title, imageGame) => {
    if (imageGame === '') {
      imageGame =
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/question-mark-icon-on-white-puzzle-royalty-free-image-917901148-1558452934.jpg';
    }
    gameService
      .updateGame({
        gameId: gameId,
        gameName: title,
        imageGame: imageGame,
        dataQuestion: data,
      })
      .then((res) => {
        toast.success(res.data.message);
        // window.location.reload();
        window.location.href = '/admin/discover';
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const duplicateQuestion = (index, dataQuestion) => {
    try {
      let newData = {
        question: dataQuestion.question,
        image: dataQuestion.image,
        listAnswer: [
          dataQuestion.listAnswer[0],
          dataQuestion.listAnswer[1],
          dataQuestion.listAnswer[2],
          dataQuestion.listAnswer[3],
        ],
        key: dataQuestion.key,
        time: dataQuestion.time,
      };
      data.splice(index, 0, newData);
      setLengthData(data.length);
      toast.success('Duplicate câu hỏi thành công!');
    } catch (error) {
      toast.error('Duplicate ERROR!');
    }
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
  const changeTime = (e) => {
    let time = Number(e.target.value);
    data[selected].time = time;
  };
  const clickResultAnswer = (e) => {
    let id = e.target.id;
    let temp = id.substring(13, 14); // số thứ tự của ô lựa chọn [0,1,2,3]
    data[selected].key = Number(temp);
    for (let i = 0; i < 4; i++) {
      if (i === Number(temp)) {
        (document.getElementById(
          id,
        ) as HTMLInputElement).style.backgroundColor = 'rgb(102,191,57)';
      } else {
        (document.getElementById(
          'resultanswer_' + i,
        ) as HTMLInputElement).style.backgroundColor = 'white';
      }
    }
  };
  const addQuestion = () => {
    let newData = {
      question: '',
      image: '',
      listAnswer: ['', '', '', ''],
      key: -1,
      time: 5,
    };
    data.push(newData);
    setLengthData(data.length);
    changeSelected(lengthData);
    console.log(data);
  };
  return (
    <>
      {/* Delete Question ? */}
      <ModalTrueFalse
        show={showDelete}
        data={{
          title: 'Are you want delete question?',
          button_1: {
            title: 'No',
            backgroundColor: 'rgb(242,242,242)',
            color: 'black',
          },
          button_2: {
            title: 'Yes',
            backgroundColor: 'rgb(226,27,60)',
            color: 'white',
          },
        }}
        setClose={() => {
          setShowDelete(false);
        }}
        funcButton_1={() => console.log("Don't delete!")}
        funcButton_2={() => {
          removeQuestion(indexDeleteDuplicate);
          setIndexDelDup(-1);
        }}
        funcOnHide={() => console.log('Hide Modal')}></ModalTrueFalse>
      {/* Quit Create game */}
      <ModalTrueFalse
        show={showQuit}
        data={{
          title:
            'Hold on - are you sure you want to discard all unsaved changes? You won’t be able to restore these changes.?',
          button_1: {
            title: 'No',
            backgroundColor: 'rgb(242,242,242)',
            color: 'black',
          },
          button_2: {
            title: 'Yes',
            backgroundColor: 'rgb(226,27,60)',
            color: 'white',
          },
        }}
        setClose={() => {
          setShowQuit(false);
        }}
        funcButton_1={() => console.log("Don't quit")}
        funcButton_2={() => {
          window.location.href = '/admin/index';
        }}
        funcOnHide={() => console.log('Hide Modal')}></ModalTrueFalse>
      {/* Save Game */}
      <ModalSave
        title={dataGame.title}
        imageGame={dataGame.resources.image.image}
        show={showSave}
        funcQuit={() => {
          console.log("Don't Save");
        }}
        funcSave={(title, imageGame) => {
          updateDataGame(title, imageGame);
        }}
        setClose={() => {
          setShowSave(false);
        }}></ModalSave>
      {/* <Container fluid> */}
      <Row>
        <Col className="order-xl-1" xl="12">
          <Card className="bg-secondary shadow">
            {/* Header  */}
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="11">
                  <h3 className="mb-0">{dataGame.title}</h3>
                </Col>
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
                        funRemoveQuestion={(index) => {
                          setShowDelete(true);
                          setIndexDelDup(index);
                        }}
                        funDuplicate={(index, dataQuestion) =>
                          duplicateQuestion(index, dataQuestion)
                        }></ListQuestion>
                      {/* End list question */}
                      <div className="mt-2">
                        <Button
                          style={{
                            width: '100%',
                            color: 'white',
                            backgroundColor: 'rgb(55,155,255)',
                          }}
                          onClick={(e) => {
                            // e.preventDefault();
                            addQuestion();
                          }}>
                          Add Question
                        </Button>
                        <div className="mt-2">
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
                        <select id="time" onChange={(e) => changeTime(e)}>
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
                        {data[selected].image ? (
                          <img
                            src={data[selected].image}
                            alt="chosen"
                            id="image"
                            className="image"
                            style={{ height: '250px', width: '450px' }}
                          />
                        ) : (
                          <Image
                            src="http://placehold.it/450x250"
                            id="image"
                            className="image"
                          />
                        )}
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
                                autoComplete="off"
                                onChange={(e) => changeBackGround(e)}
                                id="answer_0"
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer1"
                              />
                              <div className="input-group-prepend">
                                <button
                                  className="input-group-text"
                                  id="resultanswer_0"
                                  onClick={(e) => {
                                    // e.preventDefault();
                                    clickResultAnswer(e);
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
                                autoComplete="off"
                                id="answer_1"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer2"
                              />
                              <div className="input-group-prepend">
                                <button
                                  className="input-group-text"
                                  id="resultanswer_1"
                                  onClick={(e) => {
                                    // e.preventDefault();
                                    clickResultAnswer(e);
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
                                autoComplete="off"
                                id="answer_2"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer3"
                              />
                              <div className="input-group-prepend">
                                <button
                                  className="input-group-text"
                                  id="resultanswer_2"
                                  onClick={(e) => {
                                    // e.preventDefault();
                                    clickResultAnswer(e);
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
                                autoComplete="off"
                                id="answer_3"
                                onChange={(e) => changeBackGround(e)}
                                type="text"
                                className="form-control"
                                aria-describedby="iconAnswer4"
                              />
                              <div className="input-group-prepend">
                                <button
                                  className="input-group-text"
                                  id="resultanswer_3"
                                  onClick={(e) => {
                                    // e.preventDefault();
                                    clickResultAnswer(e);
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
              <div className="row d-flex justify-content-between">
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-dark"
                    id="quit_button"
                    onClick={() => setShowQuit(true)}>
                    Quit
                  </button>
                </div>
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="save_button"
                    onClick={() => setShowSave(true)}>
                    Save
                  </button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default EditGame;
