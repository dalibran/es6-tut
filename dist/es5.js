'use strict';

var _templateObject = _taggedTemplateLiteral(['a is ', ', while b is ', ' else, and ', ' is reversed'], ['a is ', ', while b is ', ' else, and ', ' is reversed']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {

  var template = 'this is a template\n string!';

  var a = "S",
      b = 'something';

  console.log(' a is ' + a + ', while b is ' + b + ' else');

  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  // console.log(`a is ${a}, while b is ${b} else, and ${reverseString(b)} is reversed`);

  function str(literals) {
    return (arguments.length <= 4 ? undefined : arguments[4]) + literals[3] + literals[1] + (arguments.length <= 3 ? undefined : arguments[3]) + literals[0] + (arguments.length <= 2 ? undefined : arguments[2]);
  }

  console.log(str(_templateObject, a, b, reverseString(b)));
})();
//# sourceMappingURL=es5.js.map
