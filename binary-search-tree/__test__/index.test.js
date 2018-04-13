'use strict';

const TreeNode = require('../lib/node.js').TreeNode;
const BST = require('../index.js').BST;
require('jest');

describe('Binary Search Tree', () => {
  beforeEach(() => {
    this.bst = new BST();
    let values = [7, 5, 20, 80];
    for (let i of values) { this.bst.insert(new TreeNode(i)) };
  });

  describe('#insert method', () => {
    it('should insert a node', () => {
      this.bst.insert(new TreeNode(70));
      expect(typeof this.bst).toBe('object');
      expect(this.bst.root.val).toBe(7);
      expect(this.bst.root.right.right.left.val).toBe(70);
    })
  });

  describe('#find method', () => {
    it('should return false if a value is not present', () => {
      let result = this.bst.find(3);
      expect(result).toBeFalsy();
    })

    it('should return true if the value is on the root node', () => {
      let result = this.bst.find(7);
      expect(result).toBeTruthy();
    })

    it('should return true if the value is less than the root node', () => {
      let result = this.bst.find(5);
      expect(result).toBeTruthy();
    })

    it('should return true if the value is greater than the root node', () => {
      let result = this.bst.find(20);
      expect(result).toBeTruthy();
    })
  });
});
