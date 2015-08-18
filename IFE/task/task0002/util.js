// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return typeof arr === 'object' &&
  Object.prototype.toString.call(arr) === '[object Array]';
}

console.log(isArray([1,2,]));
