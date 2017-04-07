import React, {Component} from 'react';
import {Link,Router, Route, hashHistory} from 'react-router';


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
    hashHistory.push('/sign-in');
  }
}
export default TopNavLoggedIn;
