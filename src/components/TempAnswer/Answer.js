import React from 'react';
import { Col, Row } from 'reactstrap';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberAnswer: this.props.numberAnswer ? this.props.numberAnswer : '0',
      isResult: false, // Câu trả lời đúng/sai - Mặc định là sai
      isEmptyAnswer: true,
      colorResult: 'rgb(102,191,57)',
      data: props.data,
      selected: props.selected,
    };
  }

  colorBG = () => {
    switch (this.state.numberAnswer) {
      case '0':
        return 'rgb(226,27,60)';
      case '1':
        return 'rgb(0,128,255)';
      case '2':
        return 'rgb(216,158,0)';
      case '3':
        return 'rgb(34,177,76)';
      default:
        return 'rgb(226,27,60)';
    }
  };

  changeIsEmptyAnswer = (e) => {
    if (e.target.value === '') {
      this.setState({ isEmptyAnswer: true });
    } else {
      this.setState({ isEmptyAnswer: false });
    }
  };

  changeBackground = (e) => {
    if (e.target.value !== '') {
      document.getElementById(
        'tempAnswer' + this.state.numberAnswer,
      ).style.backgroundColor = this.colorBG();
      document.getElementById(
        'inputAnswer' + this.state.numberAnswer,
      ).style.backgroundColor = this.colorBG();
      document.getElementById(
        'inputAnswer' + this.state.numberAnswer,
      ).style.fontWeight = 'bold';
    } else {
      document.getElementById(
        'tempAnswer' + this.state.numberAnswer,
      ).style.backgroundColor = 'white';
      document.getElementById(
        'inputAnswer' + this.state.numberAnswer,
      ).style.backgroundColor = 'white';
      document.getElementById(
        'inputAnswer' + this.state.numberAnswer,
      ).style.fontWeight = '';
    }

    document.getElementById('numberChar' + this.state.numberAnswer).innerHTML =
      75 - e.target.value.length;
  };

  Icon = () => {
    switch (this.state.numberAnswer) {
      case '0':
        return (
          <>
            <svg
              id="TRIANGLE"
              data-functional-selector="icon"
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              style={{
                paintOrder: 'stroke',
                backgroundColor: this.colorBG(),
              }}>
              <path
                d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                style={{ fill: 'white' }}
              />
            </svg>
          </>
        );
      case '1':
        return (
          <>
            <svg
              id="DIAMOND"
              data-functional-selector="icon"
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              style={{ paintOrder: 'stroke', backgroundColor: this.colorBG() }}>
              <path
                d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                style={{ fill: 'white' }}
              />
            </svg>
          </>
        );
      case '2':
        return (
          <>
            <svg
              id="CIRCLE"
              data-functional-selector="icon"
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              style={{ paintOrder: 'stroke', backgroundColor: this.colorBG() }}>
              <path
                d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                style={{ fill: 'white' }}
              />
            </svg>
          </>
        );
      case '3':
        return (
          <>
            <svg
              id="SQUARE"
              data-functional-selector="icon"
              viewBox="0 0 32 32"
              focusable="false"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1.3px"
              style={{ paintOrder: 'stroke', backgroundColor: this.colorBG() }}>
              <path
                d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                style={{ fill: 'white' }}
              />
            </svg>
          </>
        );
      default:
    }
  };
  render() {
    return (
      <>
        {/* One Answer */}
        <Row className="row justify-content-md-center mb-1">
          <Col lg="11">
            <div
              className="row align-items-center"
              style={{
                border: '1px solid rgb(172,172,172)',
                height: '100%',
                backgroundColor: 'white',
              }}
              id={'tempAnswer' + this.state.numberAnswer}>
              {/* icon */}

              <div className="col col-lg-1">
                <div className="row align-items-center">
                  <div className="col align-self-center">
                    <div>{this.Icon()}</div>
                  </div>
                </div>
              </div>

              {/* Input Answer */}
              <div className="col col-lg-10">
                <div>
                  <div
                    style={{
                      float: 'right',
                      fontSize: '13px',
                      marginRight: '10px',
                    }}
                    className="text-white"
                    id={'numberChar' + this.state.numberAnswer}>
                    75
                  </div>
                  <textarea
                    id={'inputAnswer' + this.state.numberAnswer}
                    maxLength={75}
                    style={{
                      resize: 'none',
                      width: '100%',
                      fontSize: '20px',
                      padding: '0 15px 0 15px',
                      border: 'none',
                      textAlign: 'center',
                      color: 'white',
                      caretColor: 'black',
                    }}
                    placeholder={
                      'Add answer ' +
                      (Number(this.state.numberAnswer) + 1) +
                      (this.state.numberAnswer === '2' ||
                      this.state.numberAnswer === '3'
                        ? ' (optional)'
                        : '')
                    }
                    onChange={(e) => {
                      this.changeBackground(e);
                      this.changeIsEmptyAnswer(e);
                    }}></textarea>
                </div>
              </div>
              {/* End inout answer */}

              {/* Icon true/false */}
              <div
                className="col col-lg-1"
                id={'iconTrueFalse' + this.state.numberAnswer}>
                <button
                  disabled={this.state.isEmptyAnswer ? true : false}
                  id={'buttonCheck' + this.state.numberAnswer}
                  onClick={(e) =>
                    this.setState({ isResult: !this.state.isResult })
                  }
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    border: '4px solid white',
                    backgroundColor: (() => {
                      if (this.state.isEmptyAnswer) {
                        return 'white';
                      } else {
                        if (this.state.isResult) {
                          return this.state.colorResult;
                        } else {
                          return this.colorBG();
                        }
                      }
                    })(),
                  }}>
                  <svg
                    display={this.state.isResult ? '' : 'none'}
                    className="center"
                    width="2em"
                    height="2em"
                    viewBox="4 4 10 10"
                    class="bi bi-check2"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {/* End one Answer */}
      </>
    );
  }
}

export default Answer;
export function getNameInputAnswer() {
  return 'inputAnswer' + this.state.numberAnswer;
}
export function isResult() {
  return this.state.isResult;
}
