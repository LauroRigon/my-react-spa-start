import * as constants from './action-types';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',  
}

export default (state = initialState, action) => {
  const {
    SET_USER_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_PASSWORD_CONFIRM,  
  } = constants;

  
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, username: action.payload}

    case SET_EMAIL:
      return {...state, email: action.payload}

    case SET_PASSWORD:
      return {...state, password: action.payload}

    case SET_PASSWORD_CONFIRM:
      return {...state, passwordConfirm: action.payload}
  
    default:
      return state;
  }
}

