var makeStack = function () {
  var someInstance = {};
  var storage = {};
  var count = 0;
  someInstance.push = function (value) {
    storage[count] = value;
    count += 1;
  };
  someInstance.pop = function () {
    if (count) {
      count -= 1;
    }
    var result = storage[count];
    delete storage[count];
    return result;
  };
  someInstance.size = function () {
    return count;
  };
  return someInstance;
};