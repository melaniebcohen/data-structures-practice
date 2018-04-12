'use strict';

module.exports = exports = {};

exports.TreeNode = class {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};
