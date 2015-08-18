/**
 * Created by hywilliam on 7/29/15.
 */

/**
 * Stack
 * @constructor
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
}
/**
 *
 * @type {{constructor: Stack, push: Function, pop: Function, peek: Function, clear: Function, length: Function}}
 */
Stack.prototype = {
    constructor: Stack,
    /**
     * 入栈
     * @param element
     */
    push       : function (element) {
        this.dataStore[this.top++] = element;
    },
    /**
     * 出栈
     * @returns {*}
     */
    pop        : function () {
        return this.dataStore[--this.top];
    },
    /**
     * 返回栈顶元素
     * @returns {*}
     */
    peek       : function () {
        return this.dataStore[this.top - 1];
    },
    /**
     * 栈清空
     */
    clear      : function () {
        this.top = 0;
    },
    /**
     * 栈内元素个数
     * @returns {number}
     */
    length     : function () {
        return this.top;
    }
};

/**
 ******************************* Practice ***********************************
 */

/**
 * 判断给定字符串是否是回文
 * @param word {string}
 * @returns {boolean}
 */
function isPalindrome(word) {
    var s = new Stack();
    var rword = '';
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    while (s.length() > 0) {
        rword += s.pop();
    }
    return word === rword;
}

/**
 * 使用栈模拟递归，栗子为阶乘
 * @param n {number}
 * @returns {number}
 */
function fact(n) {
    var s = new Stack();
    var result = 1;
    while (n > 1) {
        s.push(n--);
    }
    while (s.length() > 0) {
        result *= s.pop();
    }
    return result;
}

/**
 * 算术表达式判断括号是否匹配
 * @param exp {string}
 * @returns {boolean}
 */
function marryBrackets(exp) {
    var s = new Stack();
    for (var i = 0; i < exp.length; ++i) {
        if (exp[i] === '(') {
            s.push(exp[i]);
        } else if (exp[i] === ')') {
            if (s.length() === 0) {
                return false;
            } else {
                s.pop();
            }
        }
    }
    return !s.length();
}

//console.log(marryBrackets('2.3+2(3/12+)(3)-0*0.24'));

/**
 * 逆波兰式（后缀表达式）计算
 * @param RPolosh
 * @returns {*}
 */
function calculate(RPolosh) {
    var s = new Stack();
    for (var i = 0; i < RPolosh.length; ++i) {
        if (RPolosh[i].match(/\d/)) {
            s.push(+RPolosh[i]);
        } else {
            switch (RPolosh[i]) {
                case '+':
                    s.push(s.pop() + s.pop());
                    break;
                case '-':
                    s.push(-(s.pop() - s.pop()));
                    break;
                case '*':
                    s.push(s.pop() * s.pop());
                    break;
                case '/':
                    var first = s.pop(),
                        second = s.pop();
                    s.push(second / first);
                    break;
            }
        }
    }
//    console.log(s);
    return s.pop();
}
//console.log(calculate('123*+45*6+7*8/+'));
//calculate('123*+45*6+7*+');

/**
 * 中缀转后缀表达式
 * @param input
 * @returns {string}
 */
function toRPolish(input) {
    if (!marryBrackets(input)) {
        return 'input is wrong';
    }
    var s = new Stack();
    var output = '';
    for (var i = 0; i < input.length; ++i) {
//        console.log(input[i]);
        if (input[i].match(/\d/)) {
            // 如果是操作数直接插入结果
            output += input[i];
        } else if (input[i] === '(') {
            // 如果是左括号直接入栈
            s.push(input[i]);
        } else if (input[i] === ')') {
            // 如果是右括号，则依次出栈直到遇到左括号
            while (s.peek() !== '(') {
                output += s.pop();
            }
            s.pop();
        } else {
            // 如果是操作数，则比较当前操作数与栈顶操作数
            if (!s.length() || s.peek().match(/\(/)) {
                // 操作数栈内无元素或栈顶为左括号  则直接压入
                s.push(input[i]);
            } else {
                if (compare(input[i], s.peek())) {
                    // 如果当前操作数优先级大于栈顶操作数，直接压栈
                    s.push(input[i]);
                } else {
                    // 如果当前操作数小于等于栈顶操作数，则出栈顶并入结果串直到栈顶元素<当前元素，且压入当前操作数
                    while (!compare(input[i], s.peek())) {
                        output += s.pop();
                        // 如果栈顶为左括号，或栈已空，则跳出循环
                        if (s.peek() === '(' || !s.length()) {
                            break;
                        }
                    }
                    s.push(input[i]);
                }
            }
        }
    }
    while (s.length()) {
        output += s.pop();
    }
//    return output;
//    console.log(1)
    console.log(output);
}

/**
 * 比较操作符a,b优先级，若a优先级高于b，则返回true，否则false
 * @returns {*}
 */
function compare(a, b) {
    return a.match(/\*/) || a.match(/\//) && (b.match(/\+/) || b.match(/\-/));
}

toRPolish('1+2*3+(4*5+6)*7/8');
