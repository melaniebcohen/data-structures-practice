'use strict';

module.exports = exports = {};

exports.LinkedList = class {
  constructor() {
    this.root = null;
  }

  prepend(node) {
    node.next = this.root;
    this.root = node;
  }

  append(node) {
    let current = this.root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  find(value) {
    let found = false;
    let current = this.root;
    while (current.next !== null) {
      if (current.value === value) return found = true;
      current = current.next;
    }
    return found;
  }
};