#ContentsTree

- [css中class与id的区别](#css-1)
- [清除浮动的几种方法以及优缺点适应环境](#css-2)
- [BFC和hasLayout是什么](#css-3)
- [如何理解inline-block](#css-4)
- [line-height: 150%与line-height: 1.5的区别](#css-5)
- [float为何会使外部容器高度塌陷](#css-6)
- [vertical-align的表现为何在IE7/8/9不尽相同，其中渲染机制是？](#css-7)
- [dl, dt, dd 三个标签浏览器默认margin值是多少？是否有标签默认文本粗体？](#css-8)
- [What's the difference between `block`、`inline` and `inline-block`?](#css-9)
- [em VS px VS pt VS percent](#css-10)

#Contents

##<a name="css-1">CSS中class与id的区别</a>

> - id前缀"#", class前缀"."
> - 每个文档，id只能使用一次，而class可以使用多次。
> - 概念理解起来，id是先找到元素，然后为它定义样式；class则是先定义一类样式，然后为多个结构套用。

##<a name="css-2">清除浮动的几种方法以及优缺点适应环境</a>

>- 现代浏览器的浮动清除
>
>```javascript
>.container:after {
>   content: "";
>   display: table;
>   clear: both;
>}
>```
>优点：代码精炼，适应性较强  
>缺点：IE7+  
>
>- Micro Clearfix
>
>```javascript
>.container:before, /* 防止margin折叠 */
>.container:after {
>   content: "";
>   display: table;
>}
>.container:after {
>   clear: both;
>}
>.container: {
>   zoom: 1;    /* IE 6/7 （hasLayout触发）*/
>}
>```
>优点：适应性最强  
>缺点：复用不当会造成代码量激增
>
>- `overflow`属性
>
>```javascript
>.container {
>   overflow: hidden;   /* overflow: auto */
>   zoom: 1;    /* IE6 (hasLayout触发) */
>}
>```
>优点：代码量少  
>缺点：内容增多会隐藏掉部分内容。
>
>- `:after` 伪元素
>
>```javascript
>.container:after {
>   content: ".";
>   display: block;
>   height: 0;
>   clear: both;
>   overflow: hidden;
>   visibility: hidden;
>}
>```
>优点：兼容性强  
>缺点：代码量较多
>
>- 带有`clear`属性的标签（太丑一般不用）

##<a name="css-3">BFC和hasLayout是什么</a>

>BFC(Block Formatting Context), 块级格式化上下文。是CSS2.1规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。BFC提供了一个上下文环境，或者说作用域。在一个BFC内的元素不会影响其他元素的布局，也就是说BFC是一个作用范围，其独立操作管辖自己的内部布局。
>
>表现规则：
>
>1. 处于同一个BFC的元素垂直外边距会折叠
>2. 处于不同BFC的元素不会发生外边距折叠
>3. 在BFC内，每一个元素左边与包含块左边相接触
>4. BFC是页面上的一个隔离的独立容器，容器内的子元素布局不会影响外部元素。
>5. 创建了BFC的元素不能与浮动元素重叠
>6. 高度计算，生成了BFC的元素的高度包括其内部浮动子元素。
>
>产生BFC：
>
>1. float值不为none
>2. overflow值不为visible
>3. display的值为table-cell, table-caption, inline-block中的任一个
>4. position值不为relative和static
>
>BFC用处：
>
>1. 清除浮动(内部or外部)--设置overflow
>2. 解决垂直外边距折叠--创建BFC包裹容器
>
>hasLayout是LE8之前版本IE中的BFC实现。Layout是IE浏览器渲染引擎的一个内部组成。当`hasLayout`值为true时，一个元素对自己自身的内容进行组织和把控，当为false时，其依赖于包含块来计算尺寸和组织内容。
>只有部分HTML标签会触发Layout，手动触发的方式有很多，但是`zoom: 1`普适性更好，其本身用于设置元素的缩放比例，既可以触发hasLayout又没有多余影响。

##<a name="css-4">如何理解inline-block</a>

>`inline-block`是W3C在CSS2.1中加入规范的一个CSS属性。它所表示的意义是，一个对内体现block特质，对外体现inline特质的BFC。也就是说，inline-block可以像block一样设置宽高，但和inline一样默认不换行。其实早在IE5.5便已有`inline-block`，但那时IE的私有实现，会触发hasLayout，和标准的inline-block属性也并不相同。  
>IE6/7并不是不支持inline-block，只是block元素需要做一些处理来达到inline-block效果。（先display为inline，再触发hasLayout）而inline元素直接设置或者zoom：1均可达到inline-block效果。  
>产生inline-block空隙的根本性原因：**HTML中换行符，空格符，制表符等合并为空白符，字体大小不为0的情况下，空白符自然占据一定的宽度，因此产生了元素间的空隙。（DOM中的Text节点）**  
>如何清除：IE7+可以使用`font-size: 0`, 但是，IE6/7由于支持方式不同，所以，也无法成功。[详细](http://www.iyunlu.com/view/css-xhtml/64.html)

##<a name="css-5">line-height: 150%与line-height: 1.5的区别</a>

>```css
>body {
>   font-size: 12px;
>   line-height: 150%;  //12*1.5 = 18px 向下继承18px的行高属性
>   //line-height: 1.5;   //向下继承1.5的基数因子
>}
>p {
>   font-size: 14px;    //若150%，行高为18px。若1.5，行高为14*1.5 = 21px。
>}
>```

##<a name="css-6">float为何会使外部容器高度塌陷</a>

>当一个元素float后，会为当前元素创建一个新的BFC，这个新的BFC会脱离原先的BFC，也即是两个不同层次的BFC无法相互包含，所以外部BFC在计算高度时就会忽略内部浮动新生成的BFC。当通过浮动清除时，实际是将外部BFC和内部BFC归到同一层次。

##<a name="css-7">vertical-align的表现为何在IE7/8/9不尽相同，其中渲染机制是？</a>

##<a name="css-8">dl, dt, dd 三个标签浏览器默认margin值是多少？是否有标签默认文本粗体？</a>

>其实`ul, ol, dl`是一样的默认margin都是1em，相对于当前列表的font-size，设定font-size会改变默认margin。
>标题标签h1-6,th,b,strong,optgroup默认是粗体。

##<a name="css-9">What's the difference between `block`、`inline` and `inline-block`?</a>

>首先三者都是作为`display`属性的值而存在。  
`block`是**块级元素**or**块框**，在文档流中独占一行，元素前后有换行符。表现为标准的盒子模型，垂直边距由框的垂直外边距计算。  
>`inline`是**行内元素**or**行内框**。元素在一行中从左至右依次排列，前后没有换行符。而且只能设置水平方向的盒子属性，垂直内边距、边框、外边距的设置不影响行内框的高度。行内框的宽高显式设定对其也是无影响的，它的宽高由本身的内容决定。一行行内框构成一个**行框**，行框的高度是由其内部的最高行内框决定的。当然，可以设置行高来改变这个高度。因此，**行内框**尺寸的改变方法**只有修改水平内外边距，边框或修改所属的行框的行高。**  
>`inline-block`是**行内块级元素or行内块框**，是CSS2.1加入标准中的行内块级元素声明。顾名思义，可以让块框在不换行的情况下像行内框一样水平排列显示。但是其依旧具有完整的盒子属性，而不像行内框一样是阉割的盒子模型。所以对一个`inline-block`的元素而言，可以独立地理解为其就是一个块框，而对外来讲它是一个被格式化了的行框。但是，要注意的是，`inline-block`后的元素会产生水平空隙，这是由于各元素之间的空白符导致的，解决起来也比较揪心，常见的是在父元素上设置`font-size: 0;`。

##<a name="css-10">em VS px VS pt VS percent</a>

>em, % 可伸缩单位，适合Mobile Device，em是相对于当前元素而计算的值。
>pt=1/72 现实中的inches，印刷版的固定单位，px，像素点单位，不适合移动终端。
>%其实最好，变化不突兀， em也行。px少用。pt滚粗。

