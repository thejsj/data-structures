var makeLinkedList = function(){
  var list = {}; // public
  list.head = null;
  list.tail = null;
  list.values = {};

  list.addToTail = function(value){
    list.values[value] = makeNode(value);
    // Assign tail to previuos tail
    if (list.tail !== null) {
      list.tail.next = list.values[value];
    }
    // Re-assign tail
    list.tail = list.values[value];

    if (list.head === null) {
      list.head = list.values[value];
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    delete list.values[temp.value];
    return temp.value;
  };

  list.contains = function(target){
    if (target in list.values) {
      return true;
    }
    return false;
  };

  return list; // returned to the user
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
