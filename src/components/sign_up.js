import React, {Component} from 'react';
import axios from 'axios';
import { Router, Route } from 'react-router';
import {connect} from 'react-redux';
import {createUser} from '../actions/index';
import {bindActionCreators} from 'redux';
const baseUrl = 'http://localhost:4000';

class SignUpUser extends Component{
  constructor(props){
    super(props);
    this.state={name:'',phone_number:'',password:''};
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Sign Up</div>
                <div className="panel-body">
                  <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"  ref="name"/>
                  </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input className="form-control" ref="phone_number"/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" ref="password"/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={event=>this.submitForm(event)}>Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  submitForm(){
    let self = this;
    let params={
        name:this.refs.name.value,
        phone_number:this.refs.phone_number.value,
        password:this.refs.password.value
      }
    this.props.createUser(params)
    .then(() =>{
      this.context.router.push('/user/user-list');
    })
    // axios.post(baseUrl+'/create_user', {
    //   name: this.state.name,
    //   phone_number: this.state.phone_number,
    //   password: this.state.password
    // })
    // .then(function (response) {
    //   let res = response.data;
    //   if(res.data.success==true){
    //     self.setState({name:'',phone_number:'',password:''});
    //     localStorage.setItem('token',res.data.token);
    //     //redirection to user-list page
    //     self.context.router.push('/user/user-list');
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
}

function mapStateToProps(state){
  return {user: state.users.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser}, dispatch);
}

function componentWillUnmount() {
  if(typeof this.serverRequest.abort=='function'){
    this.serverRequest.abort();
  }
}

//You have to define the contextTypes as follows right beneath your component:
//to avoid this waring : Warning: [react-router] props.history and context.history are deprecated. Please use context.router
//this comes when we try to redirect with this.context.router.push
SignUpUser.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUser);
