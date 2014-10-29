var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function(){
    if (count) {
      count -= 1;
    }
    var result = storage[0];
    for (var prop in storage) {
      storage[prop - 1] = storage[prop];
    }
    delete storage[count];
    return result;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
