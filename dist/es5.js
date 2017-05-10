'use strict';

(function () {

  function logSomething() {
    var something = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default_message';
    var somethingElse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : something + 'with concatenation';

    console.log(something, somethingElse);
  }

  logSomething();
  logSomething(undefined, 'and overriding');

  function sum(a, b, c) {
    return a + b + c;
  }

  var nums = [1, 2, 3];

  console.log(sum.apply(undefined, nums));

  var arr = [].concat(nums, [4, 5, 6]);
  console.log(arr);

  function joinStuff() {
    for (var _len = arguments.length, stuffs = Array(_len), _key = 0; _key < _len; _key++) {
      stuffs[_key] = arguments[_key];
    }

    console.log(stuffs.join(' '));
  }

  joinStuff('Stuffs', 'to', 'join');
})();
//# sourceMappingURL=es5.js.map
