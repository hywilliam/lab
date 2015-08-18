/**
 *
 * Created by hywilliam on 7/30/15.
 */
/**
 *
 * @constructor
 */
function Queue() {
//    this.prototype = Queue.prototype;
    this.dataStore = [];
}

/**
 *
 * @type {{constructor: Queue, enQueue: Function, deQueue: Function, front: Function, tail: Function, toString: Function, empty: Function, length: Function, clear: Function}}
 */
Queue.prototype = {
    constructor: Queue,
    // 入队
    enQueue    : function (element) {
        this.dataStore.push(element);
    },
    // 出队
    deQueue    : function () {
        return this.dataStore.shift();
    },
    // 返回队首元素
    front      : function () {
        return this.dataStore[0];
    },
    // 返回队尾元素
    tail       : function () {
        return this.dataStore[this.dataStore.length - 1];
    },
    // 显示队列内所有元素
    toString   : function () {
        var retStr = '';
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + '\n';
        }
        return retStr;
    },
    // 判断队列是否为空
    empty      : function () {
        return this.dataStore.length === 0;
    },
    // 显示队列长度
    length     : function () {
        return this.dataStore.length;
    },
    // 清空队列
    clear      : function () {
        this.dataStore = null;
        this.dataStore = [];
    }
};

/**
 * 优先队列，每个元素有一个优先级的标志，当前队列总是最高优先级的元素先出队，入队还是队尾
 */
function PriorityQueue() {
    Queue.call(this);
}
PriorityQueue.prototype = new Queue();
PriorityQueue.prototype.constructor = PriorityQueue;
PriorityQueue.prototype.deQueue = function () {
    var priority = this.dataStore[0].code;
    var est = 0;
    // 循环遍历找出优先级最高的元素
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = this.dataStore[i].code;
            est = i;
        }
    }
    return this.dataStore.splice(est, 1);
};

//console.log(new PriorityQueue().prototype);

//module.exports = (function () {
//    return Queue;
//})();