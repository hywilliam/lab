/**
 * hywilliam ::: 11/27/15.
 */

// let - A block scope
if (true) {
    let x = 3;
}
//console.log(x);
/* functions and vars can hoist, but classes and let won't */

// Loop scoping
let vals = [];
for (let x = 0; x < 4; x += 1) {
    vals.push(()=>x);
}
console.log(vals.map(x=>x()));

// const
const obj = {bar: 3};

// String Templates
let name = 'wyh';
`Hi ${name},
Did you know that 5 * 3 = ${5 * 3}?`
/* ${} is evaluated */

// Enhanced Object Literals
// {x:x} short to {x}
let x = 3;
let xo = {x};

let foo = {
    f(x){
        return x + 1;
    }
};
foo.f(3);

// Super 可以方便地调用父类的方法啦
let faa = {
    toString(){
        super.toString() + 'with faa!';
    }
};
faa.toString();

// Symbols, 唯一的对象，用作 key 合适。
let s1 = Symbol('test');
let s2 = Symbol('test');
console.log(s1 === s2);

// Class, 类里面不能定义属性
class Jedi {
    constructor() {
        this.forceIsDark = false;
    }

    toString() {
        return (this.forceIsDark ? 'Join' : 'Leave') + 'the dark';
    }

    foo() {
        return 'hello';
    }
}

class Sith extends Jedi {
    constructor() {
        super();
        this.forceIsDark = true;
    }
}

let parent = new Jedi();
let child = new Sith();
console.log(child instanceof Sith);

// Static functions: 静态方法，类自己使用，实例获取不到。
class Util {
    static sayHi() {
        return 'hello';
    }

    sayBye() {
        return 'bye';
    }
}
console.log(Util.sayHi());
console.log(new Util().sayBye());

// Get/Set 与 ES5 无差

// iterator 约定, for...of 来实现循环取值
for (let n of ['a', 'b', 'c']) {
    console.log(n);
}

/* 可迭代的数据源包括：Arrays, Strings, Maps, Sets, Dom queries, Arguments */


