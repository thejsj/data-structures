var makeStack = function() {
  var someInstance = {
    storage: {},
    count: 0,
  };
  extend(someInstance, stackMethods);

  // Use an object with numeric keys to store values

  // Implement the methods below

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function(){
  if (this.count) {
    this.count -= 1;
  }
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function(){
  return this.count;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
