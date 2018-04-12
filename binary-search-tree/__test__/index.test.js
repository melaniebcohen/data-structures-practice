'use strict';

const TreeNode = require('../lib/node.js').TreeNode;
const BST = require('../index.js').BST;
require('jest');

describe('Binary Search Tree', () => {
  test('#insert method', () => {
    let bst = new BST();
    let values = [7, 5, 20, 80];
    for (let i of values) { bst.insert(new TreeNode(i)) };

    expect(typeof bst).toBe('object');
    expect(bst.root.val).toBe(7);
    expect(bst.root.left.val).toBe(5);
    expect(bst.root.left.left).toBeFalsy();
  });
});
