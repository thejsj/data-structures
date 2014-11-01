var HashTable = function () {
    this._limit = 4;
    this._storage = makeLimitedArray(this._limit);
    this._count = 0;
};

/**
 * Time Complexity: Linear (becuase of checkHashSize, otherwise constant)
 */
HashTable.prototype.insert = function (k, v) {
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    var valueArray = this._storage.get(hashIndex) || [];
    if (this.retrieve(k)) {
        this.remove(k);
    }
    valueArray.push([k, v]);
    this._count++;
    this._storage.set(hashIndex, valueArray);
    this.checkHashSize();
};

/**
 * Time Complexity: Logrithmic because for loop does not have to go all the way through
 */
HashTable.prototype.retrieve = function (k) {
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    var valueArray = this._storage.get(hashIndex) || [];
    for (var i = 0; i < valueArray.length; i++) {
      if (valueArray[i][0] === k) {
        return valueArray[i][1];
      }
    }
    return null;
};

/**
 * Time Complexity: Linear
 */
HashTable.prototype.remove = function (k) {
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    // get the array at the i position
    var valueArray = this._storage.get(hashIndex) || [];
    // loop through the array
    for (var i = 0; i < valueArray.length; i++) {
      if (valueArray[i][0] === k) {
        this._count--;
        valueArray.splice(i, 1);
      }
    }
    // re-set the array
    this._storage.set(hashIndex, valueArray);
    this.checkHashSize();
};

/**
 * Time Complexity: Linear
 */
HashTable.prototype.checkHashSize = function() {
  if (this._count > 0) {
    if (this._count > (this._limit * 0.75) || (this._count) < (this._limit * 0.25)) {
      var saver = this._limit;
      if (this._count > (this._limit * 0.75)) {
        this._limit *= 2;
      } else {
        this._limit /= 2;
      }
      var _newStorage = makeLimitedArray(this._limit);
      var newCounter = 0;
      this._storage.each(function(val, i, arr) {
        if (Array.isArray(val)) {
          var valueArray = val;
          for (var i = 0; i < valueArray.length; i++) {
            var k = valueArray[i][0];
            var v = valueArray[i][1];
            var hashIndex = getIndexBelowMaxForKey(k, this._limit);
            var new_val_array = _newStorage.get(hashIndex) || [];
            new_val_array.push([k, v]);
            newCounter++;
            _newStorage.set(hashIndex, new_val_array);
          }
        }
      });
      this._storage = _newStorage;
      this._count = newCounter;
    }
  }
};
