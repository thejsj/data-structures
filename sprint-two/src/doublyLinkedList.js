var makeDoublyLinkedList = function () {
  var list = {}; // public
  list.head = null;
  list.tail = null;
  list.values = {};
  list.addToTail = function (value) {
    list.values[value] = makeNode(value);
    // Assign tail to previuos tail
    var old_tail = list.tail;
    if (list.tail !== null) {
      old_tail = list.tail;
      old_tail.next = list.values[value];
    }
    // Re-assign tail
    list.tail = list.values[value];
    list.tail.previous = old_tail;

    if (list.head === null) {
      list.head = list.values[value];
    }
  };
  list.addToHead = function (value) {
    list.values[value] = makeNode(value);
    var old_head = null;
    if (list.head !== null) {
      old_head = list.head;
      old_head.previous = list.values[value];
    }
    list.head = list.values[value];
    list.head.next = old_head;

    if (list.tail === null) {
      list.tail = list.values[value];
    }
  };
  list.removeHead = function () {
    var temp = list.head;
    if (list.head.next !== null) {
      list.head = list.head.next;
      list.head.previous = null;
    }
    delete list.values[temp.value];
    return temp.value;
  };
  list.removeTail = function () {
    var temp = list.tail;
    if (list.tail.previous !== null) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
    delete list.values[temp.value];
    return temp.value;
  };
  list.contains = function (target) {
    if (target in list.values) {
      return true;
    }
    return false;
  };
  return list; // returned to the user
};

var makeNode = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
