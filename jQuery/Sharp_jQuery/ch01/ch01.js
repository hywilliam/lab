$(document).ready(function() {
    $('.level1 > a').click(function(event) {
        /* Act on the event */
        $(this).addClass('current')//当前a标签增添样式
        .next().show()//下一个兄弟节点显示，即ul

        .parent().siblings().children('a').removeClass('current')
        //父元素li的所有兄弟节点的子节点a移除样式
        .next().hide();//并使其下一个兄弟节点隐藏
        return false;  
    });
});

/*
这里学到一点，jquery的链式操作，作出操作的实际动作遵循就近原则，施加于离操作前最近的选择对象上。
*/
