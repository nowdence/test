<html>
<head>
</head>
<body>
<?php
	header("Content-type: text/html; charset=utf-8");

	//1.连接数据库
	try{
		$pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8;","root","");
	}catch(PDOException $e){
		die("数据库连接失败".$e->getMessage());
	}
	//2.拼SQL语句，取信息
	$sql = "select * from news where id=".$_GET['id'];
	$stmt = $pdo->query($sql);
	if($stmt->rowCount() > 0){
		$news = $stmt->fetch(PDO::FETCH_ASSOC);  //解析数据
	}else{
		die("没要有修改的数据");
	}
?>

<div class="span9" id="contentAdd">
    <form class="form-horizontal" action="action.php?action=edit" method="post">
        <fieldset>
            <legend>修改新闻</legend>
            <input type="hidden" name="id" value="<?php echo $news['id'];?>" />
            <div class="control-group">
                <label class="control-label" for="newstitle">新闻标题 </label>
                <div class="controls">
                    <input type="text" class="span6" id="newstitle" name="newstitle" value="<?php echo $news['newstitle']; ?>" />
                    
                </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="newscontent">新闻内容</label>
                <div class="controls">
                    <textarea class="input-xlarge textarea"  name="newscontent" id="newscontent"><?php echo $news['newscontent']; ?></textarea>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">修改</button>
                <button type="reset" class="btn">重置</button>
            </div>
        </fieldset>
    </form>
</div>
</body>
</html>
       
                                