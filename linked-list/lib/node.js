'use strict';

module.exports = exports = {};

exports.ListNode = class {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
};