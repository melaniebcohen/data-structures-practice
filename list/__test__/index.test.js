'use strict';

const List = require('../index.js').List;
require('jest');

describe('List', () => {
  beforeEach(() => {
    this.list = new List(7, 5, 20, 80);
  });

  describe('#copy method', () => {
    it('should copy the list', () => {
      let copiedList = this.list.copy();
      expect(copiedList).toEqual(this.list);
      expect(copiedList).toEqual({'0': 7, '1': 5, '2': 20, '3': 80, 'length': 4});
      expect(typeof copiedList).toEqual('object');
    });
  });

  describe('#push method', () => {
    it('should push a value onto the list', () => {
      let pushedList = this.list.push(4);
      expect(pushedList).toEqual({'0': 7, '1': 5, '2': 20, '3': 80, '4': 4, 'length': 5});
      expect(pushedList.length).toEqual(5);
      expect(typeof pushedList).toEqual('object');
    });
  });

  describe('#pop method', () => {
    it('should pop a value from the list', () => {
      let poppedList = this.list.pop();
      expect(poppedList).toEqual({'0': 7, '1': 5, '2': 20, 'length': 3});
      expect(poppedList.length).toEqual(3);
      expect(typeof poppedList).toEqual('object');
    });
  });
});
