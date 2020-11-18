import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Input } from 'reactstrap';

const ModalSave: React.FC<any> = (props: any) => {
  return (
    <>
      <Modal
        size="lg"
        show={props.show} // false: Không hiển thị, true: hiển thị
        onHide={() => {
          props.setClose();
        }}
        scrollable
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Save Kahoot!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-center">
            <div className="col-11">
              <h3>Title:</h3>
              <Input
                id="title"
                defaultValue={props.title}
                type="text"
                maxLength={76}
                style={{ fontSize: '25px' }}></Input>
            </div>
            <div className="col-11">
              <h3>Image Kahoot!</h3>
              <Input
                placeholder="url"
                id="image_url"
                type="text"
                style={{ fontSize: '17px' }}
                defaultValue={props.imageGame}
                onChange={(e) => {
                  (document.getElementById(
                    'imageGame',
                  ) as HTMLInputElement).src = e.target.value;
                }}></Input>
              <div className="d-flex justify-content-center w-100 mt-2">
                <img
                  alt="Ảnh không tồn tại"
                  id="imageGame"
                  src={
                    props.imageGame === ''
                      ? 'http://placehold.it/500x300'
                      : props.imageGame
                  }
                  width="500px"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col lg-6">
              <Button
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: 'rgb(242,242,242)',
                  color: 'black',
                }}
                onClick={(e) => {
                  props.funcQuit();
                  props.setClose();
                }}>
                <b>Quit</b>
              </Button>
            </div>
            <div className="col lg-6">
              <Button
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: 'rgb(226,27,60)',
                  color: 'white',
                }}
                onClick={(e) => {
                  let title = (document.getElementById(
                    'title',
                  ) as HTMLInputElement).value;
                  let imageGame = (document.getElementById(
                    'image_url',
                  ) as HTMLInputElement).value;
                  props.funcSave(title, imageGame);
                  props.setClose();
                }}>
                <b>Save</b>
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSave;
