import React, {Component} from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:4000';
import { Router, Route } from 'react-router';


class EditUser extends Component{
  constructor(props){
    super(props);
    this.state={};
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
                      <label>Name</label>
                      <input className="form-control" value={this.state.name} onChange={event=>this.setState({phone_number:event.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input className="form-control" value={this.state.phone_number} onChange={event=>this.setState({phone_number:event.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" value={this.state.password} onChange={event=>this.setState({password:event.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={event=>this.editUser(event)}>Edit</button>
                    <button type="button" className="btn btn-success" onClick={event=>this.cancel(event)}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  editUser(){
    let self = this;
  }
}

//You have to define the contextTypes as follows right beneath your component:
//to avoid this waring : Warning: [react-router] props.history and context.history are deprecated. Please use context.router
//this comes when we try to redirect with this.context.router.push
EditUser.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default EditUser;
