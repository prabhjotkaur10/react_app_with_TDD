import {FETCH_USERS} from "../actions/index";
import {FETCH_USER} from "../actions/index";
import {CREATE_USER} from "../actions/index";


const INITIAL_STATE = { all: [], user: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
    console.log(action.payload.data);
      return { ...state, all: action.payload.data };
      //ES6 version for concat
    case FETCH_USER:
    console.log(action.payload.data);
      return { ...state, user: action.payload.data};
    // case CREATE_USER:
    //   console.log(action.payload.data);
    default:
      return state;
  }
}