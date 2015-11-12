// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 通过 require 引入依赖
	require('jquery');
	// console.log(11111);
	var index = require.async("index", function(index_callback) {

		// console.log(index_callback.setuser());
		// console.log(index_callback.setnav());
		// console.log(index_callback.setmore());
		index_callback.setuser();
		index_callback.setnav();
		index_callback.setmore();
		index_callback.selectMyfocus();
		index_callback.selectNews();
		index_callback.selectNav();
		index_callback.selectMovies();
		index_callback.selectShopping();
		index_callback.seeMore();

	});



	// 	("index",funcion(index_callback){

	// 	console.log(index_callback.doSomething());
	// });

	// var Spinning = require('./spinning');

	// 通过 exports 对外提供接口
	// exports.doSomething = ...

	// 或者通过 module.exports 提供整个接口
	// module.exports = ...

});