import React, { ComponentType, useEffect, useState } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes';
import { userService } from '../services/user/api';

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
  const [isLogin, setIsLogin] = useState<boolean>();
  useEffect(() => {
    userService
      .getUser()
      .then((res) => setIsLogin(true))
      .catch((error) => setIsLogin(false));
  }, []);
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
  //
  const checkMainContent = (name) => {
    const arrayList = ['Home Page', 'Change Password', 'Blog', 'Courses'];
    for (let i = 0; i < arrayList.length; i++) {
      if (name === arrayList[i]) {
        return true;
      }
    }
    return false;
  };
  if (isLogin === false) {
    return <Redirect to="/auth/login" />;
  }
  return (
    <>
      <Sidebar
        {...props}
        routes={[routes[0], routes[1], routes[2], routes[3], routes[4]]}
        logo={{
          innerLink: '/admin/index',
          imgSrc: require('../assets/img/brand/kahoot-logo.png'),
          imgAlt: '...',
        }}
      />
      {/* ref="mainContent" */}
      <div className="main-content">
        {(() => {
          if (checkMainContent(getBrandText(props.location.pathname))) {
            return (
              <AdminNavbar
                {...props}
                brandText={getBrandText(props.location.pathname)}
              />
            );
          } else {
            return <></>;
          }
        })()}
        {/* <MyNav /> */}
        {/* <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        /> */}
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
        <Container fluid>{/* <AdminFooter /> */}</Container>
      </div>
    </>
  );
};

export default Admin;
