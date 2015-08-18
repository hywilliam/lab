##深入理解CSS3的渐变问题

CSS渐变是在CSS3的image module中新增的`<image>`类型，使用CSS渐变可以在两种颜色间实现平滑渐变效果。用它来替代传统的背景图片，可以加快页面加载，减少带宽占用。但是由于各浏览器厂商的支持情况，在实际使用过程中坑还是不少的。浏览器支持两种类型的渐变：线性渐变（通过linear-gradient函数定义），放射渐变（通过radial-gradient函数定义）。

这里首先要明确一个概念，即渐变是一个由浏览器生成的“背景图片”，这个图片可以看做一个对象，是`gradient()`函数的一个返回值，但是，这个图片的宽高是不可配置的，它沿着你所设定的方向铺满所应用的元素。

###Linear gradients

我们先来看线性渐变。通过设置一个起始点，结束点，线性方向或角度(`angle`)就能出现一个线性渐变效果。我们还可以设置，颜色中断位置。

#### 简单语法

~~~css
/* 针对老式浏览器的旧式语法，依赖于浏览器厂商的前缀 */
background: -prefix-linear-gradient(top, blue, white);

/* 现代浏览器的新式语法（IE10+, FF16+, chrome26+, safari6+, Op12+） */
background: linear-gradient(to bottom, blue, white);

/* 水平方向 */
background: -prefix-linear-gradient(left, blue, white);
background: linear-gradient(to right, blue, white);

/* 对角线方向 */
background: -prefix-linear-gradient(left top, blue, white);
background: linear-gradient(to bottom right, blue, white);
~~~

![](简单线变垂直方向)
![](简单线变水平方向)
![](简单线变对角线方向)

#### 使用angles创建有角度的线性渐变

这里首先要简要了解一下`angles`是个什么东东。`<angle>`是CSS中的一种数据值，按照传统的理解可以认为是圆周角。还是上图好理解。
![](角度示例)
上图分别是正向90度，正向180度，负向90度及0度角的偏转。 
![](渐变角度解释图)
默认情况下，渐变线是垂直方向的，当设置了`<angle>`的情况下，由起始点到结束点的渐变会发生方向的偏转。四个主方位的渐变情况如下。
![](四个角度方向的渐变)

~~~css
background: linear-gradient(<angle>, red, white);
~~~

#### color stops

当有一个需求：在div的top至80%处时渐变色由蓝转白，而80%处至bottom由白转黄。就需要为渐变增添color stops的值了。其实也就是说，线性渐变可以存在多个起始点与中断点，但是最少要有一个起始和结束点。

![](一个color stop)

~~~css
background: -prefix-linear-gradient(top, blue, white 80%, orange);
background: linear-gradient(to bottom, blue, white 80%, orange);

/* 也可以多个中断点 */
background: linear-gradient(to right, red, orange, yellow, green, blue);
~~~

![](多个color stop)

#### 透明渐变

如果说，我们想要一个渐变背景是透明渐变怎么办，其实在现代浏览器很easy，只需关注`RGBA`的alpha值就好了。比如:

~~~css
/* 50%黑色透明度向右渐变为不透明的白色 */
background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 1));
~~~

OK。到现在，关于线性渐变的有关原理和一些属性值介绍就没有了。写个小栗子吧。  
要求把一个块级元素从上至下进行黑色背景线性渐变，透明度的渐变为70%->50%(75%的位置)->0。

学习理解完，处理起来还是蛮easy的。

~~~css
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 75%,
            rgba(0, 0, 0, 0));
~~~

![](线性渐变栗子)

以上一行代码就可以在现代浏览器（IE10+, FF16+, Chrome26+, Safari6+, Op12+）进行完美运行了。  
当然，为了浏览器兼容性，我们最好添上默认背景色和一些prefix来增加健壮性。

~~~css
background-color: #fff; /* 默认背景色防止效果失效 */
background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0)); /* Safari 3+, chrome 25 */
background-image:    -moz-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0)); /* FF 3~15 */
background-image:      -o-linear-gradient(top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0)); /* Op 11 */
background-image:         linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0)); /* 标准语法要放到最后 */
~~~

---

好了，到了现在，我们还有一个没有填的大坑那就是，那就是揪心的`IE10-`们。