import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
import {bindActionCreators} from 'redux';
import { Router, Route } from 'react-router';

const baseUrl = 'http://localhost:4000';

class EditUser extends Component{
  // constructor(props){
  //   console.log()
  //   super(props);
  //   this.state = {user_id:props.params.id,name:'',phone_number:'',password:''};

  // }
  componentWillMount(){
    this.props.fetchUser(this.props.params.id);
  }

  render(){
    const {user} = this.props;
    console.log(this.props);
    if(!user){
        return <div>Loading...</div>
      }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Edit User Details</div>
                <div className="panel-body">
                  <form>
                  	<div className="form-group">
                      <label>Name</label>
                      <input className="form-control" value={user.name} onChange={event=>this.setState({name:event.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input className="form-control" value={user.phone_number} onChange={event=>this.setState({phone_number:event.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" value={user.password} onChange={event=>this.setState({password:event.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={event=>this.editUser(event)}>Update</button>
                    <button type="button" className="btn btn-default" onClick={event=>this.back(event)}>back</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   // Is there a React-y way to avoid rebinding `this`? fat arrow?
  //   var self = this;
  //   let token = localStorage.getItem('token');
  //   if(token){
  //     this.serverRequest = axios({
  //       method:'get',
  //       url:baseUrl+'/users/'+this.state.user_id,
  //       headers: {'x-access-token': token}
  //     })
  //     .then(function (response) {
  //       let user = response.data;
  //       self.setState({name:user.name,phone_number:user.phone_number,password:user.password});
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   }
  //   else{
  //     self.context.router.push('/sign-in');
  //   }
  // }
  // componentWillUnmount() {
  //   if(typeof this.serverRequest.abort=='function'){
  //     this.serverRequest.abort();
  //   }

  // }
  editUser(){
    let self = this;
    let token = localStorage.getItem('token');
    if(token){
      axios({
        method:'post',
        url:baseUrl+'/update_user',
        headers: {'x-access-token': token},
        data:{
          id:self.state.user_id,
          name:self.state.name,
          phone_number:self.state.phone_number,
          password:self.state.password
        }
      })
      .then(function (response) {
        let res = response.data.data;
          if(res.success==true){
            self.context.router.push('/user/user-list');
          }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      self.context.router.push('/sign-in');
    }
  };
  back(){
    this.context.router.push('/user/user-list');
  }
}

function mapStateToProps(state){
  return {user: state.users.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch);
}

function componentWillUnmount() {
  if(typeof this.serverRequest.abort=='function'){
    this.serverRequest.abort();
  }
}


//You have to define the contextTypes as follows right beneath your component:
//to avoid this waring : Warning: [react-router] props.history and context.history are deprecated. Please use context.router
//this comes when we try to redirect with this.context.router.push
EditUser.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
