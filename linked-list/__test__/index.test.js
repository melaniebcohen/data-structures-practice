'use strict';

const ListNode = require('../lib/node.js').ListNode;
const LinkedList = require('../index.js').LinkedList;
require('jest');

describe('LinkedList', () => {
  beforeEach(() => {
    this.list = new LinkedList();
    this.list.prepend(new ListNode(52));
    this.list.prepend(new ListNode(37));
  });

  describe('#prepend method', () => {
    it('should add a node to the beginning of the linked list', () => {
      this.list.prepend(new ListNode(17));
      expect(this.list.root.value).toEqual(17);
      expect(typeof this.list).toEqual('object');
    });
  });

  describe('#append method', () => {
    it('should add a node to the end of the linked list', () => {
      this.list.append(new ListNode(5));
      expect(this.list).toEqual({ 'root': { 'value': 37, 'next': { 'value': 52, 'next': { 'value': 5,'next': null }}}});
      expect(typeof this.list).toEqual('object');
    });
  });

  describe('#find method', () => {
    it('should find a node and return true or false', () => {
      let result = this.list.find(2);
      expect(result).toEqual(false);

      result = this.list.find(52);
      expect(result).toEqual(false);
    });
  });
});