/**
 * Created by hywilliam on 9/7/15.
 */

(function () {
  /* 整个库在一个IIFE内，不污染全局作用域 */

  /* ------------------------------- 基础设定 -------------------------------------- */

  // 创建一个root对象，保存对全局对象的引用。浏览器环境下为window，Server环境下为global
  var root = this;

  // 保存原全局对象中的 _ 变量
  var previousUnderscore = root._;

  // 定义三个变量保存Array，Obj，Function的prototype，在压缩时（非gzipped）可以节省字节
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // 定义本地变量，以快捷访问核心原型方法
  var push           = ArrayProto.push,
      slice          = ArrayProto.slice,
      toString       = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // 希望用到的EC5原生方法
  var nativeIsArray = Array.isArray,
      nativeKeys    = Object.keys,
      nativeBind    = FuncProto.bind,
      nativeCreate  = Object.create;

  // 裸函数引用，用于代理原型继承时做交换
  var Ctor = function () {
  };

  // 创建一个underscore的安全引用，以便在后续的代码中使用
  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    // ???
    this._wrapped = obj;
  };

  // 输出underscore对象，兼容Node.js中旧的require()API，如果是浏览器环境，则作为一个全局对象输出。
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // 当前版本
  _.VERSION = '1.8.3';

  /**
   * 内部函数返回传入的func回调的优化版本，以便于在其他的underscore方法中重复调用
   * @param func
   * @param context
   * @param argCount
   * @returns {*}
   */
  var optimizeCb = function (func, context, argCount) {
    // void 0 === undefined
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case 2:
        return function (value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
      return func.apply(context, arguments);
    };
  };

  // 重要内部函数，生成回调，可以被集合中每一个元素调用。返回期待的结果，- 特征值、任意回调、属性匹配函数、或者一个属性访问器
  var cb = function (value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  // ???
  _.iteratee = function (value, context) {
    return cb(value, context, Infinity);
  };

  // 创建指派函数的内部方法
  var createAssigner = function (keysFunc, undefinedOnly) {
    return function (obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys   = keysFunc(source),
            l      = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // 内部方法：创建一个新对象继承另外一个对象
  var baseCreate = function (prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function (key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // 集合函数的帮助函数：
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isAraryLike = function (collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  /**
   * --------------------------------------------------------------------------------------
   * 集合函数（数组&对象）
   * Collection Functions(Array&Object)
   * --------------------------------------------------------------------------------------
   */

    // 001
    // _.each(list, iteratee, [context])
    // 迭代集合中的所有元素，依次对元素在context（可选）之上进行iteratee(element, index, list)操作，如果list是一个对象，iteratee参数是
    // (value, ley, list)
    // 返回这个list，以便链式调用。
  _.each = _.forEach = function (obj, iteratee, context) {

  };

  // 002
  // _.map(list, iteratee, [context])
  // 迭代集合中所有元素，进行map映射
  // 返回一个新的list
  _.map = _.collect = function (obj, iteratee, context) {

  };

  function createReduce(dir) {

  }

  //003
  // _.reduce(list, iteratee, [memo], [context])
  // 返回一个结果值
  _.reduce = _.foldl = _.inject = createReduce(1);

  // 004
  // _.reduceRight(list, iteratee, [memo], [context])
  // 返回一个结果值
  _.reduceRight = _.foldr = createReduce(-1);

  //005
  // _.find(list, predicate, [context])
  // 返回第一个使predicate为真的element，没有则undefined，有真的就跳出迭代
  _.find = _.detect = function (obj, predicate, context) {

  };

  // 006
  // _.filter(list, predicate, [context])
  // 返回所有使predicate为真的elements，一个list的子集
  _.filter = _.select = function (obj, predicate, context) {

  };

  // 007
  // _.reject(list, predicate, [context])
  // 与filter相反
  _.reject = function (obj, predicate, context) {

  };

  // 008
  // _.every(list, predicate, [context])
  // list中的所有element通过断言predicate，则返回true
  _.every = _.all = function (obj, predicate, context) {

  };

  // 009
  // _.some(list, predicate, [context])
  // list中只要有element通过断言predicate，就返回true
  _.some = _.any = function (obj, predicate, context) {

  };

  // 010
  // _.containes(list, value, [fromIndex])
  // 如果list中有给定的value则返回true
  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {

  };

  // 011
  // _.invoke(list, methodName)
  // 迭代list，在每个element上执行method
  _.invoke = function (obj, method) {

  };

  // 012
  // _.pluck(list, propertyName)
  // map的简洁版，从obj中拉出propertyName的list
  // 返回一个list
  _.pluck = function (obj, key) {

  };

  // 013
  // _.where(list, properties)
  // 遍历list，返回一个子集，为包括在属性值中键值对的elements
  _.where = function (obj, attrs) {

  };

  //014
  _.findWhere = function (obj, attrs) {

  };

  // 015
  _.max = function (obj, iteratee, context) {

  };

  // 016
  _.min = function (obj, iteratee, context) {

  };

  //017
  _.shuffle = function (obj) {

  };

  // 018
  _.sample = function (obj, n, guard) {

  };

  // 019
  _.sortBy = function (obj, iteratee, context) {

  };

  var group = function (behavior) {

  };

  // 020
  _.groupBy = group(function (result, value, key) {

  });

  // 021
  _.indexBy = group(function (result, value, key) {

  });

  // 022
  _.countBy = group(function (result, value, key) {

  });

  // 023
  _.toArray = function (obj) {

  };

  // 024
  _.size = function (obj) {

  };

  // 025
  _.partition = function (obj, predicate, context) {

  };

  /**
   * --------------------------------------------------------------------------------------
   * 数组函数
   * Array Functions
   * --------------------------------------------------------------------------------------
   */

    // 001
  _.first = _.head = _.take = function (array, n, guard) {

  };

  // 002
  _.initial = function (array, n, guard) {

  };

  // 003
  _.last = function (array, n, guard) {

  };

  // 004
  _.rest = _.tail = _.drop = function (array, n, guard) {

  };

  // 005
  _.compact = function (array) {

  };

  var flatten = function (input, shallow, strict, startIndex) {

  };
  // 006
  _.flatten = function (array, shallow) {

  };

  // 007
  _.without = function (array) {

  };

  // 008
  _.uniq = _.unique = function (array, isSorted, iteratee, context) {

  };

  // 009
  _.union = function () {

  };

  // 010
  _.intersection = function (array) {

  };

  // 011
  _.difference = function (array) {

  };

  // 012
  _.zip = function (array) {

  };

  // 013
  _.unzip = function (array) {

  };

  // 014
  _.object = function (list, values) {

  };

  function createPredicateIndexFinder(dir) {

  }

  //015
  _.findIndex = createPredicateIndexFinder(1);
  //016
  _.findLastIndex = createPredicateIndexFinder(-1);

  //017
  _.sortedIndex = function (array, obj, iteratee, context) {

  };

  function createIndexFinder(dir, predicateFind, sortedIndex) {

  }

  // 018
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  //019
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // 020
  _.range = function (start, stop, step) {

  };

  /**
   * --------------------------------------------------------------------------------------
   * 函数方法
   * Function Functions
   * --------------------------------------------------------------------------------------
   */
  var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {

  };

  // 001
  _.bind = function (func, context) {

  };

  // 002
  _.partial = function (func) {

  };

  // 003
  _.bindAll = function (obj) {

  };

  // 004
  _.memoize = function (func, hasher) {

  };

  // 005
  _.delay = function (func, wait) {

  };

  // 006
  _.defer = _.partial(_.delay, _, 1);

  // 007
  _.throttle = function (func, wait, options) {

  };

  // 008
  _.debounce = function (func, wait, immediate) {

  };

  // 009
  _.wrap = function (func, wrapper) {

  };

  // 010
  _.negate = function (predicate) {

  };

  // 011
  _.compose = function () {

  };

  // 012
  _.after = function (times, func) {

  };

  // 013
  _.before = function (times, func) {

  };

  // 014
  _.once = _.partial(_.before, 2);

  /**
   * --------------------------------------------------------------------------------------
   * 对象方法
   * Object Functions
   * --------------------------------------------------------------------------------------
   */
    // 001
  _.keys = function (obj) {

  };

  // 002
  _.allKeys = function (obj) {

  };

  // 003
  _.values = function (obj) {

  };

  // 004
  _.mapObject = function (obj, iteratee, context) {

  };

  // 005
  _.pairs = function (obj) {

  };

  // 006
  _.invert = function (obj) {

  };

  // 007
  _.functions = _.methods = function (obj) {

  };

  // 008
  _.extend = createAssigner(_.allKeys);

  // 009
  _.extendOwn = _.assign = createAssigner(_.keys);

  // 009
  _.findKey = function (obj, predicate, context) {

  };

  // 010
  _.pick = function (object, oiteratee, context) {

  };

  // 011
  _.omit = function (obj, iteratee, context) {

  };

  // 012
  _.defaults = createAssigner(_.allKeys, true);

  // 013
  _.create = function (prototype, props) {

  };

  // 014
  _.clone = function (obj) {

  };

  // 015
  _.tap = function (obj, interceptpr) {

  };

  // 016
  _.isMatch = function (object, attrs) {

  };

  // 017
  _.isEqual = function (a, b) {

  };

  // 018
  _.isEmpty = function (obj) {

  };

  // 019
  _.isElement = function (obj) {

  };

  // 020
  _.isArray = nativeIsArray || function (obj) {

    };

  // 021
  _.isObject = function (obj) {

  };

  // 022
  _.isFinite = function (obj) {

  };

  // 023
  _.isNaN = function (obj) {

  };

  // 024
  _.isBoolean = function (obj) {

  };

  // 025
  _.isNull = function (obj) {

  };

  // 026
  _.isUndefined = function (obj) {

  };

  // 027
  _.has = function (obj, key) {

  };

  /**
   * --------------------------------------------------------------------------------------
   * 功能方法
   * Utility Functions
   * --------------------------------------------------------------------------------------
   */

    // 001
  _.noConflict = function () {

  };

  // 002
  _.identity = function (value) {

  };

  // 003
  _.constant = function (value) {

  };

  // 004
  _.noop = function () {

  };

  // 005
  _.property = property;

  // 006
  _.propertyOf = function (obj) {

  };

  // 007
  _.matcher = _.matches = function (attrs) {

  };

  // 008
  _.times = function (n, iteratee, context) {

  };

  // 009
  _.random = function (min, max) {

  };

  // 010
  _.now = Date.now || function () {

    };

  var escapeMap = {};
  var unescapeMap = _.invert(escapeMap);
  var createEscaper = function (map) {

  };
  // 011
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // 012
  _.result = function (object, property, fallback) {

  };

  // 013
  _.templateSettings = {};

  // 014
  _.template = function (text, settings, oldSettings) {

  };

  // 015
  _.chain = function (obj) {

  };

  _.mixin = function () {

  };
}.call(this));
