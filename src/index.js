import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
//this is to avoid hash in url and url junk string, so used browserHistory
import useRouterHistory from 'react-router/lib/useRouterHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

//import external files
import App from './components/app';
import Signup from './components/sign_up';
import Signin from './components/sign_in';
import Userlist from './components/user_list';
import EditUser from './components/edit_user';





render((
  <Router history={appHistory}>
  	<Route path="/" component={App}>
      <IndexRoute component={Signup}/>
      <Route path="sign-up" component={Signup}/>
      <Route path="sign-in" component={Signin}/>
      <Route path="user-list" component={Userlist}/>
      <Route path="edit-user" component={EditUser}/>
    </Route>




  </Router>
), document.getElementById('wrapper'))

// ReactDOM.render(<App />, document.querySelector('.wrapper'));
