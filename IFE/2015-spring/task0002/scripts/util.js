/**
 * Created by hywilliam on 7/19/15.
 */

/**----------------------------------------------------
 * 与任务无关的自己写的工具函数
 *
 * 封装一个console.log函数，用来测试
 */
function log(params) {
    return console.log(params);
}

/**-------------------------------------------------- */

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return typeof arr === 'object' &&
        Object.prototype.toString.call(arr) === '[object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    return typeof fn === 'function' &&
        Object.prototype.toString.call(fn) === '[object Function]';
}

// 判断date是否为一个日期，返回一个bool值
function isDate(date) {
    return Object.prototype.toString.call(date) === '[object Date]';
}

// 判断val是否为一个原始值，返回一个bool值
function isPrimit(val) {
    return typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean';
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    var copy = null;
    if (isPrimit(src) || isDate(src)) {
        copy = src;
        return copy;
    } else if (isFunction(src)) {
        return '!!!!!this is a function can not be copy';
    } else if (isArray(src)) {
        copy = [];
        for (var t = 0; t < src.length; t++) {
            copy[t] = cloneObject(src[t]);
        }
    } else if (typeof src === 'object') {
        copy = {};
        for (var i in src) {
            if(!src.hasOwnProperty(i)){
                continue;
            }
            copy[i] = cloneObject(src[i]);
        }
    }
    return copy;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement ....字典hash去重法...还有两次循环的比较判断去重和先排序再去重.
    var res = [],
        cache = {};
    for (var i = 0; i < arr.length; i++) {
        // 遍历原数组，并检查值，如果在缓存对象中查不到，则push到结果数组，若查到则越过不执行操作
        var item = arr[i],
            key = typeof item +item;
            // 将字典的键值设为类型+值来区分类似数值1和字符串`1`等情况。
            //key = item;
        if (!cache[key]) {
            res.push(item);
            // 新的值push到结果数组后，也需在字典中标记为已存在，以便下次能查到
            cache[key] = true;
        }
    }
    //log(cache)
    return res;
}

/** ---------------TEST AREA-----------------------------*/
// 数组去重使用示例
var a = [1, 3, 5, 7, 5, 3, '1', ''];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7, '1', '']
//console.log(isArray({}));
//log(isFunction(cloneObject));
//var today = new Date();
//var a = {name: 'hywilliam'};
//var b = a;
//var c = cloneObject(a);
//log(isDate(today));
//a.name = 'test';
//log(a);
//log(b);
//log(c);
//var srcObj = [
//    1,
//    {
//        b1: ["hello", "hi"],
//        b2: "JavaScript"
//    }
//    ,function(){}
//];
//var abObj  = srcObj,
//    tarObj = cloneObject(srcObj);
//srcObj[0] = 2;
//srcObj[1].b1[0] = "Hello";
//console.log(abObj[0]);
//console.log(abObj[1].b1[0]);
//console.log(tarObj[0]);      // 1
//console.log(tarObj);    // "hello"
//
//var test = function(){};
//log(cloneObject(test));