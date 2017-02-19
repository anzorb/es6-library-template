(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6lib = factory());
}(this, (function () { 'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ES6lib = function ES6lib() {
  _classCallCheck(this, ES6lib);

  console.log('ola!');
};

return ES6lib;

})));
//# sourceMappingURL=lib.umd.js.map
