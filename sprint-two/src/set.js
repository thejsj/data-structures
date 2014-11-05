var makeSet = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._count = 0;
  return set;
};

var setPrototype = {};

/**
 * Time Complexity: Linear (because of .contains, otherwise it's constant)
 */
setPrototype.add = function (item) {
  if (!this.contains(item)) {
    this._storage[this._count++] = item; // Constant Time
  }
};

/**
 * Time Complexity: Linear
 */
setPrototype.contains = function (item, returnValue) {
  returnValue = returnValue || false;
  for (var key in this._storage) { //n
    if (this._storage[key] === item) {
      if (returnValue === true) {
        return {
          'key': key,
          'value': this._storage[key]
        };
      };
      return true;
    }
  }
  return false;
};

/**
 * Time Complexity: Linear (because of .contains, otherwise it's constant)
 */
setPrototype.remove = function (item) {
  if (this._count > 0) {
    if (this.contains(item)) {
      var _item = this.contains(item, true);
      delete this._storage[_item.key];
      this._count -= 1;
      return _item.value;
    }
  }
};
