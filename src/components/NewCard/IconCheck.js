// nodejs library to set properties for components
import React from 'react';
// reactstrap components

class IconCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: this.props.result ? this.props.result : false,
    };
  }
  Icon = (bool) => {
    if (bool === true) {
      return (
        <>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-check-circle"
            fill={'rgb(24,222,79)'}
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
            />
          </svg>
        </>
      );
    } else {
      return (
        <>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle"
            fill="rgb(208,57,77)"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </>
      );
    }
  };
  render() {
    return this.Icon(this.state.bool);
  }
}

export default IconCheck;
