import React, {Component} from 'react';
import axios from 'axios';
import { Router, Route, hashHistory } from 'react-router';
const baseUrl = 'http://localhost:4000';

class UserList extends Component{
  constructor(props){
    super(props);

    this.state={users:[]};
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
              {this.state.users.map(function(user){
                 return <li key={user.id} className="list-group-item clearfix">
                  <div className="pull-left">{user.name}</div>
                  <div className="pull-right">
                    <button type="button" className="btn btn-danger" onClick={event=>this.submitForm(event)}>Delete</button>
                    <button type="button" className="btn btn-info" onClick={event=>this.submitForm(event)}>Edit</button>
                  </div>
                </li>
              })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var self = this;
    let token = localStorage.getItem('token');
    if(token){
      this.serverRequest = axios({
        method:'get',
        url:baseUrl+'/users',
        headers: {'x-access-token': token}
      })
      .then(function (response) {
        console.log(response.data);
        self.setState({users:response.data});
        // console.log(self.state.users)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      hashHistory.push('/sign-in');
    }
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
}

export default UserList;
