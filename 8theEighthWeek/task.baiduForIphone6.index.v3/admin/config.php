<?php
/**
 * 
 * @authors  (nowdence@aliyun.com)
 * @date    2015-09-27 17:26:55
 * @version $Id$
 */

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

//2.拼接sql语句


//3.关闭数据库
mysql_close($con);