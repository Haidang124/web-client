import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';
const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
