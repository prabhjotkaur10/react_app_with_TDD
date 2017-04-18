import chai, { expect } from 'chai';
import checkIfNumeric from "../../src/components/numeric_check";

describe('empty', () => {
  it('should work', () =>{
    expect(true).to.equal(true);
  });
});

describe('numeric check:', () =>{
  it('should return true if value is provided is of 10 digits', () => {
    let actual = checkIfNumeric('8888888888');
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should return true if value is numeric', () => {
    let actual = checkIfNumeric('8888888888');
    let expected = true;
    expect(actual).to.equal(expected);
  });
});