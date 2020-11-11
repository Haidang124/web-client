import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from 'reactstrap';
import BodyCreateGame from '../components/CreateGame/BodyCreateGame';
import { ListQuestion } from '../components/CreateGame/ListQuestion';
import QuestionBank from '../components/QuestionBank.js';
import Answer from '../components/TempAnswer/Answer.js';
import Modal_TrueFalse from './Modal_TrueFalse';
const CreateGame: React.FC = () => {
  // const [data, setData] = useState([0, 1, 2, 3]);
  const [data, setData] = useState([
    //{questionTitle; answer_1; answer_2; answer_3; answer_4; species: 'quiz'/'true-false'}
    {
      questionTitle: 'Question 1',
      answer: [
        'Question 1 - Answer 1',
        'Question 1 - Answer 2',
        'Question 1 - Answer 3',
        'Question 1 - Answer 4',
      ],
      species: 'quiz',
    },
    {
      questionTitle: 'Question 2',
      answer: [
        'Question 2 - Answer 1',
        'Question 2 - Answer 2',
        'Question 2 - Answer 3',
        'Question 2 - Answer 4',
      ],
      species: 'true-false',
    },
    {
      questionTitle: 'Question 3',
      answer: [
        'Question 3 - Answer 1',
        'Question 3 - Answer 2',
        'Question 3 - Answer 3',
        'Question 3 - Answer 4',
      ],
      species: 'true-false',
    },
  ]);
  const [selected, setSelected] = useState(0);
  const [lengthData, setLenthData] = useState(data.length);
  const [showDelete, setShowDelete] = useState(false);
  const [index_delete_duplicate, setIndex_Del_Dup] = useState(-1);
  const [IsAddQuestion, setAddQuestion] = useState<any>(0);
  useEffect(() => {
    (document.getElementById('questionTitle') as HTMLInputElement).value =
      data[selected].questionTitle;
  });
  const removeQuestion = (index) => {
    try {
      if (lengthData > 1 && index != -1) {
        data.splice(index, 1);
        setLenthData(data.length);
        toast.success('Delete câu hỏi thành công!');
      } else {
        toast.error('Không thể xóa câu hỏi này!');
      }
    } catch (error) {
      toast.error('Delete ERROR!');
    }
  };

  const duplicateQuestion = (index, dataQuestion) => {
    try {
      data.splice(index, 0, dataQuestion);
      setLenthData(data.length);
      toast.success('Duplicate câu hỏi thành công!');
    } catch (error) {
      toast.error('Duplicate ERROR!');
    }
  };
  const addQuestion = (species) => {
    if (species == 'quiz' || species == 'true-false') {
      data.push({
        questionTitle: 'Question ' + (data.length + 1),
        answer: [
          'Question 3 - Answer 1',
          'Question 3 - Answer 2',
          'Question 3 - Answer 3',
          'Question 3 - Answer 4',
        ],
        species: species,
      });
      setLenthData(data.length);
    }
  };
  return (
    <>
      {/* Delete Question ? */}
      <Modal_TrueFalse
        show={showDelete}
        data={{
          title: 'You want delete question?',
          button_1: {
            title: 'No',
            backgroundColor: 'rgb(242,242,242)',
            color: 'black',
          },
          button_2: {
            title: 'Yes',
            backgroundColor: 'rgb(226,27,60)',
            color: 'white',
          },
        }}
        setClose={() => {
          setShowDelete(false);
        }}
        funcButton_1={() => console.log("Don't delete!")}
        funcButton_2={() => {
          removeQuestion(index_delete_duplicate);
          setIndex_Del_Dup(-1);
        }}
        funcOnHide={() => console.log('Hide Modal')}></Modal_TrueFalse>
      {/* Add Question ? */}
      <Modal_TrueFalse
        show={IsAddQuestion == 1 ? true : false}
        data={{
          title: 'Test knowledge',
          button_1: { title: 'Quiz', backgroundColor: 'rgb(76,175,80)' },
          button_2: {
            title: 'True or False',
            backgroundColor: 'rgb(0,140,186)',
          },
        }}
        setClose={() => {
          setAddQuestion(0);
        }}
        funcButton_1={() => {
          console.log('Add quiz!');
          addQuestion('quiz');
        }}
        funcButton_2={() => {
          console.log('Add True or False!');
          addQuestion('true-false');
        }}
        funcOnHide={() => {}}></Modal_TrueFalse>
      <Container fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              {/* Header  */}
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="11">
                    <h3 className="mb-0">Create Game</h3>
                  </Col>
                  <Col xs="1">
                    <Link to="/admin/game">Back</Link>
                  </Col>
                </Row>
              </CardHeader>
              {/*  */}
              <CardBody style={{ backgroundColor: 'white' }}>
                <div className="container mt--4">
                  <Row className="justify-content-md-center">
                    {/* Navbar */}
                    <Col
                      lg="2"
                      style={{
                        borderRight: '2px solid rgb(200,200,200)',
                      }}>
                      <div>
                        {/* List Question */}
                        <ListQuestion
                          data={data}
                          lengthData={lengthData}
                          selected={selected}
                          funSetSelected={(value) => {
                            setSelected(value);
                            (document.getElementById(
                              'questionTitle',
                            ) as HTMLInputElement).value =
                              data[value].questionTitle;
                          }}
                          funRemoveQuestion={(index) => {
                            setShowDelete(true);
                            setIndex_Del_Dup(index);
                          }}
                          funDuplicate={(index, dataQuestion) =>
                            duplicateQuestion(index, dataQuestion)
                          }></ListQuestion>
                        {/* End list question */}
                        <div className="mt-2">
                          <Button
                            style={{
                              width: '100%',
                              color: 'white',
                              backgroundColor: 'rgb(55,155,255)',
                            }}
                            onClick={(e) => {
                              // e.preventDefault();
                              setAddQuestion(1);
                            }}>
                            Add Question
                          </Button>
                          <div className="mt-2">
                            <QuestionBank
                              widthButton="100%"
                              nameButton="Question Bank"
                              colorButton="rgb(120,77,251)"></QuestionBank>
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* End Navbar */}

                    {/* Body Create game */}
                    <BodyCreateGame
                      data={data}
                      selected={selected}></BodyCreateGame>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateGame;
