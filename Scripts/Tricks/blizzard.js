/**
 *
 * Created by hywilliam on 8/12/15.
 */

/** 1
 * <a id='duck'></a>
 * 有id的HTML会在js执行域创建一个全局变量
 */

/** 2
 * Everything is Object
 */

//1..toFixed() === (1).toPrecision()

/** 3
 * You know where is the constructor?
 * Don't trust typeof & instance & constructor
 */

var arr = [1, 'a', 2];

//typeof arr === 'object';
//arr instanceof Array; //true
//arr.constructor();    //[]

/** 4
 * judge every types in js
 */

function type(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

/** 5
 * Get a random number in a specific range
 */

var x = Math.floor(Math.random() * (max - min + 1)) + min;

/** 6
 * 数组置空
 */

arr.length = 0;

/** 7
 *  Generate an array of numbers with numbers from 0 to max
 */

var numbersArray = [], max = 100;
for (var i = 1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100]

/** 8
 *  string trim2 function,移除字符串空格
 *  现在有trim的实现啦，String.trim()，移除字符串开头和结尾的空格
 */
String.prototype.trim2 = function () {
  return this.replace(/^\s+|\s+$/g, '');
};

/** 9
 * Append an array to another array
 */
var array1 = [12, "foo", {name: "Joe"}, -2458];

var array2 = ["Doe", 555, 100];
Array.prototype.push.apply(array1, array2);

/** 10
 * Transform the arguments object into an array
 */

//var argArr = Array.prototype.slice.call(arguments);

