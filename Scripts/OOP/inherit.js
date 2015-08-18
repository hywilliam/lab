/**
 *
 * Created by hywilliam on 7/30/15.
 */

/**
 * 构造函数的继承
 * @constructor
 */
function Animal() {
    this.species = '动物';
}

Animal.prototype.breath = function () {
    console.log('是生物都需要氧气');
};
Animal.prototype.eat = function () {
    console.log('eat');
};

function Cat(name) {
    // 第一种：构造函数窃取
    Animal.call(this);
    this.name = name;
}

// 第二种：构造函数实例的原型链拼接
//Cat.prototype = new Animal();
//Cat.prototype.constructor = Cat;

// 第三种：直接继承Prototype
//Cat.prototype = Animal.prototype;
//Cat.prototype.constructor = Cat;

// 第四种：组合继承（将第一种和第二种组合到一起实现）

// 第五种：寄生组合继承

function extend(obj) {
    var F = function () {
    };
    F.prototype = obj.prototype;
    return new F();
}
Cat.prototype = extend(Animal);
Cat.prototype.constructor = Cat;

Cat.prototype.type = '猫科动物';
Cat.prototype.eat = function () {
    console.log('鱼');
};

/**
 * 非构造函数的继承
 * @type {{nation: string}}
 */
var Chinese = {
    nation: '中国'
};

//var Doctor = {
//    career: '医生'
//};

// 第一种：object()---把子对象的prototype属性，指向父对象
//function object(o) {
//    function F(){}
//    F.prototype = o;
//    return new F();
//}
//
//var Doctor = object(Chinese);
//Doctor.creer = '医生';

// 第二种：浅拷贝---把父对象的属性，全部拷贝给子对象，问题在于，若父对象属性中有数组或对象，则是引用赋值，不是真正的拷贝
//function extendCopy(p) {
//    var c = {};
//    for (var i in p) {
//        c[i] = p[i];
//    }
//    c.uber = p;
//    return c;
//}
//
//var Doctor = extendCopy(Chinese);
//Doctor.creer = '医生';

// 第三种：深拷贝
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

/**
 * 《JavaScript面向对象编程指南》继承章节
 */
/*6.1.1最原始，最基础的默认原型链继承
 function Shape() {
 this.name = 'Shape';
 this.toString = function () {
 return this.name;
 }
 }

 function TwoDShape() {
 this.name = '2D Shape';
 }

 function Triangle(side, height) {
 this.name = 'Triangle';
 this.side = side;
 this.height = height;
 this.getArea = function () {
 return this.side * this.height / 2;
 };
 }

 TwoDShape.prototype = new Shape();
 Triangle.prototype = new TwoDShape();

 TwoDShape.prototype.constructor = TwoDShape;
 Triangle.prototype.constructor = Triangle;*/

/**
 * 6.1.2 重构 6.1.1
 * @constructor
 */
/*function Shape() {
 }
 // 增加原型属性or方法
 Shape.prototype.name = 'Shape';
 Shape.prototype.toString = function () {
 return this.name;
 };

 function TwoDShape() {
 }
 // 处理继承，需在对原型对象的扩展之前
 TwoDShape.prototype = new Shape();
 TwoDShape.prototype.constructor = TwoDShape;
 // 增加原型属性or方法
 TwoDShape.prototype.name = '2D Shape';

 function Triangle(side, height) {
 this.side = side;
 this.height = height;
 }

 Triangle.prototype = new TwoDShape();
 Triangle.prototype.constructor = Triangle;

 Triangle.prototype.name = 'Triangle';
 Triangle.prototype.getArea = function () {
 return this.side * this.height / 2;
 };*/
/**
 * 6.2 只继承于原型
 */
/*
 TwoDShape.prototype = Shape.prototype;
 TwoDShape.prototype.constructor = TwoDShape;

 TwoDShape.prototype.name = '2D Shape';

 Triangle.prototype = TwoDShape.prototype;
 Triangle.prototype.constructor = Triangle;

 Triangle.prototype.name = 'Triangle';
 Triangle.prototype.getArea = function () {
 return this.side * this.height / 2;
 };*/

