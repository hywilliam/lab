# 笔记记录

## One

`<img href="" alt="" title="">`

img 的 alt 属性是一个**必需的属性**，它规定在图像无法显示时的替代文本。

假设由于一些原因（比如网速太慢、src 属性中的错误、浏览器禁用图像、用户使用的是屏幕阅读器）用户无法查看图像，alt 属性可以为图像提供替代的信息。

注意：当用户把鼠标移动到 img 元素上时，Internet Explorer （9 之前的版本）把 alt 属性的值显示为工具提示。根据 HTML 规范，这种行为并不正确。

提示：如果需要为图像创建工具提示，请使用 title 属性！

## Four

CSS的层叠与继承，样式优先级机制。
要注意的是样式优先级机制是针对同一个元素而言。比如同样一个`<p id="para" class="content"></p>`在声明style时，`#para>.content>p`但是当不是同一个元素时，就要考量层叠与继承了，而不是优先级。

说白了CSS选择器分类就是

 - 全局*
 - 标签
 - 属性--id和class也算标签属性嘛
   + id
   + class
   + [属性]
     * 带有属性[type]
     * 属性等于[type = "value"]
     * 属性值开头为[type |= "value"]
     * 属性值包含单词[type ~= "value"]
 - 关系
  + 多个选择器一起
  + 后代
  + 亲儿子
  + 下一个兄弟
  + 伪类中的:first-child
 - 伪类

## Five

`white-space` 段落怎么处理空白符，`nowrap`可以控制不换行。
`font-weight` 文本的粗细
`font-face` 扩展字体，字体名和src必须。
关于行高的学习：
设置line-height的方法：

 - line-height: 16px;
 - line-height: 150%;
 - line-height: normal~1.2;
 - line-height: 1.5;

总的来说，如果在body设置font: 16px/1.5 font-family; 让所有段落继承会达到比较好的效果。因为只有数值，才会与当前的font-size相乘得到比较合适的line-height;

font-size和line-height的区别：一般来说，`line-height = 上半行间距 + content area(font-size) +下半行间距`。而且一般来说，1.5倍行间距比较合适。

还有一点，行高是由行内元素的最大line-height决定的。

## Six

水平居中：

 - 行内元素居中(text-align)
 - 定宽块级元素居中(margin:auto | 负外边距)
 - 不定宽块级元素居中(外套table + margin:auto | display:inline+text-align | 父元素相对定位50%+自身负外边距50%)

垂直居中：

 - 父元素高度确定单行文本(height = line-height)
 - 父元素高度确定的块状元素(外套table + vertical-align: middle | display: table-cell)

圆角：

 - 背景图(宽度固定高度自适应 | 宽高均自适应)
   + 纯色背景的话，宽高可以实现完美的无限制延伸（方法也很多，可以叠加4个div构建4个部分，也可以，构建5个div，其中4个用来绝对定位4个角，中间content涂色就好。）
   + 只是圆角框的话，就不是那么完美了。也可能我暂时没想到，宽高不是无限度延伸的，因为背景图毕竟有大小，而内容区域应该不能设置和边框对齐的样式，除非在定宽或定高中，让content区域平铺图片，但在宽高都自适应的情况下那也是不可行的。所以，暂时的解决方案是不那么完美的，为了可用性，设置上最小宽度和最大高度。或者把背景的框框弄得无比巨长。。。。但是显然很恶心的解决方案。
 - CSS2.0+HTML标签(像素话，增添各种无语义div，丑)
 - 山顶角
 - border-radius
 - border-image(IE不支持)
 - svg
 - canvas

`max-width`
