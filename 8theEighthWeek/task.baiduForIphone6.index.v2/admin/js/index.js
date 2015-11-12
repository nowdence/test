/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date    2015-09-27 18:32:54
 * @version $Id$
 */

$('#btn').click(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'add.php',
        data: {
            newstitle: $('#newstitle').val(),
            newscontent: $('#newscontent').val()
        },
        // async:false,
        dataType: 'json',
        type: 'post',
        success: function(d) {
            alert(d.msg + ", " + d.errorCode + "，正在跳转中...");
            window.location.href = d.address;
        },
        error: function(d) {
            alert("请联系管理员");
            window.location.href = "index.php";
        }
    });

});

function doDel(id){
            if(confirm("确定要删除吗？")){
                window.location='action.php?action=del&id='+id;
            }
        }

// console.log($('.nav li a').eq(1));
// $('#contentAdd').click(function(){
//     $('#content').load('contentAdd.htm');
// });