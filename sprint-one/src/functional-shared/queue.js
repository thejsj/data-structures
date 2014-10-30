var makeQueue = function(){
  var someInstance = {
    storage: {},
    count: 0
  };
  extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count] = value;
  this.count += 1;
};

queueMethods.dequeue = function(){
  if (this.count) {
    this.count -= 1;
  }
  var result = this.storage[0];
  delete this.storage[0];
  for (var prop in this.storage) {
    this.storage[prop - 1] = this.storage[prop];
  }
  return result;
};

queueMethods.size = function(){
  return this.count;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
