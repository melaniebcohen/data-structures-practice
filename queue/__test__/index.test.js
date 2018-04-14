'use strict';

const Queue = require('../index.js').Queue;
require('jest');

describe('Queue', () => {
  beforeEach(() => {
    this.queue = new Queue();
  });

  describe('#enqueue method', () => {
    it('should add a node to the queue', () => {
      // expect(this.queue.qLength).toEqual(0);

      // this.queue.enqueue(2);
      // this.queue.enqueue(17);
      // expect(this.queue[0]).toEqual(2);
      // expect(this.queue[1]).toEqual(17);
      // expect(this.queue.qLength).toEqual(2);
    });
  });

  describe('#dequeue method', () => {
    it('should remove a node from the queue', () => {
      // this.queue.enqueue(2);
      // this.queue.enqueue(17);
      // this.queue.enqueue(33);
      // console.log(this.queue)

      // this.queue.dequeue();
      // console.log(this.queue)
      // expect(this.queue[0]).toEqual(2);
      // expect(this.queue[1]).toEqual(null);
      // expect(this.queue.qLength).toEqual(1);
    });
  });

});