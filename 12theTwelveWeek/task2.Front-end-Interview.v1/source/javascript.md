
### JS 相关问题

#### 1、解释下事件代理。

当页面中存在大量元素，而且每一个都要一次或多次绑定事件处理器（比如 onclick）时，由于每绑定一个事件处理器都是有代价的，所以这种情况会随着 DOM 元素的增多而严重影响页面性能。

一个简单而优雅的处理 DOM 事件的技术是事件代理（event delegation）机制。它是基于这样一个事实：事件逐层冒泡并能被父级元素捕获。使用事件代理，只需给外层元素绑定一个处理器，就可以处理在其子元素上出发的所有事件。

#### 2、解释下 JavaScript 中 `this` 是如何工作的。

JavaScript 有一套完全不同于其它语言的对 `this` 的处理机制。在五种不同的情况下，`this` 指向的各不相同。

1、全局范围内 `this` 将会指向全局对象，默认是 `window`；
2、函数调用时，`this` 也会指向全局对象；
3、方法调用时，`this` 指向的是调用此方法的对象；
4、调用构造函数（如果函数倾向于和 `new` 关键词一块使用，则我们称这个函数是 构造函数）时，在函数内部，`this` 指向新创建的对象；
5、显式设置 `this`，当使用 `Function.prototype` 上的 `call()` 或者 `apply()` 方法时，函数内的 `this` 将会被 显式设置为函数调用的第一个参数。如下的代码中，

```javascript
var n = 0;
function output() {
	alert(this.x);
}

var bar = {};
bar.n = 1;
bar.s = output;
bar.s.apply();		// 0
bar.m.apply(bar);	// 1
```

`apply()` 的参数为空时，默认调用全局对象。因此，这时的运行结果为 `0`；把 `apply()` 的参数为 `bar` 后，运行结果就变成了 `1`，说明这时 `this` 代表的是对象 `bar`。

#### 3、解释下原型继承的原理。

JavaScript 中的对象是基于原型的。

对象通过一个内部属性绑定到它的原型。默认情况下，所有对象都是对象 `Object` 的实例，并继承了所有基本方法，比如 `toString()`。同时，也可以定义并使用构造器来创建另一种类型的原型：

```javascript
// 定义
function Book(title, publisher) {
	this.title = title;
	this.publisher = publisher;
}

Book.prototype.sayTitle = function () {
	alert(this.title);
};

var book1 = new Book("JavaScript: The Good Parts", "Yahoo! Press");

book1.sayTitle();
aler(book1.toString());
```

构造器 `Book` 用来创建一个新的 `Book` 实例，叫 `book1`。实例 `book1` 的原型是 `Book.prototype`，而 `Book.prototype` 的原型是 `Object`。这个过程创建了一个原型链。

#### 4、你是如何测试 JavaScript 代码的？

一、利用 FireBug 或 Chrome Developer Tool 进行测试。二、使用单元测试工具 QUnit、YUI Test 等。

#### 5、AMD vs. CommonJS？

#### 6、什么是哈希表？

哈希表是一种根据关键字直接访问存储位置的数据结构。如 PHP 中的关联数组、Python 中的字典等，都是属于哈希表结构的数据类型。

#### 7、解释下为什么接下来这段代码不是 IIFE（立即调用的函数表达式）：`function foo(){ .. }()`。要做哪些改动使它变成 IIFE？

将其改为如下的匿名函数即可实现 IIFE：

```javascript
(function () {
	// code
})();
```
  
#### 8、描述以下变量的区别：`null`，`undefined` 或 `undeclared`？该如何检测它们？

`null` 表示“没有对象”，即该处不应该有值。典型用法是：1、作为函数的参数，表示该函数的参数不是对象；2、作为对象原型链的终点。

`undefined` 表示“缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：1、变量被声明了，但没有赋值时，就等于 `undefined`；2、调用函数时，应该提供的参数没有提供，该参数等于 `undefined`；3、对象没有赋值的属性，该属性的值为 `undefined`；4、函数没有返回值时，默认返回 `undefined`。

  
#### 9、什么是闭包，如何使用它，为什么要使用它？

