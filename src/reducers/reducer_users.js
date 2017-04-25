import {FETCH_USERS} from "../actions/index";
import {FETCH_USER} from "../actions/index";
import {CREATE_USER} from "../actions/index";


const INITIAL_STATE = { all: [], user: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
    console.log('fetch-users');
    if(action.payload.data){
      return { ...state, all: action.payload.data };
    }else{
      return { ...state, all: {} };
    }
      //ES6 version for concat
    case FETCH_USER:
    console.log(action.payload.data);
    if(action.payload.data){
      return { ...state, user: action.payload.data};
    }else{
      return { ...state, user: {}};
    }
    // case CREATE_USER:
    //   console.log(action.payload.data);
    default:
    console.log('default');
      return state;
  }
}