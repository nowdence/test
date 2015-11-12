<?php
define('ACC',true);

require('./include/init.php');


// 得到newsModel实例
$news = new newsModel();
$id=$_GET['id'];
$list = $news->findById($id);

include(ROOT . 'view/edit.html');


?>    

    


