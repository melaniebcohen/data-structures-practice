'use strict';

module.exports = exports = {};

exports.StackNode = class {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};