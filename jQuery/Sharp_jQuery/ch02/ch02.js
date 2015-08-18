$(document).ready(function() {
    // $('.category>li:gt(7)').hide();
    // $('.showmore>button').click(function(event) {
    //     /* Act on the event */
    //     $('.category>li:hidden').show();
    //     $(this).text('精简显示品牌');
    //     $('.category>li:contains(英国)').css({
    //         'backgroundcolor': 'red'
    //     }); 
    // });
    
    //多余国家隐藏
    var $category = $("ul li:gt(6):not(:last)");
    $category.hide();
    //点击显示更多国家
    var $toggleBtn = $("div.showmore > a");
    $toggleBtn.click(function(event) {
        /* Act on the event */
        $category.show();
        $(this).text("精简显示国家");
        $("ul li")
            .filter(":contains('英国'), :contains('俄罗斯'), :contains('希腊')")
            .addClass('promote');
        return false; //超链接不跳转
    });
});