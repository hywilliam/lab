//定义一个extend()，将第二个以后的参数复制至第一个参数
//参数为对象类型
//所有有可能出现IEbug，就需要显式检测对象的属性是否可枚举，不然没法用for/in

var extend = (function () {
    return function extend(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var prop in source) {
                obj[prop] = source[prop]; //如果参数一已存在的属性，则覆盖
            }
        }
        return obj;
    };
}());

console.log(extend({
    '1': [1, 2, 3]
}, [4, 5], {
    'hel': '23'
}, {
    'construtor': null
}));
