import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

//import external files
import App from './components/app';
import Signup from './components/sign_up';
import Signin from './components/sign_in';
import Userlist from './components/user_list';
// import Userlist from './components/user_list';





render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
      <IndexRoute component={Signup}/>
      <Route path="sign-up" component={Signup}/>
      <Route path="sign-in" component={Signin}/>
      <Route path="user-list" component={Userlist}/>
    </Route>




  </Router>
), document.getElementById('wrapper'))

// ReactDOM.render(<App />, document.querySelector('.wrapper'));
