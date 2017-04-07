import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//import external files
import App from './components/app';
import Signup from './components/sign_up';
import Signin from './components/sign_in';
import Userlist from './components/user_list';
import TopNavLoggedIn from './components/top_nav_logged_in';





render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
      <Route path="sign-up" component={Signup}/>
      <Route path="sign-in" component={Signin}/>
    </Route>
    <Route path="/user" component={TopNavLoggedIn}>
      <Route path="user-list" component={Userlist}/>
    </Route>





  </Router>
), document.getElementById('wrapper'))

// ReactDOM.render(<App />, document.querySelector('.wrapper'));
