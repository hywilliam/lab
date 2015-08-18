#Contents Tree

 - [怎样去掉JavaScript中Array的重复项](#js-1)

#Contents

## <a name="js-1">怎样去掉JavaScript中Array的重复项</a>

 1. 双重循环
 2. 先排序后去重
 3. 字典去重

## <a name="js-2">如何获得客户端浏览器的相关信息（浏览器嗅探）</a>

 - `window.navigator`
   
 引用自Navigator对象，其实现在来讲，Navigator对象相当复杂，浏览器嗅探对处理客户端兼容性帮助不大，更好的做法是功能性测试。
  
  有用的属性：
  
  + appName：IE中 "Microsoft Internet Explorer"，其余通常 "Netscape"
  + appVersion：数字开始，包含浏览器厂商和版本信息，因为非标准，所以不用它判断浏览器类型
  + userAgent：浏览器在HTTP头部中发送的字符串，包含appVersion中的所有信息，通常用它作嗅探
  + platform：操作系统字符串
  + onLine：是否联网
  + geolocation：地理位置信息接口
 
 - `window.screen`  
 
 非标准，但广泛实现。可判断窗口大小和实际可用的大小。
 
## <a name="js-4">3、以下表达式返回的结果是false的有？</a>

- A.（function(){}).constructor == Object
- B. [].constructor == Array
- C. true.constructor == Boolean
- D. (1).constructor == Number

答案：A（Function）

每一个javascript值都是对象的存在，然后都是实例，然后还是那句话，`constuctor`都是其原型对构造函数的引用。

## <a name="js-5">一招通吃的类型判断</a>

```javascript
function type(obj){
    return  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
```

## <a name="js-6">以下代码执行后ret和arr的值分别是？</a>

```javascript
var arr=[1,2,"a","b"];
var ret=arr.splice(1,2,3);
```
> splice() 方法 向/从数组中添加/删除项目，然后返回被删除的项目。  
注释：该方法会改变原始数组。  
语法：arrayObject.splice(index,howmany,item1,.....,itemX)

## <a name="js-7"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>

## <a name="js-3"></a>## <a name="js-3"></a>


