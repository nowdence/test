<?php
header("Content-type: text/html; charset=utf-8");

//1.连接数据库
try{
	$pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8;","root","");
}catch(PDOException $e){
	die("数据库连接失败".$e->getMessage());
}

$newstitle = $_POST['newstitle'];
		$newscontent = $_POST['newscontent'];

		$sql = "insert into news values (null,'{$newstitle}','{$newscontent}')";
		$rw = $pdo->exec($sql);
		if($rw > 0){
				// echo "<script>alert('增加成功');window.location='index.php'</script>";
			// echo json_encode(array('msg'=>'登陆成功','errorCode'=>'ok','address'=>'news.html'));
			echo json_encode(array('msg'=>'插入成功','errorCode'=>'ok','address'=>'index.php'));
		}else{
			// echo json_encode(array('msg'=>'登陆失败','errorCode'=>'no','address'=>'index.html'));
			echo json_encode(array('msg'=>'插入失败','errorCode'=>'no','address'=>'contentAdd.php'));
		}
