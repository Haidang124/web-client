import React from 'react';
import { FormControl, InputGroup, Modal } from 'react-bootstrap';
import { Button, Col, Row } from 'reactstrap';
import CardResult from './NewCard/CardResult.js';

class QuestionBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorButton: this.props.colorButton
        ? this.props.colorButton
        : 'rgb(200,0,0)',
      colorText: this.props.colorText ? this.props.colorText : 'white',
      show: false,
      nameButton: this.props.nameButton
        ? this.props.nameButton
        : 'Button Modal',
      widthButton: this.props.widthButton ? this.props.widthButton : '5rem',
      heightButton: this.props.heightButton ? this.props.heightButton : '3rem',
      data: props.data,
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  fun_question_search = (e) => {
    // (document.getElementById('question_search') as HTMLInputElement).value = '';
    document.getElementById('question_search').value = '';
    console.log(this.state.data);
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            this.handleShow();
            this.props.refreshData(this);
          }}
          style={{
            background: this.state.colorButton,
            color: this.state.colorText,
            width: this.state.widthButton,
          }}>
          {this.state.nameButton}
        </Button>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={() => this.handleClose()}
          scrollable>
          <Modal.Header closeButton>
            <Modal.Title>Question Bank</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="card-text font-weight-normal">
              Start typing a question to search
            </p>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="basic-addon2"
                id="question_search"
                defaultValue=""
                // ref={value_ques_sear}
              />
              <InputGroup.Append className="font-weight-normal">
                <Button
                  style={{ backgroundColor: 'rgb(78,69,188)' }}
                  variant="outline-secondary"
                  onClick={(e) => this.fun_question_search(e)}>
                  <span style={{ color: 'white', fontSize: '16px' }}>X</span>
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <hr />
            <Row>
              {/* Search result  */}
              <Col className="col-4 font-weight-bold">Search results</Col>
              <Col className="col-3">
                <div className="form-check form-check-inline">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="showAll"
                      name="searchResult"
                      defaultChecked
                    />
                    <label className="custom-control-label" for="showAll">
                      Show all
                    </label>
                  </div>
                </div>
              </Col>
              <Col className="col-5">
                <div className="form-check form-check-inline">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="teamSpace"
                      name="searchResult"
                    />
                    <label className="custom-control-label" for="teamSpace">
                      My Kahoots and team space
                    </label>
                  </div>
                </div>
              </Col>
              {/* End Search result */}

              {/* Các đáp án */}
              {this.state.data.map((value, key) => {
                return (
                  <>
                    <CardResult
                      title={value['question']}
                      contents={value['listAnswer']}
                      time={value['time']}
                      result={value['key']}
                      imageURL={value['image']}></CardResult>
                  </>
                );
              })}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default QuestionBank;
