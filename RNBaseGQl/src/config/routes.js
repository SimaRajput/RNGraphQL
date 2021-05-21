import ChangePassword from '../containers/auth/change-password';
import Dashboard from '../containers/Dashboard';
import ForgotPassword from '../containers/auth/forgot-password';
import { Loader } from '../components';
import Login from '../containers/auth/Login';
import Signup from '../containers/auth/Signup';
import Welcome from '../containers/Welcome';
import {
   Messages,
   User,
   Register,
   Delete,
   Update
} from '../containers/messages';

export default {
  ChangePassword: { screen: ChangePassword },
  Dashboard: { screen: Dashboard },
  ForgotPassword: { screen: ForgotPassword },
  Loader: { screen: Loader },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Welcome: { screen: Welcome },
  Messages: { screen: Messages },
  User: { screen: User } ,
  Register: { screen: Register },
  Delete: { screen: Delete },
  Update: { screen: Update }
};
