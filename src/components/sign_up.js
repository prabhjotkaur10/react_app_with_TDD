import React, {Component} from 'react';

class SignUpUser extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <form>
              <div className="form-group">
                <label>Phone Number</label>
                <input className="form-control"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password"/>
              </div>
              <button type="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpUser;
