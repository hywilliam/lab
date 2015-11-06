# 概述 Introduction

Backbone 着眼于数据的查询和操作，更像是一个库而非框架。  

Backbone 具有很强的可扩展和可伸缩性，可以只用model提供数据支撑。而不用别的类。甚至可以与别的框架和类库融合。  

 - What is MVC
 - What is Backbone.js
 - When Do I Need A JavaScript MVC Framework
 - Why Consider Backbone.js

说白了，DOM操作，模板，路由是需要一个MVC的理由

# 基本概念 Fundamentals

观察者模式，贯穿于MVC中。MVC起源是用于操作系统构建的，在当前的web环境，有不同的context。而web又分为前端和后端。Backbone是前端MV*。  

前端MVC和后端MVC的区别是路由的前置还是后置

## 服务端MVC

单一HTTP入口，接收请求后，路由分发到各个控制器去做相应的事情，Model专注于与持久层的交互，数据的读取同步，业务逻辑大多在此。view处理HTML展现，Controller作为胶水层粘附变化和操作。

## 客户端MVC & SPA

早先，在多个widget之间保持同步的方式是通过DOM操作，拿取，塞入，回调操作，etc。慢慢实验和发展，现在有了backbone之类的mvc框架。

Backbone 风格  

在view中，events承担控制器配置的角色，定义在视图DOM内发生的事件如何路由到view中定义的事件处理方法上。传统的MVC是由模板担任的，而不是backbone.view类。  

首次加载，可能只是一个HTML，也可能是由服务端MVC实现所构建的视图。但SPA一旦加载，客户端路由会捕获URL并调用客户端逻辑，而不是发送新的请求到服务器。数据的请求是由model来玩成的。

URL路由，DOM事件和模型事件，都在view中触发处理逻辑。这些处理逻辑更新DOM和模型。模型与数据源进行同步，可能会涉及与后端服务器的通信。

### Model

一个模型可能有多个视图在观察他的变化，通过观察，每当模型更新时，视图就可以获得通知，使得视图能够确保将屏幕上显示的内容与模型中的数据保持同步。根据需求，可以创建一个显示所有模型属性的视图，也可以创建多个单独的视图来显示不同的属性。模型不会关注视图的组织方式。只是通过事件系统进行宣布。
另外要注意的是，backbone的model中，包括一个model的集合collection。

### View

用户与视图进行交互，通常是对模型数据的读取和修改。然后作为观察者的view再来实时渲染这些更改。render承担这个角色。与交互的处理，是事件监听器来控制的。

### Template

模板与视图的关系是值得思考的问题，模板库通常接收一个对象或JSON类型的字符串。

A note on Nacigation and State

传统开发中，导航需要URL的参与变化，而SPA的话，可以局部变化，而全局的导航就变成了路由。MVC中，C的角色要摆正。Backbone没有明确的C，

### What does MVC give us?

使UI与业务逻辑分离。便于修改和维护。

# Backbone Basics

Models, Views, Collections, events, routers

## Getting set up

### Model

#### initialization
`.initialize()`方法，粗现。
#### Default values
`.defaults`属性，粗现。
#### getters & setters
`.get()`方法,`.set()`方法,`change: `事件，粗现
#### Direct access
`.attributes`属性，`.hasChanged()`方法，粗现。
用`.attributes`，没有`set()`好，因为直接访问，会越过的`change:attr`的事件触发。相当于`.set({name: 'www'}, {silent: true})`。
#### Listening for changes to your model
在`.initialize()`里添加对model change的监听很便利哟
#### Validation
`.validation()`，`.save()`,`unset()`,`validationError`粗现。
save的时候，validation就会默认触发，或者set的时候，传`{validate: true}`。

### View

#### Creating new views
`.render()` | `.tagName` | `.el`
#### What is `el`?
DOM的引用，每个view都必须有。可以在view里面各种操作el，然后一次性地插入到DOM中，可以更快地进行渲染，因为，渲染效率跟所需的最小重渲数有关。有两种设定view的场景：1.新增一个view（tagName,+可选的`id`, `className`）2.我要操作DOM既有的view（将el的值设为一个css选择器）。
这里有个问题啊，`$el`，`el`区别？
`view.$el === $(view.el)`在一个view里面，两个都有的，便于使用罢了。
`view.$(selector) === $(view.el).find(selector)`。
el属性代表当前view将要进行渲染的标记块；想要得到当前view在页面中的实际渲染，需要将它作为一个新元素添加到DOM或者添加到一个已存在的DOM中去。
#### understanding `render()`
`_.template()` | 
render是定义模板渲染逻辑的可选方法。render末尾加上return this；是一个很好的模式。
#### The events hash 
`delegate()`事件委托用的是jquery的delegate。
`'eventName selector': 'callbackFunction'`

### Collection

#### Adding and Removing Models 
Collection相当于Model们的居所，可以通过`add(), remove()`来增减。
#### Retrieving Models
`Collection.get()`
`id, cid, idAttribute`
#### Listening for events
`obj.on({click: action})` | `trigger()`
#### Resetting/Refreshing Collections
`Collection.set()` | `reset()` | `options.previousModels`
`Collection.reset()`不给reset传参，可以彻底清空一个collection。
set方法可以智能地增删改Collection和里面的models，而且会触发相应的add，remove，change事件。
#### Underscore utility functions
`forEach` | `sortBy` | `map` | `min` | `max` | `pluck` | `filter` | `any` | `indexOf` | `isEmpty` | `groupBy` | ...
#### chainable API
`chain()`封装对象 链式调用，以`value()`作为结尾。

### RESTful Persistence

#### Fetching models from the server
