import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';
import { userService } from './services/user/api';

const App: React.FC = () => {
  useEffect(() => {
    userService.getUser().then((response) => {
      console.log(response.data);
    });
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
