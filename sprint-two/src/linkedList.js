var makeLinkedList = function () {
  var list = {}; // public
  list.head = null;
  list.tail = null;
  list.values = {};

  /**
   * Time Complexity: Constant
   */
  list.addToTail = function (value) {
    list.values[value] = makeNode(value);
    if (list.tail !== null) {
      list.tail.next = list.values[value];
    }
    list.tail = list.values[value];
    if (list.head === null) {
      list.head = list.values[value];
    }
  };

  /**
   * Time Complexity: Constant
   */
  list.removeHead = function () {
    var temp = list.head;
    list.head = list.head.next;
    delete list.values[temp.value];
    return temp.value;
  };

  /**
   * Time Complexity: Linear
   */
  list.contains = function (target) {
    if (target in list.values) return true;
    return false;
  };
  return list;
};

var makeNode = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};
