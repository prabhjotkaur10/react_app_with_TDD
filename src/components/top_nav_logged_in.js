import React, {Component} from 'react';
import {Link,Router, Route} from 'react-router';


class TopNavLoggedIn extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React-Express App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link onClick={event=>this.logout(event)}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{this.props.children}</div>
    </div>
    );
  };
  logout(){
    localStorage.removeItem('token');
    this.context.router.push('/sign-in');
  }
}

//You have to define the contextTypes as follows right beneath your component:
//to avoid this waring : Warning: [react-router] props.history and context.history are deprecated. Please use context.router
//this comes when we try to redirect with this.context.router.push
TopNavLoggedIn.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default TopNavLoggedIn;
