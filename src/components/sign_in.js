import React, {Component} from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:4000';
import { Router, Route, hashHistory } from 'react-router';

class SignInUser extends Component{
  constructor(props){
    super(props);
    this.state={phone_number:'',password:''};
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Sign In</div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input className="form-control" value={this.state.phone_number} onChange={event=>this.setState({phone_number:event.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" value={this.state.password} onChange={event=>this.setState({password:event.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={event=>this.signIn(event)}>Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  signIn(){
    let self = this;
    axios.post(baseUrl+'/sign_in', {
      phone_number: this.state.phone_number,
      password: this.state.password
    })
    .then(function (response) {
      let res = response.data;
      if(res.data.success==true){
        self.setState({phone_number:'',password:''});
        localStorage.setItem('token',res.data.token);
        hashHistory.push('/user-list');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default SignInUser;
