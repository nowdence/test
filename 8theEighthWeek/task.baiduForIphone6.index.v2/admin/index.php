<!DOCTYPE html>
<html>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<head>
    <title>后台管理首页</title>
    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
    <link href="assets/styles.css" rel="stylesheet" media="screen">
</head>

<body>
    <div class="container">
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="index.html">管理面板</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> 超级用户<i class="caret"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">资料</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="login.html">登陆</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="#">主要功能</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle">设置 <b class="caret"></b>

                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li>
                                        <a href="#">工具 <i class="icon-arrow-right"></i>

                                        </a>
                                        <ul class="dropdown-menu sub-menu">
                                            <li>
                                                <a href="#">报告</a>
                                            </li>
                                            <li>
                                                <a href="#">日志</a>
                                            </li>
                                            <li>
                                                <a href="#">错误</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">SEO优化</a>
                                    </li>
                                    <li>
                                        <a href="#">链接</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">链接1</a>
                                    </li>
                                    <li>
                                        <a href="#">链接2</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">内容 <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">News</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Custom Pages</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Calendar</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">用户<i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">用户列表</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">搜索</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">许可</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span3" id="sidebar">
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li class="active">
                            <a href="index.php"><i class="icon-chevron-right"></i>新闻列表</a>
                        </li>
                        <li>
                            <a href="contentAdd.php"><i class="icon-chevron-right"></i>增加新闻</a>
                        </li>                        
                    </ul>
                </div>
                <div class="span9" id="content">
                    <div class="row-fluid">
                        <div class="span12">
                            <!-- block -->
                            <div class="block">
                                <div class="navbar navbar-inner block-header">
                                    <div class="muted pull-left">新闻</div>
                                    <div class="pull-right"><span class="badge badge-info">
                                            <?php
                                                //1.连接数据库
                                                try{
                                                    $pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8;","root","");
                                                }catch(PDOException $e){
                                                    die("数据库连接失败".$e->getMessage());
                                                }
                                                //2.执行SQL查询，并解析与遍历
                                                $sql = "select * from news";
                                                $count = 0;
                                                foreach($pdo->query($sql) as $row){
                                                    $count++;
                                                }
                                                    echo $count;  
                                            ?>
                                    </span>
                                    </div>
                                </div>
                                <div class="block-content collapse in">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th style="width:100px">序号</th>
                                                <th style="width:100px">新闻标题</th>
                                                <th >新闻内容</th>
                                                <th style="width:100px">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                //1.连接数据库
                                                try{
                                                    $pdo = new PDO("mysql:host=localhost;dbname=test;charset=utf8;","root","");
                                                }catch(PDOException $e){
                                                    die("数据库连接失败".$e->getMessage());
                                                }
                                                //2.执行SQL查询，并解析与遍历
                                                $sql = "select * from news";
                                                foreach($pdo->query($sql) as $row){
                                                    echo "<tr>";
                                                    echo "<td>{$row['id']}</td>";
                                                    echo "<td>{$row['newstitle']}</td>";
                                                    echo "<td>{$row['newscontent']}</td>";
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
                            </div>
                            <!-- /block -->
                        </div>
                    </div>
                </div> 
            </div>
            <hr>
            <footer>
                <p>&copy; Thank you!</p>
            </footer>
        </div>
    </div>
    <!--/.fluid-container-->
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</body>

</html>
