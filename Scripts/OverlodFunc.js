/**
 ** 这是一个Javascript模拟函数重载的实现，应用arguments。
 ** 功能：
 ** ；如果输入参数大于三个，返回最后一个参数
 ** ；如果输入参数小于三个，且全部为数字。
 **   则返回排序后的数组，如果最后一个数是奇数降序排列，反之则升序
 ** ；如果输入参数小于三个，且包含字符串。
 **   则将所有参数强制转为字符串后联接返回。
 **/

/* 函数声明 */
function foo() {
    "use strict";
    /* 变量声明 */
    var len = arguments.length,
        limit = 3, // 可自定义参数限制
        arguArr = (function (likeArr) {
            /* arguments转化为实实在在的数组 */
            var result = [],
                i;
            for (i = 0; i < likeArr.length; i++) {
                result.push(likeArr[i]);
            }
            return result;
        }(arguments));

    /* 工具函数变量声明 */
    /* 检测一个数组的元素是否全是数字 */
    var isAllNum = function (arr) {
            return arr.every(function (x) {
                return typeof x === 'number';
            });
        },
        /* 检测一个数组的元素中是否有字符串 */
        isContainStr = function (arr) {
            return arr.some(function (x) {
                return typeof x === 'string';
            });
        },
        /* 检测一个数是否是奇数 */
        isOddNum = function (num) {
            return num % 2;
        },
        /* 数值排序函数 */
        numberOrder = function (a, b) {
            return a - b;
        };

    /* 函数主逻辑 */
    if (len > limit) {
        return arguArr[len - 1];
    } else if (len < limit && len > 0) {
        if (isAllNum(arguArr)) {
            return isOddNum(arguArr[len - 1]) ? arguArr.sort(numberOrder).reverse() : arguArr.sort(numberOrder);
        } else if (isContainStr(arguArr)) {
            return arguArr.join('');
        } else {
            return '请核实参数';
        }
    } else {
        return '请核实参数';
    }

}


/* 测试数据 */

// 不传参
//console.log(foo());
// 参数多于3个
//console.log(foo(2, 8, 0.4, 2, [8, 3]));
// 参数等于3个
//console.log(foo(1, 2, 3));
// 参数小于3个，但不是数字也不是字符串
//console.log(foo(2, [6, 2]));
// 参数小于3个，全是数字，最后一位是奇数
//console.log(foo(4, 1));
