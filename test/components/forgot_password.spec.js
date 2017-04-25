import React from 'react';
import chai, { expect, assert} from 'chai';
import { shallow, mount } from 'enzyme';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag, scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import ForgotPassword from "../../src/components/forgot_password";
import {checkIfNumeric, checkIfAlphaNumeric, maskPhoneNumber} from "../../src/components/numeric_check";
import * as actionCreator from '../../src/actions/index';
import fetchUsersReducer from "../../src/reducers/reducer_users";

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// get the window object out of the document
var win = doc.defaultView;
// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;
// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);
// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

describe('empty', () => {
  it('should work', () =>{
    expect(true).to.equal(true);
  });
});

describe('numeric check for phone number:', () =>{
  it('should return true if value is provided is of 10 digits', () => {
    let actual = checkIfNumeric('8888888888');
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should return false if value is provided is less than 10 digits', () => {
    let actual = checkIfNumeric('888888888');
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should return true if value is numeric', () => {
    let actual = checkIfNumeric('8888888888');
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should return false if value is numeric', () => {
    let actual = checkIfNumeric('888888cc888');
    let expected = false;
    expect(actual).to.equal(expected);
  });
});

describe('numeric check for verification code:', () =>{
  it('should return true if value is provided is of 5 digits', () => {
    let actual = checkIfAlphaNumeric('abc12');
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should return false if value is provided is less than 5 digits', () => {
    let actual = checkIfAlphaNumeric('abc');
    let expected = false;
    expect(actual).to.equal(expected);
  });

  it('should return true if value is alpha numeric', () => {
    let actual = checkIfAlphaNumeric('abc12');
    let expected = true;
    expect(actual).to.equal(expected);
  });
});

describe('should return customized number', () => {
  it('should return phone number like 99******19', () => {
    let actual = maskPhoneNumber('9988669919');
    let expected = '99******19';
    expect(actual).to.equal(expected);
  });
  it('should return not return with failure', () => {
    let actual = maskPhoneNumber('998866991');
    let expected = false;
    expect(actual).to.equal(expected);
  });
});

describe('Forgot Password page', () => {
  let component;
  beforeEach(()=>{
    component = renderIntoDocument(
        <ForgotPassword></ForgotPassword>
      );
  });

  it('forgot password to have phone_number ref', ()=>{
    let wrapper = mount(<ForgotPassword/>);
    expect(wrapper).to.have.ref('phone_number');
    expect(wrapper).not.to.have.ref('phone_number1');
    expect(wrapper).to.have.state('error');
  })

  it('should run reset password api', () =>{
    // let mockEvent = new Event('click');
    // let actual = component.checkVal(mockEvent);
    // console.log('actual =' + component.checkVal(mockEvent));
    const button = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(button[0]);

    // expect('ok').to.equal('ok');
  });

  it('expect ForgotPassword component to exist', () => {
    expect(component).to.exist;
  });

  it('should render an input field and buttons', () => {
    const inputField = findRenderedDOMComponentWithTag(component, 'input');
    const button = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(component).to.exist;
    expect(inputField).to.be.ok;
    expect(button).to.be.ok;
    expect(button.length).to.equal(2);
  });
});

describe('Action::FETCH_USERS', function(){
  describe('#fetchUsers()', function(){
    it('should have a type and a payload for FETCH_USERS', function(){
      // execute
      let action = actionCreator.fetchUsers();

      // verify
      expect(action).to.deep.equal({
        payload: {},
        type: 'FETCH_USERS'
      });
    });
  });

  describe('#fetchUser()', function(){
    it('should have a type and a payload for FETCH_USER', function(){
      // execute
      let action = actionCreator.fetchUser();

      // verify
      expect(action).to.deep.equal({
        payload: {},
        type: 'FETCH_USER'
      });
    });
  });

  describe('#createUser()', function(){
    it('should have a type and a payload for CREATE_USER', function(){
      // execute
      let action = actionCreator.createUser();

      // verify
      expect(action).to.deep.equal({
        payload: {},
        type: 'CREATE_USER'
      });
    });
  });
});

describe('reducer', ()=> {
  it('return all users', ()=>{
      function stateBefore(){
        return{
          all: {}
        }
      }

      const action = {
        type: 'FETCH_USERS',
        payload: 'http://localhost:4000/users'
      };

      const actual = fetchUsersReducer(stateBefore(), action);
      const expected = {
        all:{}
      }
      expect(actual).to.deep.equal(expected);
  })

  it('return a user with an id', ()=>{
      function stateBefore(){
        return{
          user: {}
        }
      }

      const action = {
        type: 'FETCH_USER',
        payload: 'http://localhost:4000/users/1'
      };

      const actual = fetchUsersReducer(stateBefore(), action);
      const expected = {
        user:{}
      }
      expect(actual).to.deep.equal(expected);
  })
});

