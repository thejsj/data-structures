var Stack = function () {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count += 1;
};

Stack.prototype.pop = function () {
  if (this.count) {
    this.count -= 1;
  }
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

Stack.prototype.size = function () {
  return this.count;
};