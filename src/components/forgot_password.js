import React,{Component} from "react";
import {checkIfNumeric} from "./numeric_check";
import { Router, Route } from 'react-router';
import axios from 'axios';

export default class ForgotPassword extends Component{
	constructor(props){
    super(props);
    this.state={error:''};
  }
  componentDidMount() {
    // console.log('componentDidMount called');
  }
	render(){
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
              <div className="panel panel-primary">
                <div className="panel-heading">Forgot Password</div>
                <div className="panel-body">
                  <form>
                  	<p>Please enter your phone number to receive instructions for resetting your password.</p>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input className="form-control" ref="phone_number"/>
                    </div>
                    <div className="btn-group">
	                    <button type="button" className="btn btn-success" onClick={event=>this.checkVal(event)}>Next</button>
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

	checkVal(e){
		e.preventDefault();
		var self = this;
		console.log('simulate');
		let phone_number = this.refs.phone_number.value;
		if(!phone_number){
			this.setState({error:'Enter phone number'});
			return false;
		}
		let valid = checkIfNumeric(phone_number);
		if(valid){
			//hit the api here and redirect the user to verify page
	    axios({
	      method:'post',
	      url:'http://localhost:3000/api/v1/auth/reset_password',
	      data:{
	        login_id:phone_number,
	        country_code: '91'
	      }
	    })
	    .then(function (response) {
	      let res = response;
	      console.log(response);
	        if(res.data.success==true){
            localStorage.setItem('phone_number', phone_number)
	          self.context.router.push('/verify-forgot-password');
	        }
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
		}else{
			this.setState({error:'Invalid phone number'});
		}
	}
}

ForgotPassword.contextTypes = {
  router: React.PropTypes.object
};

