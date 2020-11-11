/*eslint-disable*/
import React, { useState } from 'react';
// reactstrap components
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap';

const ListQuestion: React.FC<any> = (props: any) => {
  const [data, setData] = useState(props.data);
  return (
    <>
      <div id="list_question">
        {data.map((value) => {
          return (
            <>
              <div
                className="mb-3"
                style={{
                  backgroundColor: 'rgb(192,222,245)',
                }}>
                <span>{value + 1}.</span>
                <button
                  id={'question' + value}
                  style={{
                    border: 'none',
                    backgroundColor: 'white',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}>
                  <input
                    style={{
                      width: '100%',
                      textAlign: 'center',
                    }}
                    disabled
                    value={'Type your question'}></input>
                  <div className="row">
                    <div className="col col-6">
                      <input
                        type="text"
                        style={{
                          width: '50%',
                          height: '50%',
                        }}
                        disabled
                      />
                    </div>
                    <div className="col col-6">
                      <input
                        type="text"
                        style={{
                          width: '50%',
                          height: '50%',
                        }}
                        disabled
                      />
                    </div>
                    <div className="col col-6">
                      <input
                        type="text"
                        style={{
                          width: '50%',
                          height: '50%',
                        }}
                        disabled
                      />
                    </div>
                    <div className="col col-6">
                      <input
                        type="text"
                        style={{
                          width: '50%',
                          height: '50%',
                        }}
                        disabled
                      />
                    </div>
                  </div>
                </button>
                <div className="mt-2">
                  <div className="row">
                    <div className="col col-1"></div>
                    {/* Duplicate */}
                    <div className="col col-5">
                      <button
                        onClick={(e) => e.preventDefault()}
                        style={{
                          border: 'none',
                          backgroundColor: 'white',
                          borderRadius: '10px',
                        }}>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-plus-square"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Delete */}
                    <div
                      className="col col-5"
                      onClick={(e) => e.preventDefault()}>
                      <button
                        style={{
                          border: 'none',
                          backgroundColor: 'white',
                          borderRadius: '10px',
                        }}>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-trash"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { ListQuestion };
