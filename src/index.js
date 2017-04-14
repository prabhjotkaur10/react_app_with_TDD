import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

//import external files
import App from './components/app';
import Signup from './components/sign_up';
import Signin from './components/sign_in';
import Userlist from './components/user_list';
import TopNavLoggedIn from './components/top_nav_logged_in';
import EditUser from './components/edit_user';

import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  promise
  //middleware -> make sure that all the actions flow through promise before reaching to reducers
)(createStore);

render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
        <IndexRoute component={Signup}/>
        <Route path="sign-up" component={Signup}/>
        <Route path="sign-in" component={Signin}/>
      </Route>
      <Route path="/user" component={TopNavLoggedIn}>
        <Route path="user-list" component={Userlist}/>
        <Route path="edit-user/:id" component={EditUser}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('wrapper'))

// ReactDOM.render(<App />, document.querySelector('.wrapper'));
