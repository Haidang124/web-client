import Profile from './views/Profile';
import Register from './views/Register';
import Login from './views/Login';
import Header from './components/Headers/Header';
import ChangePassword from './views/ChangePassword';
let routes = [
  {
    path: '/index',
    name: 'Home Page',
    icon: 'ni ni-tv-2 text-primary',
    component: Header,
    layout: '/admin',
  },
  {
    path: '/game',
    name: 'Game',
    icon: 'ni ni-controller text-primary',
    component: Header,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/admin',
  },
  {
    path: '/changePassword',
    name: 'Change Password',
    icon: 'ni ni-key-25 text-info',
    component: ChangePassword,
    layout: '/admin',
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: Register,
    layout: '/auth',
  },
  
];
export default routes;
