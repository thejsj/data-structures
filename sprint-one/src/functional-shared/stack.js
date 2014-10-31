var makeStack = function () {
  var someInstance = {
    storage: {},
    count: 0,
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function () {
  if (this.count) {
    this.count -= 1;
  }
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function () {
  return this.count;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};