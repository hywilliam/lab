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
  }

}.call(this));
