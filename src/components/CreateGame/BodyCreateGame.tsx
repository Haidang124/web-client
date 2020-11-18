/*eslint-disable*/
import React from 'react';
// reactstrap components
import { Col, Row } from 'reactstrap';
import Answer from '../TempAnswer/Answer';

const BodyCreateGame: React.FC<any> = (props: any) => {
  return (
    <>
      <Col lg="10" style={{ background: 'white' }} className="mb-4">
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
                id="questionTitle"
                onChange={(e) => {
                  e.preventDefault();
                }}
                placeholder="Click to start typing your question"
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
              <img src="http://placehold.it/300x200" alt="" />
            </div>
            <div className="col align-self-end"></div>
          </div>
        </div>
        {/* Answers */}
        <Answer
          numberAnswer="0"
          data={props.data}
          selected={props.selected}></Answer>
        <Answer
          numberAnswer="1"
          data={props.data}
          selected={props.selected}></Answer>
        {(() => {
          if (props.data[props.selected].species === 'quiz') {
            return (
              <>
                <Answer
                  numberAnswer="2"
                  data={props.data}
                  selected={props.selected}></Answer>
                <Answer
                  numberAnswer="3"
                  data={props.data}
                  selected={props.selected}></Answer>
              </>
            );
          }
        })()}

        <br />
      </Col>
    </>
  );
};

export default BodyCreateGame;
