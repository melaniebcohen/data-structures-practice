'use strict';

module.exports = exports = {};

exports.List = class {
  constructor() {
    for (let idx in arguments) {
      this[idx] = arguments[idx];
    }
    this.length = arguments.length;
  }

  copy() {
    let copy = this;
    for (let prop in this) {
      copy[prop] = this[prop];
    }
    return copy;
  }

  push(value) {
    let copy = this.copy();
    copy[copy.length++] = value;
    return copy;
  }
  
  pop() {    
    let copy = this.copy();
    copy.length -= 1;
    delete copy[copy.length];
    return copy;
  }
};