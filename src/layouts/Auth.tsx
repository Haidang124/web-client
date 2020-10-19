import React, { ComponentType, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import AuthFooter from '../components/Footers/AuthFooter';
import AuthNavbar from '../components/Navbars/AuthNavbar';
import routes from '../routes';

interface PropsRoute {
  path: string;
  name: string;
  icon: string;
  component: ComponentType;
  layout: string;
}
const getRoutes = (route: any[]) => {
  return route.map((prop: PropsRoute, key: number) => {
    if (prop.layout === '/auth') {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};
const Auth: React.FC<RouteComponentProps> = () => {
  useEffect(() => {
    document.body.classList.add('bg-default');

    // returned function will be called on component unmount
    return () => {
      document.body.classList.remove('bg-default');
    };
  }, []);
  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Hello Luu Hai Dang</p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
