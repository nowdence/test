<?php
/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date    2015-09-25 22:19:21
 * @version $Id$
 */
header("Content-type: text/html; charset=utf-8");
$username = $_POST["username"];
$password = $_POST["password"];
if($username=="admin"&&$password=="123"){
	echo json_encode(array('msg'=>'登陆成功','errorCode'=>'ok','address'=>'index.php'));
}else{
	echo json_encode(array('msg'=>'登陆失败','errorCode'=>'no','address'=>'user_login.html'));
}



?>
