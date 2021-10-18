const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.bstRoot = null;
  }

  root() {
    return this.bstRoot;
  }

  add(data) {
    this.bstRoot = addDateToBst(this.bstRoot, data);

    function addDateToBst(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addDateToBst(node.left, data);
      } else {
        node.right = addDateToBst(node.right, data)
      }

      return node;
    }

  }

  has(data) {
    let result = hasData(this.bstRoot, data);

    function hasData(node, data) {

      if (!node) {
        return false;
      }
      
      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
      
    }

    return result;
  }

  find(data) {

    return findData(this.bstRoot, data);

    function findData(node, data) {

      if (!node) {
        return null;
      }
      
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
      
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
  }

  min() {
    if (!this.bstRoot) {
      return;
    }

    let node = this.bstRoot;
    let minData = node.data;

    while (node.left) {
      node = node.left;
      minData = node.data;
    }

    return minData;

  }

  max() {
    if (!this.bstRoot) {
      return;
    }

    let node = this.bstRoot;
    let maxData = node.data;

    while (node.right) {
      node = node.right;
      maxData = node.data;
    }

    return maxData;

  }

}