import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalTrueFalse: React.FC<any> = (props: any) => {
  return (
    <>
      <Modal
        size={props.size ? 'sm' : props.size}
        show={props.show} // false: Không hiển thị, true: hiển thị
        onHide={() => {
          props.setClose();
          props.funcOnHide();
        }}
        scrollable
        centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-center">
            <div className="col lg-6">
              <Button
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: props.data.button_1.backgroundColor,
                  color: props.data.button_1.color,
                }}
                onClick={(e) => {
                  props.funcButton_1();
                  props.setClose();
                }}>
                <b>{props.data.button_1.title}</b>
              </Button>
            </div>
            <div className="col lg-6">
              <Button
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: props.data.button_2.backgroundColor,
                  color: props.data.button_2.color,
                }}
                onClick={(e) => {
                  props.funcButton_2();
                  props.setClose();
                }}>
                <b>{props.data.button_2.title}</b>
              </Button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setClose()}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ModalTrueFalse;
