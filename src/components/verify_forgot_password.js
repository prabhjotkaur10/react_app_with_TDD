import React, {Component} from 'react';
import {checkIfAlphaNumeric, maskPhoneNumber} from "../../src/components/numeric_check";
import { Router, Route } from 'react-router';
import axios from 'axios';

export default class VerifyForgotPassword extends Component {
  constructor(props){
    super(props);
    let phone_number = localStorage.getItem('phone_number');
    let en_phone_number = maskPhoneNumber(phone_number);
    this.state={error:'', phone_number: en_phone_number};
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Verify Forgot Password</div>
                <div className="panel-body">
                  <form>
                    <p>A verification code has been sent to you at {this.state.phone_number}</p>
                    <div className="form-group">
                      <label>Enter code</label>
                      <input className="form-control" ref="code"/>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success" onClick={event=>this.checkVal(event)}>Verify</button>
                      <button type="button" className="btn btn-default" >Resend</button>
                      <span className="error">{this.state.error}</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  checkVal(){
    var self = this;
    let verification_code = this.refs.code.value;
    if(!verification_code){
      this.setState({error:'Please enter the code'});
      return false;
    }else{
      let valid = checkIfAlphaNumeric(verification_code);
      if(valid){
      let phone_number = 'z8a1m5aew';
      console.log(phone_number);
      //hit the api here and redirect the user to verify page
      axios({
        method:'post',
        url:'http://localhost:3000/api/v1/auth/reset_password',
        data:{
          login_id:phone_number,
          verification_code: verification_code
        }
      })
      .then(function (response) {
        let res = response;
        console.log(response);
          if(res.data.success==true){
            self.context.router.push('/reset-password');
          }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    }
  }
}

VerifyForgotPassword.contextTypes = {
  router: React.PropTypes.object
};
