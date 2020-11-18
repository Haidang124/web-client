import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { FormControl, Modal, InputGroup, Button } from 'react-bootstrap';
import { userService } from '../services/user/api';
import { Input } from 'reactstrap';

const Modal_Save: React.FC<any> = (props: any) => {
  return (
    <>
      <Modal
        size="lg"
        show={props.show} //false: Không hiển thị, true: hiển thị
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
                defaultValue={props.image_game}
                onChange={(e) => {
                  (document.getElementById(
                    'image_game',
                  ) as HTMLInputElement).src = e.target.value;
                }}></Input>
              <div className="d-flex justify-content-center w-100 mt-2">
                <img
                  alt="Ảnh không tồn tại"
                  id="image_game"
                  src={
                    props.image_game == ''
                      ? 'http://placehold.it/500x300'
                      : props.image_game
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
                  var title = (document.getElementById(
                    'title',
                  ) as HTMLInputElement).value;
                  var image_game = (document.getElementById(
                    'image_url',
                  ) as HTMLInputElement).value;
                  props.funcSave(title, image_game);
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

export default Modal_Save;
