<?php
header("Content-type: text/html; charset=utf-8");

//1.连接数据库
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

$newstitle = $_POST['newstitle'];
$newscontent = $_POST['newscontent'];
$cat = $_POST['cat'];

$sql = "insert into news values (null,'{$newstitle}','{$newscontent}','{$cat}')";
$rw = mysql_query($sql);
if($rw > 0){
		// echo "<script>alert('增加成功');window.location='index.php'</script>";
	// echo json_encode(array('msg'=>'登陆成功','errorCode'=>'ok','address'=>'news.html'));
	echo json_encode(array('msg'=>'插入成功','errorCode'=>'ok','address'=>'index.php'));
}else{
	// echo json_encode(array('msg'=>'登陆失败','errorCode'=>'no','address'=>'index.html'));
	echo json_encode(array('msg'=>'插入失败','errorCode'=>'no','address'=>'contentAdd.php'));
}

mysql_close($con);//关闭数据库
