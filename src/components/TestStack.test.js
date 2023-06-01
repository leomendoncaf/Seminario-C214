const { describe, it } = require('mocha');
const { expect } = require('chai');
const Stack = require('./Stack');

describe('Stack', () => {
  it('should push elements to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).to.equal(2);
  });

  it('should pop elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const poppedElement = stack.pop();
    expect(poppedElement).to.equal(2);
    expect(stack.size()).to.equal(1);
  });

  it('should return the top element without removing it', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const topElement = stack.peek();
    expect(topElement).to.equal(2);
    expect(stack.size()).to.equal(2);
  });

  it('should return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).to.be.true;
  });

  it('should return false if the stack is not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).to.be.false;
  });

  it('should clear all elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.isEmpty()).to.be.true;
  });
});