闭包就是由函数创造的一个词法作用域，里面创建的变量被引用后，可以在这个词法环境之外自由使用。闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。下面是一个闭包：

```javascript
var Counter = function () {
	var count = 0;
	return function () {
		return count++;
	}
}

var a = Counter();
a();		// 0
a();		// 1
```

#### 10、请举出一个匿名函数的典型用例？

匿名函数可以用作回调函数执行，可以防止全局变量污染。

此外在 JS 框架中常使用匿名函数来避免全局变量的污染。

#### 11、解释 “JavaScript 模块模式” 以及你在何时使用它。

* 如果有提到无污染的命名空间，可以考虑加分。
* 如果你的模块没有自己的命名空间会怎么样？
  
#### 12 你是如何组织自己的代码？是使用模块模式，还是使用经典继承的方法？

#### 13 请指出 JavaScript 宿主对象和原生对象的区别？

何为“宿主对象”？ECMAScript中的“宿主”当然就是我们网页的运行环境，即“操作系统”和“浏览器”。所有非本地对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象。
所有的 BOM 和 DOM 对象都是宿主对象。因为其对于不同的“宿主”环境所展示的内容不同。

#### 14、指出下列代码的区别：
```javascript
function Person(){} 
var person = Person(); 
var person = new Person();
```

第一行是定义了一个函数 `Person()`；第二行代码是执行函数 `Person()` 并将其返回值复制给变量 `person`，如果 `Person()` 是一个构造器函数的话，新的对象将不会被创建，并且 `this` 将被绑定到全局对象上；第三行代码是用构造函数 `Person()` 构造一个实例对象 `person`。

#### 15、`.call` 和 `.apply` 的区别是什么？

`.call` 的函数原型是 `function.call([thisObj[, arg1[, arg2[, .. [, argN]]]]])`，而 `.apply` 的函数原型则是 `function.apply([thisObj[, argArray]])`。

可以看出，`.apply` 最多只能有两个参数：新对象 `thisObj` 及一个数组 `argArray`，`.call` 则是直接的参数列表。

#### 16、请解释 `Function.prototype.bind` 的作用？

#### 17、你何时优化自己的代码？

保持代码质量和架构的可维护性，在需要优化的时候才进行优化。

#### 18、你能解释一下 JavaScript 中的继承是如何工作的吗？

在 JS 中，继承是通过原型链来实现的。JS 中的每一个对象都有一个原型链，

#### 19、在什么时候你会使用 `document.write()`？（ 大多数生成的广告代码依旧使用 `document.write()`，虽然这种用法会让人很不爽）

#### 20、请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？

#### 21、请尽可能详尽的解释 AJAX 的工作原理。

Ajax 全称为 Asynchronous JavaScript and XML（异步 JavaScript 和 XML），是一种创建交互式网页应用的网页开发技术。
Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发异步请求，从服务器获得数据，然后用 JavaScript来操作 DOM 而更新页面。这其中最关键的一步就是从服务器获得请求数据。

以往我们浏览网页的原理是由 Client 向 Server 提交页面申请，再由 Server 将申请通过 HTTP 传回给 Client 生成浏览页面：

