import * as constants from './action-types';

const {
  SET_USER_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_PASSWORD_CONFIRM,  
} = constants;

export function setUserName(value) {
  return {
    type: SET_USER_NAME,
    payload: value
  }
}

export function setEmail(value) {
  return {
    type: SET_EMAIL,
    payload: value
  }
}

export function setPassword(value) {
  return {
    type: SET_PASSWORD,
    payload: value
  }
}
export function setPasswordConfirm(value) {
  return {
    type: SET_PASSWORD_CONFIRM,
    payload: value
  }
}
