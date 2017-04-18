import React,{Component} from "react";
import checkIfNumeric from "./numeric_check";

export default class ForgotPassword extends Component{
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
		console.log(this.refs.phone_number.value);
		let phone_number = this.refs.phone_number.value;
		let valid = checkIfNumeric(phone_number);
		console.log(valid);
	}
}

ForgotPassword.contextTypes = {
  router: React.PropTypes.object.isRequired
};

