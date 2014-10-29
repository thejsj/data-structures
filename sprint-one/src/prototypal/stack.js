var makeStack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;

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

