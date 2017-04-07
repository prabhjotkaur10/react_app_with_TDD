import React, {Component} from 'react';
import axios from 'axios';
import { Link, Router, Route } from 'react-router';
const baseUrl = 'http://localhost:4000';

class UserList extends Component{
  constructor(props){
    super(props);

    this.state={users:[]};
  }

  renderList(){
    return this.state.users.map(function(user){
       return (<li key={user.id} className="list-group-item clearfix">
        <div className="pull-left">{user.name}</div>
        <div className="pull-right">
          {/*<button type="button" className="btn btn-info" onClick={event => self.goToEditUser(user.id)}>Edit</button>*/}
          <Link className="btn btn-info" to={'/user/edit-user/'+user.id}>Edit</Link>
          <button type="button" className="btn btn-danger" onClick={event=>self.deleteUser(user.id)}>Delete</button>
        </div>
      </li>)
    })
  }

  render(){
    var self = this;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
              {this.renderList()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getData(token){
    let self=this;
    this.serverRequest = axios({
      method:'get',
      url:baseUrl+'/users',
      headers: {'x-access-token': token}
    })
    .then(function (response) {
      self.setState({users:response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var self = this;
    let token = localStorage.getItem('token');
    if(token){
      this.getData(token);
    }
    else{
      self.context.router.push('/sign-in');
    }
  }
  componentWillUnmount() {
    if(typeof this.serverRequest.abort=='function'){
      this.serverRequest.abort();
    }

  };

  deleteUser(user_id){
    let self = this;
    let token = localStorage.getItem('token');
    axios({
      method:'post',
      url:baseUrl+'/delete_user',
      headers: {'x-access-token': token},
      data:{
        id:user_id
      }
    })
    .then(function (response) {
      let res = response.data.data;
        if(res.success==true){
          self.getData(token);
        }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

//You have to define the contextTypes as follows right beneath your component:
//to avoid this waring : Warning: [react-router] props.history and context.history are deprecated. Please use context.router
//this comes when we try to redirect with this.context.router.push
UserList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserList;
