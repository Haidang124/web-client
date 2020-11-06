// nodejs library to set properties for components
import React from 'react';
// reactstrap components

class IconImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number ? this.props.number : 0,
      color: this.props.color
        ? this.props.color
        : [
            'rgb(226,27,60)',
            'rgb(0,128,255)',
            'rgb(216,158,0)',
            'rgb(34,177,76)',
          ],
      width: '2.5rem',
      height: '2.5rem',
    };
  }
  render() {
    if (this.state.number === 0) {
      return (
        <>
          <div
            className="card-icon__IconWrapper-sc-1gz7w2x-0 hBJrlK"
            style={{
              background: this.state.color[0],
              width: this.state.width,
              height: this.state.height,
            }}>
            <span
              className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '40px',
                height: '40px',
              }}>
              <svg
                id="TRIANGLE"
                data-functional-selector="icon"
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                style={{ paintOrder: 'stroke' }}>
                <path
                  d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                  style={{ fill: 'white' }}
                />
              </svg>
            </span>
          </div>
        </>
      );
    } else if (this.state.number === 1) {
      return (
        <>
          <div
            className="card-icon__IconWrapper-sc-1gz7w2x-0 bYAysM"
            style={{
              background: this.state.color[1],
              width: this.state.width,
              height: this.state.height,
            }}>
            <span
              className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '40px',
                height: '40px',
              }}>
              <svg
                id="DIAMOND"
                data-functional-selector="icon"
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                style={{ paintOrder: 'stroke' }}>
                <path
                  d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                  style={{ fill: 'white' }}
                />
              </svg>
            </span>
          </div>
        </>
      );
    } else if (this.state.number === 2) {
      return (
        <>
          <div
            className="card-icon__IconWrapper-sc-1gz7w2x-0 iwa-Dee"
            style={{
              background: this.state.color[2],
              width: this.state.width,
              height: this.state.height,
            }}>
            <span
              className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '40px',
                height: '40px',
              }}>
              <svg
                id="CIRCLE"
                data-functional-selector="icon"
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                style={{ paintOrder: 'stroke' }}>
                <path
                  d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                  style={{ fill: 'white' }}
                />
              </svg>
            </span>
          </div>
        </>
      );
    } else if (this.state.number === 3) {
      return (
        <>
          <div
            className="card-icon__IconWrapper-sc-1gz7w2x-0 kLGLTE"
            style={{
              background: this.state.color[3],
              width: this.state.width,
              height: this.state.height,
            }}>
            <span
              className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '40px',
                height: '40px',
              }}>
              <svg
                id="SQUARE"
                data-functional-selector="icon"
                viewBox="0 0 32 32"
                focusable="false"
                stroke="rgba(0, 0, 0, 0.15)"
                strokeWidth="1.3px"
                style={{ paintOrder: 'stroke' }}>
                <path
                  d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                  style={{ fill: 'white' }}
                />
              </svg>
            </span>
          </div>
        </>
      );
    }
  }
}

export default IconImage;
