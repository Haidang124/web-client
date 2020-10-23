import React  from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
  
} from 'reactstrap';
const PlayGame: React.FC = () => {
  return (
    <>
      {/* Page content */}
      <Container fluid>
        <Row >
            <Col className="order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="11">
                                <h3 className="mb-0">Play Game</h3>
                            </Col>
                            <Col xs="1">
                                <Link to='/admin/list-game'>
                                    Back
                                </Link>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className='mt-6'>
                          <Col lg='4' className='center'>
                            <p style={{fontSize: "30px", textAlign: "center", fontWeight:'bold'}}>GAME PIN</p>
                          </Col>
                        </Row>
                        <Row className='mt-5 mb-5'>
                          <Col lg='4' className='center'>
                            <Input 
                              type="number"
                              style={{fontWeight: "bold", textAlign: "center", fontSize: "30px"}}
                            />
                          </Col>
                        </Row>
                        <Row className='mb-9'>
                          <Col lg='4' className="center">
                            <Button style={{width:"365px", fontSize:"20px", fontWeight: "bold"}}>
                              Enter
                            </Button>
                          </Col>
                        </Row>
                        <Row className='mb-9'></Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlayGame;
