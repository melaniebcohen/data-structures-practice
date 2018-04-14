'use strict';

const Node = require('./lib/node').QueueNode;

module.exports = exports = {};

exports.Queue = class {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    if (!value) throw new Error('No value provided');
    let newNode = new Node(value, null);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.first !== null) {
      let newFirst = this.first;
      this.first = this.first.next;
      this.length--;

      if (this.length === 0) this.last = null;
      return newFirst;
    }
    if (!this.first) throw new Error('cannot dequeue empty queue');
  }
};