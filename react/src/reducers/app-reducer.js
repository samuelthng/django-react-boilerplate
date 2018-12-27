import { SET_CSRF, SET_TITLE } from '../actions';

const INIT_STATE = {
  csrf: "",
  title: ""
};

const app = (state = INIT_STATE, action) => {
  let { type, payload } = action;

  switch (type) {
  case SET_CSRF:
    return { ...state, csrf: payload };

  case SET_TITLE:
    return { ...state, title: payload };

  default:
    return state;
  }
};

export default app;