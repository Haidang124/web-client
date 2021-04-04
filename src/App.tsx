import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading/Loading';
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';
import Upload from './Upload/Upload';
import ChooseAnswer from './views/ChooseAnswer';
import CodePin from './views/CodePin';
import Friend from './views/Friend';
import Game from './views/Game';
import GameDetail from './views/GameDetail';
import Lobby from './views/Lobby';
import Ranking from './views/Ranking';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/game/:gameId" component={GameDetail} />
          <Route path="/game" component={Game} />
          <Route path="/codepin" component={CodePin} />
          <Route path="/friend" component={Friend} />
          <Route path="/upload" component={Upload} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/playing-game" component={ChooseAnswer} />
          <Route path="/lobby/:id" component={Lobby} />
          {/* <Route path="/socketio" component={SocketioClient} /> */}
          <Route path="/loading" render={(props) => <Loading />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
