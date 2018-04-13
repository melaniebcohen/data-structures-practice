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
  
  findMax() {
    let maxVal = 0;
    _traverse(this.root);

    function _traverse(tree) {
      if (tree.val > maxVal) maxVal = tree.val;
      if (tree.left) _traverse(tree.left);
      if (tree.right) _traverse(tree.right);
      }
    return maxVal;
  }

  findMin() {
    let minVal;
    _traverse(this.root);

    function _traverse(tree) {
      if (tree.val < minVal || !minVal) minVal = tree.val;
      if (tree.left) _traverse(tree.left);
      if (tree.right) _traverse(tree.right);
    }
    return minVal;
  }

  // got help from: http://blog.benoitvallon.com/data-structures-in-javascript/the-binary-search-tree-data-structure/
  calcHeight(tree) {
    if (!tree) return -1;
    let left = this.calcHeight(tree.left);
    let right = this.calcHeight(tree.right);
    return Math.max(left, right) + 1;
  }

  findNearest(tree, nearest) {
    let result = tree.val;
    let diff = Math.abs(result - nearest);
    _traverse(tree);

    function _traverse(tree) {
      if (!tree) return;
      if (Math.abs(tree.val - nearest) < diff) {
        diff = Math.abs(tree.val - nearest);
        result = tree.val;
      }
      _traverse(tree.left);
      _traverse(tree.right);
    }
    return result;
  }
}