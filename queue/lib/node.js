'use strict';

module.exports = exports = {};

exports.QueueNode = class {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
};