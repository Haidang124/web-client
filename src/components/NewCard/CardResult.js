// nodejs library to set properties for components
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Image } from 'react-bootstrap';
import IconCheck from './IconCheck.js';
import IconImage from './IconImage.js';

// reactstrap components

class CardResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title ? this.props.title : 'Title',
      imageURL: this.props.imageURL
        ? this.props.imageURL
        : 'http://placehold.it/120x80',
      contents: this.props.contents //Nội dung các đáp án
        ? this.props.contents
        : ['Content 0', 'Content 1', 'Content 2', 'Content 3'],
      result: this.props.result ? this.props.result : 0, //Đáp án đúng, bắt đầu từ 0
    };
  }

  render() {
    return (
      <>
        <Card
          style={{ width: '50rem', background: 'rgb(225,224,226)' }}
          className="mt-2">
          <CardHeader>
            <Row>
              <Col className="col-10">
                <Row>
                  <Col className="col-3">
                    <Image
                      src={this.state.imageURL}
                      width="120px"
                      height="80px"
                    />
                  </Col>
                  <Col className="col-5">
                    <h4 className="card-title mt-4">{this.state.title}</h4>
                    <p className="mt--1" style={{ fontSize: '13px' }}>
                      Time: {this.props.time}s
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="col-2">
                <button className="btn btn-primary mt-4">Add</button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            {this.state.contents.map((value, key) => {
              return (
                <>
                  {/* Đáp án */}
                  <Row
                    className="mb-2"
                    style={{
                      padding: '1rem',
                      border: '1px solid rgb(172,172,172)',
                    }}>
                    <Col className="col-1 text-center">
                      <IconImage number={key % 4}></IconImage>
                    </Col>
                    <Col className="col-9 mt-1">
                      <div style={{ textAlign: 'center' }}>{value}</div>
                    </Col>
                    <Col className="col-2 mt-1 text-center">
                      <IconCheck
                        result={
                          key == this.state.result ? true : false
                        }></IconCheck>
                    </Col>
                  </Row>
                </>
              );
            })}
            {/* End Card */}
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CardResult;