// 临时构造器---new F()
// uber --- 子对象访问父对象的方式

// 继承函数的封装
/*function extend(Child, Parent) {
 var F = function(){};
 F.prototype = Parent.prototype;
 Child.prototype = new F();
 Child.prototype.constructor = Child;
 Child.uber = Parent.prototype;
 }

 function Shape() {
 }
 // 增加原型属性or方法
 Shape.prototype.name = 'Shape';
 Shape.prototype.toString = function () {
 return this.name;
 };

 function TwoDShape() {
 }
 // 处理继承，需在对原型对象的扩展之前
 extend(TwoDShape, Shape);
 // 增加原型属性or方法
 TwoDShape.prototype.name = '2D Shape';

 function Triangle(side, height) {
 this.side = side;
 this.height = height;
 }

 extend(Triangle, TwoDShape);

 Triangle.prototype.name = 'Triangle';
 Triangle.prototype.getArea = function () {
 return this.side * this.height / 2;
 };*/

/**
 * ---------------------------------总结--------------------------------
 */

/**
 * 1，原型链方法（仿传统）
 * 构造器+原型链
 */
Child.prototype = new Parent();

/**
 * 2,仅从原型链继承法
 * 构造器+原型拷贝（不存在原型链，所有对象共享一个原型对象）
 * 不需创建实例，效率较好，方法查询也较快
 * 但对子对象的修改会影响父对象
 */
Child.prototype = Parent.prototype;

/**
 * 3,临时构造器法
 * 构造器+原型链
 * 不同于方法1，只继承父对象的原型属性，自身属性（this.**）不予继承
 * 有便捷的访问父对象的uber属性
 */
function extend(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

/**
 * 4,原型属性拷贝法
 * 构造器+属性拷贝+原型
 * 原型链较短，无需为继承单独创建对象
 */
function extend2(Child, Parent) {
    var p = Parent.prototype,
        c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}

/**
 * 5,全属性拷贝法（浅拷贝）
 * 对象模式+属性拷贝
 * 简单，没有用原型
 */
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

/**
 * 6,深拷贝，基本同上，只是对象为值复制
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (p.hasOwnProperty(i)) {
            if (typeof p[i] === 'object') {
                c[i] = Array.isArray(p[i]) ? [] : {};
                deepCopy(p[i], c[i]);
            } else {
                c[i] = p[i];
            }
        }
    }
    return c;
}

/**
 * 7,原型继承法
 * 对象工作模式+原型链
 * 丢开仿类机制，直接在对象之间构建继承关系
 */
function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

/**
 * 8.扩展与增强模式（方法7+方法5）
 * 对象工作模式+原型链+属性拷贝
 * 一次性完成继承与扩展
 */
function objectPlus(o, stuff) {
    var n;

    function F() {
    }

    F.prototype = o;
    n = new F();
    n.uber = o;
    for (var i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}

/**
 * 9.多重继承
 * 对象工作模式+属性拷贝
 */
function multi() {
    var n = {}, stuff, j = 0,
        len = arguments.length;
    for (j = 0; j < len; j++) {
        stuff = arguments[j];
        for (var i in stuff) {
            n[i] = stuff[i];
        }
    }
}

/**
 * 10.寄生继承
 * 对象工作模式+原型链
 */
function parasite(victim) {
    var that = object(victim);
    that.more = 1;//扩展
    return that;
}

/**
 * 11.构造函数窃取
 * 构造器工作模式
 * 只继承父对象的自身属性
 */
function Child() {
    Parent.apply(this, arguments);
}

/**
 * 12.构造器窃取与属性拷贝(方法11+方法4)
 * 构造器工作模式+原型链+属性拷贝
 * 不重复调用符对象构造器的情况下同时继承其自身属性和原型属性
 */
function Child() {
    Parent.apply(this, arguments);
}
extend2(Child, Parent);