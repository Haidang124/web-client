import React from 'react';
// react plugin used to create charts
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import '../assets/scss/component/ranking.scss';
interface Props {
  numberPlayer: number;
  data: {
    backgroundColor: Array<string>;
    arrNamePlayer: Array<string>;
    numberCorrect: Array<number>;
    nameRanking: string;
    label: string;
  };
  destroyFunction: () => void;
}

const Ranking: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Col xl="8">
        <Card className="shadow mychart">
          <CardHeader className="bg-transparent">
            <Row className="align-items-center ">
              <div className="col d-flex flex-column align-items-center ">
                <h6 className="text-uppercase text-muted ls-1 mb-1 title">
                  Ranking
                </h6>
                <h2 className="mb-0 title-ranking">{props.data.nameRanking}</h2>
              </div>
              <button
                className="btn btn-danger btn-glossary"
                onClick={() => {
                  if (props.destroyFunction) {
                    props.destroyFunction();
                  }
                }}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </Row>
          </CardHeader>
          <CardBody>
            <div className="chart">
              <Bar
                data={{
                  labels: props.data.arrNamePlayer,
                  datasets: [
                    {
                      label: props.data.label,
                      backgroundColor: props.data.backgroundColor,
                      data: props.data.numberCorrect,
                    },
                  ],
                }}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                  legend: { display: false },
                }}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Ranking;
