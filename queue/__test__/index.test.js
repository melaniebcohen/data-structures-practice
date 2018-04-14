'use strict';

const Queue = require('../index.js').Queue;
require('jest');

describe('Queue', () => {
  beforeEach(() => {
    this.queue = new Queue();
  });

  describe('#enqueue method', () => {
    it('should add a node to the queue', () => {
      expect(this.queue.length).toEqual(0);
      this.queue.enqueue(3);
      this.queue.enqueue(17);
      expect(this.queue.first.value).toEqual(3);
      expect(this.queue.length).toEqual(2);
    });
  });

  describe('#dequeue method', () => {
    it('should remove a node from the queue', () => {
      this.queue.enqueue(2);
      this.queue.enqueue(17);
      this.queue.enqueue(33);

      this.queue.dequeue();
      expect(this.queue.first.value).toEqual(17);

      this.queue.dequeue();
      expect(this.queue.first.value).toEqual(33);
      expect(this.queue.last.value).toEqual(33);

      this.queue.dequeue();
      expect(this.queue).toEqual({'first': null, 'last': null, 'length': 0});
    
      expect(() => { this.queue.dequeue();}).toThrowError('cannot dequeue empty queue');
    });
  });
});