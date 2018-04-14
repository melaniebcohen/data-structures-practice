'use strict';

const StackNode = require('../lib/node.js').StackNode;
const Stack = require('../index.js').Stack;
require('jest');

describe('Stack', () => {
  beforeEach(() => {
    this.stack = new Stack();
  });

  describe('#push method', () => {
    it('should add a node to the stack', () => {
      this.stack.push(new StackNode(3));
      expect(this.stack.top.value).toEqual(3);

      this.stack.push(new StackNode(5));
      expect(this.stack.top.value).toEqual(5);
      expect(typeof this.stack).toEqual('object');
      expect(this.stack.size).toEqual(2);
    });
  });

  describe('#pop method', () => {
    it('should pop a node from the stack', () => {
      this.stack.push(new StackNode(3));
      this.stack.push(new StackNode(5));
      this.stack.push(new StackNode(15));
      this.stack.pop();
      expect(this.stack.top.value).toEqual(5);
      expect(typeof this.stack).toEqual('object');
      expect(this.stack.size).toEqual(2);

      this.stack.pop();
      this.stack.pop();
      expect(this.stack.top).toBeFalsy();
    });
  });

});