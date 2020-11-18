import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from 'reactstrap';
import { gameService } from '../services/game/api';
import Modal_TrueFalse from './Modal_TrueFalse';
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
        array: [{ question: '', key: 0, listAnswer: [''], image: '', time: 0 }],
      },
      createdAt: '',
      updatedAt: '',
    },
  ]);
  const [showDelete, setShowDelete] = useState(false);
  const [id_game, setIdGame] = useState('');
  useEffect(() => {
    gameService.getAllGame().then((response) => {
      Promise.resolve({
        data: JSON.parse(JSON.stringify(response.data.data)),
      }).then(async (post) => {
        setDataGame(post.data);
        console.log(post.data);
      });
    });
  }, []);
  const getGame = async (_id) => {
    if (_id == '') {
      toast.error('EROOR!!!');
    }
    gameService
      .getGameId(_id)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        toast.error(error.message());
      });
  };
  const deleteGame = async (game_id) => {
    if (game_id == '') {
      toast.error('EROOR!!!');
    }
    console.log(game_id);
    gameService
      .deleteGame({ game_id: game_id })
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
      <Modal_TrueFalse
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
          deleteGame(id_game);
        }}
        funcOnHide={() => console.log('Hide Modal')}></Modal_TrueFalse>
      <div className="discorer" style={{ padding: '3rem 3rem' }}>
        <div className="row">
          {dataGame.map((value, key) => {
            return (
              <>
                <div
                  className="card"
                  style={{ width: '15rem', margin: '1rem' }}>
                  <img
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
                    <h3 className="card-title text-center">{value.title}</h3>
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
                      <div className="row">
                        <div className="col-12 mt-3">
                          <a
                            href="#"
                            className="btn btn-success w-100"
                            onClick={(e) => {
                              getGame(value._id);
                            }}>
                            Play game
                          </a>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-6">
                          <a href="#" className="btn btn-primary w-100">
                            Edit
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            href="#"
                            className="btn btn-danger w-100"
                            onClick={() => {
                              setShowDelete(true);
                              setIdGame(value._id);
                            }}>
                            Delete
                          </a>
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
    </>
  );
};

export default Discover;
