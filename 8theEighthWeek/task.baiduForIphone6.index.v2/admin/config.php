<?php
/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date    2015-09-27 17:26:55
 * @version $Id$
 */

//1.连接数据库
try{
	$pdo = new PDO("mysql:host=localhost;dbname=baidu;charset=utf8;","root","");
}catch(PDOException $e){
	die("数据库连接失败".$e->getMessage());
}