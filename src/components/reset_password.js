import React, {Component} from 'react';
import {matchPasswords} from "../../src/components/numeric_check";

export default class ResetPassword extends Component {
  constructor(props){
    super(props);
    this.state={error:''};
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Reset password</div>
                <div className="panel-body">
                  <form>
                    <p>Please enter a new password for your Account</p>
                    <div className="form-group">
                      <label>Enter password</label>
                      <input className="form-control" ref="password"/>
                    </div>
                    <div className="form-group">
                      <label>Re-enter password</label>
                      <input className="form-control" ref="confirm_password"/>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-success" onClick={event=>this.checkVal(event)}>Submit</button>
                      <button type="button" className="btn btn-default" >Cancel</button>
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
    let password = this.refs.password.value;
    let confirm_password = this.refs.confirm_password.value;
    if (password && confirm_password) {
      let valid = matchPasswords(password, confirm_password);
      if(valid){
        console.log('ok');
      }else{
        this.setState({error:'Both passwords are different.'});
      }
    }
    else{
      this.setState({error:'Enter both values.'});
    }
    // if(!verification_code){
    //   this.setState({error:'Please enter the code'});
    //   return false;
    // }else{
    //   let valid = checkIfAlphaNumeric(verification_code);
    //   if(valid){
    //   let phone_number = localStorage.getItem(phone_number)
    //   //hit the api here and redirect the user to verify page
    //   axios({
    //     method:'post',
    //     url:'http://localhost:3000/api/v1/auth/reset_password',
    //     data:{
    //       login_id:phone_number,
    //       verification_code: verification_code
    //     }
    //   })
    //   .then(function (response) {
    //     let res = response;
    //     console.log(response);
    //       if(res.data.success==true){
    //         self.context.router.push('/verify-forgot-password');
    //       }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
    // }
  }
}