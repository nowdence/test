<?php
	header("Content-type:application/json; charset=utf-8");
	$index = $_REQUEST['index'];
	if ($index=1) {
		$res = array('success'=>'ok','text'=>'我是测试文本');
		echo json_encode($res);
	}else{
		$res = array('success'=>'no','text'=>'传输失败');
		echo json_encode($res);
	}
?>