![Ajax 原理图](http://yianbin.qiniudn.com/fe-ajax-a.png)

使用 Ajax 后的工作原理如下图，可见通过 Ajax 在用户交互方面有了很大改进，用户可以不用为提交了 Form 而长时间等待服务器应答，而且通过 Ajax 也可以开发出华丽的 Web 交互页面。

![Ajax 原理图](http://yianbin.qiniudn.com/fe-ajax-b.png)

#### 22、请解释 JSONP 的工作原理，以及它为什么不是真正的 AJAX。

JSON-P（JSON with padding）是一种可执行的 JavaScript 数据，它可以被调用并使用动态脚本注入技术插入到任何网站，解决了 Ajax 的跨域问题。

#### 23、你使用过 JavaScript 模板系统吗？如有使用过，请谈谈你都使用过哪些库，比如 Mustache.js，Handlebars 等等。

#### 24、请解释变量声明提升。

变量提升，就是把变量提升提到函数的顶部位置。需要说明的是，变量提升只是提升变量的声明，并不会把赋值也提升上来。
```javascript
var s = 'Hello World';
(function () {
	// 变量 s 的声明将会提升到这里，值为未定义
    alert(s);
    var s = 'I love you';
})();
```
结果将是 `undefined`。

#### 25、请描述下事件冒泡机制。

#### 26、"attribute" 和 "property" 的区别是什么？

#### 27、为什么扩展 JavaScript 内置对象不是好的做法？

#### 28、请指出 document load 和 document ready 两个事件的区别。

`ready` 表示文档的 DOM 已经加载完成（不包含图片、视频等资源）；`load` 表示整个网页加载完成。可以看出，`ready` 事件发生在 `load` 事件之前。

#### 29、`==` 和 `===` 有什么不同？

如果两边的操作数具有一致的类型且拥有相同的值时，`===` 返回 `true`，`!==` 返回 `false`。

然而，当使用 `==` 和 `!=` 时，你可能会遇到类型不同的情况，这种情况下，操作数的类型会被强制转换成一样的再做比较，这可能不是你想要的结果。下面是一些例子：

```javascript
'' == '0'				// false
0  == ''				// true
0  == '0'				// true

false == 'false'		// false
false == '0'			// true
false == undefined		// false
false == null			// false
null  == undefined		// true
```

所以，建议始终使用 `===` 和 `!==` 比较两个运算数。


#### 30、你如何从浏览器的 URL 中获取查询字符串参数。

```javascript
var query = window.location.search
```

#### 31、请解释一下 JavaScript 的同源策略。

同源策略限制了一个源（origin）中加载文本或脚本与来自其它源（origin）中资源的交互方式。

同源策略出于安全，不允许源 A 的脚本读取（read）源 B 的资源的内容，但却允许执行（execute）源 B 的资源。这个概念也有些拗口。简单说，有一个页面调用了 Google CDN 提供的 jQuery，以及其它 CDN 上的 Bootstrap JS、CSS 代码，虽然它们与我的博客不同源，但我可以用它们来操作这个页面，并应用样式，这是执行的概念。

参考：https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy

#### 32、请描述一下 JavaScript 的继承模式。

#### 33、如何实现下列代码：
```javascript
[1, 2, 3, 4, 5].duplicator();	// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

将此方法添加至 `Array.prototype` 实现，代码如下：

```javascript
Array.prototype.duplicator = function () {
	return this.concat(this);
}
```

#### 34、描述一种 JavaScript 中实现 memoization（避免重复运算）的策略。

事件代理

#### 35、什么是三元表达式？“三元”表示什么意思？

#### 36、函数的参数元是什么？

在函数内部，可以使用一个特殊的参数对象 `arguments`。比如有这样一个面试题：定义一个函数 `log`，实现 `console.log` 的功能同时有一个前缀 `(app) `，我们知道 `log` 应该可以处理不定数量个的参数，那么使用下面的代码是正确的：

```javascript
var log = functin () {
	var args = Array.prototype.slice.call(arguments);
	args.unshift('(app) ');
	console.log.apply(console, args);
}
```
需要注意的是，`arguments` 是一个伪数组，需要将其转化为标准数组之后才能使用 `unshift` 方法。

#### 37、什么是 `use strict;` ? 使用它的好处和坏处分别是什么？

`use strict;` 将使 JS 代码以严格模式（strict mode）运行。设立"严格模式"的目的，主要有以下几个：

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

"严格模式"体现了 Javascript 更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。
另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。

### jQuery 相关问题

#### 1、解释 "chaining"。

Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。比如下面的代码：

```javascript
$('.button').addClass('dummy')
			.css('color', 'red')
         	.fadeIn('slow');
```

#### 2、解释 "deferreds"。

deferred 是 jQuery 的回调函数解决方案。它解决了如何处理耗时操作的问题，对那些操作提供了更好的控制，以及统一的编程接口。

参考：[JavaScript Promise](http://www.html5rocks.com/zh/tutorials/es6/promises/)

#### 3、你知道哪些针对 jQuery 的优化方法。

1、尽量使用 CDN 加载（CDN Benefits），在CDN加载失败时，要回源到本地服务器的同版本 jQuery。
2、尽可能在页面底部加载 jQuery 和 JavaScript。
3、一个页面只使用一个 Document Ready，便于调试和跟踪，不要把事件直接写在HTML元素上，这样不方便调试。
4、尽可能的使用 ID 选择器。因为 jQuery 中 ID 选择器使用的是 `document.getElementById()`，所以更快。越靠右侧越具体。
5、缓冲 jQuery 对象；
6、使用链式调用代替变量缓存和多次调用选择器，当链式调用超过 3 级的时候，适当的换行增加可读性。
7、尽量不要把 CSS 混在 JS 中。
8、巧用 `.date()` 方法为节点存储数据
9、使用 `.ajax()`，避免 `.getJson()` 或者 `.get()`，它们在内部也是调用 `.ajax()` 的，并且指定 dataType 属性。
10、不要在 https 的站点上请求 http，使用依赖协议的 URL，不要把数据加在 url 上，使用 data 属性。
11、对于 ajax 加载的内容，使用委托绑定事件，这样可以在元素不存在的时候执行绑定。（之后 ajax 加载进 DOM 结构中）

#### 4、请解释 `.end()` 的用途。

`.end()` 方法结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态。

大多数 jQuery 的遍历方法会操作一个 jQuery 对象实例，并生成一个匹配不同 DOM 元素集的新对象。当发生这种情况时，应该会把新的元素集推入维持在对象中的堆栈内。每次成功的筛选方法调用都会把新元素推入堆栈中。如果我们需要老的元素集，可以使用 `.end()` 从堆栈中弹出新集合。

#### 5、你如何给一个事件处理函数命名空间，为什么要这样做？


使用命名空间可以避免命名冲突，更好的整理代码

```javascript
var NAMESPACE = {}
NAMESPACE.eventHandle = function () {
	...
}
```

#### 6、请说出你可以传递给 jQuery 方法的四种不同值。

选择器（字符串），HTML（字符串），回调函数，HTML 元素，对象，数组，元素数组，jQuery对象等。

#### 7、什么是效果队列？

#### 8、请指出 `.get()`，`[]`，`.eq()` 的区别。

`.eq()` 返回的是一个 jQuery 对象，所以可以使用 jQuery 对象的方法，而 `.get()` 返回一个原生 DOM 对象。

#### 9、请指出 `.bind()`，`.live()` 和 `.delegate()` 的区别。

`.bind()` 直接将事件处理函数绑定到元素上。`.live()` 和 `.delegate()` 则是将事件处理函数绑定到一个特定父元素上，当事件冒泡到这个级时，再对目标元素执行事件处理函数，其中 `.live()` 默认绑定到 `document`。

```javascript
$('a').bind('click', function () { alert('That tickles!') });
$('a').live('click', function () { alert('That tickles!') });
$('.container').delegate('a', 'click', function () { alert('That tickles!') });
```

#### 10、请指出 `$` 和 `$.fn` 的区别，或者说出 `$.fn` 的用途。

首先需要知道的是，`$` 是一个封装好的 jQUery 类，而 `$.fn` 是 `$.prototype` 的简写形式。`$.fn` 常用作给 jQuery 实例扩展方法，在编写 jQuery 插件时使用。

#### 11、请优化选择器：`$(".foo div#bar:eq(0)")`

不会做
