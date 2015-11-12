<!DOCTYPE html>
<html>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<head>
    <title>后台管理首页-新闻列表</title>
    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
</head>

<body>
    <div class="container">
        <div class=" btn btn-default" style="margin:10px auto;width:100%;">
            <h1>新闻列表</h1>
        </div>
        <div class="navbar navbar-inner block-header">
            <div class="muted pull-left pull-right">
                <h3>新闻</h3></div>
            <div class="pull-right" style="margin-top: 6px;">
                <span class="badge badge-warning"><h6 id="addNews">添加新闻</h6></span>
            </div>
            <div class="pull-right" style="margin-top: 6px;">
                <span class="badge badge-info"><h6>共
                    <?php
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

                        //2.执行SQL查询，并解析与遍历
                        $sql = "select id,newstitle,newscontent,cat from news";
                        $count = 0;
                        $result=mysql_query($sql);
                        while($row = mysql_fetch_array($result)){
                            $count++;
                        }
                            echo $count;  
                    ?> 条
                </h6></span>
            </div>
        </div>
    </div>
    <div class="content container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th style="width:100px">序号</th>
                    <th style="width:100px">新闻标题</th>
                    <th>新闻内容</th>
                    <th style="width:100px">新闻目录</th>
                    <th style="width:100px">操作</th>
                </tr>
            </thead>
            <tbody>
                <?php
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
                    //2.执行SQL查询，并解析与遍历
                    $sql = "select id,newstitle,newscontent,cat from news";
                    $result=mysql_query($sql);
                    while($row = mysql_fetch_array($result)){
                        echo "<tr><td>".$row['id']."</td><td>".$row['newstitle']."</td><td>".$row['newscontent']."</td><td>".$row['cat']."</td>";
                        echo "<td>
                            <a href='javascript:doDel({$row['id']})'>删除</a>
                            <a href='edit.php?id={$row['id']}'>修改</a>
                        </td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>
    <div class="container">
    <footer>
        <p>&copy; Thank you!</p>
    </footer>
    </div>
    <!--/.fluid-container-->
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</body>

</html>
