import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

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

export function editUser(props){
  const request = axios.post(`${ROOT_URL}/update_user`, props);
  return{
    type: EDIT_USER,
    payload: request
  };
}

export function deleteUser(props){
  const request = axios.post(`${ROOT_URL}/delete_user`, props);
  return{
    type: DELETE_USER,
    payload: request
  };
}
