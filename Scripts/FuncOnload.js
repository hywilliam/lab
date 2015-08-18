/*
 * 这是一个函数加载的load函数。当文档载入完成时调用一个函数
 * 如果文档已经载入完毕，则尽快以异步方式执行它
 */

function onLoad(foo) {
    if (onLoad.loaded) {
        setTimeout(foo, 0); // 如果加载完毕，则放入异步队列，尽快执行。
    } else if (window.addEventListener) {
        window.addEventListener('load', foo, false); // 如果有标准注册方法，则注册load事件
    } else if (window.attachEvent) {
        window.attachEvent('onload', foo); // IE8之前的垃圾这么做
    }
}

onLoad.loaded = false; // 设置一个标志来指示文档是否载入完成

onLoad(function () {
    onLoad.loaded = true; // 注册一个函数，当文档载入完成，做了load事件，函数就会执行啦，谈后onLoad的标志就会变成true了。
});
