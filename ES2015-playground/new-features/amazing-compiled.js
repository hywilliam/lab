'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * hywilliam ::: 11/27/15.
 */

// let - A block scope
if (true) {
    var _x = 3;
}
//console.log(x);
/* functions and vars can hoist, but classes and let won't */

// Loop scoping
var vals = [];

var _loop = function _loop(_x2) {
    vals.push(function () {
        return _x2;
    });
};

for (var _x2 = 0; _x2 < 4; _x2 += 1) {
    _loop(_x2);
}
console.log(vals.map(function (x) {
    return x();
}));

// const
var obj = { bar: 3 };

// String Templates
var name = 'wyh';
'Hi ' + name + ',\nDid you know that 5 * 3 = ' + 5 * 3 + '?';
/* ${} is evaluated */

// Enhanced Object Literals
// {x:x} short to {x}
var x = 3;
var xo = { x: x };

var foo = {
    f: function f(x) {
        return x + 1;
    }
};
foo.f(3);

// Super 可以方便地调用父类的方法啦
var faa = _obj = {
    toString: function toString() {
        _get(Object.getPrototypeOf(_obj), 'toString', this).call(this) + 'with faa!';
    }
};
faa.toString();

// Symbols, 唯一的对象，用作 key 合适。
var s1 = Symbol('test');
var s2 = Symbol('test');
console.log(s1 === s2);

// Class, 类里面不能定义属性

var Jedi = (function () {
    function Jedi() {
        _classCallCheck(this, Jedi);

        this.forceIsDark = false;
    }

    _createClass(Jedi, [{
        key: 'toString',
        value: function toString() {
            return (this.forceIsDark ? 'Join' : 'Leave') + 'the dark';
        }
    }, {
        key: 'foo',
        value: function foo() {
            return 'hello';
        }
    }]);

    return Jedi;
})();

var Sith = (function (_Jedi) {
    _inherits(Sith, _Jedi);

    function Sith() {
        _classCallCheck(this, Sith);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sith).call(this));

        _this.forceIsDark = true;
        return _this;
    }

    return Sith;
})(Jedi);

var parent = new Jedi();
var child = new Sith();
console.log(child instanceof Sith);

// Static functions: 静态方法，类自己使用，实例获取不到。

var Util = (function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, [{
        key: 'sayBye',
        value: function sayBye() {
            return 'bye';
        }
    }], [{
        key: 'sayHi',
        value: function sayHi() {
            return 'hello';
        }
    }]);

    return Util;
})();

console.log(Util.sayHi());
console.log(new Util().sayBye());

// Get/Set 与 ES5 无差

// iterator 约定, for...of 来实现循环取值
var _arr = ['a', 'b', 'c'];
for (var _i = 0; _i < _arr.length; _i++) {
    var n = _arr[_i];
    console.log(n);
}

/* 可迭代的数据源包括：Arrays, Strings, Maps, Sets, Dom queries, Arguments */

//# sourceMappingURL=amazing-compiled.js.map