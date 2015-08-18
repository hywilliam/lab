/**
 *
 * Created by hywilliam on 7/31/15.
 */
/**
 * 《JavaScript面向对象编程指南》第五章
 *  实例，原型对象，构造函数三者之间的关系：
 *  实例的__proto__属性指向原型对象，
 *  原型对象的constructor属性指向构造函数，
 *  构造函数的prototype属性指向原型对象
 *
 *  原型相关的两个判断方法：
 *  Object.getPrototypeOf(obj):返回obj的__proto__属性所指的原型对象
 *  obj.isPrototypeOf(obj2):判断obj是否是obj2的原型对象
 *
 *  实例.constructor === 构造函数
 *  实际上是
 *  实例.__proto__.constructor === 构造函数
 *  实例本身只处在原型链中，只有秘密链接__proto__，和构造函数没有直接关联
 */
//1
var Shape = {
    type   : 'Shape',
    getType: function () {
        return this.type;
    }
};

//2
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype = Shape;
Triangle.prototype.constructor = Triangle;

//3
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
};
Triangle.prototype.type = 'Triangle';

//4 test
var t = new Triangle(1,2,3);

//5
for(var i in t) {
    if(t.hasOwnProperty(i)) {
        console.log(i);
    }
}

