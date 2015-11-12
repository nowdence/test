// 所有模块都通过 define 来定义
define(function(require, exports, module) {
  var a = {};
  // 通过 require 引入依赖
  a.setnav = function() {
    // console.log("my ok");
    $(".setnav").mouseover(function() {
      $(".bdpfmenu").css("display", "block");
    });
    $(".bdpfmenu").mouseleave(function() {
      $(".bdpfmenu").css("display", "none");
    });
  }

  a.setuser = function() {
    $(".dnav").mouseover(function() {
      $(".user-name-menu").css("display", "block");
    });
    $(".user-name-menu").mouseleave(function() {
      $(".user-name-menu").css("display", "none");
    });
  }

  a.setmore = function() {
    $(".setmore").mouseover(function() {
      $(".s_bdbriwrapper").css({
        "display": "block",
        "height": $("body").height()
      });
      $(".setmore").css({
        "background-color": "#f8f8f8",
        "color": "#000",
        "border": "0"
      });
    });
    // console.log($("body").height());
    $(".s_bdbriwrapper").mouseleave(function() {
      $(".s_bdbriwrapper").css("display", "none");
      $(".setmore").css({
        "background-color": "#38f",
        "color": "#fff",
        "border-bottom": "1px solid #38f"
      });
    });
  }

  a.selectMyfocus = function() {
    $("#myfocus").mouseover(function() {
      $("body").text = "waiting...";
      // alert("11111");
      $("#myfocus").addClass("hit");
      $("#news").removeClass("hit");
      $("#nav").removeClass("hit");
      $("#movies").removeClass("hit");
      $("#shopping").removeClass("hit");

      $(".s-contents").load("addmyfocus.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }

  a.selectNews = function() {
    $("#news").mouseover(function() {
      $("body").text = "waiting...";
      // alert("11111");
      $("#news").addClass("hit");
      $("#myfocus").removeClass("hit");
      $("#nav").removeClass("hit");
      $("#movies").removeClass("hit");
      $("#shopping").removeClass("hit");

      $(".s-contents").load("addnews.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }

  a.selectNav = function() {
    $("#nav").mouseover(function() {
      $("body").text = "waiting...";
      // alert("11111");
      $("#nav").addClass("hit");
      $("#myfocus").removeClass("hit");
      $("#news").removeClass("hit");
      $("#movies").removeClass("hit");
      $("#shopping").removeClass("hit");

      $(".s-contents").load("addnav.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }

  a.selectMovies = function() {
    $("#movies").mouseover(function() {
      $("body").text = "waiting...";
      // alert("11111");
      $("#movies").addClass("hit");
      $("#myfocus").removeClass("hit");
      $("#news").removeClass("hit");
      $("#nav").removeClass("hit");
      $("#shopping").removeClass("hit");

      $(".s-contents").load("addmovies.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }

  a.selectShopping = function() {
    $("#shopping").mouseover(function() {
      $("body").text = "waiting...";
      // alert("11111");
      $("#shopping").addClass("hit");
      $("#myfocus").removeClass("hit");
      $("#news").removeClass("hit");
      $("#nav").removeClass("hit");
      $("#movies").removeClass("hit");

      $(".s-contents").load("add.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }

  a.seeMore = function() {
    $(".s-morebar").mouseover(function() {
      $(".s-morebar").load("addmore.htm", function(a, b, c) {
        // console.log(a);
        // console.log(b);
        // console.log(c);
        if (status == "error") {
          $("body").text("加载失败");
        }
      });
    });
  }


  // a.selectMyfocus = function() {
  //   $("#myfocus").mouseover(function() {

  //   });
  // }

  // console.log(module)
  module.exports = a;
  // var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  // exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  // module.exports = ...

});