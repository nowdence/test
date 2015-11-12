<?php
header("Content-type: text/html; charset=utf-8");

//1.连接数据库
try{
	$pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8;","root","");
}catch(PDOException $e){
	die("数据库连接失败".$e->getMessage());
}

//2.通过action的值做地应操作

switch($_GET['action']){
	case "add"://增加操作
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	
	$sql = "insert into news values(null,'{$newstitle}','{$newscontent}')";
	$rw = $pdo->exec($sql);
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
	$pdo->exec($sql);
	header("Location:index.php");
	break;
	
	case "edit":
	//1.获取表单信息
	$newstitle = $_POST['newstitle'];
	$newscontent = $_POST['newscontent'];
	$id = $_POST['id'];
	// $id = $_GET['id'];
	
	$sql = "update news set newstitle='{$newstitle}',newscontent='{$newscontent}' where id={$id}"; 
	$rw = $pdo->exec($sql);
	if($rw>0){
			echo "<script>alert('修改成功');window.location='index.php'</script>";
	}else{
		echo "<script>alert('增加失败');window.history.back();</script>";
	}
	break;
}





