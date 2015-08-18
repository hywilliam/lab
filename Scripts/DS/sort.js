/**
 *
 * Created by hywilliam on 7/30/15.
 */
var Queue = require('./queue.js');
//console.log(new Queue().prototype);
/**
 * -------------------------------- 基数排序 -------------------------------------------
 * 思想：
 * 对于0~99的数字，将数据扫描两次，第一次按照个位上的数字进行排序，第二次按照十位上的数字进行排序，
 * 每个数字根据对应位上的数值被分在不同的盒子里，将盒子中的数字取出，组成一个新的列表，该列表即为排好序的结果。
 *
 */
function radixSort(nums) {
    // 数据分发，将待排数据一个个放入相应的盒子
//    console.log(nums)
    function distribute(nums, queues, n, digit) {
        for (var i = 0; i < n; ++i) {
            if (digit === 1) {
                // 传入的待排数组中元素按个位数放入相应队列
                queues[nums[i] % 10].enQueue(nums[i]);
            } else {
                // 传入的待排数组中元素按十位数放入相应队列
                queues[Math.floor(nums[i] / 10)].enQueue(nums[i]);
            }
        }
    }

    // 数据收集，将排好序的数据一个个回收
    function collect(queues, nums) {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
            while (!queues[digit].empty()) {
                nums[i++] = queues[digit].deQueue();
            }
        }
    }

    // 构造结果存储空间，每个盒子为一个队列，存储在一个结果数组中
    var queues = [];
    for (var i = 0; i < 10; ++i) {
        queues[i] = new Queue();
    }

    distribute(nums, queues, 10, 1);
    collect(queues, nums);
    distribute(nums, queues, 10, 10);
    collect(queues, nums);

//    return nums;
    console.log(nums);
}

// TEST DATA
var test = [];
for (var i = 0; i < 10; ++i) {
    test[i] = Math.floor(Math.floor(Math.random() * 101));
}

//console.log(test);
radixSort(test);