import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const SIGNIN_USER = 'SIGNIN_USER';

const ROOT_URL = 'http://localhost:4000';

export function fetchUsers(){
  const request = axios.get(`${ROOT_URL}/users`);
  return{
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchUser(id){
  const request = axios.get(`${ROOT_URL}/users/${id}`);
  return{
    type: FETCH_USER,
    payload: request
  };
}

export function createUser(props){
  const request = axios.post(`${ROOT_URL}/create_user`, props);
  return{
    type: CREATE_USER,
    payload: request
  };
}
