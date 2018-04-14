'use strict';

// STACK - FIRST IN, LAST OUT

module.exports = exports = {};

exports.Stack = class {
  constructor(maxSize = 1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(node) {
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let topNode = this.top;
    this.top = topNode.next;
    topNode.next = null;
    this.size--;
    return topNode;
  }
};