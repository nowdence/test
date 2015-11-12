// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	// 通过 require 引入依赖
	var index = require.async("./index", function(index_callback) {

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


});