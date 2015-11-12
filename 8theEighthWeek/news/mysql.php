<?php
	header("Content-type:application/json;charset=utf-8");
	$con = mysql_connect("localhost","root","");
	if (!$con) {
		die('Could not connect;' .mysql_error());
	}else{
		mysql_select_db("news_bd",$con);
		$index = $_REQUEST['index'];
		switch ($index) {		//判断传进来的数据执行何种操作
		case '0':		//插入
		$newsId = $_REQUEST['newsId'];
		$newsTitle = $_REQUEST['newsTitle'];
		$newsContent = $_REQUEST['newsContent'];
		$sql = "INSERT INTO `news`(`newsId`, `newsTitle`, `newsContent`) VALUES ('".$newsId."','".$newsTitle."','".$newsContent."')";
			mysql_query("set names 'utf8'");
			$result = mysql_query($sql,$con);
			if (!$result){
		  		die('Error: ' . mysql_error());
				}else{
					$res = array("success" => "插入成功");
					echo json_encode($res);
			    };
			break;
		case '1':		//删除
			$newsId = $_REQUEST['newsId'];
			$qpl = "DELETE FROM `news` WHERE `newsId`='".$newsId."'";
			mysql_query("set names 'utf8'");
			$result = mysql_query($sql,$con);
			if (!$result){
		  		die('Error: ' . mysql_error());
				}else{
					$res = array("success" => "删除成功");
					echo json_encode($res);
			    };
			break;
		case '2':		//修改
			$newsId = $_REQUEST['newsId'];
			$newsTitle = $_REQUEST['newsTitle'];
			$newsContent = $_REQUEST['newsContent'];
			$sql = "UPDATE `news` SET `newsTitle`='".$newsTitle."',`newsContent`='".$newsContent."' WHERE `newsId`='".$newsId."'";
			mysql_query("set names 'utf8'");
			$result = mysql_query($sql,$con);
			if (!$result){
		  		die('Error: ' . mysql_error());
				}else{
					$res = array("success" => "修改成功");
					echo json_encode($res);
			    };
			break;
		case '3':		//查询
			$sql = "SELECT * FROM `news`";
			mysql_query("set names 'utf8'");
			$result = mysql_query($sql,$con);
			if (!$result){
		  		die('Error: ' . mysql_error());
				}else{
					$arr = array();
					while ($row = mysql_fetch_array($result)) {
						array_push($arr, array("newsId"=>$row['newsId'],"newsTitle"=>$row['newsTitle'],"newsContent"=>$row['newsContent']));
					};
					echo json_encode($arr);
			    };
			break;
			};
	};
	mysql_close($con);
?>