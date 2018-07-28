import { combineReducers } from "redux";

import userReducer from './user/user';
import loginReducer from '../components/Auth/Login/reducer';
import registerReducer from '../components/Auth/Register/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: combineReducers({
    login: loginReducer,
    register: registerReducer,
  })
});

export default rootReducer;