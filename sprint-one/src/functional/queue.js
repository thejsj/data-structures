var makeQueue = function () {
  var someInstance = {};
  var storage = {};
  var count = 0;
  someInstance.enqueue = function (value) {
    storage[count] = value;
    count += 1;
  };
  someInstance.dequeue = function () {
    if (count) {
      count -= 1;
    }
    var result = storage[0];
    delete storage[0];
    for (var prop in storage) {
      storage[prop - 1] = storage[prop];
    }
    return result;
  };
  someInstance.size = function () {
    return count;
  };
  return someInstance;
};