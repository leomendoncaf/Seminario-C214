import Stack from './Stack';
describe('Stack', () => {
  test('should push elements to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test('should pop elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test('should return the top element without removing it', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const top = stack.peek();
    expect(top).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test('should return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('should return false if the stack is not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should clear all elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
