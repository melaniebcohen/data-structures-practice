'use strict';

const TreeNode = require('../lib/node.js').TreeNode;
const BST = require('../index.js').BST;
require('jest');

describe('Binary Search Tree', () => {
  beforeEach(() => {
    this.bst = new BST();
    let values = [7, 5, 20, 80];
    for (let i of values) { this.bst.insert(new TreeNode(i)); }
  });

  describe('#insert method', () => {
    it('should insert a node', () => {
      this.bst.insert(new TreeNode(70));
      expect(typeof this.bst).toBe('object');
      expect(this.bst.root.val).toBe(7);
      expect(this.bst.root.right.right.left.val).toBe(70);
    });
  });

  describe('#find method', () => {
    it('should return false if a value is not present', () => {
      let result = this.bst.find(3);
      expect(result).toBeFalsy();
    });

    it('should return true if the value is on the root node', () => {
      let result = this.bst.find(7);
      expect(result).toBeTruthy();
    });

    it('should return true if the value is less than the root node', () => {
      let result = this.bst.find(5);
      expect(result).toBeTruthy();
    });

    it('should return true if the value is greater than the root node', () => {
      let result = this.bst.find(20);
      expect(result).toBeTruthy();
    });
  });

  describe('#findMax method', () => {
    it('should return the highest value in the tree', () => {
      let result = this.bst.findMax();
      expect(result).toBe(80);
    });
  });

  describe('#findMin method', () => {
    it('should return the lowest value in the tree', () => {
      let result = this.bst.findMin();
      expect(result).toBe(5);
    });
  });

  describe('#calcHeight method', () => {
    it('should return the height of the tree', () => {
      let result = this.bst.calcHeight(this.bst.root);
      expect(result).toBe(2);
    });

    it('should return a new height of the tree if a node is added', () => {
      this.bst.insert(new TreeNode(2));
      this.bst.insert(new TreeNode(1));
      let result = this.bst.calcHeight(this.bst.root);
      expect(result).toBe(3);
    });
  });
  
  describe('#findNearest method', () => {
    it('should return the nearest node to 3', () => {
      let result = this.bst.findNearest(this.bst.root, 3);
      expect(result).toBe(5);
    });

    it('should return the nearest node to 70', () => {
      let result = this.bst.findNearest(this.bst.root, 70);
      expect(result).toBe(80);
    });
  });
});
