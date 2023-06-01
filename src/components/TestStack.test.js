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
});
