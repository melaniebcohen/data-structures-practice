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
    _insert(this.root, newNode);
    }

    function _insert(root, newNode) {
      if (newNode.val < root.val) {
        if (!root.left) {
          root.left = newNode;
        } else {
          _insert(root.left, newNode);
        }
      } else {
        if (!root.right) {
          root.right = newNode;
        } else {
          _insert(root.right, newNode);
        }
      }
    }
  
  }

  find(value) {
    if (!this.root.val) throw new Error('Value required');

    let returnVal = false;
    _traverse(this.root);

    function _traverse(tree) {
      if (tree.val === value) return returnVal = true;

      if (tree.left) {
        if (tree.left.val === value) return returnVal = true;
        _traverse(tree.left);
      }

      if (tree.right) {
        if (tree.right.val === value) return returnVal = true;
        _traverse(tree.right);
      }
    }
    return returnVal;
  }
  
  // Implement findMax as a method of your BinarySearchTree.
  // Implement findMin as a method of your BinarySearchTree.
  // Implement calcHeight as a method of your BinarySearchTree - this should determine the height of the tree.
  // Implement findNearest as a method of your BinarySearchTree - this should return a node with a value closest to the value you pass it.
}