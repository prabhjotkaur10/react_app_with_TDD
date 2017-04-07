import React, { Component } from 'react';
import SignUpUser from './sign_up';
import TopNav from './top_nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav/>
        {this.props.children}
      </div>
    );
  }
}
