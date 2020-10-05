import React, { ComponentType } from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import AdminFooter from '../components/Footers/AdminFooter';
import Sidebar from '../components/Sidebar/Sidebar';

import routes from '../routes';
interface PropsRoute {
  path: string;
  name: string;
  icon: string;
  component: ComponentType;
  layout: string; 
}
const getRoutes = (route: any) => {
  return route.map((prop: PropsRoute, key: number) => {
    if (prop.layout === '/admin') {
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

const Admin: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  // componentDidUpdate(e) {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.mainContent.scrollTop = 0;
  // }
  const getBrandText = (path: any) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        // logo={{
        //   innerLink: '/admin/index',
        //   imgSrc: require('assets/img/brand/argon-react.png'),
        //   imgAlt: '...',
        // }}
      />
      {/* ref="mainContent" */}
      <div className="main-content">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
