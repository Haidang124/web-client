import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Card, CardHeader } from 'reactstrap';
import '../assets/scss/component/discover.scss';
import { gameService } from '../services/game/api';
import ModalTrueFalse from './ModalTrueFalse';

const Discover: React.FC = () => {
  const [dataGame, setDataGame] = useState([
    {
      _id: '',
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
  useEffect(() => {
    gameService.getAllGame().then((response) => {
      setDataGame(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  
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
        }}
        funcOnHide={() => console.log('Hide Modal')}></ModalTrueFalse>
      <Card>
        <CardHeader
          style={{ backgroundColor: 'rgb(70, 23, 143)', color: 'white' }}>
          <div className="row d-flex justify-content-between">
            <div className="col">
              <h2 style={{ color: 'white' }}>List Kahoot</h2>
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
        <div>
          <div className="discover">
            <div className="row">
              {dataGame.map((value, key) => {
                return (
                  <>
                    <div
                      className="card"
                      style={{ width: '15rem', margin: '1rem' }}>
                      <img
                        width="100%"
                        height="200px"
                        className="card-img-top"
                        src={
                          value.resources.image.image
                            ? value.resources.image.image
                            : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/question-mark-icon-on-white-puzzle-royalty-free-image-917901148-1558452934.jpg'
                        }
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
                          <div className="row">
                            <div className="col-12 mt-3">
                              <div
                                className="btn btn-success w-100"
                                onClick={() => {
                                  window.location.href = '/lobby/' + value._id;
                                }}>
                                Play Now
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-6">
                              <a
                                href={'/admin/edit-game/' + value._id}
                                className="btn btn-primary w-100">
                                Edit
                              </a>
                            </div>
                            <div className="col-6">
                              <div
                                className="btn btn-danger w-100 text-white "
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
              })}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Discover;
