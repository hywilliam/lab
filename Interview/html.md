##Contents Tree

 - [doctype是什么，举例常见doctype及特点；doctype的作用是什么；](#html-1)
 - [浏览器严格（标准）模式与混杂（怪异）模式如何区分？它们有何意义？](#html-2)
 - [HTML与XHTML的区别？HTML4与HTML5的区别？](#html-3)
 - [HTML全局属性有哪些](#html-4)
 - [如何理解Web语义化](#html-5)
 - [frameset, frame, iframe三者的区别](#html-6)

##Contents

###<a name="html-1">doctype是什么，举例常见doctype及特点；doctype的作用是什么？</a>

>1.`<!DOCTYPE>`文档类型声明位于整个文档的最前面，`<html>`标签之前。用于告知浏览器以何种模式（HTML or XHTML）来渲染文档。HTML5中不区分大小写。  
>2.HTML4.01基于SGML，所以必须指定DTD，HTML5不基于SGML，所以不用指定DTD。  
>3.`<!DOCTYPE>`可以声明三种DTD类型，严格版本，过渡版本，以及基于框架的版本。目前常见有7种：  
> 
> - HTML5的`<!DOCTYPE>`
> - HTML4.01的三种HTML文档类型：Strict, Transitional, Frameset。
> - XHTML1.0的三种XML文档类型：Strict, Transitional, Frameset。  
> 
> 4.如果要干净的标记，免于表现层混乱，用Strict类型。如果浏览器不支持CSS需要用HTML来做一些特性呈现，用Transitional类型。如果文档带有框架，用Frameset类型。

###<a name="html-2">浏览器严格（标准）模式与混杂（怪异）模式如何区分？它们有何意义？</a>

>0.首先，两种模式是浏览器来处理文档的两种方式，**渲染模式的选择依赖于HTML文件顶部的DOCTYPE声明**。使用`document.compatMode`来判断浏览器的渲染模式，值为`CSS1Compat`则工作在标准模式，值为`BackCompat`or`undefined`则工作在怪异模式。  
>1.严格模式的排版和JS运作模式是以当前浏览器能够支持的最高web标准运行。  
>2.在混杂模式中，页面以宽松的向后兼容方式显示，模拟老式浏览器的行为以防止站点无法使用。  
>3.**DOCTYPE不存在或者格式不正确会导致文档以混杂模式呈现**，IE6--9开启混杂模式就是以IE5.5的内核渲染文档。  
>4.HTML5和两种Strict型导致浏览器以标准（严格）模式呈现。过渡型和框架型则是近似标准模式来呈现，广义也可称为标准模式。   
>5.由于web标准是在不断发展过程中，所以两种模式都有当时浏览器版本的局限性和时限性。

###<a name="html-3">HTML与XHTML的区别？HTML4与HTML5的区别？</a>

>**keywords:**  
>HTML4.01, 1999, W3C, 核心。  
>XHTML1.0，1999-2009，W3C，重在语法严格。  
>HTML5，2004，WHATWG发起，2006，W3C介入，2008年，HTML5草案发布，一个庞大的技术集。  
>XHTML中的一些语法要求：
>
> 1. 所有标签必须闭合，单元素标签要有斜杠
> 2. 标签元素和属性必须小写
> 3. 所有标签嵌套必须合理
> 4. 所有属性必须有值且被双引号括起来
> 5. 特殊符号必须用编码表示
> 6. 图片必须要有alt说明
> 7. 注释中不能使用"--"

###<a name="html-4">HTML全局属性有哪些？</a>

参考：[MDN: html global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) || [W3C HTML global-attributes](http://www.w3.org/TR/html-markup/global-attributes.html#common.attrs.core) || [W3C中文](http://www.w3school.com.cn/tags/html_ref_standardattributes.asp)
> HTML4:  
> 
> - class
> - id
> - title
> - style
> - tabindex：可获取键盘tab焦点
> - lang：元素内容的语言
> - dir：设置元素内容文本方向
> - accesskey：规定激活元素的快捷键，但浏览器不同，功能键也不同。[WIKI AccessKey](https://en.wikipedia.org/wiki/Access_key)
> 
> HTML5:
> 
> - hidden：从内容的角度来看，设置元素为不可见或未相关。
> - data-*：为元素增加自定义属性来存储自定义数据。
> - contenteditable：规定内容是否可编辑
> - translate：=yes|no 是否本地化当前元素及其子节点。
> - contextmenu：只有FF支持，元素上下文菜单。
>
> HTML5.1
> 
> - spellcheck：元素拼写及语法检查
> - draggable：元素是否可拖动
> - dropzone：设置元素拖放类型： copy, move, link

###<a name="html-5">如何理解web语义化</a>

>Web语义化是指通过HTML标记表示页面包含的信息，包括**HTML标签语义化**和**CSS命名语义化**。  
>HTML标签语义化是指：通过使用包含语义的标签恰当地表示文档结构，少用无语义标签`div`,`span`之类。  
>CSS命名语义化是指：为HTML标签添加有意义的class，id来补充为表达完全的语义。  
>为什么要语义化？
>
> - 去掉样式后仍有清晰地结构
> - 保证更好地可用性
> - 有利于SEO
> - 有利于团队可持续运行维护

###<a name="html-6">frameset, frame, iframe区别</a>

> 1. frame必须和frameset联合嵌套使用，而iframe可以单独使用。
> 2. 使用frameset必须声明DTD，HTML5已经抛弃frame，最好使用iframe。
> 3. frame不能放到body中，ifame必须放到body中。
> 4. frame高度通过frameset设置，iframe高度自己设定。

 