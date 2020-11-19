/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { gameService } from '../services/game/api';
import { userService } from '../services/user/api';
import ModalTrueFalse from './ModalTrueFalse';
const Discover: React.FC = () => {
  const [dataGame, setDataGame] = useState([
    {
      _id: '',
      username: '',
      title: '',
      cover: '',
      resources: {
        image: {
          next: '',
          analist: '',
          1: '',
          2: '',
          3: '',
          4: '',
          cup_ranking: '',
          stopwatchClicked: '',
          image: '',
          correctTick: '',
          wrongTick: '',
        },
        audio: '',
      },
      data: {
        startObject: '',
        objects: [''],
        array: [{ question: '', key: 0, listAnswer: [''], time: 0 }],
      },
      createdAt: '',
      updatedAt: '',
    },
  ]);
  const [showDelete, setShowDelete] = useState(false);
  const [idGame, setIdGame] = useState('');
  const [listGameId, setListGameId] = useState([]);
  useEffect(() => {
    gameService
      .getAllGame()
      .then((response) => {
        setDataGame(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    userService
      .getUserInfo()
      .then((res) => {
        setListGameId(res.data.data.gameIdArray);
        console.log(res.data.data.gameIdArray);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deleteGame = async (gameId) => {
    if (gameId === '') {
      toast.error('EROOR!!!');
    }
    console.log(gameId);
    gameService
      .deleteGame({ gameId: gameId })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.message());
      });
  };
  const checkListGameId = (gameId, dataCheck) => {
    for (let i = 0; i < dataCheck.length; i++) {
      if (gameId === dataCheck[i]) {
        return true;
      }
    }
    return false;
  };
  return (
    <>
      {/* Delete ? */}
      <ModalTrueFalse
        show={showDelete}
        data={{
          title: 'Are you want delete?',
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
        funcButton_1={() => {
          console.log("Don't delete!");
        }}
        funcButton_2={() => {
          deleteGame(idGame);
          console.log(idGame);
        }}
        funcOnHide={() => console.log('Hide Modal')}></ModalTrueFalse>
      <Card>
        <CardHeader>
          <div className="row d-flex justify-content-between">
            <div className="col">
              <h2>List Kahoot</h2>
            </div>
            <div className="col" style={{ textAlign: 'right' }}>
              <div
                className="btn btn-primary"
                onClick={() => (window.location.href = '/admin/create-game')}>
                Create Kahoot
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="discorer mb-3">
            <Card>
              <CardHeader style={{ backgroundColor: 'rgb(102,191,57)' }}>
                <h2 className="text-white">My Kahoot</h2>
              </CardHeader>
              <CardBody style={{ backgroundColor: 'rgb(240,240,240)' }}>
                <div className="row">
                  {dataGame.map((value) => {
                    if (checkListGameId(value._id, listGameId)) {
                      return (
                        <>
                          <div
                            className="card"
                            style={{ width: '15rem', margin: '1rem' }}>
                            <img
                              width="100%"
                              height="150px"
                              className="card-img-top"
                              src={value.resources.image.image}
                              alt=""
                            />
                            <div
                              className="card-body"
                              style={{
                                borderLeft: '1px solid rgb(149,149,149)',
                                borderRight: '1px solid rgb(149,149,149)',
                                borderBottom: '1px solid rgb(149,149,149)',
                              }}>
                              <h3 className="card-title text-center">
                                {value.title}
                              </h3>
                              <p className="card-text">
                                Số câu hỏi: {value.data.array.length} <br />
                                <span style={{ fontSize: '13px' }}>
                                  <i>Created at: </i>
                                  {new Date(value.createdAt).getDate() +
                                    '/' +
                                    new Date(value.createdAt).getMonth() +
                                    '/' +
                                    new Date(value.createdAt).getFullYear() +
                                    '-' +
                                    new Date(value.createdAt).getHours() +
                                    ':' +
                                    new Date(value.createdAt).getMinutes()}
                                </span>
                                <br />
                                <span style={{ fontSize: '13px' }}>
                                  <i>Last updated:</i>
                                  {new Date(value.updatedAt).getDate() +
                                    '/' +
                                    new Date(value.updatedAt).getMonth() +
                                    '/' +
                                    new Date(value.updatedAt).getFullYear() +
                                    '-' +
                                    new Date(value.updatedAt).getHours() +
                                    ':' +
                                    new Date(value.updatedAt).getMinutes()}
                                </span>
                                <br />
                                <span style={{ fontSize: '13px' }}>
                                  Create by: {value.username}
                                </span>
                                <div className="row">
                                  <div className="col-12 mt-3">
                                    <div
                                      className="btn btn-success w-100"
                                      onClick={() => {
                                        window.location.href =
                                          '/lobby/' + value._id;
                                      }}>
                                      Create room
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-6">
                                    <div
                                      onClick={() => {
                                        window.location.href =
                                          '/admin/edit-game/' + value._id;
                                      }}
                                      className="btn btn-primary w-100">
                                      Edit
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div
                                      className="btn btn-danger w-100 text-white"
                                      onClick={() => {
                                        setShowDelete(true);
                                        setIdGame(value._id);
                                      }}>
                                      Delete
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="discorer">
            <Card>
              <CardHeader style={{ backgroundColor: 'rgb(180,132,132)' }}>
                <h2 className="text-white">Orther Kahoot</h2>
              </CardHeader>
              <CardBody style={{ backgroundColor: 'rgb(240,240,240)' }}>
                <div className="row">
                  {dataGame.map((value) => {
                    if (checkListGameId(value._id, listGameId) === false) {
                      return (
                        <>
                          <div
                            className="card"
                            style={{ width: '15rem', margin: '1rem' }}>
                            <img
                              width="100%"
                              height="150px"
                              className="card-img-top"
                              src={value.resources.image.image}
                              alt=""
                            />
                            <div
                              className="card-body"
                              style={{
                                borderLeft: '1px solid rgb(149,149,149)',
                                borderRight: '1px solid rgb(149,149,149)',
                                borderBottom: '1px solid rgb(149,149,149)',
                              }}>
                              <h3 className="card-title text-center">
                                {value.title}
                              </h3>
                              <p className="card-text">
                                Số câu hỏi: {value.data.array.length} <br />
                                <span style={{ fontSize: '13px' }}>
                                  Create by: {value.username}
                                </span>
                                <div className="row">
                                  <div className="col-12 mt-3">
                                    <div
                                      className="btn btn-success w-100"
                                      onClick={() => {
                                        window.location.href =
                                          '/lobby/' + value._id;
                                      }}>
                                      Create room
                                    </div>
                                  </div>
                                  <div className="col-12 mt-3">
                                    <div
                                      className="btn btn-primary w-100"
                                      onClick={(e) =>
                                        (window.location.href =
                                          '/admin/watchGame/' + value._id)
                                      }>
                                      Watch
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Discover;
