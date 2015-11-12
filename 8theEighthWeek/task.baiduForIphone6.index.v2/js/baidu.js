/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date    2015-09-25 22:18:13
 * @version $Id$
 */

$('#btn').click(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'admin.php',
        data: {
            username: $('#username').val(),
            password: $('#password').val()
        },
        // async:false,
        dataType: 'json',
        type: 'post',
        success: function(d) {
            alert(d.msg + ", " + d.errorCode + "，正在跳转中...");
            window.location.href = d.address;
        },
        error: function(d) {
            console.log("登陆失败，请联系管理员");
            window.location.href = "index.php";
        }
    });

});

$('.header-left-baidu').click(function() {
    location.href = "http://m.baidu.com";
});
$('.header-left-dl').click(function() {
    location.href = "index.html";
});
$('.header-right-search').click(function() {
    location.href = "http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#searchbox";
});
$('.header-right-sub').click(function() {
    location.href = "http://m.baidu.com/ssid=0/from=0/bd_page_type=1/uid=0/pu=sz%40224_220%2Cta%40middle___3_537/news?idx=20000&itj=22#subscribe";
});
$('.header-list td span').eq(0).click(function() {
    $('.header-list td span').eq(0).addClass('cur');
    $('.content').load('pd.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(1).click(function() {
    $('.header-list td span').eq(1).addClass('cur');
    $('.content').load('pd.bj.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(2).click(function() {
    $('.header-list td span').eq(2).addClass('cur');
    $('.content').load('pd.whs.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(3).click(function() {
    $('.header-list td span').eq(3).addClass('cur');
    $('.content').load('pd.tp.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(4).click(function() {
    $('.header-list td span').eq(4).addClass('cur');
    $('.content').load('pd.yl.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(5).click(function() {
    $('.header-list td span').eq(5).addClass('cur');
    $('.content').load('pd.sh.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(6).click(function() {
    $('.header-list td span').eq(6).addClass('cur');
    $('.content').load('pd.js.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(7).click(function() {
    $('.header-list td span').eq(7).addClass('cur');
    $('.content').load('pd.hlw.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(8).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});
$('.header-list td span').eq(8).click(function() {
    $('.header-list td span').eq(8).addClass('cur');
    $('.content').load('pd.kj.htm');
    // console.log('.header-list td span');
    $('.header-list td span').eq(0).removeClass('cur');
    $('.header-list td span').eq(1).removeClass('cur');
    $('.header-list td span').eq(2).removeClass('cur');
    $('.header-list td span').eq(3).removeClass('cur');
    $('.header-list td span').eq(4).removeClass('cur');
    $('.header-list td span').eq(5).removeClass('cur');
    $('.header-list td span').eq(6).removeClass('cur');
    $('.header-list td span').eq(7).removeClass('cur');
    $('.header-list td span').eq(9).removeClass('cur');

});