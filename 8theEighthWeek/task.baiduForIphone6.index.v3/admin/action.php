<?php
header("Content-type: text/html; charset=utf-8");

//1.连接数据库
$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="test";
$tblname="news";
$con=mysql_connect($host,$dbusername,$dbpassword);
if(!$con){
    echo "数据库连接失败！";
    die();
}
mysql_select_db($dbname);
mysql_query("set names utf8");

//2.通过action的值做地应操作

switch($_GET['action']){
	case "add"://增加操作
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	$cat = $_POST['cat'];
	
	$sql = "insert into news values(null,'{$newstitle}','{$newscontent}','{$cat}')";
	$rw = mysql_query($sql);
	if($rw > 0){
			echo "<script>alert('增加成功');window.location='index.php'</script>";
	}else{
		echo "<script>alert('增加失败');window.history.back();</script>";
	}
	break;

	//删除操作
	case "del":
	$id = $_GET['id'];
	$sql = "delete from news where id={$id}";
	mysql_query($sql);
	header("Location:index.php");
	break;
	
	case "edit":
	//1.获取表单信息
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	$cat = $_POST['cat'];
	$id = $_POST['id'];
	// $id = $_GET['id'];
	
	$sql = "update news set newstitle='{$newstitle}',newscontent='{$newscontent}',cat='{$cat}' where id={$id}"; 
	$rw = mysql_query($sql);
	if($rw>0){
			echo "<script>alert('修改成功');window.location='index.php'</script>";
	}else{
		echo "<script>alert('增加失败');window.history.back();</script>";
	}
	break;
}

// 关闭数据库
mysql_close($con);





