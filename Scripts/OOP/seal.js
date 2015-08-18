/**
 *
 * Created by hywilliam on 7/30/15.
 */
// JS中的对象本身就自带封装功能

// 第一种：对象字面量

var Cat = {
    name : '',
    color: '',
    eat  : function () {

    }
};

// 第二种：返回对象的函数
function Cat(name, color) {
    return {
        name : name,
        color: color,
        eat  : function () {

        }
    }
}

// 第三种：构造函数
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.eat = function () {
        // 可以写到原型中
    }
}
