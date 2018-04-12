'use strict';

module.exports = exports = {};

exports.BST = class {
  constructor(root = null) {
    this.root = root;
  }

  insert(newNode) {
    if (!newNode) throw new Error('No node, cannot perform insert');
    if (!this.root) {
      this.root = newNode;
    } else {
    this._insert(this.root, newNode);
    }
  }

  _insert(root, newNode) {
    if (newNode.val < root.val) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this._insert(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this._insert(root.right, newNode);
      }
    }
  }
}

// Implement find as a method of your BinarySearchTree.
// Implement findMax as a method of your BinarySearchTree.
// Implement findMin as a method of your BinarySearchTree.
// Implement calcHeight as a method of your BinarySearchTree - this should determine the height of the tree.
// Implement findNearest as a method of your BinarySearchTree - this should return a node with a value closest to the value you pass it.
